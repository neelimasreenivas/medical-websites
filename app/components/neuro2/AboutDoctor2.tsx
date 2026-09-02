export default function AboutDoctor2() {
    return (
        <section
            id="about"
            className="py-24 px-8 bg-slate-50"
        >
            <div className="max-w-7xl mx-auto">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Image Placeholder */}

                    <div>

                        <div className="bg-white rounded-3xl shadow-lg h-[500px] flex items-center justify-center">

                            <div className="text-center">

                                <div className="text-8xl mb-4">
                                    👩‍⚕️
                                </div>

                                <p className="text-slate-500">
                                    Doctor Photograph
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Content */}

                    <div>

                        <span className="text-emerald-700 font-semibold uppercase tracking-wider">
                            About the Doctor
                        </span>

                        <h2 className="text-5xl font-bold text-slate-900 mt-4 mb-6">
                            Dr. Sharada Rao
                        </h2>

                        <p className="text-xl text-slate-600 mb-8">
                            Consultant Neurologist
                        </p>

                        <p className="text-slate-700 leading-relaxed mb-6">
                            Dr. Sharada Rao is an experienced neurologist
                            dedicated to the diagnosis and management of
                            disorders affecting the brain, spinal cord,
                            nerves and muscles.
                        </p>

                        <p className="text-slate-700 leading-relaxed mb-6">
                            With a patient-centered approach and a strong
                            focus on evidence-based medicine, she provides
                            comprehensive neurological care tailored to
                            individual needs.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mt-10">

                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                <h3 className="text-3xl font-bold text-emerald-700">
                                    18+
                                </h3>
                                <p className="text-slate-600">
                                    Years Experience
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                <h3 className="text-3xl font-bold text-emerald-700">
                                    5000+
                                </h3>
                                <p className="text-slate-600">
                                    Patients Treated
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}