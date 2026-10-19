import { Link, Head } from '@inertiajs/react';

export default function Category({ category }) {
    // Data dummy untuk setiap kategori
    const categoryData = {
        'taksonomi': {
            title: 'Taksonomi',
            description: 'Pelajari sistem klasifikasi makhluk hidup dari Kingdom hingga Spesies',
            color: 'from-emerald-400 to-green-600',
            articles: [
                {
                    title: 'Mengenal Sistem Klasifikasi Linnaeus',
                    excerpt: 'Sistem binomial nomenklatur yang menjadi standar internasional dalam penamaan spesies...',
                    date: '15 Juli 2026',
                    readTime: '8 menit'
                },
                {
                    title: 'Hierarki Taksonomi: Dari Kingdom ke Spesies',
                    excerpt: 'Memahami 7 level utama klasifikasi biologis dan bagaimana ilmuwan mengelompokkan organisme...',
                    date: '10 Juli 2026',
                    readTime: '10 menit'
                },
                {
                    title: 'Peran DNA dalam Taksonomi Modern',
                    excerpt: 'Bagaimana teknologi molekuler mengubah cara kita mengklasifikasikan spesies...',
                    date: '5 Juli 2026',
                    readTime: '12 menit'
                }
            ]
        },
        'konservasi': {
            title: 'Konservasi',
            description: 'Memahami status konservasi IUCN dan upaya pelestarian spesies',
            color: 'from-red-400 to-rose-600',
            articles: [
                {
                    title: 'Status Konservasi Satwa Endemik Indonesia 2026',
                    excerpt: 'Laporan terbaru IUCN mengenai status 500+ spesies endemik Indonesia yang terancam punah...',
                    date: '12 Juli 2026',
                    readTime: '15 menit'
                },
                {
                    title: 'Program Penangkaran Badak Jawa di Ujung Kulon',
                    excerpt: 'Upaya intensif untuk meningkatkan populasi badak Jawa yang hanya tersisa 80 individu...',
                    date: '8 Juli 2026',
                    readTime: '10 menit'
                }
            ]
        },
        'ekologi': {
            title: 'Ekologi',
            description: 'Hubungan antara organisme dengan lingkungannya di ekosistem Indonesia',
            color: 'from-blue-400 to-indigo-600',
            articles: [
                {
                    title: 'Ekosistem Hutan Hujan Tropis Kalimantan',
                    excerpt: 'Memahami kompleksitas ekosistem hutan hujan tropis sebagai rumah bagi ribuan spesies...',
                    date: '1 Juli 2026',
                    readTime: '10 menit'
                },
                {
                    title: 'Rantai Makanan di Terumbu Karang Raja Ampat',
                    excerpt: 'Interaksi kompleks antara predator dan prey di salah satu ekosistem laut terkaya di dunia...',
                    date: '25 Juni 2026',
                    readTime: '8 menit'
                }
            ]
        },
        'spesies-endemik': {
            title: 'Spesies Endemik',
            description: 'Keanekaragaman hayati yang hanya ditemukan di Indonesia',
            color: 'from-purple-400 to-pink-600',
            articles: [
                {
                    title: 'Komodo: Naga Purba dari Pulau Komodo',
                    excerpt: 'Biologi, perilaku, dan upaya konservasi kadal terbesar di dunia ini...',
                    date: '20 Juni 2026',
                    readTime: '12 menit'
                },
                {
                    title: 'Orangutan Sumatera vs Kalimantan',
                    excerpt: 'Perbedaan genetik dan perilaku antara dua spesies orangutan yang endemik Indonesia...',
                    date: '15 Juni 2026',
                    readTime: '9 menit'
                }
            ]
        },
        'metode-penelitian': {
            title: 'Metode Penelitian',
            description: 'Teknik dan metodologi penelitian lapangan biodiversitas',
            color: 'from-orange-400 to-red-600',
            articles: [
                {
                    title: 'Panduan Identifikasi Spesies di Lapangan',
                    excerpt: 'Teknik praktis mengidentifikasi spesies flora dan fauna saat melakukan survei lapangan...',
                    date: '5 Juli 2026',
                    readTime: '15 menit'
                },
                {
                    title: 'Penggunaan Camera Trap untuk Monitoring Satwa',
                    excerpt: 'Cara memasang dan menganalisis data dari kamera jebak untuk penelitian mamalia...',
                    date: '28 Juni 2026',
                    readTime: '11 menit'
                }
            ]
        },
        'sumber-daya': {
            title: 'Sumber Daya',
            description: 'Database, jurnal, dan referensi untuk penelitian biodiversitas',
            color: 'from-teal-400 to-cyan-600',
            articles: [
                {
                    title: 'Database IUCN Red List: Cara Menggunakan',
                    excerpt: 'Panduan lengkap mengakses dan menginterpretasikan data status konservasi global...',
                    date: '1 Juli 2026',
                    readTime: '7 menit'
                },
                {
                    title: 'Jurnal Ilmiah Biodiversitas Indonesia',
                    excerpt: 'Daftar jurnal peer-reviewed yang mempublikasikan penelitian keanekaragaman hayati Nusantara...',
                    date: '25 Juni 2026',
                    readTime: '6 menit'
                }
            ]
        }
    };

    const data = categoryData[category] || categoryData['taksonomi'];

    return (
        <>
            <Head title={`${data.title} - Knowledge Hub - Biodiversitas Indonesia`} />
            
            {/* Top Bar */}
            <div className="bg-gradient-to-r from-emerald-700 via-green-700 to-teal-700 text-white py-2">
                <div className="container mx-auto px-4 flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-6">
                        <span>📍 Indonesia</span>
                        <span>📧 info@biodiversitas.id</span>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="bg-white shadow-lg sticky top-0 z-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-20">
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                                <span className="text-white text-2xl"></span>
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
                            <Link href="/berita" className="text-gray-700 hover:text-emerald-700 font-medium transition">Berita & Artikel</Link>
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
            <div className={`relative h-[300px] overflow-hidden bg-gradient-to-br ${data.color}`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl font-bold mb-4 drop-shadow-2xl">{data.title}</h1>
                        <p className="text-xl mb-4 drop-shadow-lg">{data.description}</p>
                        <div className="flex items-center justify-center space-x-2 text-sm">
                            <Link href="/" className="hover:text-emerald-300 transition">Beranda</Link>
                            <span>/</span>
                            <Link href="/knowledge-hub" className="hover:text-emerald-300 transition">Knowledge Hub</Link>
                            <span>/</span>
                            <span className="text-emerald-300 font-semibold">{data.title}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Artikel dalam Kategori Ini</h2>
                    
                    <div className="space-y-6">
                        {data.articles.map((article, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-emerald-500">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-sm text-gray-500">{article.date}</span>
                                    <span className="text-sm text-gray-500">{article.readTime}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-emerald-700 transition-colors cursor-pointer">
                                    {article.title}
                                </h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                                <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition flex items-center">
                                    Baca Selengkapnya
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Back Button */}
                    <div className="mt-12 text-center">
                        <Link href="/knowledge-hub" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Kembali ke Knowledge Hub
                        </Link>
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