import Image from "next/image";
import { Users } from "lucide-react";

const mesaDiretora = [
    {
        cargo: "Vice-Presidente do Coleprecor",
        nome: "Desembargador Alvaro Luiz Carvalho Moreira",
        foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2025/12/Des.-Alvaro-Luiz-Carvalho-Moreira-300x300.jpg",
    },
    {
        cargo: "Presidente do Coleprecor",
        nome: "Desembargadora Herminegilda Leite Machado",
        foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2025/12/Desa.-Herminegilda-Leite-Machado-300x300.jpg",
    },
    {
        cargo: "Secretário-Geral do Coleprecor",
        nome: "Desembargador Jasiel Ivo",
        foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2025/12/Des.-Jasiel-Ivo-300x300.jpg",
    },
];

const presidentes = [
    { trt: "TRT-1", nome: "Des. Roque Lucarelli Dattoli" },
    { trt: "TRT-2", nome: "Des. Valdir Florindo" },
    { trt: "TRT-3", nome: "Desa. Denise Alves Horta" },
    { trt: "TRT-4", nome: "Des. Ricardo Hofmeister de Almeida Martins Costa" },
    { trt: "TRT-5", nome: "Des. Jéferson Alves Silva Muricy" },
    { trt: "TRT-6", nome: "Des. Ruy Salathiel de Albuquerque e Mello V." },
    { trt: "TRT-7", nome: "Desa. Fernanda Maria Uchôa de Albuquerque" },
    { trt: "TRT-8", nome: "Desa. Sulamir Palmeira Monassa de Almeida" },
    { trt: "TRT-9", nome: "Des. Arion Mazurkevic" },
    { trt: "TRT-10", nome: "Des. José Ribamar Oliveira Lima Junior" },
    { trt: "TRT-11", nome: "Des. Jorge Alvaro Marques Guedes" },
    { trt: "TRT-12", nome: "Des. Amarildo Carlos de Lima" },
    { trt: "TRT-13", nome: "Desa. Herminegilda Leite Machado" },
    { trt: "TRT-14", nome: "Des. Ilson Alves Pequeno Junior" },
    { trt: "TRT-15", nome: "Desa. Ana Paula Pellegrina Lockmann" },
    { trt: "TRT-16", nome: "Desa. Márcia Andrea Farias da Silva" },
    { trt: "TRT-17", nome: "Desa. Alzenir Bollesi de Pla Loeffler" },
    { trt: "TRT-18", nome: "Des. Eugênio José Cesário Rosa" },
    { trt: "TRT-19", nome: "Des. Jasiel Ivo" },
    { trt: "TRT-20", nome: "Des. Josenildo dos Santos Carvalho" },
    { trt: "TRT-21", nome: "Des. Eduardo Serrano da Rocha" },
    { trt: "TRT-22", nome: "Des. Téssio da Silva Tôrres" },
    { trt: "TRT-23", nome: "Desa. Adenir Alves da Silva Carruesco" },
    { trt: "TRT-24", nome: "Des. Tomás Bawden de Castro Silva" },
];

const corregedores = [
    { trt: "TRT-1", nome: "Des. Alvaro Luiz Carvalho Moreira" },
    { trt: "TRT-2", nome: "Des. Sidnei Alves Teixeira" },
    { trt: "TRT-3", nome: "Des. Lucas Vanucci Lins" },
    { trt: "TRT-4", nome: "Desa. Brígida Joaquina Charão Barcelos Toschi" },
    { trt: "TRT-5", nome: "Des. Paulino César Rodrigues Martins" },
    { trt: "TRT-6", nome: "Des. Aurélio da Silva" },
    { trt: "TRT-7", nome: "Des. Claudio Soares Pires" },
    { trt: "TRT-8", nome: "Desa. Mary Anne Lopes de Almeida" },
    { trt: "TRT-9", nome: "Desa. Marlene Teresinha Fuverki Suguimatsu" },
    { trt: "TRT-10", nome: "Des. Márcio Roberto Andrade Brito" },
    { trt: "TRT-11", nome: "Des. Lairto José Braga" },
    { trt: "TRT-12", nome: "Des. Wanderley Godoy Junior" },
    { trt: "TRT-13", nome: "Desa. Ana Claudia Torres de Góis" },
    { trt: "TRT-14", nome: "Des. Shikou Sadahiro" },
    { trt: "TRT-15", nome: "Des. Samuel Hugo Lima" },
    { trt: "TRT-16", nome: "Des. James Magno Araújo Farias" },
    { trt: "TRT-17", nome: "Des. Mário Ribeiro Cantarino Neto" },
    { trt: "TRT-18", nome: "Des. Welington Luis Peixoto" },
    { trt: "TRT-19", nome: "Desa. Vanda Maria Ferreira" },
    { trt: "TRT-20", nome: "Desa. Maria das Graças Monteiro Melo" },
    { trt: "TRT-21", nome: "Des. José Rêgo Júnior" },
    { trt: "TRT-22", nome: "Des. Wellington Jim Alencar" },
    { trt: "TRT-23", nome: "Desa. Beatriz Theodoro" },
    { trt: "TRT-24", nome: "Des. Amaury Rodrigues Pinto Júnior" },
];

function MemberCard({ nome, trt }: { nome: string; trt: string }) {
    return (
        <div className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow group flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full bg-gray-200 border-2 border-gray-100 group-hover:border-[var(--color-primary)] transition-colors shrink-0 flex items-center justify-center overflow-hidden">
                <span className="text-gray-400 text-lg font-bold">{nome.split(" ").pop()?.[0]}</span>
            </div>
            <div className="min-w-0">
                <h4 className="font-semibold text-gray-800 text-sm leading-tight">{nome}</h4>
                <p className="text-xs text-gray-500 mt-0.5">{trt}</p>
            </div>
        </div>
    );
}

function MemberTable({ title, members }: { title: string; members: { trt: string; nome: string }[] }) {
    return (
        <div>
            <h3 className="text-xl font-bold text-[var(--color-primary-dark)] mb-6 pb-3 border-b border-gray-200">
                {title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {members.map((member, index) => (
                    <MemberCard key={index} nome={member.nome} trt={member.trt} />
                ))}
            </div>
        </div>
    );
}

export default function Composicao() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Page Header */}
            <div className="bg-white border-b border-gray-200 py-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-dark)]">Composição</h1>
                    <p className="text-gray-500 text-lg mt-1">
                        Gestão 2025/2026 — Presidentes e Corregedores dos Tribunais Regionais do Trabalho.
                    </p>
                </div>
            </div>

            {/* Mesa Diretora - Featured */}
            <div className="container mx-auto px-4 py-12">
                <h2 className="text-2xl font-bold text-[var(--color-primary-dark)] mb-8 pb-3 border-b border-gray-200 text-center">
                    Gestão 2025/2026
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
                    {mesaDiretora.map((membro, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center text-center ${index === 1 ? "md:-mt-4" : ""}`}
                        >
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
                                {membro.cargo}
                            </p>
                            <div className={`relative overflow-hidden border-4 shadow-lg mb-4 ${index === 1
                                    ? "w-40 h-40 rounded-2xl border-[var(--color-warning)]"
                                    : "w-32 h-32 rounded-2xl border-gray-200"
                                }`}>
                                <Image
                                    src={membro.foto}
                                    alt={membro.nome}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="font-semibold text-gray-800 text-sm">{membro.nome}</h3>
                        </div>
                    ))}
                </div>

                {/* Members Tables */}
                <div className="space-y-16">
                    <MemberTable title="Presidentes dos TRTs" members={presidentes} />
                    <MemberTable title="Corregedores dos TRTs" members={corregedores} />
                </div>
            </div>
        </div>
    );
}
