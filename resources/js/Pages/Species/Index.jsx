import { useMemo, useState } from 'react';
import { Link, Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import WelcomeGuide from '@/Components/WelcomeGuide';

export default function Index({ species }) {
    // Aman untuk array biasa maupun paginator
    const all = Array.isArray(species) ? species : (species?.data ?? []);
    const total = Array.isArray(species) ? species.length : (species?.total ?? all.length);

    const [q, setQ] = useState('');
    const [kelas, setKelas] = useState('all');
    const [status, setStatus] = useState('all');
    const [wilayah, setWilayah] = useState('all');
    const [chip, setChip] = useState('all');
    const [view, setView] = useState('grid');
    const [page, setPage] = useState(1);
    const perPage = 8;

    const fontDisplay = "font-['Plus_Jakarta_Sans',sans-serif]";

    const IUCN = {
        CR: 'bg-[#DC2626]', EN: 'bg-[#EA580C]', VU: 'bg-[#F59E0B]',
        NT: 'bg-[#D97706]', LC: 'bg-[#059669]', EX: 'bg-[#475569]',
    };

    const kelasName = (s) => s?.genus?.family?.taxonOrder?.taxonClass?.name ?? null;
    const blob = (s) => `${s.description_simple ?? ''} ${s.habitat ?? ''} ${s.common_name ?? ''}`.toLowerCase();

    const inRegion = (s, keys) => keys.some((k) => blob(s).includes(k));
    const WALLACEA = ['sulawesi', 'maluku', 'sula', 'nusa tenggara'];

    const filtered = useMemo(() => all.filter((s) => {
        const text = `${s.accepted_name} ${s.common_name ?? ''}`.toLowerCase();
        if (q && !text.includes(q.toLowerCase())) return false;
        if (status !== 'all' && s.conservation_status !== status) return false;
        if (kelas !== 'all' && kelasName(s) !== kelas) return false;
        if (wilayah !== 'all' && !blob(s).includes(wilayah.toLowerCase())) return false;
        if (chip === 'endemik' && !s.is_endemic) return false;
        if (chip === 'cr' && s.conservation_status !== 'CR') return false;
        if (chip === 'flora' && kelasName(s) !== 'Plantae') return false;
        if (chip === 'wallacea' && !inRegion(s, WALLACEA)) return false;
        return true;
    }), [all, q, status, kelas, wilayah, chip]);

    const pages = Math.max(1, Math.ceil(filtered.length / perPage));
    const safePage = Math.min(page, pages);
    const pageItems = filtered.slice((safePage - 1) * perPage, safePage * perPage);
    const from = filtered.length === 0 ? 0 : (safePage - 1) * perPage + 1;
    const to = Math.min(safePage * perPage, filtered.length);

    const statCR = all.filter((s) => s.conservation_status === 'CR').length;
    const statEN = all.filter((s) => s.conservation_status === 'EN').length;
    const statEndemic = all.filter((s) => s.is_endemic).length;
    const sunda = all.filter((s) => inRegion(s, ['sumatera', 'jawa', 'kalimantan', 'bali'])).length;
    const wallaceaCount = all.filter((s) => inRegion(s, WALLACEA)).length;
    const sahul = all.filter((s) => inRegion(s, ['papua', 'irian'])).length;

    const kelasOptions = useMemo(() => {
        const set = new Set();
        all.forEach((s) => { const k = kelasName(s); if (k) set.add(k); });
        return Array.from(set).sort();
    }, [all]);

    const reset = () => setPage(1);

    const badges = (s) => (
        <>
            <div className="absolute top-3 left-3">
                {s.is_endemic && (
                    <span className="px-2.5 py-1 bg-[#2563EB] text-white rounded-full text-[11px] font-bold tracking-[0.05em] uppercase shadow">Endemik</span>
                )}
            </div>
            <div className="absolute top-3 right-3">
                <span className={`px-2.5 py-1 ${IUCN[s.conservation_status] ?? 'bg-[#64748B]'} text-white rounded-full text-[11px] font-bold tracking-[0.05em] uppercase shadow`}>
                    {s.conservation_status}
                </span>
            </div>
        </>
    );

    const thumb = (s, extra) => (
        <div className={`relative overflow-hidden bg-[#DCE9FF] ${extra}`}>
            {s.image_url ? (
                <img src={s.image_url} alt={s.common_name || s.accepted_name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.target.style.display = 'none'; }} />
            ) : null}
            {!s.image_url && (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#046A45] to-[#10B981]">
                    <svg className="w-16 h-16 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
            )}
            {badges(s)}
        </div>
    );

    return (
        <>
            <Head title="Biodiversitas Indonesia - Beranda">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
            </Head>

            <Navbar />

            {/* ============ HERO ============ */}
            <header className="relative bg-gradient-to-br from-[#005032] via-[#046A45] to-[#0B7A51] text-white">
                <div className="container mx-auto px-4 pt-12 pb-28">
                    <div className="flex items-center gap-2 text-xs text-white/60">
                        <span>Beranda</span><span>/</span><span>Spesies</span><span>/</span>
                        <span className="text-[#92E7B8] font-semibold">Eksplorasi Taksa</span>
                    </div>

                    <div className="inline-flex items-center gap-2 mt-6 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold tracking-[0.05em] uppercase text-[#92E7B8]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6CF8BB]"></span>
                        Basis Data Spesies Terpadu Nusantara v2.4
                    </div>

                    <h1 className={`${fontDisplay} text-4xl md:text-6xl font-extrabold mt-4 leading-tight`}>
                        Biodiversitas Indonesia
                    </h1>
                    <p className="mt-4 max-w-2xl text-white/80 leading-relaxed">
                        Data terstruktur flora dan fauna untuk kebutuhan akademik, riset biosistematika, dan percepatan aksi konservasi habitat darat maupun perairan Nusantara.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a href="#katalog" className="bg-[#10B981] hover:bg-[#0d9668] text-white font-semibold px-5 py-2.5 rounded-lg transition shadow">
                            🔍 Jelajahi Spesies
                        </a>
                        <a href="#api" className="border border-white/40 hover:bg-white/10 text-white font-semibold px-5 py-2.5 rounded-lg transition">
                            ⬇ Unduh Dataset Publik
                        </a>
                        <a href="#peta" className="text-white/80 hover:text-white font-semibold px-5 py-2.5 rounded-lg transition">
                            🗺 Lihat Peta Sebaran Bioma
                        </a>
                    </div>
                </div>
            </header>

            {/* ============ STAT CARDS (overlap hero) ============ */}
            <section className="container mx-auto px-4 -mt-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                    {[
                        { bar: 'bg-[#046A45]', tint: 'bg-[#046A45]/10 text-[#046A45]', num: 'text-[#046A45]', label: 'Katalog Terverifikasi', value: total, suffix: '', title: 'Spesies Tercatat', cap: 'Tervalidasi standar GBIF & BRIN', icon: '✓' },
                        { bar: 'bg-[#DC2626]', tint: 'bg-[#DC2626]/10 text-[#DC2626]', num: 'text-[#DC2626]', label: 'Status Merah', value: statCR, suffix: 'CR', title: 'Kritis (CR)', cap: 'Risiko kepunahan sangat tinggi', icon: '⚠' },
                        { bar: 'bg-[#EA580C]', tint: 'bg-[#EA580C]/10 text-[#EA580C]', num: 'text-[#EA580C]', label: 'Vulnerabilitas', value: statEN, suffix: 'EN', title: 'Terancam Punah', cap: 'Perlindungan prioritas nasional', icon: '🛡' },
                        { bar: 'bg-[#2563EB]', tint: 'bg-[#2563EB]/10 text-[#2563EB]', num: 'text-[#2563EB]', label: 'Geografis Khusus', value: statEndemic, suffix: '', title: 'Spesies Endemik', cap: 'Eksklusif kepulauan nusantara', icon: '🧭' },
                    ].map((c, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_10px_25px_-5px_rgba(15,23,42,0.08)] overflow-hidden">
                            <div className={`h-1 ${c.bar}`}></div>
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <span className="text-[11px] font-bold tracking-[0.05em] uppercase text-[#64748B]">{c.label}</span>
                                    <span className={`w-8 h-8 rounded-full ${c.tint} flex items-center justify-center text-sm`}>{c.icon}</span>
                                </div>
                                <div className={`${fontDisplay} text-[44px] leading-[48px] font-bold ${c.num} mt-3`}>
                                    {c.value}
                                    {c.suffix && <span className="text-sm ml-1 align-middle opacity-80">{c.suffix}</span>}
                                </div>
                                <div className="font-semibold text-[#0F172A]">{c.title}</div>
                                <div className="text-xs text-[#64748B] mt-1">{c.cap}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ============ KATALOG ============ */}
            <section id="katalog" className="container mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                    <div>
                        <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.05em] uppercase text-[#046A45]">
                            <span>🌿</span> Inventarisasi Hayati
                        </div>
                        <h2 className={`${fontDisplay} text-3xl md:text-4xl font-bold text-[#0F172A] mt-2`}>Jelajahi Spesies Indonesia</h2>
                        <p className="text-[#64748B] mt-2 max-w-2xl">Temukan informasi taksonomi terperinci, koordinat bioma sebaran, dan matriks status konservasi spesies kepulauan Nusantara.</p>
                    </div>
                    <span className="self-start md:self-auto px-3 py-1.5 bg-[#EFF4FF] border border-[#D3E4FE] rounded-full text-xs font-semibold text-[#003CA3]">
                        Menampilkan {filtered.length} dari {total} taksa terdaftar
                    </span>
                </div>

                {/* Filter Bar */}
                <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-[0_4px_16px_-2px_rgba(15,23,42,0.05)] p-4 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                        <div className="relative md:col-span-1">
                            <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                type="text"
                                value={q}
                                onChange={(e) => { setQ(e.target.value); reset(); }}
                                placeholder="Cari nama ilmiah / lokal (e.g., Badak)"
                                className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-[#E2E8F0] text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent"
                            />
                        </div>
                        <select value={kelas} onChange={(e) => { setKelas(e.target.value); reset(); }} className="px-3 py-2.5 rounded-lg border border-[#E2E8F0] text-sm text-[#334155] bg-white focus:outline-none focus:ring-2 focus:ring-[#10B981]">
                            <option value="all">Taksa: Semua Kelas</option>
                            {kelasOptions.map((k) => <option key={k} value={k}>{k}</option>)}
                        </select>
                        <select value={status} onChange={(e) => { setStatus(e.target.value); reset(); }} className="px-3 py-2.5 rounded-lg border border-[#E2E8F0] text-sm text-[#334155] bg-white focus:outline-none focus:ring-2 focus:ring-[#10B981]">
                            <option value="all">Status IUCN: Semua</option>
                            <option value="CR">Kritis (CR)</option>
                            <option value="EN">Terancam (EN)</option>
                            <option value="VU">Rentan (VU)</option>
                            <option value="NT">Hampir Terancam (NT)</option>
                            <option value="LC">Risiko Rendah (LC)</option>
                        </select>
                        <select value={wilayah} onChange={(e) => { setWilayah(e.target.value); reset(); }} className="px-3 py-2.5 rounded-lg border border-[#E2E8F0] text-sm text-[#334155] bg-white focus:outline-none focus:ring-2 focus:ring-[#10B981]">
                            <option value="all">Wilayah: Seluruh RI</option>
                            <option value="sumatera">Sumatera</option>
                            <option value="jawa">Jawa & Bali</option>
                            <option value="kalimantan">Kalimantan</option>
                            <option value="sulawesi">Sulawesi (Wallacea)</option>
                            <option value="papua">Papua (Australasia)</option>
                        </select>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-4 border-t border-[#F1F5F9]">
                        <div className="flex flex-wrap items-center gap-2 text-xs">
                            <span className="text-[#64748B] font-semibold mr-1">Filter Populer:</span>
                            {[
                                { id: 'all', label: 'Semua Spesies' },
                                { id: 'endemik', label: `Hanya Endemik (${statEndemic})` },
                                { id: 'cr', label: `Prioritas CR (${statCR})` },
                                { id: 'flora', label: 'Flora Bernilai Konservasi' },
                                { id: 'wallacea', label: 'Zona Garis Wallacea' },
                            ].map((c) => (
                                <button
                                    key={c.id}
                                    onClick={() => { setChip(c.id); reset(); }}
                                    className={`px-3 py-1.5 rounded-full font-semibold transition border ${
                                        chip === c.id
                                            ? 'bg-[#046A45] text-white border-[#046A45]'
                                            : 'bg-white text-[#475569] border-[#E2E8F0] hover:bg-[#F8FAFC]'
                                    }`}
                                >
                                    {c.label}
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center gap-1 text-[#64748B]">
                            <button onClick={() => setView('grid')} className={`p-2 rounded-lg ${view === 'grid' ? 'bg-[#EFF4FF] text-[#003CA3]' : 'hover:bg-[#F8FAFC]'}`}>▦</button>
                            <button onClick={() => setView('list')} className={`p-2 rounded-lg ${view === 'list' ? 'bg-[#EFF4FF] text-[#003CA3]' : 'hover:bg-[#F8FAFC]'}`}>☰</button>
                        </div>
                    </div>
                </div>

                {/* Grid / List */}
                {pageItems.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-2xl border border-[#E2E8F0]">
                        <p className="text-2xl text-[#94A3B8] mb-2">😔 Tidak ada taksa yang cocok</p>
                        <p className="text-sm text-[#64748B]">Coba ubah kata kunci atau reset filter.</p>
                    </div>
                ) : view === 'grid' ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {pageItems.map((s) => (
                            <Link key={s.id} href={`/species/${s.id}`} className="group bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-[0_4px_16px_-2px_rgba(15,23,42,0.05)] hover:-translate-y-1 hover:shadow-[0_20px_25px_-5px_rgba(4,106,69,0.15)] transition-all duration-300 flex flex-col">
                                {thumb(s, 'aspect-[16/10]')}
                                <div className="p-5 flex flex-col flex-1">
                                    <div className="text-xs text-[#64748B] mb-1.5">
                                        {kelasName(s) ?? 'Taksa'} • {s?.genus?.family?.name ?? '—'}
                                    </div>
                                    <h3 className={`${fontDisplay} text-lg font-bold italic text-[#0F172A] group-hover:text-[#046A45] transition-colors leading-6`}>
                                        {s.accepted_name}
                                    </h3>
                                    <div className="text-sm font-semibold text-[#334155] mt-0.5">{s.common_name || '—'}</div>
                                    <p className="text-sm text-[#64748B] mt-2 line-clamp-2 leading-5">{s.description_simple}</p>
                                    <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex items-center justify-between gap-2 text-sm">
                                        <span className="inline-flex items-center gap-1.5 text-[#64748B] min-w-0">
                                            <svg className="w-4 h-4 text-[#046A45] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                            </svg>
                                            <span className="truncate">{s.habitat || 'Habitat —'}</span>
                                        </span>
                                        <span className="inline-flex items-center gap-1 font-bold text-[#046A45] shrink-0">
                                            Detail
                                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-4">
                        {pageItems.map((s) => (
                            <Link key={s.id} href={`/species/${s.id}`} className="group bg-white rounded-xl border border-[#E2E8F0] shadow-[0_4px_16px_-2px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_25px_-5px_rgba(4,106,69,0.15)] transition-all flex flex-col sm:flex-row overflow-hidden">
                                {thumb(s, 'w-full sm:w-52 h-40 sm:h-auto shrink-0')}
                                <div className="p-5 flex-1">
                                    <div className="text-xs text-[#64748B] mb-1">{kelasName(s) ?? 'Taksa'} • {s?.genus?.family?.name ?? '—'}</div>
                                    <h3 className={`${fontDisplay} text-lg font-bold italic text-[#0F172A] group-hover:text-[#046A45] transition-colors`}>{s.accepted_name}</h3>
                                    <div className="text-sm font-semibold text-[#334155]">{s.common_name || '—'}</div>
                                    <p className="text-sm text-[#64748B] mt-2 line-clamp-2">{s.description_simple}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}

                {/* Pagination */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10">
                    <p className="text-sm text-[#64748B]">
                        Menampilkan <b>{from} - {to}</b> dari <b>{filtered.length}</b> catatan spesimen
                    </p>
                    {pages > 1 && (
                        <div className="flex items-center gap-2">
                            <button onClick={() => setPage(Math.max(1, safePage - 1))} disabled={safePage === 1} className="w-9 h-9 rounded-lg border border-[#E2E8F0] bg-white text-[#64748B] hover:bg-[#F8FAFC] disabled:opacity-40">‹</button>
                            {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
                                <button key={p} onClick={() => setPage(p)} className={`w-9 h-9 rounded-lg text-sm font-semibold transition ${p === safePage ? 'bg-[#046A45] text-white shadow' : 'bg-white border border-[#E2E8F0] text-[#475569] hover:bg-[#F8FAFC]'}`}>
                                    {p}
                                </button>
                            ))}
                            <button onClick={() => setPage(Math.min(pages, safePage + 1))} disabled={safePage === pages} className="w-9 h-9 rounded-lg border border-[#E2E8F0] bg-white text-[#64748B] hover:bg-[#F8FAFC] disabled:opacity-40">›</button>
                        </div>
                    )}
                </div>
            </section>

            {/* ============ PETA + API ============ */}
            <section className="container mx-auto px-4 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div id="peta" className="lg:col-span-2 bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_4px_16px_-2px_rgba(15,23,42,0.05)] p-8">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <div className="text-[11px] font-bold tracking-[0.05em] uppercase text-[#64748B]">Pemetaan Biogeografis</div>
                                <h3 className={`${fontDisplay} text-2xl font-bold text-[#0F172A] mt-1`}>Sebaran Tiga Zona Garis Wallacea & Weber</h3>
                            </div>
                            <span className="w-10 h-10 rounded-full bg-[#EFF4FF] text-[#003CA3] flex items-center justify-center shrink-0">🌐</span>
                        </div>
                        <p className="text-sm text-[#64748B] mt-3 leading-relaxed">
                            Indonesia terbagi ke dalam Paparan Sunda (Orientalis), Kepulauan Wallacea (Zona Transisi Peralihan), dan Paparan Sahul (Australasia), menghasilkan tingkat endemisme hayati tertinggi di dunia.
                        </p>
                        <div className="mt-6 h-48 rounded-xl bg-gradient-to-br from-[#DCE9FF] via-[#EFF4FF] to-[#92E7B8]/40 border border-[#E2E8F0] flex items-center justify-center text-[#94A3B8] text-sm">
                             Peta Interaktif Bioma (Segera)
                        </div>
                        <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-[#475569]">
                            <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span> Paparan Sunda ({sunda} Spesies)</span>
                            <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]"></span> Wallacea ({wallaceaCount} Spesies)</span>
                            <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]"></span> Paparan Sahul ({sahul} Spesies)</span>
                        </div>
                    </div>

                    <div id="api" className="bg-[#046A45] rounded-2xl p-8 text-white flex flex-col">
                        <span className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">💻</span>
                        <div className="text-[11px] font-bold tracking-[0.05em] uppercase text-[#92E7B8] mt-5">Akses Terbuka Sains</div>
                        <h3 className={`${fontDisplay} text-2xl font-bold mt-1`}>API Biodiversitas & Lembar Spesimen</h3>
                        <p className="text-sm text-white/80 mt-3 leading-relaxed">
                            Integrasikan data taksonomi langsung ke riset komputasi atau aplikasi konservasi lokal Anda via endpoint berstandar Darwin Core (DwC).
                        </p>
                        <div className="mt-4 px-3 py-2 rounded-lg bg-black/25 border border-white/10 font-mono text-xs text-[#6CF8BB]">
                            GET /v2/taxa?status=CR&endemic=true
                        </div>
                        <div className="mt-6 space-y-3">
                            <a href="#api" className="block text-center bg-[#10B981] hover:bg-[#0d9668] text-white font-semibold py-2.5 rounded-lg transition">Dokumentasi API Pengembang</a>
                            <a href="#api" className="block text-center border border-white/40 hover:bg-white/10 text-white font-semibold py-2.5 rounded-lg transition">Unduh Format CSV / Darwin Core</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ KONTRIBUSI ============ */}
            <section className="container mx-auto px-4 pb-20">
                <div className="bg-[#EFF4FF] border border-[#D3E4FE] rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
                    <span className="w-12 h-12 rounded-xl bg-[#046A45] text-white flex items-center justify-center text-xl shrink-0">🧪</span>
                    <div className="flex-1">
                        <h3 className={`${fontDisplay} text-xl font-bold text-[#0F172A]`}>Punya Data Observasi Lapangan?</h3>
                        <p className="text-sm text-[#475569] mt-1">Mari berkolaborasi memperkaya basis data flora & fauna Indonesia. Verifikasi taksonomi dilakukan oleh panel pakar biosistematika independen dan BRIN.</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <a href="/" className="bg-[#046A45] hover:bg-[#035437] text-white font-semibold px-5 py-2.5 rounded-lg transition">Ajukan Dataset Spesimen</a>
                        <a href="/tentang" className="border border-[#046A45] text-[#046A45] hover:bg-[#046A45]/5 font-semibold px-5 py-2.5 rounded-lg transition">Protokol Verifikasi</a>
                    </div>
                </div>
            </section>

            {/* ============ FOOTER ============ */}
            <footer className="bg-[#F8FAFC] border-t border-[#E2E8F0]">
                <div className="container mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div>
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-[#046A45] flex items-center justify-center">
                                <svg className="w-6 h-6 text-[#6CF8BB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className={`${fontDisplay} font-bold text-[#0F172A]`}>Biodiversitas ID</div>
                        </div>
                        <p className="text-sm text-[#64748B] mt-4 leading-relaxed">
                            Portal repositori terpadu data mega-biodiversitas kepulauan Indonesia. Mendukung pemetaan taksonomi ilmiah, pemantauan status kepunahan, dan percepatan restorasi ekosistem Nusantara.
                        </p>
                        <div className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 bg-white border border-[#E2E8F0] rounded-full text-xs font-semibold text-[#475569]">
                            🌐 Standar Taksonomi GBIF & IUCN v3.1
                        </div>
                    </div>
                    <div>
                        <h4 className={`${fontDisplay} font-bold text-[#0F172A] mb-4`}>Taksonomi & Data</h4>
                        <ul className="space-y-2 text-sm text-[#64748B]">
                            <li><Link href="/search" className="hover:text-[#046A45]">Katalog Mamalia Endemik</Link></li>
                            <li><Link href="/search" className="hover:text-[#046A45]">Herbarium & Flora Langka</Link></li>
                            <li><Link href="#peta" className="hover:text-[#046A45]">Peta Bioma Garis Wallacea</Link></li>
                            <li><Link href="/search" className="hover:text-[#046A45]">Daftar Merah IUCN Regional</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={`${fontDisplay} font-bold text-[#0F172A] mb-4`}>Mitra Akademik</h4>
                        <ul className="space-y-2 text-sm text-[#64748B]">
                            <li>Badan Riset dan Inovasi Nasional (BRIN)</li>
                            <li>Kementerian LHK Republik Indonesia</li>
                            <li>Konsorsium Biologi Nusantara</li>
                            <li>Yayasan Keanekaragaman Hayati (KEHATI)</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={`${fontDisplay} font-bold text-[#0F172A] mb-4`}>Partisipasi Peneliti</h4>
                        <p className="text-sm text-[#64748B] leading-relaxed">Akademisi, taksonom lapangan, dan pengamat independen diundang untuk mengintegrasikan dataset spesimen terverifikasi.</p>
                        <a href="/" className="inline-block mt-4 px-4 py-2 bg-[#DCE9FF] text-[#003CA3] text-sm font-semibold rounded-lg hover:bg-[#D3E4FE] transition">📤 Kirim Lembar Spesimen</a>
                    </div>
                </div>
                <div className="border-t border-[#E2E8F0]">
                    <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#94A3B8]">
                        <span>© 2026 Portal Biodiversitas Indonesia. Lisensi Sains Terbuka CC-BY-NC 4.0.</span>
                        <div className="flex gap-5">
                            <span>Protokol Data</span><span>Pedoman Etika Lapangan</span><span>Dokumentasi API</span><span>Kontak Sekretariat</span>
                        </div>
                    </div>
                </div>
            </footer>

            <WelcomeGuide />
        </>
    );
}