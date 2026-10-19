import { Link, Head } from '@inertiajs/react';

export default function News() {
    const featuredArticle = {
        title: 'Penemuan Spesies Baru Katak Pohon Endemik di Hutan Sumatera',
        category: 'Penemuan Terbaru',
        date: '18 Juli 2026',
        excerpt: 'Tim peneliti dari Universitas Indonesia bersama mitra internasional berhasil mengidentifikasi spesies katak pohon baru yang hanya ditemukan di ketinggian 1.500 mdpl di Taman Nasional Kerinci Seblat. Penemuan ini menambah daftar panjang keanekaragaman hayati endemik Indonesia.',
        readTime: '5 menit baca'
    };

    const articles = [
        {
            title: 'Upaya Konservasi Badak Jawa di Ujung Kulon Menunjukkan Hasil Positif',
            category: 'Konservasi',
            date: '15 Juli 2026',
            readTime: '4 menit',
            excerpt: 'Populasi badak Jawa (Rhinoceros sondaicus) tercatat mengalami peningkatan stabil berkat program patroli dan pemantauan kamera jebak yang intensif...'
        },
        {
            title: 'Dampak Perubahan Iklim Terhadap Migrasi Burung di Indonesia',
            category: 'Ekologi',
            date: '12 Juli 2026',
            readTime: '6 menit',
            excerpt: 'Studi terbaru menunjukkan pergeseran pola migrasi beberapa spesies burung akibat perubahan suhu rata-rata dan ketersediaan pangan di habitat persinggahan...'
        },
        {
            title: 'Pentingnya Hutan Mangrove sebagai Penyerap Karbon Alami',
            category: 'Lingkungan',
            date: '10 Juli 2026',
            readTime: '5 menit',
            excerpt: 'Hutan mangrove di pesisir Indonesia memiliki kemampuan menyerap karbon hingga 4 kali lebih besar dibandingkan hutan tropis daratan...'
        },
        {
            title: 'Workshop Taksonomi Molekuler untuk Mahasiswa Biologi',
            category: 'Edukasi',
            date: '8 Juli 2026',
            readTime: '3 menit',
            excerpt: 'Pusat Penelitian Biologi menyelenggarakan pelatihan penggunaan DNA Barcoding untuk identifikasi spesies yang akurat bagi generasi peneliti muda...'
        },
        {
            title: 'Peran Masyarakat Adat dalam Menjaga Hutan Lindung',
            category: 'Sosial',
            date: '5 Juli 2026',
            readTime: '7 menit',
            excerpt: 'Kearifan lokal masyarakat adat terbukti menjadi benteng pertahanan terakhir terhadap deforestasi di beberapa wilayah kunci di Kalimantan dan Papua...'
        },
        {
            title: 'Teknologi AI Bantu Identifikasi Spesies Melalui Foto',
            category: 'Teknologi',
            date: '2 Juli 2026',
            readTime: '4 menit',
            excerpt: 'Aplikasi citizen science terbaru memungkinkan siapa saja mengidentifikasi flora dan fauna hanya dengan memotret menggunakan smartphone...'
        }
    ];

    return (
        <>
            <Head title="Berita & Artikel - Biodiversitas Indonesia" />
            
            {/* Top Bar */}
            <div className="bg-gradient-to-r from-emerald-700 via-green-700 to-teal-700 text-white py-2">
                <div className="container mx-auto px-4 flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-6">
                        <span>📍 Indonesia</span>
                        <span>📧 info@biodiversitas.id</span>
                    </div>
                </div>
            </div>

            {/* Navigation Bar */}
            <nav className="bg-white shadow-lg sticky top-0 z-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-20">
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                                <span className="text-white text-2xl">🌿</span>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900">Biodiversitas</div>
                                <div className="text-xs text-gray-600 -mt-1">Indonesia</div>
                            </div>
                        </Link>

                        <div className="hidden lg:flex items-center space-x-8">
                            <Link href="/" className="text-gray-700 hover:text-emerald-700 font-medium transition">Beranda</Link>
                            <Link href="/tentang" className="text-gray-700 hover:text-emerald-700 font-medium transition">Tentang</Link>
                            <Link href="/program" className="text-gray-700 hover:text-emerald-700 font-medium transition">Program</Link>
                            <Link href="/knowledge-hub" className="text-gray-700 hover:text-emerald-700 font-medium transition">Knowledge Hub</Link>
                            <Link href="/berita" className="text-emerald-700 font-semibold border-b-2 border-emerald-700 pb-1">Berita & Artikel</Link>
                        </div>

                        <div className="flex items-center space-x-4">
                            <Link href="/login" className="bg-emerald-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-emerald-700 transition shadow-md">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative h-[400px] overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-emerald-900/70"></div>
                </div>

                <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
                    <div className="max-w-4xl">
                        <h1 className="text-6xl font-bold mb-4 drop-shadow-2xl">Berita & Artikel</h1>
                        <p className="text-2xl mb-4 drop-shadow-lg">Update terbaru seputar konservasi, penelitian, dan keanekaragaman hayati</p>
                        <div className="flex items-center justify-center space-x-2 text-sm">
                            <Link href="/" className="hover:text-emerald-300 transition">Beranda</Link>
                            <span>/</span>
                            <span className="text-emerald-300 font-semibold">Berita & Artikel</span>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" preserveAspectRatio="none">
                        <path fill="#ffffff" fillOpacity="1" d="M0,96L80,101.3C160,107,320,117,480,112C640,107,800,85,960,85.3C1120,85,1280,107,1360,117.3L1440,128L1440,150L1360,150C1280,150,1120,150,960,150C800,150,640,150,480,150C320,150,160,150,80,150L0,150Z"></path>
                    </svg>
                </div>
            </div>

            {/* Featured Article */}
            <div className="container mx-auto px-4 -mt-12 relative z-20 mb-16">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-1/2 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center p-12">
                        <svg className="w-32 h-32 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                    </div>
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <div className="flex items-center space-x-3 mb-4">
                            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold">{featuredArticle.category}</span>
                            <span className="text-gray-500 text-sm">{featuredArticle.date} • {featuredArticle.readTime}</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hover:text-emerald-700 transition-colors cursor-pointer">
                            {featuredArticle.title}
                        </h2>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">{featuredArticle.excerpt}</p>
                        <Link href="#" className="inline-flex items-center text-emerald-600 font-bold hover:text-emerald-800 transition">
                            Baca Selengkapnya
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Recent Articles Grid */}
            <div className="container mx-auto px-4 py-12">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">Artikel Terbaru</h2>
                    <div className="flex space-x-2">
                        <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold">Semua</button>
                        <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-semibold hover:bg-gray-200 transition">Konservasi</button>
                        <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-semibold hover:bg-gray-200 transition">Penelitian</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group flex flex-col">
                            <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                                <svg className="w-16 h-16 text-gray-300 group-hover:text-emerald-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-emerald-700 rounded-full text-xs font-bold shadow-sm">
                                        {article.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-2">
                                    <span>{article.date}</span>
                                    <span>•</span>
                                    <span>{article.readTime}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors line-clamp-2">
                                    {article.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{article.excerpt}</p>
                                <Link href="#" className="inline-flex items-center text-emerald-600 font-semibold text-sm hover:text-emerald-800 transition mt-auto">
                                    Baca Artikel
                                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                <div className="text-center mt-16">
                    <button className="bg-white border-2 border-emerald-600 text-emerald-700 px-8 py-3 rounded-xl font-bold hover:bg-emerald-50 transition shadow-md">
                        Muat Lebih Banyak Artikel
                    </button>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 mt-12">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-400">© 2026 Biodiversitas Indonesia. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}