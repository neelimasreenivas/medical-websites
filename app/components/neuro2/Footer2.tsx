export default function Footer2() {
    return (
        <footer className="bg-slate-900 text-white py-12">

            <div className="max-w-7xl mx-auto px-8">

                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <div>

                        <h3 className="text-2xl font-bold">
                            Sharada Neuro Care
                        </h3>

                        <p className="text-slate-400 mt-2">
                            Specialized Neurology & Brain Health
                        </p>

                    </div>

                    <div className="text-slate-400 text-sm">
                        © {new Date().getFullYear()} Sharada Neuro Care.
                        All Rights Reserved.
                    </div>

                </div>

            </div>

        </footer>
    );
}