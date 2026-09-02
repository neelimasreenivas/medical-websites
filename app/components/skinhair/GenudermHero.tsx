"use client";

export default function GenudermHero() {
    return (
        <section className="relative pt-32 pb-24 bg-gradient-to-br from-rose-50 via-orange-50/40 to-amber-50/30 overflow-hidden">
            <div className="absolute top-10 left-10 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-rose-100 text-rose-700 border border-rose-200 mb-6">
                            Advanced Dermatology & Hair Restorative Care
                        </span>

                        <h1 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight mb-6">
                            Reveal Your Natural <span className="text-rose-600 italic">Radiance & Vitality</span>
                        </h1>

                        <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
                            Personalized skin rejuvenation, clinical dermatology, and scientific hair restoration procedures crafted for long-lasting confidence.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#book"
                                className="px-8 py-4 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold rounded-full shadow-lg shadow-rose-200 transition transform hover:-translate-y-0.5"
                            >
                                Book Consultation
                            </a>
                            <a
                                href="#treatments"
                                className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-full border border-slate-200 shadow-sm transition"
                            >
                                View Services
                            </a>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881"
                                alt="Genuderm Skin & Hair Care"
                                className="w-full h-[450px] object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-rose-100 max-w-xs">
                            <div className="text-rose-500 text-2xl mb-1">✨</div>
                            <p className="text-xs font-bold text-slate-900 uppercase tracking-wide">US-FDA Approved</p>
                            <p className="text-xs text-slate-600 mt-1">Medical grade laser & scalp therapy technology.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}