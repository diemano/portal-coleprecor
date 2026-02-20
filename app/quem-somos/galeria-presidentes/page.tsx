import { Crown } from "lucide-react";

const presidentes = [
    { numero: "Atual", nome: "Herminegilda Leite Machado" },
    { numero: "38", nome: "Adenir Alves da Silva Carruesco" },
    { numero: "37", nome: "Eridson João Fernandes Medeiros" },
    { numero: "36", nome: "Ana Carolina Zaina" },
    { numero: "35", nome: "Marcello Maciel Mancilha" },
    { numero: "34", nome: "Leonardo José Videres Trajano" },
    { numero: "33", nome: "Paulo Pimenta" },
    { numero: "32", nome: "Eliney Veloso" },
    { numero: "31", nome: "Wilson Fernandes" },
    { numero: "30", nome: "James Magno Araújo Farias" },
    { numero: "29", nome: "Lorival Ferreira dos Santos" },
    { numero: "28", nome: "Valtércio de Oliveira" },
    { numero: "27", nome: "Ilson Alves Pequeno Junior" },
    { numero: "26", nome: "Tarcísio Régis Valente" },
    { numero: "25", nome: "Renato Buratto" },
    { numero: "24", nome: "Carlos Alberto Robinson" },
    { numero: "23", nome: "Ney José de Freitas" },
    { numero: "22", nome: "Eneida Melo Correia de Araújo" },
    { numero: "21", nome: "Paulo Roberto Sifuentes Costa" },
    { numero: "20", nome: "Amaury Rodrigues Pinto Junior" },
    { numero: "19", nome: "Wanda Santi Cardoso da Silva" },
    { numero: "18", nome: "Afrânio Neves de Melo" },
    { numero: "17", nome: "Fernando Eizo Ono" },
    { numero: "16", nome: "Marama dos Santos Carneiro" },
    { numero: "15", nome: "Ligia Maria Teixeira Gouvêa" },
    { numero: "14", nome: "Ana Maria Schuler Gomes" },
    { numero: "13", nome: "Francisco Antonio Oliveira" },
    { numero: "12", nome: "Adriana Nucci Paes Cruz" },
    { numero: "10 e 11", nome: "Vicente José Malheiros da Fonseca" },
    { numero: "9", nome: "José Pedro de Camargo Rodrigues de Souza" },
    { numero: "8", nome: "Raymundo Carlos Figueirôa" },
    { numero: "7", nome: "Abdalla Jallad" },
    { numero: "6", nome: "Gilvan Caldas de Sá Barreto" },
    { numero: "5", nome: "Ronaldo Lopes Leal" },
    { numero: "4", nome: "Clóvis Correa de Oliveira Andrade Filho" },
    { numero: "3", nome: "Roberto Gouvêa" },
    { numero: "2", nome: "Geraldo Teixeira de Carvalho" },
    { numero: "1", nome: "Ronald Olivar de Amorim e Souza" },
];

export default function GaleriaPresidentes() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Page Header */}
            <div className="bg-[var(--color-primary-dark)] text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-3 mb-2">
                        <Crown className="w-8 h-8 text-[var(--color-warning)]" />
                        <h1 className="text-3xl md:text-4xl font-bold">Galeria de Presidentes</h1>
                    </div>
                    <p className="text-gray-300 text-lg">
                        Conheça os presidentes que lideraram o Coleprecor ao longo de sua história.
                    </p>
                </div>
            </div>

            {/* Presidents List */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {presidentes.map((presidente, index) => (
                        <div
                            key={index}
                            className={`flex items-center gap-4 p-4 rounded-xl border transition-shadow hover:shadow-md ${presidente.numero === "Atual"
                                    ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                                    : "bg-white border-gray-100"
                                }`}
                        >
                            <div
                                className={`min-w-[50px] h-[50px] rounded-full flex items-center justify-center font-bold text-sm ${presidente.numero === "Atual"
                                        ? "bg-[var(--color-warning)] text-[var(--color-primary-dark)]"
                                        : "bg-gray-100 text-[var(--color-primary-dark)]"
                                    }`}
                            >
                                {presidente.numero === "Atual" ? "★" : presidente.numero}
                            </div>
                            <div>
                                <p
                                    className={`font-semibold ${presidente.numero === "Atual" ? "text-white" : "text-gray-800"
                                        }`}
                                >
                                    {presidente.nome}
                                </p>
                                {presidente.numero === "Atual" && (
                                    <span className="text-xs font-medium text-white/80 uppercase tracking-wider">
                                        Presidente Atual
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
