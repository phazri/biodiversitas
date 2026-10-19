import { useState, useEffect } from 'react';
import { router } from '@inertiajs/react';

export default function WelcomeGuide() {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(1); // 1: Pilih Peran, 2: Pilih Tujuan

    useEffect(() => {
        // Cek apakah user sudah pernah melihat guide ini
        const hasSeenGuide = localStorage.getItem('hasSeenBiodiversityGuide');
        
        // Jika belum, tampilkan pop-up setelah 1 detik (biar smooth)
        if (!hasSeenGuide) {
            const timer = setTimeout(() => setIsOpen(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleRoleSelect = () => {
        setStep(2); // Lanjut ke langkah 2
    };

    const handleGoalSelect = (url) => {
        // Simpan ke localStorage agar pop-up tidak muncul lagi di masa depan
        localStorage.setItem('hasSeenBiodiversityGuide', 'true');
        setIsOpen(false);
        
        // Redirect ke halaman yang dipilih menggunakan Inertia
        router.visit(url);
    };

    const closeGuide = () => {
        localStorage.setItem('hasSeenBiodiversityGuide', 'true');
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden animate-fade-in-up">
                
                {/* Header */}
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white relative">
                    <button 
                        onClick={closeGuide} 
                        className="absolute top-4 right-4 text-white/80 hover:text-white transition"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <h2 className="text-2xl font-bold mb-1">Selamat Datang di Biodiversitas Indonesia! 🌿</h2>
                    <p className="text-emerald-100 text-sm">Mari kami bantu arahkan Anda ke informasi yang Anda butuhkan.</p>
                </div>

                {/* Content */}
                <div className="p-8">
                    {step === 1 ? (
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Anda berkunjung sebagai:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <RoleCard 
                                    icon="🎓" 
                                    title="Mahasiswa" 
                                    desc="Mencari data untuk tugas/riset" 
                                    onClick={handleRoleSelect} 
                                />
                                <RoleCard 
                                    icon="👨‍🏫" 
                                    title="Dosen / Peneliti" 
                                    desc="Membutuhkan referensi ilmiah" 
                                    onClick={handleRoleSelect} 
                                />
                                <RoleCard 
                                    icon="🌱" 
                                    title="Masyarakat Umum" 
                                    desc="Ingin menambah wawasan alam" 
                                    onClick={handleRoleSelect} 
                                />
                            </div>
                        </div>
                    ) : (
                        <div>
                            <button 
                                onClick={() => setStep(1)} 
                                className="text-emerald-600 text-sm font-semibold mb-4 flex items-center hover:underline"
                            >
                                &larr; Kembali
                            </button>
                            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Apa yang ingin Anda lakukan hari ini?</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <GoalCard 
                                    title="📚 Mencari Jurnal & Artikel Ilmiah" 
                                    desc="Baca update terbaru dan referensi konservasi."
                                    onClick={() => handleGoalSelect('/berita')} 
                                />
                                <GoalCard 
                                    title="🦁 Mencari Data Lengkap Spesies" 
                                    desc="Lihat taksonomi, habitat, dan status IUCN."
                                    onClick={() => handleGoalSelect('/')} 
                                />
                                <GoalCard 
                                    title=" Belajar Taksonomi & Konservasi" 
                                    desc="Pahami klasifikasi makhluk hidup."
                                    onClick={() => handleGoalSelect('/knowledge-hub')} 
                                />
                                <GoalCard 
                                    title="🤝 Melihat Program Konservasi" 
                                    desc="Pelajari inisiatif pelestarian kami."
                                    onClick={() => handleGoalSelect('/program')} 
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

// Sub-komponen untuk Kartu Peran
function RoleCard({ icon, title, desc, onClick }) {
    return (
        <button 
            onClick={onClick}
            className="p-6 border-2 border-gray-100 rounded-xl hover:border-emerald-500 hover:shadow-lg transition-all text-left group"
        >
            <div className="text-4xl mb-3">{icon}</div>
            <h4 className="font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">{title}</h4>
            <p className="text-sm text-gray-500 mt-1">{desc}</p>
        </button>
    );
}

// Sub-komponen untuk Kartu Tujuan
function GoalCard({ title, desc, onClick }) {
    return (
        <button 
            onClick={onClick}
            className="p-5 bg-gray-50 rounded-xl hover:bg-emerald-50 border border-gray-200 hover:border-emerald-300 transition-all text-left group"
        >
            <h4 className="font-bold text-gray-900 group-hover:text-emerald-700 transition-colors mb-1">{title}</h4>
            <p className="text-sm text-gray-600">{desc}</p>
        </button>
    );
}