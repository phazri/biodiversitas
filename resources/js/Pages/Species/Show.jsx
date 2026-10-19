import { Link, Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
export default function Show({ species }) {
    // Helper untuk warna badge status konservasi
    const getStatusColor = (status) => {
        const colors = {
            'CR': 'bg-red-100 text-red-800 border-red-300',
            'EN': 'bg-orange-100 text-orange-800 border-orange-300',
            'VU': 'bg-yellow-100 text-yellow-800 border-yellow-300',
            'NT': 'bg-blue-100 text-blue-800 border-blue-300',
            'LC': 'bg-green-100 text-green-800 border-green-300',
            'EX': 'bg-gray-100 text-gray-800 border-gray-300'
        };
        return colors[status] || 'bg-gray-100 text-gray-800 border-gray-300';
    };

    // Helper untuk label status konservasi
    const getStatusLabel = (status) => {
        const labels = {
            'CR': 'Critically Endangered (Kritis)',
            'EN': 'Endangered (Terancam Punah)',
            'VU': 'Vulnerable (Rentan)',
            'NT': 'Near Threatened (Mendekati Terancam)',
            'LC': 'Least Concern (Risiko Rendah)',
            'EX': 'Extinct (Punah)'
        };
        return labels[status] || status;
    };

    return (
        <>
            <Head title={`${species.accepted_name} - Biodiversitas Indonesia`} />
            
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

            {/* Hero Section dengan Gambar */}
            <div className="relative h-[400px] overflow-hidden bg-gray-100">
                {species.media && species.media.length > 0 && species.media[0].image_url ? (
                    <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${species.media[0].image_url}')` }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    </div>
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-700">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <svg className="w-32 h-32 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>
                )}

                <div className="relative z-10 h-full flex items-end pb-12 px-4">
                    <div className="container mx-auto">
                        <div className="flex items-center space-x-3 mb-4">
                            <span className={`px-4 py-2 rounded-full text-sm font-bold border-2 ${getStatusColor(species.conservation_status)}`}>
                                {species.conservation_status}
                            </span>
                            {species.is_endemic && (
                                <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-bold">
                                    🇮🇩 Endemik Indonesia
                                </span>
                            )}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 italic">
                            {species.accepted_name}
                        </h1>
                        <p className="text-xl text-white/90 font-semibold">
                            {species.common_name || '-'}
                        </p>
                        <div className="flex items-center space-x-2 text-white/80 text-sm mt-4">
                            <Link href="/" className="hover:text-emerald-300">Beranda</Link>
                            <span>/</span>
                            <Link href="/" className="hover:text-emerald-300">Spesies</Link>
                            <span>/</span>
                            <span className="text-emerald-300">{species.common_name || species.accepted_name}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Kolom Kiri: Informasi Utama */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* Deskripsi */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                <svg className="w-6 h-6 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Deskripsi
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                {species.description_simple || 'Informasi deskripsi sedang dalam proses pengumpulan.'}
                            </p>
                        </div>

{/* Klasifikasi Taksonomi LENGKAP */}
<div className="bg-white rounded-2xl shadow-lg p-8">
    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <svg className="w-6 h-6 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        Klasifikasi Taksonomi
    </h3>
    
    <div className="space-y-3">
        {/* Kingdom */}
        {species?.genus?.family?.taxonOrder?.taxonClass?.phylum?.kingdom && (
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border-l-4 border-purple-500">
                <span className="font-semibold text-gray-700">Kingdom:</span>
                <span className="font-bold text-purple-700">{species.genus.family.taxonOrder.taxonClass.phylum.kingdom.name}</span>
            </div>
        )}
        
        {/* Phylum */}
        {species?.genus?.family?.taxonOrder?.taxonClass?.phylum && (
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-l-4 border-blue-500">
                <span className="font-semibold text-gray-700">Phylum:</span>
                <span className="font-bold text-blue-700">{species.genus.family.taxonOrder.taxonClass.phylum.name}</span>
            </div>
        )}
        
        {/* Class */}
        {species?.genus?.family?.taxonOrder?.taxonClass && (
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border-l-4 border-green-500">
                <span className="font-semibold text-gray-700">Class:</span>
                <span className="font-bold text-green-700">{species.genus.family.taxonOrder.taxonClass.name}</span>
            </div>
        )}
        
        {/* Order */}
        {species?.genus?.family?.taxonOrder && (
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg border-l-4 border-yellow-500">
                <span className="font-semibold text-gray-700">Order:</span>
                <span className="font-bold text-yellow-700">{species.genus.family.taxonOrder.name}</span>
            </div>
        )}
        
        {/* Family */}
        {species?.genus?.family && (
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border-l-4 border-orange-500">
                <span className="font-semibold text-gray-700">Family:</span>
                <span className="font-bold text-orange-700">{species.genus.family.name}</span>
            </div>
        )}
        
        {/* Genus */}
        {species?.genus && (
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-lg border-l-4 border-red-500">
                <span className="font-semibold text-gray-700">Genus:</span>
                <span className="font-bold text-red-700">{species.genus.name}</span>
            </div>
        )}
        
        {/* Species */}
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-lg border-l-4 border-emerald-500">
            <span className="font-semibold text-gray-700">Species:</span>
            <span className="font-bold text-emerald-700 italic">{species.accepted_name}</span>
        </div>
    </div>
    
    {/* Visual Hierarchy */}
    <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="text-sm font-semibold text-gray-600 mb-3">Hierarki Visual:</h4>
        <div className="flex flex-wrap items-center gap-2 text-sm">
            {species?.genus?.family?.taxonOrder?.taxonClass?.phylum?.kingdom && (
                <>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full font-medium">
                        {species.genus.family.taxonOrder.taxonClass.phylum.kingdom.name}
                    </span>
                    <span className="text-gray-400">→</span>
                </>
            )}
            {species?.genus?.family?.taxonOrder?.taxonClass?.phylum && (
                <>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">
                        {species.genus.family.taxonOrder.taxonClass.phylum.name}
                    </span>
                    <span className="text-gray-400">→</span>
                </>
            )}
            {species?.genus?.family?.taxonOrder?.taxonClass && (
                <>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full font-medium">
                        {species.genus.family.taxonOrder.taxonClass.name}
                    </span>
                    <span className="text-gray-400">→</span>
                </>
            )}
            {species?.genus?.family?.taxonOrder && (
                <>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full font-medium">
                        {species.genus.family.taxonOrder.name}
                    </span>
                    <span className="text-gray-400">→</span>
                </>
            )}
            {species?.genus?.family && (
                <>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full font-medium">
                        {species.genus.family.name}
                    </span>
                    <span className="text-gray-400">→</span>
                </>
            )}
            {species?.genus && (
                <>
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full font-medium">
                        {species.genus.name}
                    </span>
                    <span className="text-gray-400">→</span>
                </>
            )}
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full font-bold italic">
                {species.accepted_name}
            </span>
        </div>
    </div>
</div>

                        {/* Galeri Foto */}
                        {species.media && species.media.length > 0 && (
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <svg className="w-6 h-6 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    Galeri Foto
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {species.media.map((media, index) => (
                                        <div key={index} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                                            <img 
                                                src={media.image_url} 
                                                alt={media.caption || species.common_name}
                                                className="w-full h-64 object-cover"
                                                onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=Gambar+Tidak+Ditemukan'; }}
                                            />
                                            {media.caption && (
                                                <div className="p-3 bg-gray-50">
                                                    <p className="text-sm text-gray-600">{media.caption}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Kolom Kanan: Informasi Singkat (Sidebar) */}
                    <div className="space-y-6">
                        {/* Status Konservasi */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Status Konservasi (IUCN)</h3>
                            <div className={`p-4 rounded-xl border-2 text-center ${getStatusColor(species.conservation_status)}`}>
                                <div className="text-4xl font-bold mb-1">{species.conservation_status}</div>
                                <div className="text-sm opacity-90">{getStatusLabel(species.conservation_status)}</div>
                            </div>
                        </div>

                        {/* Informasi Umum */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Informasi Umum</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="text-sm text-gray-600 mb-1">Habitat</div>
                                    <div className="font-semibold text-gray-900">{species.habitat || 'Belum tersedia'}</div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-600 mb-1">Endemik Indonesia</div>
                                    <div className="font-semibold text-gray-900">
                                        {species.is_endemic ? '✅ Ya' : '❌ Tidak'}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Referensi */}
                        {species.citation && (
                            <div className="bg-white rounded-2xl shadow-lg p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Referensi / Sitasi</h3>
                                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                                    <p className="text-sm text-gray-700 italic">
                                        {species.citation.apa_formatted_text || 
                                         `${species.citation.authors} (${species.citation.year}). ${species.citation.title}.`}
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Tombol Aksi */}
                        <div className="bg-emerald-50 rounded-2xl p-6">
                            <h3 className="text-lg font-bold text-emerald-900 mb-4">Aksi</h3>
                            <div className="space-y-2">
                                <Link href="/" className="block w-full text-center bg-emerald-600 text-white py-2.5 rounded-lg font-semibold hover:bg-emerald-700 transition">
                                    &larr; Kembali ke Daftar Spesies
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8 mt-12">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-400">© 2026 Biodiversitas Indonesia. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}