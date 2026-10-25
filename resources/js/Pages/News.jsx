import { Head, Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function News() {
    const fontDisplay = "font-['Plus_Jakarta_Sans',sans-serif]";

    const news = [
        {
            date: '20 Agustus 2026', tag: 'Pengumuman', tagClass: 'bg-[#DCE9FF] text-[#003CA3]',
            title: 'Platform Biodiversitas Indonesia Resmi Diluncurkan',
            desc: 'Portal database flora dan fauna Nusantara kini dapat diakses publik untuk kebutuhan edukasi, riset, dan konservasi dengan standar data GBIF serta IUCN.',
        },
        {
            date: '15 Agustus 2026', tag: 'Konservasi', tagClass: 'bg-[#DC2626]/10 text-[#DC2626]',
            title: 'Populasi Badak Jawa di Ujung Kulon Terpantau Stabil',
            desc: 'Pemantauan terbaru menunjukkan populasi Rhinoceros sondaicus berada dalam kondisi stabil berkat perlindungan ketat kawasan Taman Nasional Ujung Kulon.',
        },
        {
            date: '10 Agustus 2026', tag: 'Kemitraan', tagClass: 'bg-[#10B981]/15 text-[#046A45]',
            title: 'Integrasi Data Taksonomi dengan GBIF Diperluas',
            desc: 'Pembaruan pipeline integrasi memungkinkan penyajian taksonomi, sitasi ilmiah, dan foto spesimen secara otomatis dari sumber terbuka global.',
        },
    ];

    return (
        <>
            <Head title="Berita & Artikel - Biodiversitas Indonesia">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
            </Head>

            <Navbar />

            <header className="bg-gradient-to-br from-[#005032] via-[#046A45] to-[#0B7A51] text-white">
                <div className="container mx-auto px-4 pt-12 pb-16">
                    <div className="flex items-center gap-2 text-xs text-white/60">
                        <Link href="/" className="hover:text-white">🏠 Beranda</Link>
                        <span>/</span>
                        <span className="text-[#92E7B8] font-semibold">Berita & Artikel</span>
                    </div>
                    <div className="inline-flex items-center gap-2 mt-6 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold tracking-[0.05em] uppercase text-[#92E7B8]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6CF8BB]"></span>
                        Kabar Lapangan
                    </div>
                    <h1 className={`${fontDisplay} text-4xl md:text-5xl font-extrabold mt-4`}>Berita & Artikel</h1>
                    <p className="mt-4 max-w-2xl text-white/80 leading-relaxed">
                        Pembaruan terkini seputar konservasi, kemitraan data, dan kegiatan riset biodiversitas Nusantara.
                    </p>
                </div>
            </header>

            <section className="container mx-auto px-4 py-16 max-w-4xl space-y-6">
                {news.map((n, i) => (
                    <article key={i} className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_4px_16px_-2px_rgba(15,23,42,0.05)] p-8 hover:-translate-y-1 hover:shadow-[0_20px_25px_-5px_rgba(4,106,69,0.15)] transition-all duration-300">
                        <div className="flex items-center gap-3">
                            <span className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.05em] uppercase ${n.tagClass}`}>{n.tag}</span>
                            <span className="text-xs text-[#94A3B8]">{n.date}</span>
                        </div>
                        <h3 className={`${fontDisplay} text-xl md:text-2xl font-bold text-[#0F172A] mt-3`}>{n.title}</h3>
                        <p className="text-sm text-[#64748B] mt-2 leading-relaxed">{n.desc}</p>
                        <div className="mt-4 pt-4 border-t border-[#F1F5F9] flex items-center justify-between text-sm">
                            <span className="text-[#94A3B8]">Redaksi Biodiversitas ID</span>
                            <span className="font-bold text-[#046A45]">Baca Selengkapnya →</span>
                        </div>
                    </article>
                ))}
            </section>

            <Footer />
        </>
    );
}