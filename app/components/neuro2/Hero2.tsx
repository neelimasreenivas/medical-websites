"use client";

export default function Hero2() {
    return (
        <section className="bg-white min-h-screen flex items-center">

            <div className="max-w-7xl mx-auto px-8 py-20 w-full">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side */}

                    <div>

                        <div className="inline-block mb-6">

                            <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                                Consultant Neurologist
                            </span>

                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">

                            Specialized Neurology

                            <span className="block text-emerald-700">
                                & Brain Health
                            </span>

                        </h1>

                        <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-2xl">

                            Expert diagnosis and treatment for disorders of the
                            brain, spine and nervous system, delivered with
                            precision, compassion and evidence-based care.

                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">

                            <a
                                href="#contact"
                                className="
                                    bg-emerald-700
                                    hover:bg-emerald-800
                                    text-white
                                    px-8
                                    py-4
                                    rounded-xl
                                    font-semibold
                                    transition
                                "
                            >
                                Book Consultation
                            </a>

                            <a
                                href="#about"
                                className="
                                    border
                                    border-slate-300
                                    hover:border-emerald-700
                                    text-slate-900
                                    px-8
                                    py-4
                                    rounded-xl
                                    font-semibold
                                    transition
                                "
                            >
                                Learn More
                            </a>

                        </div>

                    </div>

                    {/* Right Side */}

                    <div>

                        <div
                            className="
                                bg-slate-100
                                rounded-3xl
                                h-[550px]
                                flex
                                items-center
                                justify-center
                                shadow-xl
                            "
                        >

                            <div className="text-center">

                                <div className="w-32 h-32 rounded-full bg-emerald-100 mx-auto mb-6 flex items-center justify-center text-5xl">
                                    👩‍⚕️
                                </div>

                                <h3 className="text-3xl font-bold text-slate-900">
                                    Dr. Sharada Rao
                                </h3>

                                <p className="text-slate-600 mt-3">
                                    Consultant Neurologist
                                </p>

                                <p className="text-emerald-700 font-semibold mt-2">
                                    18+ Years Experience
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}