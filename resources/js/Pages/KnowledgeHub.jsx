import { Link, Head } from '@inertiajs/react';

export default function KnowledgeHub() {
    const categories = [
        {
            title: 'Taksonomi',
            description: 'Pelajari sistem klasifikasi makhluk hidup dari Kingdom hingga Spesies',
            icon: 'M19.428 15.428a2 2 0 00-1.021-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
            color: 'from-emerald-400 to-green-600',
            articles: 24
        },
        {
            title: 'Konservasi',
            description: 'Memahami status konservasi IUCN dan upaya pelestarian spesies',
            icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
            color: 'from-red-400 to-rose-600',
            articles: 18
        },
        {
            title: 'Ekologi',
            description: 'Hubungan antara organisme dengan lingkungannya di ekosistem Indonesia',
            icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
            color: 'from-blue-400 to-indigo-600',
            articles: 32
        },
        {
            title: 'Spesies Endemik',
            description: 'Keanekaragaman hayati yang hanya ditemukan di Indonesia',
            icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
            color: 'from-purple-400 to-pink-600',
            articles: 45
        },
        {
            title: 'Metode Penelitian',
            description: 'Teknik dan metodologi penelitian lapangan biodiversitas',
            icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
            color: 'from-orange-400 to-red-600',
            articles: 15
        },
        {
            title: 'Sumber Daya',
            description: 'Database, jurnal, dan referensi untuk penelitian biodiversitas',
            icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
            color: 'from-teal-400 to-cyan-600',
            articles: 28
        }
    ];

    const featuredArticles = [
        {
            title: 'Mengenal Sistem Klasifikasi Taksonomi Linnaeus',
            category: 'Taksonomi',
            excerpt: 'Sistem klasifikasi binomial nomenklatur yang menjadi standar internasional dalam penamaan spesies...',
            readTime: '8 menit',
            date: '15 Juli 2026'
        },
        {
            title: 'Status Konservasi Satwa Endemik Indonesia 2026',
            category: 'Konservasi',
            excerpt: 'Laporan terbaru IUCN mengenai status 500+ spesies endemik Indonesia yang terancam punah...',
            readTime: '12 menit',
            date: '10 Juli 2026'
        },
        {
            title: 'Panduan Identifikasi Spesies di Lapangan',
            category: 'Metode Penelitian',
            excerpt: 'Teknik praktis mengidentifikasi spesies flora dan fauna saat melakukan survei lapangan...',
            readTime: '15 menit',
            date: '5 Juli 2026'
        },
        {
            title: 'Ekosistem Hutan Hujan Tropis Kalimantan',
            category: 'Ekologi',
            excerpt: 'Memahami kompleksitas ekosistem hutan hujan tropis sebagai rumah bagi ribuan spesies...',
            readTime: '10 menit',
            date: '1 Juli 2026'
        }
    ];

    const glossary = [
        { term: 'Biodiversitas', definition: 'Keanekaragaman hayati; variasi kehidupan di semua level, dari gen hingga ekosistem.' },
        { term: 'Endemik', definition: 'Spesies yang hanya ditemukan di wilayah geografis tertentu dan tidak ada di tempat lain.' },
        { term: 'Taksonomi', definition: 'Ilmu pengelompokan dan penamaan organisme berdasarkan karakteristik bersama.' },
        { term: 'IUCN Red List', definition: 'Daftar merah IUCN; inventaris global status konservasi spesies biologis.' },
        { term: 'Habitat', definition: 'Lingkungan alami tempat suatu spesies hidup dan berkembang biak.' },
        { term: 'Spesies', definition: 'Kelompok organisme yang dapat kawin dan menghasilkan keturunan fertil.' }
    ];

    return (
        <>
            <Head title="Knowledge Hub - Biodiversitas Indonesia" />
            
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

                        <div className="hidden lg:flex items-center space-x-8">
                            <Link href="/" className="text-gray-700 hover:text-emerald-700 font-medium transition">Beranda</Link>
                            <Link href="/tentang" className="text-gray-700 hover:text-emerald-700 font-medium transition">Tentang</Link>
                            <Link href="/program" className="text-gray-700 hover:text-emerald-700 font-medium transition">Program</Link>
                            <Link href="/knowledge-hub" className="text-emerald-700 font-semibold border-b-2 border-emerald-700 pb-1">Knowledge Hub</Link>
                            <Link href="#" className="text-gray-700 hover:text-emerald-700 font-medium transition">Berita & Artikel</Link>
                        </div>

                        <div className="flex items-center space-x-4">
                            <button className="p-2 text-gray-600 hover:text-emerald-700 transition">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                            <Link href="/login" className="bg-emerald-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-emerald-700 transition shadow-md hover:shadow-lg">
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
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-emerald-900/60"></div>
                </div>

                <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
                    <div className="max-w-4xl">
                        <h1 className="text-6xl font-bold mb-4 drop-shadow-2xl">Knowledge Hub</h1>
                        <p className="text-2xl mb-4 drop-shadow-lg">Pusat pengetahuan dan edukasi biodiversitas Indonesia</p>
                        <div className="flex items-center justify-center space-x-2 text-sm">
                            <Link href="/" className="hover:text-emerald-300 transition">Beranda</Link>
                            <span>/</span>
                            <span className="text-emerald-300 font-semibold">Knowledge Hub</span>
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
            <div className="container mx-auto px-4 -mt-12 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white rounded-2xl shadow-xl p-6 text-center border-b-4 border-emerald-500">
                        <div className="text-4xl font-bold text-emerald-700 mb-2">162</div>
                        <div className="text-gray-600 font-medium">Artikel Edukasi</div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-xl p-6 text-center border-b-4 border-blue-500">
                        <div className="text-4xl font-bold text-blue-600 mb-2">6</div>
                        <div className="text-gray-600 font-medium">Kategori Utama</div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-xl p-6 text-center border-b-4 border-purple-500">
                        <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
                        <div className="text-gray-600 font-medium">Sumber Referensi</div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-xl p-6 text-center border-b-4 border-orange-500">
                        <div className="text-4xl font-bold text-orange-600 mb-2">10K+</div>
                        <div className="text-gray-600 font-medium">Pembaca Aktif</div>
                    </div>
                </div>
            </div>

            {/* Categories Section */}
            <div className="container mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Jelajahi Kategori Pengetahuan</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Pilih topik yang ingin Anda pelajari tentang keanekaragaman hayati Indonesia
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                            <div className={`h-40 bg-gradient-to-br ${cat.color} flex items-center justify-center relative overflow-hidden`}>
                                <svg className="w-20 h-20 text-white/80 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cat.icon} />
                                </svg>
                                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-semibold">
                                    {cat.articles} artikel
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">{cat.title}</h3>
                                <p className="text-gray-600 mb-4">{cat.description}</p>
                                <Link 
                                    href={`/knowledge-hub/${categories[index].title.toLowerCase().replace(/\s+/g, '-')}`} 
                                    className="flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition"
                                >
                                    Jelajahi
                                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Featured Articles */}
            <div className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Artikel Unggulan</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Baca artikel terbaru dan paling populer dari para ahli biodiversitas
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {featuredArticles.map((article, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
                                <div className="p-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                                            {article.category}
                                        </span>
                                        <span className="text-sm text-gray-500">{article.readTime}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <span className="text-sm text-gray-500">{article.date}</span>
                                        <span className="text-emerald-600 font-semibold flex items-center">
                                            Baca Selengkapnya
                                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Glossary Section */}
            <div className="container mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Glosarium Biodiversitas</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Pahami istilah-istilah penting dalam studi keanekaragaman hayati
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {glossary.map((item, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-emerald-500 hover:shadow-lg transition-shadow">
                                <h3 className="text-xl font-bold text-emerald-700 mb-2">{item.term}</h3>
                                <p className="text-gray-700">{item.definition}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Resources Section */}
            <div className="bg-gradient-to-r from-emerald-800 via-green-800 to-teal-800 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Sumber Belajar Eksternal</h2>
                        <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                            Referensi terpercaya dari institusi dan organisasi internasional
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            { name: 'IUCN Red List', desc: 'Database status konservasi global', url: 'https://www.iucnredlist.org' },
                            { name: 'GBIF', desc: 'Global Biodiversity Information Facility', url: 'https://www.gbif.org' },
                            { name: 'Wikispecies', desc: 'Direktori spesies terbuka', url: 'https://species.wikimedia.org' },
                            { name: 'Catalogue of Life', desc: 'Katalog spesies dunia', url: 'https://www.catalogueoflife.org' }
                        ].map((resource, index) => (
                            <a key={index} href={resource.url} target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors border border-white/20">
                                <h3 className="text-xl font-bold mb-2">{resource.name}</h3>
                                <p className="text-emerald-100 text-sm mb-4">{resource.desc}</p>
                                <div className="flex items-center text-sm font-semibold">
                                    Kunjungi
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-12 text-center">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Dapatkan Update Terbaru</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Berlangganan newsletter kami untuk menerima artikel edukasi, update konservasi, dan informasi biodiversitas terbaru langsung ke email Anda.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input 
                            type="email" 
                            placeholder="Alamat email Anda" 
                            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                        <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition">
                            Berlangganan
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-400">© 2026 Biodiversitas Indonesia. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}