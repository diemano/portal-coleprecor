import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
    return (
        <section className="bg-white py-6">
            <div className="container mx-auto px-4">
                {/* Removed "Destaque" Title */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Image - Updated URL */}
                    <div className="aspect-video relative rounded-xl shadow-2xl overflow-hidden group">
                        <Image
                            src="https://www.justicanossotrabalho.com.br/wp-content/uploads/2026/02/In%C3%ADcio-do-Ano-Judici%C3%A1rio-no-STF.png"
                            alt="Início do Ano Judiciário no STF"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
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
