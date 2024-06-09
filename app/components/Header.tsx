// components/Header.tsx

import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-gray-800 py-4">
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between">
                    <Link href="/">
                        <p className="text-white font-bold text-xl">Medium Blog</p>
                    </Link>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/">
                                <p className="text-white hover:text-gray-400">Home</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <p className="text-white hover:text-gray-400">About</p>
                            </Link>
                        </li>
                        {/* Add more navigation links as needed */}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
