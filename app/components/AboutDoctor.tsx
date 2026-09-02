interface AboutDoctorProps {
    name?: string;
    bioParagraph1?: string;
    bioParagraph2?: string;
    imageUrl?: string;
}

export default function AboutDoctor({
    name = "Dr. Jason",
    bioParagraph1 = "Dr. Jason is a highly experienced neurologist with expertise in stroke care, epilepsy, migraines, Parkinson’s disease and advanced neurological diagnostics.",
    bioParagraph2 = "With more than 15 years of clinical experience, Dr. Jason has helped thousands of patients regain better neurological health through personalized treatment plans and modern diagnostic techniques.",
    imageUrl = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
}: AboutDoctorProps) {
    return (
        <section
            id="about"
            className="py-24 bg-white"
        >
            <div className="max-w-6xl mx-auto px-6">

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <img
                            src={imageUrl}
                            alt={name}
                            className="rounded-3xl shadow-xl w-full object-cover h-[450px]"
                        />
                    </div>

                    <div>
                        <h2 className="text-4xl font-bold mb-6 text-slate-900">
                            About {name}
                        </h2>

                        <p className="text-lg text-gray-600 leading-8 mb-6">
                            {bioParagraph1}
                        </p>

                        <p className="text-lg text-gray-600 leading-8">
                            {bioParagraph2}
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}