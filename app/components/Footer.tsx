interface FooterProps {
    clinicName?: string;
}

export default function Footer({
    clinicName = "Anu Neuro Care",
}: FooterProps) {
    return (
        <footer className="border-t mt-20 bg-slate-50">
            <div className="max-w-7xl mx-auto p-8 text-center text-slate-600">
                <p>
                    © {new Date().getFullYear()} {clinicName}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}