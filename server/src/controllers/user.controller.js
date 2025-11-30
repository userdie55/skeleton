const UserService = require('../services/user.service');

const jwt = require('jsonwebtoken');
const generateJWTTokens = require('../utils/jwt.generate.util');
const cookieConfig = require('../config/cookie.config');

const formatResponse = require('../utils/formatResponse');

class UserController {
	static async refreshTokens(req, res, next) {
		try {
			const { user } = jwt.verify(req.cookies.refreshToken, process.env.SECRET_REFRESH_TOKEN);
			const { accessToken, refreshToken } = generateJWTTokens({ user });

			res
				.status(200)
				.cookie('refreshToken', refreshToken, cookieConfig)
				.json(formatResponse(200, 'User session successfully extended', { user, accessToken }));
		} catch (error) {
			res.clearCookie('refreshToken');
			next(error);
		}
	}

	static async getAllUsers(req, res, next) {
		try {
			const users = await UserService.getAllUsers();
			res.status(200).json(formatResponse(200, 'All users', users));
		} catch (error) {
			next(error);
		}
	}

	static async getUser(req, res, next) {
		try {
			const user = await UserService.getById(req.params.id);
			res.status(200).json(formatResponse(200, 'User found', user));
		} catch (error) {
			next(error);
		}
	}

	static async updateUser(req, res, next) {
		try {
			const user = await UserService.updateById(req.params.id, req.body);
			res.status(200).json(formatResponse(200, 'User data updated', user));
		} catch (error) {
			next(error);
		}
	}

	static async deleteUser(req, res, next) {
		try {
			await UserService.deleteById(req.params.id);
			res.sendStatus(204);
		} catch (error) {
			next(error);
		}
	}
}

module.exports = UserController;
