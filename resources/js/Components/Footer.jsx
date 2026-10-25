import { Link } from '@inertiajs/react';

export default function Footer() {
    const fontDisplay = "font-['Plus_Jakarta_Sans',sans-serif]";

    return (
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
                        <li><Link href="/#peta" className="hover:text-[#046A45]">Peta Bioma Garis Wallacea</Link></li>
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
                    <Link href="/" className="inline-block mt-4 px-4 py-2 bg-[#DCE9FF] text-[#003CA3] text-sm font-semibold rounded-lg hover:bg-[#D3E4FE] transition">📤 Kirim Lembar Spesimen</Link>
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
    );
}