import { useState } from 'react';
import { Link, router, usePage } from '@inertiajs/react';

export default function Navbar() {
    const [open, setOpen] = useState(false);          // menu mobile
    const [menuOpen, setMenuOpen] = useState(false);  // dropdown akun
    const user = usePage().props.auth?.user;          // 👈 deteksi status login

    const links = [
        { href: '/', label: 'Beranda' },
        { href: '/tentang', label: 'Tentang' },
        { href: '/program', label: 'Program' },
        { href: '/knowledge-hub', label: 'Knowledge Hub' },
        { href: '/diskusi', label: 'Diskusi' },  
        { href: '/berita', label: 'Berita & Artikel' },
    ];

    const logout = () => {
        router.post(route('logout'));
    };

    return (
        <nav className="bg-[#046A45] sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                            <svg className="w-6 h-6 text-[#6CF8BB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="leading-tight">
                            <div className="text-white font-bold font-['Plus_Jakarta_Sans',sans-serif]">Biodiversitas Indonesia</div>
                            <div className="text-[10px] tracking-[0.05em] uppercase text-[#92E7B8]">Data Flora & Fauna Konservasi</div>
                        </div>
                    </Link>

                    {/* Menu Desktop */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {links.map((l) => (
                            <Link key={l.href} href={l.href} className="text-sm font-medium text-white/80 hover:text-white transition">
                                {l.label}
                            </Link>
                        ))}
                    </div>

                    {/* Kanan: search + akun / login */}
                    <div className="flex items-center space-x-3">
                        <Link href="/search" className="hidden md:flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-3 py-1.5 text-sm text-white/70 hover:bg-white/15 transition">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            Cari Taksa...
                        </Link>

                        {user ? (
                            /* ===== SUDAH LOGIN: avatar + nama + dropdown ===== */
                            <div className="relative">
                                <button
                                    onClick={() => setMenuOpen(!menuOpen)}
                                    className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-3 py-1.5 text-sm text-white hover:bg-white/15 transition"
                                >
                                    <span className="w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center text-xs font-bold text-white">
                                        {user.name?.charAt(0)?.toUpperCase()}
                                    </span>
                                    <span className="hidden md:inline font-semibold">{user.name}</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {menuOpen && (
                                    <div className="absolute right-0 mt-2 w-60 bg-white rounded-xl border border-[#E2E8F0] shadow-[0_10px_25px_-5px_rgba(15,23,42,0.15)] overflow-hidden">
                                        <div className="px-4 py-3 border-b border-[#F1F5F9]">
                                            <div className="text-sm font-bold text-[#0F172A]">{user.name}</div>
                                            <div className="text-xs text-[#64748B] truncate">{user.email}</div>
                                            <div className="text-[10px] mt-1 inline-block px-2 py-0.5 rounded-full bg-[#DCE9FF] text-[#003CA3] font-bold uppercase tracking-[0.05em]">
                                                {user.is_admin ? 'Administrator' : 'Kontributor'}
                                            </div>
                                        </div>
                                        {user.is_admin && (
                                            <a href="/admin" className="block px-4 py-2.5 text-sm text-[#046A45] font-semibold hover:bg-[#F8FAFC]">
                                                🛡️ Panel Admin
                                            </a>
                                        )}
                                        <button
                                            onClick={logout}
                                            className="w-full text-left px-4 py-2.5 text-sm text-[#DC2626] font-semibold hover:bg-[#FEF2F2] transition"
                                        >
                                            🚪 Keluar
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            /* ===== BELUM LOGIN ===== */
                            <a href="/login" className="bg-[#10B981] hover:bg-[#0d9668] text-white text-sm font-semibold px-4 py-2 rounded-lg transition shadow">
                                Masuk / Kontribusi Data
                            </a>
                        )}

                        {/* Hamburger mobile */}
                        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-white">
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

            {/* Menu Mobile */}
            {open && (
                <div className="lg:hidden bg-[#035437] border-t border-white/10">
                    <div className="container mx-auto px-4 py-3 flex flex-col space-y-1">
                        {links.map((l) => (
                            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-white/90 py-2 border-b border-white/5">
                                {l.label}
                            </Link>
                        ))}
                        <Link href="/search" onClick={() => setOpen(false)} className="text-white/90 py-2 border-b border-white/5">
                            🔍 Pencarian
                        </Link>
                        {user ? (
                            <>
                                <div className="text-[#92E7B8] text-sm font-semibold py-2">👤 {user.name} ({user.is_admin ? 'Admin' : 'Kontributor'})</div>
                                <button onClick={logout} className="text-left text-[#FFDAD6] font-semibold py-2">
                                    🚪 Keluar
                                </button>
                            </>
                        ) : (
                            <>
                                <a href="/login" className="text-white font-semibold py-2">Masuk</a>
                                <a href="/register" className="text-[#92E7B8] font-semibold py-2">Daftar Akun Peneliti</a>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}