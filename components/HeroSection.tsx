import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-[var(--color-primary-dark)] mb-8 border-l-4 border-[var(--color-warning)] pl-4">
                    Destaque
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Image Placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-xl shadow-2xl flex items-center justify-center text-white/50 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                        <span className="text-lg font-medium">Imagem da Notícia Principal</span>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <span className="inline-block px-4 py-1 bg-[var(--color-warning)] text-[var(--color-primary-dark)] text-sm font-bold rounded-full shadow-sm">
                            Coleprecor
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary-dark)] leading-tight">
                            Reunião Ordinária define novas diretrizes para 2026
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            O Colégio de Presidentes e Corregedores dos Tribunais Regionais do Trabalho debateu temas cruciais para a justiça trabalhista na última sessão.
                        </p>
                        <Link
                            href="/noticia-destaque"
                            className="inline-flex items-center px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-all shadow-md hover:shadow-lg"
                        >
                            Ler notícia completa
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
