import { useState } from 'react';
import { Link } from '@inertiajs/react';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { href: '/', label: 'Beranda' },
        { href: '/tentang', label: 'Tentang' },
        { href: '/program', label: 'Program' },
        { href: '/knowledge-hub', label: 'Knowledge Hub' },
        { href: '/berita', label: 'Berita & Artikel' },
    ];

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-gray-900">Biodiversitas</div>
                            <div className="text-xs text-gray-600 -mt-1">Indonesia</div>
                        </div>
                    </Link>

                    {/* Menu Desktop (layar besar) */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {links.map((l) => (
                            <Link key={l.href} href={l.href} className="text-gray-700 hover:text-emerald-700 font-medium transition">
                                {l.label}
                            </Link>
                        ))}
                    </div>

                    {/* Kanan: search + login + hamburger */}
                    <div className="flex items-center space-x-3">
                        <Link href="/search" className="p-2 text-gray-600 hover:text-emerald-700 transition">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </Link>
                        <Link href="/admin" className="hidden sm:block bg-emerald-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-emerald-700 transition shadow-md">
                            Login
                        </Link>
                        {/* Tombol Hamburger (layar kecil) */}
                        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-gray-700">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {open ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu Mobile (muncul saat hamburger diklik) */}
            {open && (
                <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
                    <div className="container mx-auto px-4 py-4 flex flex-col space-y-1">
                        {links.map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                onClick={() => setOpen(false)}
                                className="text-gray-700 hover:text-emerald-700 font-medium py-2 border-b border-gray-50"
                            >
                                {l.label}
                            </Link>
                        ))}
                        <Link href="/search" onClick={() => setOpen(false)} className="text-gray-700 font-medium py-2">
                            🔍 Pencarian
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}