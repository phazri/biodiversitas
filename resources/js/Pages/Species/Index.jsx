import { Link, Head } from '@inertiajs/react';
import WelcomeGuide from '@/Components/WelcomeGuide';
import Navbar from '@/Components/Navbar';
export default function Index({ species }) {
    const getStatusColor = (status) => {
        const colors = {
            'CR': 'bg-red-600',
            'EN': 'bg-orange-500',
            'VU': 'bg-yellow-500',
            'NT': 'bg-blue-400',
            'LC': 'bg-green-500',
            'EX': 'bg-gray-600'
        };
        return colors[status] || 'bg-gray-400';
    };

    return (
        <>
            <Head title="Biodiversitas Indonesia - Beranda" />
            
            {/* Top Bar */}
            <div className="bg-gradient-to-r from-emerald-700 via-green-700 to-teal-700 text-white py-2">
                <div className="container mx-auto px-4 flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>Indonesia</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span>info@biodiversitas.id</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span>Media Sosial</span>
                        <div className="flex space-x-3">
                            <svg className="w-5 h-5 cursor-pointer hover:text-emerald-200" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            <svg className="w-5 h-5 cursor-pointer hover:text-emerald-200" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Bar */}
            <nav className="bg-white shadow-lg sticky top-0 z-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900">Biodiversitas</div>
                                <div className="text-xs text-gray-600 -mt-1">Indonesia</div>
                            </div>
                        </div>

                        {/* Menu */}
                        <div className="hidden lg:flex items-center space-x-8">
                            <Link href="/" className="text-emerald-700 font-semibold border-b-2 border-emerald-700 pb-1">Beranda</Link>
                            <Link href="/tentang" className="text-gray-700 hover:text-emerald-700 font-medium transition">Tentang</Link>
                            <Link href="/program" className="text-gray-700 hover:text-emerald-700 font-medium transition">Program</Link>
                            <Link href="/knowledge-hub" className="text-emerald-700 font-semibold border-b-2 border-emerald-700 pb-1">Knowledge Hub</Link>
                            <Link href="/berita" className="text-gray-700 hover:text-emerald-700 font-medium transition">Berita & Artikel</Link>
                        </div>

                        {/* Search & Login */}
                        <div className="flex items-center space-x-4">
                            <Link href="/search" className="p-2 text-gray-600 hover:text-emerald-700 transition">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
</Link>
                            <Link href="http://127.0.0.1:8000/admin" className="bg-emerald-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-emerald-700 transition shadow-md hover:shadow-lg">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative h-[650px] overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1516426122078-c63e223f7e78?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-emerald-900/60"></div>
                </div>

                <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
                    <div className="max-w-5xl">
                        <h1 className="text-7xl font-bold mb-6 drop-shadow-2xl leading-tight">
                            Biodiversitas Indonesia
                        </h1>
                        <p className="text-2xl mb-10 drop-shadow-lg font-light">
                            Data terstruktur flora dan fauna untuk kebutuhan akademik dan konservasi
                        </p>
                        <div className="flex items-center justify-center space-x-2 text-sm">
                            <span className="hover:text-emerald-300 cursor-pointer transition">Beranda</span>
                            <span>/</span>
                            <span className="text-emerald-300 font-semibold">Spesies</span>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" preserveAspectRatio="none">
                        <path fill="#ffffff" fillOpacity="1" d="M0,96L80,101.3C160,107,320,117,480,112C640,107,800,85,960,85.3C1120,85,1280,107,1360,117.3L1440,128L1440,150L1360,150C1280,150,1120,150,960,150C800,150,640,150,480,150C320,150,160,150,80,150L0,150Z"></path>
                    </svg>
                </div>
            </div>

            {/* Stats Section */}
            <div className="container mx-auto px-4 -mt-16 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 text-center border-b-4 border-emerald-500 hover:scale-105 transition-transform">
                        <div className="text-6xl font-bold text-emerald-700 mb-3">{species.length}</div>
                        <div className="text-gray-600 font-semibold text-lg">Spesies Tercatat</div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-2xl p-8 text-center border-b-4 border-red-500 hover:scale-105 transition-transform">
                        <div className="text-6xl font-bold text-red-600 mb-3">
                            {species.filter(s => s.conservation_status === 'CR').length}
                        </div>
                        <div className="text-gray-600 font-semibold text-lg">Kritis</div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-2xl p-8 text-center border-b-4 border-orange-500 hover:scale-105 transition-transform">
                        <div className="text-6xl font-bold text-orange-600 mb-3">
                            {species.filter(s => s.conservation_status === 'EN').length}
                        </div>
                        <div className="text-gray-600 font-semibold text-lg">Terancam Punah</div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-2xl p-8 text-center border-b-4 border-blue-500 hover:scale-105 transition-transform">
                        <div className="text-6xl font-bold text-blue-600 mb-3">
                            {species.filter(s => s.is_endemic).length}
                        </div>
                        <div className="text-gray-600 font-semibold text-lg">Spesies Endemik</div>
                    </div>
                </div>
            </div>

            {/* Species Grid Section */}
            <div className="container mx-auto px-4 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-900 mb-6">Jelajahi Spesies Indonesia</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Temukan informasi lengkap tentang keanekaragaman hayati Nusantara
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {species.map((s) => (
                        <Link 
                            key={s.id} 
                            href={`/species/${s.id}`} 
                            className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2"
                        >
                            {/* Card Image Area */}
                            <div className="h-64 bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 relative overflow-hidden">
                                {/* Tampilkan gambar jika ada */}
                                {s.image_url ? (
                                    <img 
                                        src={s.image_url} 
                                        alt={s.common_name || s.accepted_name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                ) : null}
                                
                                {/* Fallback Icon jika tidak ada gambar */}
                                <div className={`absolute inset-0 flex items-center justify-center ${s.image_url ? 'hidden' : ''}`}>
                                    <svg className="w-32 h-32 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                
                                {/* Badges */}
                                <div className="absolute top-6 right-6 flex space-x-2">
                                    <span className={`px-4 py-2 ${getStatusColor(s.conservation_status)} text-white rounded-full text-sm font-bold uppercase tracking-wide shadow-lg`}>
                                        {s.conservation_status}
                                    </span>
                                </div>
                                {s.is_endemic && (
                                    <div className="absolute top-6 left-6">
                                        <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-bold uppercase tracking-wide shadow-lg">
                                            Endemik
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Card Content */}
                            <div className="p-8">
                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold text-gray-900 italic group-hover:text-emerald-700 transition-colors mb-2">
                                        {s.accepted_name}
                                    </h3>
                                    <p className="text-xl text-gray-600 font-bold">
                                        {s.common_name}
                                    </p>
                                </div>

                                <p className="text-gray-500 text-base mb-6 line-clamp-3 leading-relaxed">
                                    {s.description_simple}
                                </p>

                                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                                    <span className="inline-flex items-center text-emerald-600 font-bold group-hover:text-emerald-700 transition-colors">
                                        Lihat Detail Lengkap
                                        <svg className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-emerald-800 via-green-800 to-teal-800 text-white py-24">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-5xl font-bold mb-6">Ingin Berkontribusi?</h2>
                    <p className="text-2xl text-emerald-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Bantu kami mengumpulkan dan melestarikan data biodiversitas Indonesia untuk generasi mendatang
                    </p>
                    <button className="bg-white text-emerald-800 px-10 py-4 rounded-2xl font-bold text-xl hover:bg-emerald-50 transition shadow-2xl hover:shadow-3xl transform hover:-translate-y-1">
                        Hubungi Kami
                    </button>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-400">© 2026 Biodiversitas Indonesia. All rights reserved.</p>
                </div>
            </footer>
            
            <WelcomeGuide />
        </>
    );
}