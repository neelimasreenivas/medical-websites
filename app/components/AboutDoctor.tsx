export default function AboutDoctor() {
    return (
        <section
            id="about"
            className="py-24 bg-white"
        >
            <div className="max-w-6xl mx-auto px-6">

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d"
                            alt="Doctor"
                            className="rounded-3xl shadow-xl"
                        />
                    </div>

                    <div>
                        <h2 className="text-4xl font-bold mb-6">
                            About Dr. Jason
                        </h2>

                        <p className="text-lg text-gray-600 leading-8 mb-6">
                            Dr. Jason is a highly experienced neurologist with
                            expertise in stroke care, epilepsy, migraines,
                            Parkinson’s disease and advanced neurological
                            diagnostics.
                        </p>

                        <p className="text-lg text-gray-600 leading-8">
                            With more than 15 years of clinical experience,
                            Dr. Jason has helped thousands of patients regain
                            better neurological health through personalized
                            treatment plans and modern diagnostic techniques.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}