import { Users } from "lucide-react";

const presidentes = [
    { trt: "TRT da 1ª Região (RJ)", nome: "Des. Milton Gouveia" },
    { trt: "TRT da 2ª Região (SP)", nome: "Des. Tarcísio Correa de Brito" },
    { trt: "TRT da 3ª Região (MG)", nome: "Des. Paulo Roberto de Castro" },
    { trt: "TRT da 4ª Região (RS)", nome: "Des. Ricardo Carvalho Fraga" },
    { trt: "TRT da 5ª Região (BA)", nome: "Des. Edilton Meireles de Oliveira Santos" },
    { trt: "TRT da 6ª Região (PE)", nome: "Des. Maria Helena Guedes Soares de Pinho Maciel" },
    { trt: "TRT da 7ª Região (CE)", nome: "Des. Francisco José Gomes da Silva" },
    { trt: "TRT da 8ª Região (PA/AP)", nome: "Des. Herminegilda Leite Machado" },
    { trt: "TRT da 9ª Região (PR)", nome: "Des. Marlene T. Fuverki Suguimatsu" },
    { trt: "TRT da 10ª Região (DF/TO)", nome: "Des. Elke Doris Just" },
    { trt: "TRT da 11ª Região (AM/RR)", nome: "Des. Audaliphal Hildebrando da Silva" },
    { trt: "TRT da 12ª Região (SC)", nome: "Des. Marcos Vinicio Zanchetta" },
    { trt: "TRT da 13ª Região (PB)", nome: "Des. Thiago de Oliveira Andrade" },
    { trt: "TRT da 14ª Região (RO/AC)", nome: "Des. Osmar J. Barneze" },
    { trt: "TRT da 15ª Região (Campinas)", nome: "Des. Samuel Hugo Lima" },
    { trt: "TRT da 16ª Região (MA)", nome: "Des. James Magno Araújo Farias" },
    { trt: "TRT da 17ª Região (ES)", nome: "Des. Mário Ribeiro Cantarino Neto" },
    { trt: "TRT da 18ª Região (GO)", nome: "Des. Iara Teixeira Rios" },
    { trt: "TRT da 19ª Região (AL)", nome: "Des. Laerte Neto" },
    { trt: "TRT da 20ª Região (SE)", nome: "Des. Jorge Antônio Braga de Vasconcelos" },
    { trt: "TRT da 21ª Região (RN)", nome: "Des. Eridson João Fernandes Medeiros" },
    { trt: "TRT da 22ª Região (PI)", nome: "Des. Arnaldo Boson Paes" },
    { trt: "TRT da 23ª Região (MT)", nome: "Des. Adenir Alves da Silva Carruesco" },
    { trt: "TRT da 24ª Região (MS)", nome: "Des. Francisco das Chagas Lima Filho" },
];

const corregedores = [
    { trt: "TRT da 1ª Região (RJ)", nome: "Des. André Gustavo Cardoso de Mello" },
    { trt: "TRT da 2ª Região (SP)", nome: "Des. Dóris Ribeiro Torres Prina" },
    { trt: "TRT da 3ª Região (MG)", nome: "Des. Antônio Gomes de Vasconcelos" },
    { trt: "TRT da 4ª Região (RS)", nome: "Des. Lení Maristela Cassel" },
    { trt: "TRT da 5ª Região (BA)", nome: "Des. Jéferson Alves Silva Muricy" },
    { trt: "TRT da 6ª Região (PE)", nome: "Des. Ivan de Souza Valença Alves" },
    { trt: "TRT da 7ª Região (CE)", nome: "Des. Paulo Régis Machado Botelho" },
    { trt: "TRT da 8ª Região (PA/AP)", nome: "Des. Mary Anne Lopes de Almeida" },
    { trt: "TRT da 9ª Região (PR)", nome: "Des. Arion Mazurkevic" },
    { trt: "TRT da 10ª Região (DF/TO)", nome: "Des. José Leone Cordeiro Leite" },
    { trt: "TRT da 11ª Região (AM/RR)", nome: "Des. David Alves de Mello Junior" },
    { trt: "TRT da 12ª Região (SC)", nome: "Des. Garibaldi Tadeu Pereira Ferreira" },
    { trt: "TRT da 13ª Região (PB)", nome: "Des. Ana Claudia Torres de Góis" },
    { trt: "TRT da 14ª Região (RO/AC)", nome: "Des. Shikou Sadahiro" },
    { trt: "TRT da 15ª Região (Campinas)", nome: "Des. Francisco Alberto da Motta Peixoto Giordano" },
    { trt: "TRT da 16ª Região (MA)", nome: "Des. Márcia Andrea Farias da Silva" },
    { trt: "TRT da 17ª Região (ES)", nome: "Des. Carmen Vilma Garisto" },
    { trt: "TRT da 18ª Região (GO)", nome: "Des. Welington Luis Peixoto" },
    { trt: "TRT da 19ª Região (AL)", nome: "Des. Vanda Maria Ferreira" },
    { trt: "TRT da 20ª Região (SE)", nome: "Des. Maria das Graças Monteiro Melo" },
    { trt: "TRT da 21ª Região (RN)", nome: "Des. José Rêgo Júnior" },
    { trt: "TRT da 22ª Região (PI)", nome: "Des. Wellington Jim Alencar" },
    { trt: "TRT da 23ª Região (MT)", nome: "Des. Beatriz Theodoro" },
    { trt: "TRT da 24ª Região (MS)", nome: "Des. Amaury Rodrigues Pinto Júnior" },
];

function MemberTable({ title, members }: { title: string; members: { trt: string; nome: string }[] }) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <h3 className="text-xl font-bold text-white bg-[var(--color-primary)] px-6 py-4">
                {title}
            </h3>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-gray-100">
                            <th className="text-left px-6 py-3 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                                Tribunal
                            </th>
                            <th className="text-left px-6 py-3 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                                Nome
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map((member, index) => (
                            <tr
                                key={index}
                                className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
                            >
                                <td className="px-6 py-3 text-sm text-gray-600 font-medium">
                                    {member.trt}
                                </td>
                                <td className="px-6 py-3 text-sm text-gray-800 font-semibold">
                                    {member.nome}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default function Composicao() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Page Header */}
            <div className="bg-[var(--color-primary-dark)] text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-3 mb-2">
                        <Users className="w-8 h-8 text-[var(--color-warning)]" />
                        <h1 className="text-3xl md:text-4xl font-bold">Composição</h1>
                    </div>
                    <p className="text-gray-300 text-lg">
                        Gestão 2025/2026 — Presidentes e Corregedores dos Tribunais Regionais do Trabalho.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-12 space-y-12">
                <MemberTable title="Presidentes" members={presidentes} />
                <MemberTable title="Corregedores" members={corregedores} />
            </div>
        </div>
    );
}
