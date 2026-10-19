import { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';

export default function SearchIndex({ species, query }) {
    const [term, setTerm] = useState(query || '');

    const doSearch = (e) => {
        e.preventDefault();
        router.get('/search', { q: term });
    };

    const getStatusColor = (status) => {
        const colors = {
            'CR': 'bg-red-600', 'EN': 'bg-orange-500', 'VU': 'bg-yellow-500',
            'NT': 'bg-blue-400', 'LC': 'bg-green-500', 'EX': 'bg-gray-600'
        };
        return colors[status] || 'bg-gray-400';
    };

    // Helper URL halaman (query pencarian tetap terjaga)
    const pageUrl = (p) => `/search?q=${encodeURIComponent(query)}&page=${p}`;

    return (
        <>
            <Head title={`Pencarian: ${query}`} />

            {/* Hero Pencarian */}
            <div className="bg-gradient-to-r from-emerald-700 via-green-700 to-teal-700 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-white mb-6">Cari Spesies & Jurnal</h1>
                    <form onSubmit={doSearch} className="max-w-2xl mx-auto flex">
                        <input
                            type="text"
                            value={term}
                            onChange={(e) => setTerm(e.target.value)}
                            placeholder="Cari nama ilmiah atau nama umum... (contoh: harimau, Rafflesia)"
                            className="flex-1 px-6 py-4 rounded-l-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-emerald-300"
                            autoFocus
                        />
                        <button type="submit" className="px-8 py-4 bg-emerald-900 text-white rounded-r-xl font-semibold hover:bg-emerald-950 transition">
                            Cari
                        </button>
                    </form>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                {/* Info Hasil */}
                {query && (
                    <p className="text-gray-600 mb-8">
                        Ditemukan <span className="font-bold text-emerald-700">{species.total}</span> hasil untuk: <span className="font-bold">"{query}"</span>
                        <span className="text-sm text-gray-400 ml-2">
                            (Menampilkan {species.from}–{species.to})
                        </span>
                    </p>
                )}

                {species.total === 0 && query ? (
                    <div className="text-center py-20">
                        <p className="text-2xl text-gray-500 mb-4">Tidak ada hasil untuk "{query}"</p>
                        <p className="text-gray-400">Coba kata kunci lain, misalnya: "badak", "orangutan", "Rafflesia"</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {species.data.map((s) => (
                            <div key={s.id} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                                {/* Gambar */}
                                <div className="md:w-64 h-48 md:h-auto relative bg-gradient-to-br from-emerald-400 to-teal-600">
                                    {s.image_url ? (
                                        <img src={s.image_url} alt={s.common_name} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <svg className="w-16 h-16 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    )}
                                    <span className={`absolute top-3 right-3 px-3 py-1 ${getStatusColor(s.conservation_status)} text-white rounded-full text-xs font-bold`}>
                                        {s.conservation_status}
                                    </span>
                                </div>

                                {/* Info Spesies */}
                                <div className="flex-1 p-6">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-bold italic text-gray-900">{s.accepted_name}</h3>
                                            <p className="text-lg font-semibold text-emerald-700">{s.common_name}</p>
                                        </div>
                                        <Link href={`/species/${s.id}`} className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700">
                                            Lihat Detail
                                        </Link>
                                    </div>
                                    {s.description_simple && (
                                        <p className="text-gray-600 text-sm mt-3 line-clamp-2">{s.description_simple}</p>
                                    )}

                                    {/* 📚 JURNAL / REFERENSI */}
                                    <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                                        <p className="text-xs font-bold text-yellow-800 mb-1">JURNAL / REFERENSI:</p>
                                        {s.citation ? (
                                            <p className="text-sm text-gray-700 italic">
                                                {s.citation.authors} ({s.citation.year}). <span className="font-semibold not-italic">{s.citation.title}</span>. {s.citation.source}
                                                {s.citation.doi && (
                                                    <a href={`https://doi.org/${s.citation.doi}`} target="_blank" className="text-blue-600 underline ml-1">DOI: {s.citation.doi}</a>
                                                )}
                                            </p>
                                        ) : (
                                            <p className="text-sm text-gray-500">Belum ada jurnal terdaftar untuk spesies ini.</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* 🔢 PAGINATION */}
                {species.last_page > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-10">
                        {species.current_page > 1 ? (
                            <Link href={pageUrl(species.current_page - 1)} className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-bold">
                                ←
                            </Link>
                        ) : (
                            <span className="px-4 py-2 bg-gray-200 text-gray-400 rounded-lg font-bold">←</span>
                        )}

                        {Array.from({ length: species.last_page }, (_, i) => i + 1).map((p) => (
                            <Link
                                key={p}
                                href={pageUrl(p)}
                                className={`w-10 h-10 flex items-center justify-center rounded-lg font-semibold transition ${
                                    p === species.current_page
                                        ? 'bg-emerald-600 text-white shadow-md'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {p}
                            </Link>
                        ))}

                        {species.current_page < species.last_page ? (
                            <Link href={pageUrl(species.current_page + 1)} className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-bold">
                                →
                            </Link>
                        ) : (
                            <span className="px-4 py-2 bg-gray-200 text-gray-400 rounded-lg font-bold">→</span>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}