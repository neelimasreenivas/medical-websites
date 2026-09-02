export default function ContactSection2() {
    return (
        <section
            id="contact"
            className="py-24 px-8 bg-slate-50"
        >
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">

                    <span className="text-emerald-700 font-semibold uppercase tracking-wider">
                        Book An Appointment
                    </span>

                    <h2 className="text-5xl font-bold text-slate-900 mt-4">
                        Schedule Your Consultation
                    </h2>

                    <p className="text-slate-600 mt-6 max-w-3xl mx-auto">
                        Contact our clinic to arrange a consultation and receive
                        expert neurological care tailored to your needs.
                    </p>

                </div>

                <div className="grid lg:grid-cols-2 gap-10">

                    {/* Left */}

                    <div className="bg-white rounded-3xl p-10 shadow-sm">

                        <h3 className="text-2xl font-semibold mb-6">
                            Clinic Information
                        </h3>

                        <div className="space-y-6">

                            <div>
                                <p className="font-semibold text-slate-900">
                                    Address
                                </p>

                                <p className="text-slate-600">
                                    Sharada Neuro Clinic
                                    <br />
                                    Main Road
                                    <br />
                                    Bengaluru
                                </p>
                            </div>

                            <div>
                                <p className="font-semibold text-slate-900">
                                    Phone
                                </p>

                                <p className="text-slate-600">
                                    +91 XXXXX XXXXX
                                </p>
                            </div>

                            <div>
                                <p className="font-semibold text-slate-900">
                                    Email
                                </p>

                                <p className="text-slate-600">
                                    clinic@email.com
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Right */}

                    <div className="bg-white rounded-3xl p-10 shadow-sm">

                        <h3 className="text-2xl font-semibold mb-6">
                            Appointment Request
                        </h3>

                        <p className="text-slate-600">
                            Appointment form will be connected here.
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}