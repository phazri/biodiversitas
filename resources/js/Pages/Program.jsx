import { Link, Head } from '@inertiajs/react';

export default function Program() {
    return (
        <>
            <Head title="Program - Biodiversitas Indonesia" />
            
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
                            <Link href="/program" className="text-emerald-700 font-semibold border-b-2 border-emerald-700 pb-1">Program</Link>
                            <Link href="#" className="text-gray-700 hover:text-emerald-700 font-medium transition">Knowledge Hub</Link>
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
                        backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-emerald-900/60"></div>
                </div>

                <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
                    <div className="max-w-4xl">
                        <h1 className="text-6xl font-bold mb-4 drop-shadow-2xl">Program Kami</h1>
                        <p className="text-2xl mb-4 drop-shadow-lg">Berbagai inisiatif untuk melestarikan keanekaragaman hayati Indonesia</p>
                        <div className="flex items-center justify-center space-x-2 text-sm">
                            <Link href="/" className="hover:text-emerald-300 transition">Beranda</Link>
                            <span>/</span>
                            <span className="text-emerald-300 font-semibold">Program</span>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" preserveAspectRatio="none">
                        <path fill="#ffffff" fillOpacity="1" d="M0,96L80,101.3C160,107,320,117,480,112C640,107,800,85,960,85.3C1120,85,1280,107,1360,117.3L1440,128L1440,150L1360,150C1280,150,1120,150,960,150C800,150,640,150,480,150C320,150,160,150,80,150L0,150Z"></path>
                    </svg>
                </div>
            </div>

            {/* Program Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Program & Inisiatif</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Kami menjalankan berbagai program untuk mendukung konservasi dan penelitian biodiversitas Indonesia
                    </p>
                </div>

                {/* Program Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {/* Program 1 */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                        <div className="h-48 bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center">
                            <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.021-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Dokumentasi Spesies</h3>
                            <p className="text-gray-600 mb-4">
                                Program pendataan dan dokumentasi spesies flora dan fauna Indonesia secara sistematis dengan standar ilmiah internasional.
                            </p>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Pengumpulan data taksonomi</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Fotografi dan pemetaan habitat</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Verifikasi status konservasi IUCN</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Program 2 */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                        <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                            <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Edukasi & Literasi</h3>
                            <p className="text-gray-600 mb-4">
                                Meningkatkan kesadaran masyarakat akan pentingnya pelestarian biodiversitas melalui program edukasi dan publikasi.
                            </p>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Workshop dan seminar biodiversitas</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Materi pembelajaran untuk sekolah</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Kampanye konservasi spesies terancam</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Program 3 */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                        <div className="h-48 bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center">
                            <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Riset & Kolaborasi</h3>
                            <p className="text-gray-600 mb-4">
                                Mendukung penelitian biodiversitas dan membangun jejaring dengan institusi penelitian nasional dan internasional.
                            </p>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Fasilitasi penelitian lapangan</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Publikasi hasil penelitian</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Kerjasama dengan universitas</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Program 4 */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                        <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center">
                            <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Konservasi In-Situ</h3>
                            <p className="text-gray-600 mb-4">
                                Program perlindungan spesies dan habitatnya di lokasi alami melalui kerjasama dengan kawasan konservasi.
                            </p>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Monitoring populasi spesies kunci</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Restorasi habitat yang rusak</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Pengembangan koridor satwa</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Program 5 */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                        <div className="h-48 bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center">
                            <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Digitalisasi Data</h3>
                            <p className="text-gray-600 mb-4">
                                Membangun platform digital untuk menyimpan, mengelola, dan menyebarluaskan data biodiversitas secara terbuka.
                            </p>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Database spesies terintegrasi</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Aplikasi mobile untuk citizen science</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Open data untuk peneliti</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Program 6 */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                        <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-600 flex items-center justify-center">
                            <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Pemberdayaan Masyarakat</h3>
                            <p className="text-gray-600 mb-4">
                                Melibatkan masyarakat lokal dalam upaya konservasi melalui program ekonomi berkelanjutan berbasis biodiversitas.
                            </p>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Pelatihan pemandu wisata alam</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Pengembangan ekowisata</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Program adopsi spesies</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-2xl p-12 text-center text-white">
                    <h2 className="text-4xl font-bold mb-6">Ingin Berpartisipasi?</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Mari bergabung dalam upaya pelestarian biodiversitas Indonesia. Setiap kontribusi Anda berarti untuk masa depan keanekaragaman hayati Nusantara.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-emerald-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition shadow-lg hover:shadow-xl">
                            Jadilah Relawan
                        </button>
                        <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition">
                            Hubungi Kami
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