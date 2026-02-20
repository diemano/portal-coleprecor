import { Calendar, FileText, FolderOpen, Presentation, Globe, File, ArrowRight } from "lucide-react";
import Link from "next/link";

const sections = [
    {
        title: "Calendário de Reuniões",
        description: "Acompanhe as datas e horários das próximas reuniões do Coleprecor.",
        icon: Calendar,
        href: "#",
        gradient: "from-blue-500 to-cyan-400",
        fullWidth: true,
    },
    {
        title: "Atas e Pautas",
        description: "Acesse os registros detalhados das reuniões anteriores e as pautas das próximas.",
        icon: FileText,
        href: "#",
        gradient: "from-indigo-500 to-purple-500",
    },
    {
        title: "Documentos Internos",
        description: "Repositório central de documentos oficiais e circulares internas.",
        icon: FolderOpen,
        href: "#",
        gradient: "from-emerald-500 to-teal-400",
    },
    {
        title: "Apresentações",
        description: "Material institucional, slides e relatórios apresentados em eventos.",
        icon: Presentation,
        href: "#",
        gradient: "from-amber-500 to-orange-400",
    },
    {
        title: "Reuniões Paralelas",
        description: "Informações e documentos de grupos de trabalho e comissões temáticas.",
        icon: Globe,
        href: "#",
        gradient: "from-rose-500 to-pink-500",
    },
    {
        title: "Outros Documentos",
        description: "Diversos arquivos e formulários de apoio à gestão institucional.",
        icon: File,
        href: "#",
        gradient: "from-gray-600 to-gray-400",
    },
];

export default function AreaRestrita() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Page Header */}
            <div className="bg-white border-b border-gray-200 py-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-dark)]/5 to-transparent pointer-events-none" />
                <div className="container mx-auto px-4 relative">
                    <nav className="text-sm font-medium text-gray-400 mb-3 flex items-center gap-2">
                        <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link>
                        <span>›</span>
                        <span className="text-gray-600">Área Restrita</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--color-primary-dark)] tracking-tight">
                        Área Restrita
                    </h1>
                    <p className="text-gray-500 text-lg mt-3 max-w-2xl">
                        Acesso exclusivo para membros do Coleprecor. Consulte documentos, calendários e materiais institucionais.
                    </p>
                </div>
            </div>

            {/* Content Cards */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {sections.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={index}
                                href={item.href}
                                className={`group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full ${item.fullWidth ? "md:col-span-2 lg:col-span-3 lg:flex-row lg:items-center gap-8" : ""
                                    }`}
                            >
                                {/* Hover background gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 mb-6 bg-gradient-to-br ${item.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300 ${item.fullWidth ? "lg:mb-0 lg:w-20 lg:h-20" : ""
                                    }`}>
                                    <Icon className={item.fullWidth ? "w-10 h-10" : "w-7 h-7"} />
                                </div>

                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className={`font-bold text-gray-800 mb-2 group-hover:text-[var(--color-primary)] transition-colors ${item.fullWidth ? "text-2xl" : "text-xl"
                                            }`}>
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-500 leading-relaxed text-sm">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className="mt-8 flex items-center text-[var(--color-primary)] font-semibold text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                        Acessar <ArrowRight className="w-4 h-4 ml-1" />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
