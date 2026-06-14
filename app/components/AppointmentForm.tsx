export default function AppointmentForm() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center mb-10">
                    Book an Appointment
                </h2>

                <form className="space-y-6">

                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full border p-4 rounded-xl"
                    />

                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full border p-4 rounded-xl"
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full border p-4 rounded-xl"
                    />

                    <input
                        type="date"
                        className="w-full border p-4 rounded-xl"
                    />

                    <textarea
                        placeholder="Describe your concern"
                        rows={4}
                        className="w-full border p-4 rounded-xl"
                    />

                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition"
                    >
                        Submit Appointment Request
                    </button>

                </form>

            </div>
        </section>
    );
}