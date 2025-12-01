import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import logo from '../../assets/react.svg';

export default function Header({ user }) {
  return (
    <header className="backdrop-blur-xl bg-white/60 border-b border-gray-300 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* LEFT — LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-8 w-auto" />
        </Link>

        {/* CENTER — MENU */}
        <div className="hidden sm:flex gap-6">
          <Link
            to="/"
            className="px-4 py-2 rounded-xl text-grey-600 font-semibold hover:text-indigo-700 hover:scale-105 transition"
          >
            Home
          </Link>
        </div>

        {/* RIGHT — LOGIN / PROFILE */}
        <div className="hidden sm:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <img
                src="https://picsum.photos/200"
                alt="avatar"
                className="h-9 w-9 rounded-full border border-gray-300 shadow-sm"
              />
            </div>
          ) : (
            <Link
              to="/signIn"
              className="flex items-center gap-1 px-4 py-2 text-grey-600 font-semibold hover:text-indigo-700 hover:scale-105 transition"
            >
              <span>Log in</span>
              <ArrowRightIcon className="size-5" />
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
