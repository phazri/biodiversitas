import { useEffect, useState } from 'react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function DiscussionIndex({ messages, speciesOptions, prefillSpecies }) {
    const user = usePage().props.auth?.user;
    const [body, setBody] = useState('');
    const [speciesId, setSpeciesId] = useState(prefillSpecies ?? '');

    // 🔄 Auto-refresh 15 detik — rasa chat tanpa WebSocket
    useEffect(() => {
        const t = setInterval(() => {
            router.reload({ only: ['messages'] });
        }, 1000);
        return () => clearInterval(t);
    }, []);

    const submit = (e) => {
        e.preventDefault();
        router.post('/diskusi', { body, species_id: speciesId || null }, {
            preserveScroll: true,
            onSuccess: () => setBody(''),
        });
    };

    const fontDisplay = "font-['Plus_Jakarta_Sans',sans-serif]";
    const fmt = (d) => new Date(d).toLocaleString('id-ID', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
    const participants = new Set(messages.map((m) => m.user_id)).size;

    return (
        <>
            <Head title="Ruang Diskusi - Biodiversitas Indonesia">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
            </Head>

            <Navbar />

            {/* Hero kecil */}
            <header className="bg-gradient-to-br from-[#005032] via-[#046A45] to-[#0B7A51] text-white">
                <div className="container mx-auto px-4 pt-10 pb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold tracking-[0.05em] uppercase text-[#92E7B8]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6CF8BB] animate-pulse"></span>
                        Forum Terbuka Termoderasi
                    </div>
                    <h1 className={`${fontDisplay} text-3xl md:text-4xl font-extrabold mt-3`}>Ruang Diskusi Nusantara</h1>
                    <p className="mt-2 max-w-2xl text-white/80 text-sm leading-relaxed">
                        Diskusikan flora & fauna Indonesia bersama peneliti, mahasiswa, dan pecinta alam.
                        Pesan baru muncul otomatis setiap 15 detik.
                    </p>
                </div>
            </header>

            <div className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Kolom utama: composer + feed */}
                <div className="lg:col-span-2 space-y-4">
                    {user ? (
                        <form onSubmit={submit} className="bg-white rounded-xl border border-[#E2E8F0] shadow-[0_4px_16px_-2px_rgba(15,23,42,0.05)] p-4 space-y-3">
                            <div className="flex items-center gap-2 text-sm font-semibold text-[#0F172A]">
                                <span className="w-8 h-8 rounded-full bg-[#10B981] text-white flex items-center justify-center text-xs font-bold">
                                    {user.name?.charAt(0)?.toUpperCase()}
                                </span>
                                Tulis sebagai {user.name}
                            </div>
                            <textarea
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                                rows={3}
                                maxLength={500}
                                required
                                placeholder="Tulis pertanyaan, temuan lapangan, atau pendapat Anda tentang flora & fauna Indonesia..."
                                className="w-full px-3 py-2.5 rounded-lg border border-[#E2E8F0] text-sm focus:ring-2 focus:ring-[#10B981] focus:outline-none"
                            />
                            <div className="flex flex-wrap items-center gap-3">
                                <select
                                    value={speciesId}
                                    onChange={(e) => setSpeciesId(e.target.value)}
                                    className="px-3 py-2 rounded-lg border border-[#E2E8F0] text-sm bg-white text-[#334155]"
                                >
                                    <option value=""> Tandai spesies (opsional)</option>
                                    {speciesOptions.map((s) => (
                                        <option key={s.id} value={s.id}>{s.common_name || s.accepted_name}</option>
                                    ))}
                                </select>
                                <span className="text-xs text-[#94A3B8] ml-auto">{body.length}/500</span>
                                <button type="submit" className="bg-[#046A45] hover:bg-[#035437] text-white px-5 py-2 rounded-lg text-sm font-semibold transition">
                                    Kirim
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="bg-[#EFF4FF] border border-[#D3E4FE] rounded-xl p-4 text-sm text-[#003CA3] flex flex-wrap items-center gap-2">
                             Ikuti diskusi dengan masuk sebagai kontributor:
                            <a href="/login" className="font-bold underline">Masuk</a> atau
                            <a href="/register" className="font-bold underline">Daftar</a>
                        </div>
                    )}

                    {/* Feed pesan (terbaru di atas) */}
                    {messages.length === 0 ? (
                        <div className="bg-white rounded-xl border border-[#E2E8F0] p-10 text-center text-[#94A3B8] text-sm">
                            Belum ada diskusi. Jadilah yang pertama memulai!
                        </div>
                    ) : (
                        messages.map((m) => (
                            <div key={m.id} className="bg-white rounded-xl border border-[#E2E8F0] shadow-[0_4px_16px_-2px_rgba(15,23,42,0.05)] p-5">
                                <div className="flex items-start gap-3">
                                    <span className="w-10 h-10 rounded-full bg-[#046A45] text-white flex items-center justify-center font-bold shrink-0">
                                        {m.user?.name?.charAt(0)?.toUpperCase()}
                                    </span>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="font-bold text-[#0F172A] text-sm">{m.user?.name}</span>
                                            <span className="text-xs text-[#94A3B8]">{fmt(m.created_at)}</span>
                                            {m.species && (
                                                <Link href={`/species/${m.species.id}`} className="text-[11px] px-2 py-0.5 rounded-full bg-[#DCE9FF] text-[#003CA3] font-semibold italic hover:underline">
                                                     {m.species.accepted_name}
                                                </Link>
                                            )}
                                        </div>
                                        <p className="text-sm text-[#334155] mt-1.5 leading-relaxed whitespace-pre-wrap">{m.body}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Sidebar: aturan & statistik */}
                <div className="space-y-6">
                    <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-[0_4px_16px_-2px_rgba(15,23,42,0.05)] p-6">
                        <h3 className={`${fontDisplay} font-bold text-[#0F172A] mb-3`}>Statistik Ruang</h3>
                        <div className="grid grid-cols-2 gap-3 text-center">
                            <div className="bg-[#F8FAFC] rounded-lg p-3">
                                <div className={`${fontDisplay} text-2xl font-bold text-[#046A45]`}>{messages.length}</div>
                                <div className="text-[11px] text-[#64748B]">Pesan (100 terakhir)</div>
                            </div>
                            <div className="bg-[#F8FAFC] rounded-lg p-3">
                                <div className={`${fontDisplay} text-2xl font-bold text-[#2563EB]`}>{participants}</div>
                                <div className="text-[11px] text-[#64748B]">Partisipan</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#046A45] rounded-xl p-6 text-white">
                        <h3 className={`${fontDisplay} font-bold mb-3`}>Etika Diskusi</h3>
                        <ul className="space-y-2 text-sm text-white/85">
                            <li>• Saling menghormati & ilmiah</li>
                            <li>• Sertakan sumber untuk klaim data</li>
                            <li>• Tandai spesies agar konteks jelas</li>
                            <li>• Admin berhak menghapus pesan melanggar</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}