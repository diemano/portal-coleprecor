import Image from "next/image";

const presidentes = [
    { numero: "Atual", nome: "Herminegilda Leite Machado", trt: "TRT da 13ª Região/PB", posse: "Novembro/2025", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2025/12/Desa.-Herminegilda-Leite-Machado-300x300.jpg" },
    { numero: "38", nome: "Adenir Alves da Silva Carruesco", trt: "TRT da 23ª Região/MT", posse: "Dezembro/2024", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2025/01/Desa-Adenir-Carruesco-1-300x300.jpg" },
    { numero: "37", nome: "Eridson João Fernandes Medeiros", trt: "TRT da 21ª Região/RN", posse: "Novembro/2023", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2023/03/C-P-TRT-21-Eridson-300x300.jpeg" },
    { numero: "36", nome: "Ana Carolina Zaina", trt: "TRT da 9ª Região/PR", posse: "Novembro/2022", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2023/01/TRT9-Des.-Ana-Carolina-Zaina-foto-menor-300x300.jpg" },
    { numero: "35", nome: "Marcello Maciel Mancilha", trt: "TRT da 17ª Região/ES", posse: "Novembro/2021", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2023/01/TRT17-Marcello-Maciel-Mancilha-foto-menor-300x300.jpg" },
    { numero: "34", nome: "Leonardo José Videres Trajano", trt: "TRT da 13ª Região/PB", posse: "Novembro/2020", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2020/11/TRT-13-Des.-Leonardo-Trajano-Corregedor-300x300.png" },
    { numero: "33", nome: "Paulo Pimenta", trt: "TRT da 18ª Região/GO", posse: "Novembro/2019", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2020/01/paulo-pimenta-presidente-300x300.png" },
    { numero: "32", nome: "Eliney Veloso", trt: "TRT da 23ª Região/MT", posse: "Novembro/2018", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2020/01/eliney-formatada-300x300.png" },
    { numero: "31", nome: "Wilson Fernandes", trt: "TRT da 2ª Região/SP", posse: "Novembro/2017", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2019/03/dff9d9_f08888a913a24919b0f8f2c615a16896_mv2_d_5616_3744_s_4_2-300x300.png" },
    { numero: "30", nome: "James Magno Araújo Farias", trt: "TRT da 16ª Região/MA", posse: "Novembro/2016", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2019/03/123213dff9d9_84ef28da99c2417abcffb53527bdf126_mv2-300x300.jpg" },
    { numero: "29", nome: "Lorival Ferreira dos Santos", trt: "TRT da 15ª Região/SP", posse: "Novembro/2015", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2019/03/23232323dff9d9_f1706f4551224fcbb1c7dd1656f9444f_mv2-300x300.jpg" },
    { numero: "28", nome: "Valtércio Ronaldo de Oliveira", trt: "TRT da 5ª Região/BA", posse: "Novembro/2014", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2019/03/34343434dff9d9_a14f5b5e5308405fb51dd581eab0598c_mv2-300x300.jpg" },
    { numero: "27", nome: "Ilson Alves Pequeno Junior", trt: "TRT da 14ª Região/RO-AC", posse: "Dezembro/2013", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2019/03/4545454554454545dff9d9_28389ce7c5104a85bc91ce2858940cad_mv2-300x300.jpg" },
    { numero: "26", nome: "Tarcísio Régis Valente", trt: "TRT da 23ª Região/MT", posse: "Dezembro/2012", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2019/03/56565756756dff9d9_2ddb395bea6d4308967a63f2b55724e6_mv2-300x300.jpg" },
    { numero: "25", nome: "Renato Buratto", trt: "TRT da 15ª Região/SP", posse: "Dezembro/2011", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2019/03/6776688678dff9d9_9989e3c7af5f420faa25086da87ba999_mv2-300x300.jpg" },
    { numero: "24", nome: "Carlos Alberto Robinson", trt: "TRT da 4ª Região/RS", posse: "Dezembro/2010", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2019/03/79787978987978987dff9d9_74f1cf47c8384b569339e0332cded149_mv2-300x300.jpg" },
    { numero: "23", nome: "Ney José de Freitas", trt: "TRT da 9ª Região/PR", posse: "Dezembro/2010", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-12-at-16.06.56-300x300.jpeg" },
    { numero: "22", nome: "Beatriz de Lima Pereira", trt: "TRT da 2ª Região/SP", posse: "Dezembro/2009", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2019/03/909909900909dff9d9_b09b77e81f09413cb594eb8294adebc4_mv2-300x300.jpg" },
    { numero: "21", nome: "Décio Sebastião Daidone", trt: "TRT da 2ª Região/SP", posse: "Dezembro/2008", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2019/03/00000dff9d9_78d1a5a1cb424d0a8a26e38a4faac2a7_mv2-300x300.jpg" },
    { numero: "20", nome: "Wanda Lúcia Costa Leite França", trt: "TRT da 6ª Região/PE", posse: "Dezembro/2007", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2019/03/dff9d9_903a505c1c2d49c69c2e5fe42b1f5cd3_mv2-300x300.jpg" },
    { numero: "19", nome: "Wanda Santi Cardoso da Silva", trt: "TRT da 9ª Região/PR", posse: "Dezembro/2006", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2019/03/101010101dff9d9_bed37121df7f4ac3a413219be350d812_mv2-300x300.jpg" },
    { numero: "18", nome: "Afrânio Neves de Melo", trt: "TRT da 13ª Região/PB", posse: "Dezembro/2005", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2019/03/2324234234dff9d9_4c7ae579b32e49d5a9b8e3f97aabca72_mv2-300x300.jpg" },
    { numero: "17", nome: "Fernando Eizo Ono", trt: "TRT da 9ª Região/PR", posse: "Dezembro/2004", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2019/03/3434434343dff9d9_c79a8346556b4d55962f50eb4cf2379e_mv2-300x300.jpg" },
    { numero: "16", nome: "Marama dos Santos Carneiro", trt: "TRT da 5ª Região/BA", posse: "Dezembro/2003", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2019/03/44949494949dff9d9_b079471806fd46a29a202e43de76128c_mv2-300x300.jpg" },
    { numero: "15", nome: "Ligia Maria Teixeira Gouvêa", trt: "TRT da 12ª Região/SC", posse: "Dezembro/2002", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2019/03/5656565656dff9d9_b264ec7363a540d9a31168a8b46aeb98_mv2-300x300.jpg" },
    { numero: "14", nome: "Ana Maria Schuler Gomes", trt: "TRT da 6ª Região/PE", posse: "Setembro/2002", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2019/03/676676767dff9d9_6e532cacc3454d3d86ca7f75eb6f9e23_mv2-300x300.jpg" },
    { numero: "13", nome: "Francisco Antonio de Oliveira", trt: "TRT da 2ª Região/SP", posse: "Novembro/2001", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2019/03/7878889dff9d9_dd76a9c7b1334a78b11ab8ac20ed11ae_mv2-300x300.jpg" },
    { numero: "12", nome: "Adriana Nucci Paes Cruz", trt: "TRT da 9ª Região/PR", posse: "Dezembro/2000", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2019/03/89789789789dff9d9_47ae84e597e84d4ca6c9658b298b95b3_mv2-300x300.jpg" },
    { numero: "10 e 11", nome: "Vicente José Malheiros da Fonseca", trt: "TRT da 8ª Região/PA-AP", posse: "Janeiro/1999", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2019/03/90000009099dff9d9_ddfe74e7a4b941faa159fb4112a740bf_mv2-300x300.jpg" },
    { numero: "9", nome: "Gentil Pereira Silveira", trt: "TRT da 11ª Região/AM-RR", posse: "Janeiro/1998", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2019/03/0000000000000000dff9d9_c6446115fd6e46c0812504bd24306dc2_mv2-300x300.jpg" },
    { numero: "8", nome: "José Luciano de Castilho Pereira", trt: "TRT da 10ª Região/DF-TO", posse: "Dezembro/1996", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2019/03/dff9d9_64b015fa129a470e9be9e4787951e47b_mv2-300x300.jpg" },
    { numero: "7", nome: "Abdalla Jallad", trt: "TRT da 24ª Região/MS", posse: "Janeiro/1996", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2019/03/1234324dff9d9_96819ad31a4d4b339b827a120055860b_mv2-300x300.jpg" },
    { numero: "6", nome: "Gilvan Caldas de Sá Barreto", trt: "TRT da 6ª Região/PE", posse: "Janeiro/1995", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2019/03/2434324dff9d9_0d02e9baf5fd4448aac88d399025c68e_mv2-300x300.jpg" },
    { numero: "5", nome: "Ronaldo Lopes Leal", trt: "TRT da 4ª Região/RS", posse: "Janeiro/1994", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2019/03/3443534543dff9d9_55059c658ac44e2aa8861be9dbc7cf6a_mv2-300x300.jpg" },
    { numero: "4", nome: "Marco Aurélio Rossi Matos", trt: "TRT da 3ª Região/MG", posse: "Janeiro/1993", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2019/03/4564645646dff9d9_2e208c8ea5a04eb9ad34b999c4efaaf8_mv2-300x300.jpg" },
    { numero: "3", nome: "Iran Sérgio Monteiro Arraes", trt: "TRT da 7ª Região/CE", posse: "Março/1992", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2019/03/565756756757dff9d9_199663946a3142a4982875d33c9028eb_mv2-300x300.jpg" },
    { numero: "2", nome: "Geraldo Teixeira de Carvalho", trt: "TRT da 13ª Região/PB", posse: "Dezembro/1989", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2019/03/67867867868dff9d9_0ec12e0dbc244658a378176b60770750_mv2-300x300.jpg" },
    { numero: "1", nome: "Ronald Olivar de Amorim e Souza", trt: "TRT da 5ª Região/BA", posse: "Novembro/1987", foto: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2019/03/7008707087dff9d9_5045450fe86544ffaad26382bbd4d591_mv2-300x300.jpg" },
];

export default function GaleriaPresidentes() {
    const atual = presidentes[0];
    const anteriores = presidentes.slice(1);

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Page Header - Clean, no blue bg, no icon */}
            <div className="bg-white border-b border-gray-200 py-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-dark)]">
                        Galeria de Presidentes
                    </h1>
                    <p className="text-gray-500 text-lg mt-1">
                        Conheça os presidentes que lideraram o Coleprecor ao longo de sua história.
                    </p>
                </div>
            </div>

            {/* Current President - Featured */}
            <div className="container mx-auto px-4 py-12">
                <div className="bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] text-white rounded-2xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center gap-8">
                    <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[var(--color-warning)] shadow-lg shrink-0">
                        <Image
                            src={atual.foto}
                            alt={atual.nome}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="text-center md:text-left">
                        <span className="inline-block px-4 py-1 bg-[var(--color-warning)] text-[var(--color-primary-dark)] text-sm font-bold rounded-full mb-3">
                            Presidente Atual
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">{atual.nome}</h2>
                        <p className="text-white/80 text-lg">{atual.trt}</p>
                        <p className="text-white/60 text-sm mt-1">Posse: {atual.posse}</p>
                    </div>
                </div>
            </div>

            {/* Previous Presidents */}
            <div className="container mx-auto px-4 pb-16">
                <h2 className="text-2xl font-bold text-[var(--color-primary-dark)] mb-8 pb-3 border-b border-gray-200">
                    Presidentes Anteriores
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {anteriores.map((presidente, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-lg transition-shadow group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-[var(--color-primary)] transition-colors shrink-0">
                                    <Image
                                        src={presidente.foto}
                                        alt={presidente.nome}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="min-w-0">
                                    <span className="text-xs font-bold text-[var(--color-primary)] uppercase">
                                        {presidente.numero}º Presidente
                                    </span>
                                    <h3 className="font-semibold text-gray-800 text-sm leading-tight truncate">
                                        {presidente.nome}
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-0.5">{presidente.trt}</p>
                                    <p className="text-xs text-gray-400">{presidente.posse}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
