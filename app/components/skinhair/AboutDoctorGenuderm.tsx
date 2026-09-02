export default function AboutDoctorGenuderm() {
    return (
        <section id="about" className="py-20 bg-white border-b border-rose-100">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div className="relative">
                        <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-rose-50">
                            {/* Points to the image in your public/ folder */}
                            <img
                                src="/pratyusha-dermatology.jpg"
                                alt="Dr. Pratyusha - Genuderm Dermatologist"
                                className="w-full h-[480px] object-cover object-top"
                            />
                        </div>
                        <div className="absolute -bottom-4 -right-4 bg-rose-50 border border-rose-200 p-4 rounded-2xl shadow-md">
                            <p className="text-xl font-bold text-rose-700">10+ Years</p>
                            <p className="text-xs text-slate-600 font-medium">Dermatology Experience</p>
                        </div>
                    </div>

                    <div>
                        <span className="text-xs font-bold text-rose-600 uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                            Lead Consultant
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mt-4 mb-4">
                            Personalized Clinical Dermatology & Aesthetic Care
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-4">
                            At <strong>Genuderm Skin & Hair Clinic</strong>, Dr. Pratyusha provides evidence-based clinical dermatology alongside high-end non-surgical cosmetic procedures. Every treatment plan is tailored after a thorough dermoscopic evaluation.
                        </p>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-6">
                            From persistent acne and hair loss to targeted anti-aging regimens, our emphasis is on long-term skin health, patient safety, and natural-looking results.
                        </p>

                        <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-slate-700 border-t border-rose-100 pt-6">
                            <div>✦ Certified Trichology Protocols</div>
                            <div>✦ US-FDA Approved Laser Tech</div>
                            <div>✦ Customized Chemical Peels</div>
                            <div>✦ Sterile PRP & Hair Restoration</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}