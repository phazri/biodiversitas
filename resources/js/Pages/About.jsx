import { Link, Head } from '@inertiajs/react';

export default function About() {
    return (
        <>
            <Head title="Tentang - Biodiversitas Indonesia" />
            
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
                            <Link href="/tentang" className="text-emerald-700 font-semibold border-b-2 border-emerald-700 pb-1">Tentang</Link>
                            <Link href="#" className="text-gray-700 hover:text-emerald-700 font-medium transition">Program</Link>
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
                        backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-emerald-900/60"></div>
                </div>

                <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
                    <div className="max-w-4xl">
                        <h1 className="text-6xl font-bold mb-4 drop-shadow-2xl">Tentang Kami</h1>
                        <div className="flex items-center justify-center space-x-2 text-sm">
                            <Link href="/" className="hover:text-emerald-300 transition">Beranda</Link>
                            <span>/</span>
                            <span className="text-emerald-300 font-semibold">Tentang</span>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" preserveAspectRatio="none">
                        <path fill="#ffffff" fillOpacity="1" d="M0,96L80,101.3C160,107,320,117,480,112C640,107,800,85,960,85.3C1120,85,1280,107,1360,117.3L1440,128L1440,150L1360,150C1280,150,1120,150,960,150C800,150,640,150,480,150C320,150,160,150,80,150L0,150Z"></path>
                    </svg>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    {/* Visi & Misi */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Visi & Misi</h2>
                        <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-emerald-500">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-emerald-700 mb-3">Visi</h3>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Menjadi platform data biodiversitas terdepan di Indonesia yang menyediakan informasi terstruktur dan akurat tentang keanekaragaman hayati Nusantara untuk mendukung upaya konservasi dan penelitian ilmiah.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-emerald-700 mb-3">Misi</h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Mengumpulkan dan mendokumentasikan data spesies flora dan fauna Indonesia secara sistematis</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Menyediakan akses terbuka bagi peneliti, mahasiswa, dan masyarakat umum</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Mendukung upaya konservasi melalui penyebaran informasi status keanekaragaman hayati</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Mempromosikan kesadaran akan pentingnya pelestarian biodiversitas Indonesia</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Tentang Platform */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Tentang Platform</h2>
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Biodiversitas Indonesia adalah platform digital yang didedikasikan untuk mendokumentasikan dan menyebarluaskan informasi tentang keanekaragaman hayati Indonesia. Indonesia merupakan salah satu negara dengan tingkat biodiversitas tertinggi di dunia, dengan ribuan spesies endemik yang tidak ditemukan di tempat lain di muka bumi.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Platform ini menyediakan data terstruktur tentang klasifikasi taksonomi, status konservasi, habitat, dan informasi penting lainnya tentang spesies flora dan fauna Indonesia. Data kami bersumber dari literatur ilmiah terpercaya dan terus diperbarui untuk memastikan akurasi informasi.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                <div className="text-center p-6 bg-emerald-50 rounded-xl">
                                    <div className="text-4xl font-bold text-emerald-700 mb-2">754K+</div>
                                    <div className="text-gray-600">Spesies Terdaftar Global</div>
                                </div>
                                <div className="text-center p-6 bg-emerald-50 rounded-xl">
                                    <div className="text-4xl font-bold text-emerald-700 mb-2">17K+</div>
                                    <div className="text-gray-600">Pulau di Indonesia</div>
                                </div>
                                <div className="text-center p-6 bg-emerald-50 rounded-xl">
                                    <div className="text-4xl font-bold text-emerald-700 mb-2">300K+</div>
                                    <div className="text-gray-600">Spesies di Indonesia</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Struktur Data */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Struktur Data Taksonomi</h2>
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Kami menggunakan sistem klasifikasi taksonomi standar internasional untuk mengorganisir data spesies. Hierarki klasifikasi kami mengikuti standar yang digunakan oleh komunitas ilmiah global:
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                                    <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                                    <div>
                                        <div className="font-bold text-gray-900">Kingdom (Kerajaan)</div>
                                        <div className="text-sm text-gray-600">Tingkat tertinggi klasifikasi (Animalia, Plantae, Fungi, dll)</div>
                                    </div>
                                </div>
                                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                                    <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                                    <div>
                                        <div className="font-bold text-gray-900">Phylum (Filum)</div>
                                        <div className="text-sm text-gray-600">Kelompok besar berdasarkan karakteristik dasar (Chordata, Arthropoda, dll)</div>
                                    </div>
                                </div>
                                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                                    <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                                    <div>
                                        <div className="font-bold text-gray-900">Class (Kelas)</div>
                                        <div className="text-sm text-gray-600">Pembagian lebih spesifik (Mammalia, Aves, Reptilia, dll)</div>
                                    </div>
                                </div>
                                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                                    <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold mr-4">4</div>
                                    <div>
                                        <div className="font-bold text-gray-900">Order (Ordo)</div>
                                        <div className="text-sm text-gray-600">Kelompok berdasarkan karakteristik morfologi (Primates, Carnivora, dll)</div>
                                    </div>
                                </div>
                                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                                    <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold mr-4">5</div>
                                    <div>
                                        <div className="font-bold text-gray-900">Family (Famili)</div>
                                        <div className="text-sm text-gray-600">Kelompok genus yang berkerabat dekat (Hominidae, Felidae, dll)</div>
                                    </div>
                                </div>
                                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                                    <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold mr-4">6</div>
                                    <div>
                                        <div className="font-bold text-gray-900">Genus (Marga)</div>
                                        <div className="text-sm text-gray-600">Kelompok spesies yang sangat berkerabat (Homo, Panthera, dll)</div>
                                    </div>
                                </div>
                                <div className="flex items-center p-4 bg-emerald-100 rounded-lg border-2 border-emerald-500">
                                    <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold mr-4">7</div>
                                    <div>
                                        <div className="font-bold text-gray-900">Species (Spesies)</div>
                                        <div className="text-sm text-gray-600">Unit dasar klasifikasi biologis (Homo sapiens, Panthera tigris, dll)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Status Konservasi */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Status Konservasi IUCN</h2>
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Kami menggunakan kategori status konservasi dari IUCN (International Union for Conservation of Nature) untuk mengindikasikan tingkat ancaman terhadap spesies:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                                    <div className="w-16 h-16 bg-green-500 text-white rounded-lg flex items-center justify-center font-bold text-xl mr-4">LC</div>
                                    <div>
                                        <div className="font-bold text-gray-900">Least Concern</div>
                                        <div className="text-sm text-gray-600">Risiko kepunahan rendah</div>
                                    </div>
                                </div>
                                <div className="flex items-center p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                                    <div className="w-16 h-16 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold text-xl mr-4">NT</div>
                                    <div>
                                        <div className="font-bold text-gray-900">Near Threatened</div>
                                        <div className="text-sm text-gray-600">Mendekati kategori terancam</div>
                                    </div>
                                </div>
                                <div className="flex items-center p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                                    <div className="w-16 h-16 bg-yellow-500 text-white rounded-lg flex items-center justify-center font-bold text-xl mr-4">VU</div>
                                    <div>
                                        <div className="font-bold text-gray-900">Vulnerable</div>
                                        <div className="text-sm text-gray-600">Rentan terhadap kepunahan</div>
                                    </div>
                                </div>
                                <div className="flex items-center p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                                    <div className="w-16 h-16 bg-orange-500 text-white rounded-lg flex items-center justify-center font-bold text-xl mr-4">EN</div>
                                    <div>
                                        <div className="font-bold text-gray-900">Endangered</div>
                                        <div className="text-sm text-gray-600">Terancam punah</div>
                                    </div>
                                </div>
                                <div className="flex items-center p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                                    <div className="w-16 h-16 bg-red-500 text-white rounded-lg flex items-center justify-center font-bold text-xl mr-4">CR</div>
                                    <div>
                                        <div className="font-bold text-gray-900">Critically Endangered</div>
                                        <div className="text-sm text-gray-600">Kritis, risiko kepunahan sangat tinggi</div>
                                    </div>
                                </div>
                                <div className="flex items-center p-4 bg-gray-100 rounded-lg border-l-4 border-gray-500">
                                    <div className="w-16 h-16 bg-gray-500 text-white rounded-lg flex items-center justify-center font-bold text-xl mr-4">EX</div>
                                    <div>
                                        <div className="font-bold text-gray-900">Extinct</div>
                                        <div className="text-sm text-gray-600">Telah punah</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Kontak */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Hubungi Kami</h2>
                        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-xl p-8 text-white">
                            <p className="text-lg mb-6">
                                Punya pertanyaan, saran, atau ingin berkontribusi data? Jangan ragu untuk menghubungi kami!
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex items-center">
                                    <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div>
                                        <div className="font-semibold">Email</div>
                                        <div>info@biodiversitas.id</div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div>
                                        <div className="font-semibold">Lokasi</div>
                                        <div>Indonesia</div>
                                    </div>
                                </div>
                            </div>
                        </div>
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