import { useState } from 'react';
import { Link, Head, router, usePage } from '@inertiajs/react';
import SiteHeader from '@/Components/SiteHeader';
import SiteFooter from '@/Components/SiteFooter';

const STATUS = {
    CR: { color: '#DC2626', label: 'Critically Endangered', id: 'Kritis' },
    EN: { color: '#EA580C', label: 'Endangered', id: 'Terancam Punah' },
    VU: { color: '#F59E0B', label: 'Vulnerable', id: 'Rentan' },
    NT: { color: '#D97706', label: 'Near Threatened', id: 'Hampir Terancam' },
    LC: { color: '#059669', label: 'Least Concern', id: 'Risiko Rendah' },
    EX: { color: '#475569', label: 'Extinct', id: 'Punah' },
};

// export default function Show({ species }) {
// const user = usePage().props.auth?.user;
//     const [showForm, setShowForm] = useState(false);
//     const [ctype, setCtype] = useState('description');
//     const [content, setContent] = useState('');
//     const [cit, setCit] = useState({ title: '', authors: '', year: '', source: '', doi: '' });
//     const [sent, setSent] = useState(false);
// }
const TREND = {
    decreasing: { label: 'Menurun', icon: 'trending_down' },
    stable: { label: 'Stabil', icon: 'trending_flat' },
    increasing: { label: 'Meningkat', icon: 'trending_up' },
    unknown: { label: 'Belum diketahui', icon: 'help' },
};

const Icon = ({ name, className = '' }) => (
    <span className={`material-symbols-outlined ${className}`}>{name}</span>
);

const Card = ({ icon, title, children, id }) => (
    <section id={id} className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg">
        <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-space-sm mb-space-md">
            <Icon name={icon} className="text-primary text-[24px]" />
            {title}
        </h2>
        {children}
    </section>
);

const Fact = ({ label, children }) => (
    <div>
        <dt className="font-body-sm text-body-sm text-on-surface-variant">{label}</dt>
        <dd className="font-body-md text-body-md font-semibold text-on-surface mt-0.5">{children}</dd>
    </div>
);

export default function Show({ species, related = [] }) {
    const [copied, setCopied] = useState(false);

    const status = STATUS[species.conservation_status];
    const statusColor = status?.color ?? '#64748B';
    const trend = TREND[species.population_trend];
    const user = usePage().props.auth?.user;
    const [showForm, setShowForm] = useState(false);
    const [ctype, setCtype] = useState('description');
    const [content, setContent] = useState('');
    const [cit, setCit] = useState({ title: '', authors: '', year: '', source: '', doi: '' });
    const [sent, setSent] = useState(false);
    const family = species.genus?.family;
    const order = family?.taxonOrder ?? family?.taxon_order;
    const klass = order?.taxonClass ?? order?.taxon_class;
    const phylum = klass?.phylum;
    const kingdom = phylum?.kingdom;

    const ranks = [
        { rank: 'Kingdom', name: kingdom?.name },
        { rank: 'Phylum', name: phylum?.name },
        { rank: 'Class', name: klass?.name },
        { rank: 'Order', name: order?.name },
        { rank: 'Family', name: family?.name },
        { rank: 'Genus', name: species.genus?.name, italic: true },
        { rank: 'Species', name: species.accepted_name, italic: true, current: true },
    ].filter((r) => r.name);

    const media = species.media ?? [];
    const heroImage = media[0]?.image_url;

    const citationText = species.citation
        ? species.citation.apa_formatted_text ||
          `${species.citation.authors} (${species.citation.year}). ${species.citation.title}.`
        : null;

    const copyCitation = async () => {
        try {
            await navigator.clipboard.writeText(citationText);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (e) {
            /* clipboard tidak tersedia */
        }
    };

    const hasEcology = species.physical_description || species.diet;
    const hasConservation = species.threats || species.conservation_actions;
    const externalLinks = [
        species.iucn_url && { label: 'IUCN Red List', href: species.iucn_url },
        species.gbif_url && { label: 'GBIF', href: species.gbif_url },
    ].filter(Boolean);

    return (
        <>
            <Head title={`${species.accepted_name} - Biodiversitas Indonesia`} />

            <div className="bg-background font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col">
                <SiteHeader active="/#katalog" />

                <main className="w-full pt-20 flex-1">
                    {/* HERO */}
                    <section className="relative w-full -mt-20 overflow-hidden bg-primary text-on-primary">
                        {heroImage && (
                            <div
                                className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-40"
                                style={{ backgroundImage: `url('${heroImage}')` }}
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/75 to-primary" />

                        <div className="relative max-w-7xl mx-auto px-margin-mobile md:px-margin pt-32 pb-24">
                            <nav className="inline-flex flex-wrap items-center gap-space-xs font-body-sm text-body-sm text-on-primary-container mb-space-lg bg-primary-container/40 backdrop-blur-md px-space-md py-space-xs rounded-full">
                                <Link href="/" className="hover:text-surface transition-colors flex items-center gap-1">
                                    <Icon name="home" className="text-[16px]" /> Beranda
                                </Link>
                                <span className="opacity-40">/</span>
                                <Link href="/#katalog" className="hover:text-surface transition-colors">Spesies</Link>
                                <span className="opacity-40">/</span>
                                <span className="text-secondary-fixed font-bold">{species.common_name || species.accepted_name}</span>
                            </nav>

                            <div className="flex flex-wrap items-center gap-space-sm mb-space-md">
                                {species.conservation_status && (
                                    <span
                                        className="font-label-badge text-label-badge px-3 py-1.5 rounded-full text-white uppercase"
                                        style={{ backgroundColor: statusColor }}
                                    >
                                        {species.conservation_status}
                                        {status && ` · ${status.id}`}
                                    </span>
                                )}
                                {species.is_endemic && (
                                    <span className="font-label-badge text-label-badge px-3 py-1.5 rounded-full bg-[#2563EB] text-white uppercase">
                                        Endemik Indonesia
                                    </span>
                                )}
                            </div>

                            <h1 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero italic tracking-tight">
                                {species.accepted_name}
                            </h1>
                            {species.authority && (
                                <p className="font-body-md text-body-md text-surface-container-high/80 mt-1">{species.authority}</p>
                            )}
                            <p className="font-headline-md text-headline-md text-on-primary mt-space-sm">
                                {species.common_name || '-'}
                                {species.english_name && (
                                    <span className="font-body-lg text-body-lg text-surface-container-high/80 font-normal"> · {species.english_name}</span>
                                )}
                            </p>
                        </div>
                    </section>

                    {/* ISI */}
                    <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin -mt-12 relative z-20 pb-space-xl">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
                            {/* KOLOM UTAMA */}
                            <div className="lg:col-span-2 flex flex-col gap-gutter">
                                <Card icon="info" title="Deskripsi">
                                    <p className="font-body-lg text-body-lg text-on-surface max-w-prose">
                                        {species.description_simple || 'Informasi deskripsi sedang dalam proses pengumpulan.'}
                                    </p>
                                </Card>
                                {/* Kontribusi Publik (Moderasi) */}
<div className="bg-white rounded-2xl shadow-lg p-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center"> Kontribusi Publik</h2>
    <p className="text-sm text-[#64748B] mb-4">
        Punya data atau referensi ilmiah untuk spesies ini? Kirim kontribusi Anda — <b>akan tayang setelah verifikasi</b>.
    </p>

    {!user ? (
        <div className="flex gap-3">
            <a href="/login" className="bg-[#046A45] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#035437] transition">Masuk</a>
            <a href="/register" className="border border-[#046A45] text-[#046A45] px-5 py-2.5 rounded-lg font-semibold hover:bg-[#046A45]/5 transition">Daftar Akun Peneliti</a>
        </div>
    ) : sent ? (
        <div className="p-4 rounded-xl bg-[#92E7B8]/20 border border-[#10B981] text-[#046A45] text-sm font-semibold">
             Terima kasih, {user.name}! Kontribusi Anda tercatat dan menunggu verifikasi admin.
        </div>
    ) : (
        <>
            <button onClick={() => setShowForm(!showForm)} className="bg-[#046A45] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#035437] transition">
                {showForm ? 'Tutup Form' : '+ Kirim Kontribusi'}
            </button>

            {showForm && (
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        router.post(`/species/${species.id}/contribute`, {
                            type: ctype,
                            content,
                            citation_title: cit.title,
                            citation_authors: cit.authors,
                            citation_year: cit.year,
                            citation_source: cit.source,
                            citation_doi: cit.doi,
                        }, {
                            preserveScroll: true,
                            onSuccess: () => {
                                setSent(true);
                                setShowForm(false);
                                setContent('');
                                setCit({ title: '', authors: '', year: '', source: '', doi: '' });
                            },
                        });
                    }}
                    className="mt-4 space-y-4"
                >
                    <select value={ctype} onChange={(e) => setCtype(e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-[#E2E8F0] text-sm bg-white">
                        <option value="description">Koreksi / Tambahan Deskripsi</option>
                        <option value="citation">Referensi Jurnal Ilmiah</option>
                    </select>

                    {ctype === 'description' ? (
                        <textarea value={content} onChange={(e) => setContent(e.target.value)} rows={4} required placeholder="Tulis deskripsi atau koreksi ilmiah Anda..." className="w-full px-3 py-2.5 rounded-lg border border-[#E2E8F0] text-sm focus:ring-2 focus:ring-[#10B981] focus:outline-none" />
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <input value={cit.title} onChange={(e) => setCit({ ...cit, title: e.target.value })} required placeholder="Judul jurnal *" className="md:col-span-2 px-3 py-2.5 rounded-lg border border-[#E2E8F0] text-sm" />
                            <input value={cit.authors} onChange={(e) => setCit({ ...cit, authors: e.target.value })} placeholder="Penulis" className="px-3 py-2.5 rounded-lg border border-[#E2E8F0] text-sm" />
                            <input value={cit.year} onChange={(e) => setCit({ ...cit, year: e.target.value })} placeholder="Tahun" className="px-3 py-2.5 rounded-lg border border-[#E2E8F0] text-sm" />
                            <input value={cit.source} onChange={(e) => setCit({ ...cit, source: e.target.value })} placeholder="Sumber / Penerbit" className="px-3 py-2.5 rounded-lg border border-[#E2E8F0] text-sm" />
                            <input value={cit.doi} onChange={(e) => setCit({ ...cit, doi: e.target.value })} placeholder="DOI (opsional)" className="px-3 py-2.5 rounded-lg border border-[#E2E8F0] text-sm" />
                        </div>
                    )}

                    <button type="submit" className="bg-[#10B981] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#0d9668] transition">
                        Kirim untuk Verifikasi
                    </button>
                </form>
            )}
        </>
    )}
</div>
                                {hasEcology && (
                                    <Card icon="pets" title="Ciri Fisik &amp; Ekologi">
                                        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                                            {species.physical_description && (
                                                <div className="sm:col-span-2">
                                                    <Fact label="Ciri fisik">{species.physical_description}</Fact>
                                                </div>
                                            )}
                                            {species.diet && <Fact label="Makanan">{species.diet}</Fact>}
                                            {species.distribution && <Fact label="Sebaran">{species.distribution}</Fact>}
                                        </dl>
                                    </Card>
                                )}

                                {hasConservation && (
                                    <Card icon="shield" title="Ancaman &amp; Upaya Konservasi">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                                            {species.threats && (
                                                <div>
                                                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">Ancaman utama</h3>
                                                    <p className="font-body-md text-body-md text-on-surface-variant whitespace-pre-line">{species.threats}</p>
                                                </div>
                                            )}
                                            {species.conservation_actions && (
                                                <div>
                                                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">Upaya konservasi</h3>
                                                    <p className="font-body-md text-body-md text-on-surface-variant whitespace-pre-line">{species.conservation_actions}</p>
                                                </div>
                                            )}
                                        </div>
                                    </Card>
                                )}

                                {/* TAKSONOMI */}
                                <Card icon="account_tree" title="Klasifikasi Taksonomi">
                                    <ol className="flex flex-col">
                                        {ranks.map((r, i) => (
                                            <li
                                                key={r.rank}
                                                className={`flex items-center justify-between gap-space-md py-2.5 pl-space-md border-l-4 ${
                                                    r.current
                                                        ? 'border-primary bg-surface-container-low rounded-r-lg'
                                                        : 'border-outline-variant'
                                                } ${i > 0 ? 'mt-1' : ''}`}
                                            >
                                                <span className="font-body-sm text-body-sm text-on-surface-variant w-24">{r.rank}</span>
                                                <span
                                                    className={`flex-1 text-right pr-space-md ${r.italic ? 'italic' : ''} ${
                                                        r.current ? 'font-scientific-name text-scientific-name text-primary' : 'font-semibold text-on-surface'
                                                    }`}
                                                >
                                                    {r.name}
                                                </span>
                                            </li>
                                        ))}
                                    </ol>
                                </Card>

                                {/* GALERI */}
                                {media.length > 0 && (
                                    <Card icon="photo_library" title="Galeri Foto">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                                            {media.map((m, i) => (
                                                <figure
                                                    key={m.id ?? i}
                                                    className={`rounded-lg overflow-hidden bg-surface-container-low ${i === 0 ? 'md:col-span-2' : ''}`}
                                                >
                                                    <img
                                                        src={m.image_url}
                                                        alt={m.caption || species.common_name}
                                                        loading="lazy"
                                                        className={`w-full object-cover ${i === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}
                                                        onError={(e) => { e.currentTarget.parentElement.style.display = 'none'; }}
                                                    />
                                                    {(m.caption || m.credit) && (
                                                        <figcaption className="p-space-sm font-body-sm text-body-sm text-on-surface-variant">
                                                            {m.caption}
                                                            {m.credit && (
                                                                <span className="block text-[11px] opacity-80 mt-0.5">
                                                                    Foto: {m.credit}{m.license ? ` (${m.license})` : ''}
                                                                </span>
                                                            )}
                                                        </figcaption>
                                                    )}
                                                </figure>
                                            ))}
                                        </div>
                                    </Card>
                                )}
                            </div>

                            {/* SIDEBAR */}
                            <aside className="flex flex-col gap-gutter">
                                {/* Status IUCN */}
                                <section className="bg-surface-container-lowest rounded-xl shadow-md p-space-lg relative overflow-hidden">
                                    <div className="h-1.5 w-full absolute top-0 left-0" style={{ backgroundColor: statusColor }} />
                                    <h3 className="font-label-badge text-label-badge text-on-surface-variant uppercase tracking-wider pt-1 mb-space-sm">
                                        Status Konservasi (IUCN)
                                    </h3>
                                    <div className="flex items-baseline gap-space-sm">
                                        <span className="font-metric-stat text-metric-stat" style={{ color: statusColor }}>
                                            {species.conservation_status}
                                        </span>
                                        <span className="font-headline-sm text-headline-sm text-on-surface">{status?.id}</span>
                                    </div>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{status?.label}</p>

                                    {(species.population_estimate || trend) && (
                                        <dl className="mt-space-md pt-space-md border-t border-surface-container grid grid-cols-1 gap-space-sm">
                                            {species.population_estimate && <Fact label="Estimasi populasi">{species.population_estimate}</Fact>}
                                            {trend && (
                                                <Fact label="Tren populasi">
                                                    <span className="inline-flex items-center gap-1">
                                                        <Icon name={trend.icon} className="text-[18px]" /> {trend.label}
                                                    </span>
                                                </Fact>
                                            )}
                                        </dl>
                                    )}
                                    <a
    href={`/diskusi?species=${species.id}`}
    className="block w-full text-center border border-[#046A45] text-[#046A45] py-2.5 rounded-lg font-semibold hover:bg-[#046A45]/5 transition"
>
    💬 Diskusikan Spesies Ini
</a>
                                </section>

                                {/* Informasi umum */}
                                <section className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg">
                                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-md">Informasi Umum</h3>
                                    <dl className="flex flex-col gap-space-md">
                                        <Fact label="Habitat">{species.habitat || 'Belum tersedia'}</Fact>
                                        <Fact label="Endemik Indonesia">
                                            <span className={`inline-flex items-center gap-1 ${species.is_endemic ? 'text-primary' : 'text-on-surface-variant'}`}>
                                                <Icon name={species.is_endemic ? 'check_circle' : 'cancel'} className="text-[18px]" />
                                                {species.is_endemic ? 'Ya' : 'Tidak'}
                                            </span>
                                        </Fact>
                                        {species.protection_status && <Fact label="Status perlindungan">{species.protection_status}</Fact>}
                                        {species.cites_appendix && <Fact label="CITES">Appendix {species.cites_appendix}</Fact>}
                                    </dl>
                                </section>

                                {/* Sitasi */}
                                {citationText && (
                                    <section className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg">
                                        <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-md">Referensi / Sitasi</h3>
                                        <p className="font-body-sm text-body-sm text-on-surface-variant italic bg-surface-container-low rounded-lg p-space-md">
                                            {citationText}
                                        </p>
                                        <button
                                            type="button"
                                            onClick={copyCitation}
                                            className="mt-space-sm inline-flex items-center gap-1 font-body-sm text-body-sm font-bold text-primary hover:text-secondary transition-colors"
                                        >
                                            <Icon name={copied ? 'check' : 'content_copy'} className="text-[16px]" />
                                            {copied ? 'Tersalin' : 'Salin sitasi'}
                                        </button>
                                    </section>
                                )}

                                {/* Tautan eksternal */}
                                {externalLinks.length > 0 && (
                                    <section className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg">
                                        <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-sm">Verifikasi data</h3>
                                        <ul className="flex flex-col gap-space-xs">
                                            {externalLinks.map((l) => (
                                                <li key={l.label}>
                                                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-body-md text-body-md font-semibold text-primary hover:text-secondary transition-colors">
                                                        {l.label} <Icon name="open_in_new" className="text-[16px]" />
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                )}

                                <Link
                                    href="/#katalog"
                                    className="flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-lg bg-primary text-on-primary font-headline-sm text-headline-sm hover:bg-primary-container transition-all shadow-md"
                                >
                                    <Icon name="arrow_back" className="text-[20px]" /> Kembali ke Daftar Spesies
                                </Link>

                                {species.updated_at && (
                                    <p className="font-body-sm text-body-sm text-on-surface-variant text-center">
                                        Data diperbarui {new Date(species.updated_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                                    </p>
                                )}
                            </aside>
                        </div>

                        {/* SPESIES TERKAIT */}
                        {related.length > 0 && (
                            <section className="mt-space-xl">
                                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-space-lg">
                                    Spesies terkait
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
                                    {related.map((r) => {
                                        const img = r.image_url ?? r.media?.[0]?.image_url;
                                        const st = STATUS[r.conservation_status];
                                        return (
                                            <Link
                                                key={r.id}
                                                href={`/species/${r.id}`}
                                                className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                                            >
                                                <div className="relative aspect-[16/10] bg-gradient-to-br from-primary-container to-secondary overflow-hidden">
                                                    {img && (
                                                        <img src={img} alt={r.common_name || r.accepted_name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                                    )}
                                                    {st && (
                                                        <span className="absolute top-2.5 right-2.5 font-label-badge text-label-badge px-2.5 py-1 rounded-full text-white" style={{ backgroundColor: st.color }}>
                                                            {r.conservation_status}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="p-space-md">
                                                    <h3 className="font-scientific-name text-scientific-name text-primary italic leading-tight">{r.accepted_name}</h3>
                                                    <p className="font-headline-sm text-headline-sm text-slate-700">{r.common_name}</p>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </section>
                        )}
                    </div>
                </main>

                <SiteFooter />
            </div>
        </>
    );
}
