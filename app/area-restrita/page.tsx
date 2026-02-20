import { Calendar, FileText, FolderOpen, Presentation, Globe, File } from "lucide-react";
import Link from "next/link";

const sections = [
    {
        title: "Calendário de Reuniões",
        icon: Calendar,
        href: "#",
        fullWidth: true,
    },
    {
        title: "Atas e Pautas",
        icon: FileText,
        href: "#",
    },
    {
        title: "Documentos Internos",
        icon: FolderOpen,
        href: "#",
    },
    {
        title: "Apresentações",
        icon: Presentation,
        href: "#",
    },
    {
        title: "Reuniões Paralelas",
        icon: Globe,
        href: "#",
    },
    {
        title: "Outros Documentos",
        icon: File,
        href: "#",
        offsetRight: true,
    },
];

export default function AreaRestrita() {
    const fullWidthItems = sections.filter((s) => s.fullWidth);
    const gridItems = sections.filter((s) => !s.fullWidth);

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Page Header */}
            <div className="bg-white border-b border-gray-200 py-10">
                <div className="container mx-auto px-4">
                    <nav className="text-sm text-gray-400 mb-2">
                        <Link href="/" className="hover:text-[var(--color-primary)]">Home</Link>
                        <span className="mx-2">›</span>
                        <span className="text-gray-600">Área Restrita</span>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-dark)]">Área Restrita</h1>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto space-y-5">
                    {/* Full Width Item (Calendário) */}
                    {fullWidthItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={index}
                                href={item.href}
                                className="flex items-center gap-5 bg-[var(--color-primary)] text-white px-8 py-6 rounded-xl shadow-md hover:bg-[var(--color-primary-dark)] transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <span className="text-lg font-bold uppercase tracking-wide">{item.title}</span>
                            </Link>
                        );
                    })}

                    {/* Two Column Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {gridItems.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className={`flex items-center gap-5 bg-[var(--color-primary)] text-white px-8 py-6 rounded-xl shadow-md hover:bg-[var(--color-primary-dark)] transition-colors group ${item.offsetRight ? "md:col-start-2" : ""
                                        }`}
                                >
                                    <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-lg font-bold uppercase tracking-wide">{item.title}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
