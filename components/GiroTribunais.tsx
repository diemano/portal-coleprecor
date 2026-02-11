import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function GiroTribunais() {
    const news = [
        { tribunal: "TRT-2 (SP)", title: "Tribunal implementa sistema inovador de mediação" },
        { tribunal: "TRT-15 (Campinas)", title: "Seminário discute futuro do trabalho" },
        { tribunal: "TRT-4 (RS)", title: "Nova vara do trabalho inaugurada em Porto Alegre" },
    ];

    return (
        <section className="bg-[var(--color-success-dark)] py-16 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-warning)]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                    <h2 className="text-3xl font-bold border-l-4 border-[var(--color-warning)] pl-4 mb-4 md:mb-0">
                        Giro pelos Tribunais
                    </h2>
                    <Link href="/giro" className="group flex items-center text-[var(--color-warning)] font-semibold hover:text-white transition-colors">
                        Ver todas as notícias <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {news.map((item, index) => (
                        <article key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-all hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                            <span className="inline-block bg-[var(--color-warning)] text-[var(--color-primary-dark)] text-xs font-bold px-2 py-1 rounded mb-3">
                                {item.tribunal}
                            </span>
                            <h3 className="text-xl font-bold leading-snug">
                                {item.title}
                            </h3>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
