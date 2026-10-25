import { Head, Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function Program() {
    const fontDisplay = "font-['Plus_Jakarta_Sans',sans-serif]";

    const programs = [
        {
            icon: '📚', tint: 'bg-[#046A45]/10', title: 'Edukasi Publik',
            desc: 'Menyediakan database spesies terbuka bagi pelajar, mahasiswa, dan guru sebagai sumber belajar terpercaya berbahasa Indonesia.',
            points: ['Materi taksonomi bertingkat', 'Kartu spesies untuk kelas', 'Unduh lembar kerja'],
        },
        {
            icon: '🔬', tint: 'bg-[#2563EB]/10', title: 'Riset & Data Terbuka',
            desc: 'Menghadirkan data taksonomi terstruktur dan referensi jurnal untuk mempercepat penelitian biodiversitas nasional.',
            points: ['API berstandar Darwin Core', 'Sitasi otomatis (GBIF)', 'Ekspor CSV untuk analisis'],
        },
        {
            icon: '🌱', tint: 'bg-[#10B981]/15', title: 'Advokasi Konservasi',
            desc: 'Menyoroti spesies berstatus kritis dan endemik untuk menggalang kesadaran serta dukungan kebijakan konservasi.',
            points: ['Dashboard daftar merah IUCN', 'Profil spesies endemik', 'Peta sebaran Wallacea'],
        },
        {
            icon: '🤝', tint: 'bg-[#F59E0B]/15', title: 'Kolaborasi Lapangan',
            desc: 'Membuka kemitraan dengan universitas, LSM lingkungan, dan komunitas pengamat untuk integrasi dataset terverifikasi.',
            points: ['Verifikasi panel pakar', 'Program magang taksonom', 'Jaringan cagar biosfer'],
        },
    ];

    return (
        <>
            <Head title="Program Kami - Biodiversitas Indonesia">
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
                        <span className="text-[#92E7B8] font-semibold">Program</span>
                    </div>
                    <div className="inline-flex items-center gap-2 mt-6 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold tracking-[0.05em] uppercase text-[#92E7B8]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6CF8BB]"></span>
                        Empat Pilar Gerakan
                    </div>
                    <h1 className={`${fontDisplay} text-4xl md:text-5xl font-extrabold mt-4`}>Program Kami</h1>
                    <p className="mt-4 max-w-2xl text-white/80 leading-relaxed">
                        Empat pilar kontribusi kami untuk menjaga dan mendokumentasikan kekayaan hayati Nusantara.
                    </p>
                </div>
            </header>

            <section className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                {programs.map((p, i) => (
                    <div key={i} className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_4px_16px_-2px_rgba(15,23,42,0.05)] p-8 hover:-translate-y-1 hover:shadow-[0_20px_25px_-5px_rgba(4,106,69,0.15)] transition-all duration-300">
                        <div className={`w-12 h-12 rounded-xl ${p.tint} flex items-center justify-center text-2xl`}>{p.icon}</div>
                        <h3 className={`${fontDisplay} text-xl font-bold text-[#0F172A] mt-4`}>{p.title}</h3>
                        <p className="text-sm text-[#64748B] mt-2 leading-relaxed">{p.desc}</p>
                        <ul className="mt-4 space-y-2">
                            {p.points.map((pt, j) => (
                                <li key={j} className="flex items-center gap-2 text-sm text-[#475569]">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                                    {pt}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            <section className="container mx-auto px-4 pb-20">
                <div className="bg-[#046A45] rounded-2xl p-10 text-center text-white">
                    <h2 className={`${fontDisplay} text-3xl font-bold`}>Ingin Terlibat dalam Program Kami?</h2>
                    <p className="text-white/80 mt-3 max-w-2xl mx-auto">
                        Institusi, komunitas, dan peneliti independen dapat bergabung memperkuat basis data biodiversitas nasional.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 mt-6">
                        <Link href="/" className="bg-[#10B981] hover:bg-[#0d9668] text-white font-semibold px-6 py-2.5 rounded-lg transition">Ajukan Kolaborasi</Link>
                        <Link href="/tentang" className="border border-white/40 hover:bg-white/10 text-white font-semibold px-6 py-2.5 rounded-lg transition">Pelajari Protokol Kami</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}