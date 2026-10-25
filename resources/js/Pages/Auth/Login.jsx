import { Head, Link, useForm } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    const fontDisplay = "font-['Plus_Jakarta_Sans',sans-serif]";
    const label = "block text-sm font-semibold text-[#334155] mb-1.5";
    const input = "w-full px-4 py-2.5 rounded-lg border border-[#E2E8F0] bg-white text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition";
    const err = "text-xs text-[#DC2626] mt-1";

    return (
        <>
            <Head title="Masuk" />
            <Navbar />

            <div className="min-h-[75vh] bg-[#F8FAFC] flex items-center justify-center py-16 px-4">
                <div className="w-full max-w-md bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_10px_25px_-5px_rgba(15,23,42,0.08)] p-8">
                    <div className="text-center mb-6">
                        <div className="w-12 h-12 mx-auto rounded-full bg-[#046A45] flex items-center justify-center text-2xl">🔐</div>
                        <h1 className={`${fontDisplay} text-2xl font-bold text-[#0F172A] mt-3`}>Masuk</h1>
                        <p className="text-sm text-[#64748B] mt-1">Portal kontributor & peneliti Biodiversitas ID</p>
                    </div>

                    {status && (
                        <div className="mb-4 text-sm text-[#059669] bg-[#92E7B8]/20 border border-[#10B981] rounded-lg p-3">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <label htmlFor="email" className={label}>Email</label>
                            <input id="email" type="email" className={input} value={data.email} autoComplete="username" autoFocus required onChange={(e) => setData('email', e.target.value)} />
                            {errors.email && <p className={err}>{errors.email}</p>}
                        </div>

                        <div>
                            <label htmlFor="password" className={label}>Password</label>
                            <input id="password" type="password" className={input} value={data.password} autoComplete="current-password" required onChange={(e) => setData('password', e.target.value)} />
                            {errors.password && <p className={err}>{errors.password}</p>}
                        </div>

                        <label className="flex items-center gap-2 text-sm text-[#475569]">
                            <input
                                type="checkbox"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                                className="rounded border-[#E2E8F0] text-[#046A45] focus:ring-[#10B981]"
                            />
                            Ingat saya
                        </label>

                        <button type="submit" disabled={processing} className="w-full bg-[#046A45] hover:bg-[#035437] text-white font-semibold py-2.5 rounded-lg transition disabled:opacity-50">
                            {processing ? 'Memproses...' : 'Masuk'}
                        </button>
                    </form>

                    <div className="mt-5 flex items-center justify-between text-sm">
                        {canResetPassword && (
                            <Link href={route('password.request')} className="text-[#64748B] hover:underline">
                                Lupa password?
                            </Link>
                        )}
                        <Link href={route('register')} className="font-bold text-[#046A45] hover:underline">
                            Daftar sebagai Peneliti
                        </Link>
                    </div>

                    <p className="text-center text-xs text-[#94A3B8] mt-3">
                        Administrator: akses panel via <span className="font-mono">/admin</span>
                    </p>
                </div>
            </div>

            <Footer />
        </>
    );
}