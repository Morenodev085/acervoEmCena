import type { Piece } from './types';
//longas
import kaow from '../assets/fotosPecas/KAWO2.jpeg'
import terapia from '../assets/fotosPecas/terapia.jpg'
import poli from '../assets/fotosPecas/POLICARPO.jpg'
import PQ from '../assets/fotosPecas/pq1.jpg'
import macacos from '../assets/fotosPecas/macacosBM.jpg'
import meucaro from '../assets/fotosPecas/meucaroamigo.jpeg'
import caruru from '../assets/encerramentoFestival.jpeg'
//curtas
import OUltimo from '../assets/fotosCurtas/CENAS - O Último Ato (1).jpg'
import Claro from '../assets/fotosCurtas/CENAS - Claro! (1).png'
import sobPele from '../assets/fotosCurtas/CENAS - Sob a pele .jpg'
import fronteira from '../assets/fotosCurtas/CENASpróximaafronteira.jpg'
import relatos from '../assets/fotosCurtas/CENASRelatosdeprofessores.jpeg'
import eleveio from '../assets/fotosCurtas/CENASEleveio.jpg'
import facada from '../assets/fotosCurtas/CENASFacada.jpg'
import teresa from '../assets/fotosCurtas/teresa.jpg'
import quarto from '../assets/fotosCurtas/CENASQuarto105.jpg'
import espelho from '../assets/fotosCurtas/CENASEspelhoVozeRaíz.jpeg'
import jose from '../assets/fotosCurtas/CENASJoseninguem.jpg'
import guanabara from '../assets/fotosCurtas/aniversario.jpg'
import guine from '../assets/fotosCurtas/CENASGuinnaroudosguinnes.jpg'
import cura from '../assets/fotosCurtas/CENASCura.jpg'
import entre from '../assets/fotosCurtas/CENASEntretempo.jpg'
//rua
// import palhaco from '../assets/fotosPecas/cuidadobm.jpg'
import inka from '../assets/fotosPecas/INKACLOWSHOWbm.jpeg'
import cozinhar from '../assets/fotosPecas/CozinharCrianca.jpg'
import girafa from '../assets/fotosPecas/girafa.jpg'

//atividade
import atividadeT from '../assets/atividadefoto/Foto Helena Marques.jpeg'
// import atividadeP from '../assets/atividadefoto/palhaco.jpg'
import atividadeJ from '../assets/atividadefoto/jogos.jpg'
import atividadec from '../assets/atividadefoto/OCorpoEAs.jpg'

//Estudantil
import EstudantilM from '../assets/mostraEstudantil.jpeg'


export const pieces: Piece[] = [
  {
    id: 1,
    title: 'Kawó – o rei chama',
    type: 'Longa',
    description: "O espetáculo apresenta para um público uma África ancestral e imaginária e narra a preparação do “dia do Obá Xangô”. Uma família composta por uma mãe, quatro filhos e um avô passam o dia desde seu alvorecer preparando a festividade. Tudo sob o comando dessa grande matriarca, os seis trabalham para que tudo seja perfeito para celebrar a memória do rei, esse ancestral tão admirado por todos eles. Enquanto cozinham e decoram o quintal para festa da fogueira que será no fim do dia, a família relembra as narrativas que compõem a trajetória que levaram o Xangô menino a se tornar um dos mais respeitados e cultuados orixás. Histórias de batalhas, amores e relações familiares costuram o dia dessa família e trazem algumas reflexões sobre qual o limite do poder e também de como é possível errar tentando fazer o bem.",
    image: kaow,
    data: 16,
    time: 15,
    local: "Teatro Popular Oscar Niemeyer",
    city: "Rio de Janeiro",
    uf: "RJ",
    companyName: "2NÓS",
    showInCarousel: true,
  },
  {
    id: 32,
    title: 'Meu Caro Amigo',
    description: "Norma é professora de História e viveu as grandes transformações do país de forma intensa e apaixonada: a infância e adolescência em plena ditadura militar, a luta pela redemocratização com os colegas de Faculdade e uma inesquecível história de amor no desbunde dos anos 80 com as Diretas Já. E mesmo nos momentos mais difíceis, com uma relação familiar conturbada após o falecimento de sua mãe, Norma nunca se sentiu completamente sozinha: era como se Chico Buarque de Hollanda adivinhasse todos os seus sentimentos e criasse as músicas pensando nela. E então decide realizar um sonho acalentado desde menina: um show onde declara seu amor ao ídolo e canta as músicas que embalaram a trilha sonora de sua vida.",
    image: meucaro,
    type: 'Longa',
    data: 23,
    time: 20,
    local: 'Teatro Popular Oscar Niemeyer',
    city: 'Rio de Janeiro',
    uf: 'RJ',
    showInCarousel: true,
    classif: "12 anos"
  },
  {
    id: 2,
    title: 'Policarpo Quaresma - O Musical',
    type: 'Longa',
    description: "O Espetáculo inspirado em “Triste Fim de Policarpo Quaresma” celebra o teatro de revista e nossa literatura com dança, música e emoção para novos públicos.",
    image: poli,
    data: 24,
    time: 20,
    local: "Teatro Popular Oscar Niemeyer",
    city: "Rio de Janeiro",
    uf: "RJ",
    companyName: "UNIRIO Teatro Musicado",
    showInCarousel: false,
    classif: "14 anos"
  },
  {
    id: 3,
    title: 'Terapia Infernal',
    type: 'Longa',
    description: 'Quem verdadeiramente tem a coragem de se expor para si mesmo? Quem consegue habitar essa zona desconfortável do questionamento? Que personagem sustentaria uma análise perante a todos nós? O Diabo escolhe a dedo seus pacientes que farão vir à tona as observações mais relevantes sobre a humanidade atual, com muito humor e musicalidade.',
    image: terapia,
    data: 25,
    time: 20,
    local: "Teatro Popular Oscar Niemeyer",
    city: "Rio de Janeiro",
    uf: "RJ",
    companyName: "Lua Branca Produções",
    showInCarousel: true,
    classif: "16 anos"
  },
  {
    id: 4,
    title: 'Macacos',
    type: 'Longa',
    description: 'Espetáculo sobre como o racismo está enraizado na história do Brasil. Uma reflexão sobre o adjetivo MACACO, usado contra pessoas negras em todo o mundo. Além disso, a colonização é abordada para justificar a estrutura social e cotidiana do Brasil de 1500 até os dias de hoje.',
    image: macacos,
    data: 26,
    time: 20,
    local: "Teatro Popular Oscar Niemeyer",
    city: "São Paulo",
    companyName: "Clayton Nascimento",
    uf: 'SP',
    showInCarousel: true,
    classif: "14 anos"
  },
  {
    id: 5,
    title: 'Por que não nós?',
    image: PQ,
    type: 'Longa',
    description: "Comédia em que três amigos discutem, com humor, tabus e reflexões sobre a construção da masculinidade",
    data: 27,
    time: 20,
    local: "Teatro Popular Oscar Niemeyer",
    city: "Rio de Janeiro - RJ  São Paulo",
    uf: "SP",
    showInCarousel: true,
    classif: "14 anos"
  },
    {
    id: 35,
    title: 'Caruru e Samba das Yabás.',
    image: caruru,
    type: 'Longa',
    description: "O Caruru, comida ancestral de origem africana, será oferecido ao público na festa de encerramento do festival como um símbolo de prosperidade, saúde e alegria. A celebração será embalada pelo Samba das Yabás, tradicional roda de samba da cidade, garantindo uma noite repleta de música e cultura. Um momento gratuito, especial e imperdível para todos os presentes.",
    data: 28,
    time: 13,
    local: "Teatro Popular Oscar Niemeyer",
    city: "Salvador ",
    uf: "BA",
    showInCarousel: false,

  },


  //MOSTRA CURTA
  {
    id: 6,
    title: 'O Último Ato',
    type: 'Curta',
    image: OUltimo,
    description: "Em um regime que baniu a arte do povo, os palhaços Cícero e Pulonin mantêm um teatro clandestino. Cercados pelos Atormentadores e sem plateia, encenam um último espetáculo, desafiando o horror com riso e resistência.",
    data: 19,
    time: 20,
    local: "Theatro Municipal de Niterói",
    city: "Niterói",
    uf: "RJ",
    companyName: "Cia Pluma",
  },
  {
    id: 7,
    title: 'CLARO!',
    type: 'Curta',
    image: Claro,
    description: "Beto e Bete se encontram e, a cada toque de campainha, recomeçam a conversa com variações inesperadas. Entre encontros, desencontros e identidades mutantes, a peça revela, com humor e ritmo, como o acaso e o timing moldam nossas escolhas, desejos e possibilidades de conexão.",
    data: 19,
    time: 20,
    local: "Theatro Municipal de Niterói",
    city: "Maceió",
    uf: "AL",
    companyName: "Grupo Duetu.s",
    classif: "12 anos"
  },
  {
    id: 8,
    title: 'Sob a pele',
    type: 'Curta',
    image: sobPele,
    description: 'A cena desvela a complexidade da experiência humana, explorando inquietudes e instintos em coreografias intensas, enquanto os atores e atrizes dançam num palco de memórias indizíveis. Um convite a uma jornada emocional, que captura a essência do que não tem nome, mas que ressoa em todos nós.',
    data: 19,
    time: 20,
    local: "Theatro Municipal de Niterói",
    city: "Rio de Janeiro",
    uf: "RJ",
    companyName: "Núcleo de Dança para Atores",
    classif: "14 anos"
  },
  {
    id: 9,
    title: 'Próxima à fronteira',
    type: 'Curta',
    image: fronteira,
description: "A cena propõe a invenção de uma ancestralidade artística a partir da vida e obra de Ana Mendieta, entrelaçando autobiografia, fabulação e o comprometimento com os sonhos e práticas de cuidado através de ervas medicinais.",
    data: 19,
    time: 20,
    local: "Theatro Municipal de Niterói",
    city: "Rio de Janeiro",
    uf: "RJ",
    companyName: "Rúbia Vaz",
    classif: "12 anos"
  },
  {
    id: 10,
    title: 'Relatos de professores',
    type: 'Curta',
    image: relatos,
description: "Quatro professores internados em um manicômio são levados à sala de psiquiatria, onde participarão de uma sessão de análise investigativa. Durante essa sessão, serão tiradas conclusões sobre os eventos narrados, gerando no público uma tensão entre o cômico e o dramático.",
    data: 19,
    time: 20,
    local: "Theatro Municipal de Niterói",
    city: "Rio de Janeiro",
    uf: "RJ",
    companyName: "Grupo Realce",
    classif: "14 anos"
  },
  {
    id: 11,
    title: 'Ele Veio',
    type: 'Curta',
    image: eleveio,
    description: "A cena revisita Jesus como homem: real, humano e atravessado por um abandono do estado. Um Cristo perseguido, torturado e silenciado. Entre tecnologias, músicas, poesias, vídeos e luz, a cena resgata a força viva de um revolucionário que veio e continua vindo nos rostos silenciados do mundo.",
    data: 20,
    time: 20,
    local: "Theatro Municipal de Niterói",
    city: "Rio de Janeiro",
    uf: "RJ",
    classif: "14 anos"
  },
  {
    id: 12,
    title: 'Facada',
    type: 'Curta',
    image: facada,
description:'Através de uma paródia à "auto ficção" a cena relata a tentativa de assassinato que o ator Mau Moreira sofreu. Os personagens que permeiam o incidente aparecem de forma caricata e "bufônica", dentro de uma perspectiva confusa do que pode ser uma experiência de quase morte.',
    data: 20,
    time: 20,
    local: "Theatro Municipal de Niterói",
    city: "São Paulo ",
    uf: "SP",
    companyName: "Coletivo É Só Isso",
    classif: "16 anos"
  },
  {
    id: 13,
    title: 'Teresas',
    type: 'Curta',
    image: teresa,
    description: "Em meio às vielas de um subúrbio carioca, Teresa Maria vive entre panelas, sambas e silêncios. Enquanto a cidade pulsa ao som do batuque e das pequenas alegrias cotidianas, ela carrega dentro de si um desejo antigo de liberdade. À medida que passado e presente se entrelaçam, Teresa enfrenta o peso das expectativas e o medo das consequências reservadas a quem ousa ser além do que lhe foi permitido.",
    data: 20,
    time: 20,
    local: "Theatro Municipal de Niterói",
    city: "Niterói",
    uf: "RJ",
    companyName: "Cia Pluma",
    classif: "14 anos"
  },
  {
    id: 14,
    title: 'Quarto 105',
    type: 'Curta',
    image: quarto,
description: "Em um prostíbulo no Rio, Bertha, ex-rainha da casa, enfraquecida e desiludida, enfrenta a dona do local. Um segredo perigoso vem à tona. Enquanto isso, uma prostituta recém chegada pode virar o jogo. Em meio a disputas de poder e sobrevivência, o direito de existir e permanecer é ameaçado.",
    data: 20,
    time: 20,
    local: "Theatro Municipal de Niterói",
    city: "Rio de Janeiro",
    uf: "RJ",
    companyName: "Cia Espiral",
    classif: "16 anos"
  },
  {
    id: 15,
    title: 'Espelho, Voz e Raíz',
    type: 'Curta',
    image: espelho,
    description: "A partir da metáfora do espelho como memória, ferida e cura, a cena é um mergulho ritualístico na ancestralidade de mulheres negras e nas cicatrizes deixadas pelo patriarcado. Seis vozes femininas, marcadas por diferentes trajetórias e temperamentos, revelam as múltiplas formas de dor, silenciamento e resistência que atravessam seus corpos e histórias. Ao revisitar suas raízes, elas desafiam estigmas, quebram moldes e transformam feridas em verbo. O público não assiste de fora: é convocado como espelho, cúmplice e parte da transformação.",
    data: 20,
    time: 20,
    local: "Theatro Municipal de Niterói",
    city: "Niterói",
    uf: "RJ",
    companyName: "Reflexo da Terra",
    classif: '12 anos'
  },
  {
    id: 16,
    title: 'José Não é Ninguém',
    type: 'Curta',
    image: jose,
description: "Zé, um pré-adolescente que se vê confuso e curioso ao explorar sua identidade LGBTQIAPN+, cresce em um lar desestruturado e luta para entender como ser aceito na sociedade nos anos 2000. Cada descoberta traz consigo o encanto do primeiro amor, o peso do bullying e a dor do luto. Em meio a tantos desafios e questionamentos ele busca respostas em um mundo que muitas vezes parece não ter lugar para ele.",
    data: 21,
    time: 20,
    local: "Theatro Municipal de Niterói",
    city: "Rio de Janeiro",
    uf: "RJ",
    classif: "12 anos"
  },
  {
    id: 17,
    title: 'Aniversário Guanabara',
    type: 'Curta',
    image: guanabara,
description: "Ao imaginar um futuro quase distópico devastado pelo aquecimento global, o espetáculo ambienta-se em um Rio de Janeiro marcado pela escassez de alimentos e por uma crise sem precedentes. Diante da inevitabilidade de fechar as portas, a rede de supermercados Guanabara opta por um último gesto e propõe a realização do último Aniversário Guanabara. Tal evento, antes tão comum, agora, sob estas circunstâncias, revela as atuais desigualdades que ainda permeiam o estado.",
    data: 21,
    time: 20,
    local: "Theatro Municipal de Niterói",
    city: "Nova Iguaçu",
    uf: "RJ",
    companyName: "Renca Coletivo de Teatro",
    classif: "12 anos"
  },
  {
    id: 18,
    title: 'Entretempo',
    type: 'Curta',
    image: entre,
    description: "om canções originais, a cena acompanha Beto e Elisa revivendo, entre memórias embaralhadas, um amor marcado pelo acaso e pelo tempo. A cena transita entre passado e presente para refletir sobre encontros, transformações e o que permanece na lembrança de uma história.",
    data: 21,
    time: 20,
    local: "Theatro Municipal de Niterói",
    city: "Rio de Janeiro - RJ / Recife",
    uf: "PE ",
  },
  {
    id: 19,
    title: 'Cura',
    type: 'Curta',
    image: cura,
    description: "Em um Brasil movido pela ganância, o influencer Hugo mergulha no mundo das criptomoedas e do crime. Entre poder, manipulação e traição, ele enfrenta uma crise que revela seus limites.",
    data: 21,
    time: 20,
    local: "Theatro Municipal de Niterói",
    city: "Rio de Janeiro",
    uf: "RJ",
    companyName: "Grupo Imaginário",
    classif: "12 anos"
  },
  {
    id: 20,
    title: 'Guinnârou, o rei dos guinnés',
    type: 'Curta',
    image: guine,
description:"Em algum lugar da África, um agricultor chamado Sabouyouma resolve montar seu campo no território de uma criatura fantástica, chamada Guinnârou. Movido pela ambição, o homem desconsidera os avisos dos moradores do seu vilarejo sobre o perigo iminente.",
    data: 21,
    time: 20,
    local: "Theatro Municipal de Niterói",
    city: "Cabo Frio",
    uf: "RJ",
    companyName: "Cia Vapor",
    classif: "10 anos"
  },
  //MOSTRA RUA
  // {
  //   id: 21,
  //   title: 'Cuidado! Um palhaço mau pode arruinar sua vida',
  //   type: 'Rua',
  //   image: palhaco,
  //   description: 'Num mundo cheio de contratempos, inocência, acidez, conformismo e rebeldia, este palhaço é um verdadeiro vingador dos adultos. Ele não é estúpido, nem ingênuo, nem fácil de digerir. Malabarismo, magia, equilíbrio e ciência dos balões são a desculpa. Deus, a política, a morte, as drogas, o poder, a falsa modéstia, o amor, os ideais e o conformismo são os motivos para rir. Sua missão neste mundo é despertar as almas inocentes. Um espetáculo que emociona, transforma e queima, cheio de risos, sorrisos e gargalhadas, mostra um palhaço autêntico, quebrando todos os códigos tradicionais dos palhaços, em sua luta para entreter sem estupidificar e sobreviver na tentativa.',
  //   data: 20,
  //   time: 11,
  //   local: "Campo de São Bento",
  //   city :"Argentina",
  //   uf: " ",
  //   companyName: "O Palhaço Chacovachi",
  //   showInCarousel: true
  // },
  {
    id: 22,
    title: 'Inka Clown Show',
    type: 'Rua',
    image: inka,
    description: "Um palhaço latinoamericano vem mostrar o que traz na sua maleta: uma porção de surpresas que garantem o riso e a diversão. Tudo acompanhado de acrobacias, equilibrismo, truques e muita música. É um espetáculo envolvente e repleto de ternura, graça e beleza sendo, ao mesmo tempo, cômico e delicado. Uma obra poética, que traz em sua essência a expressão cultural do teatro de rua latino.",
    data: 21,
    time: 11,
    local: "Macquinho",
    city: "lima",
    uf: "Peru",
    companyName: "Atawallpa Coello",
  },
  {
    id: 22,
    title: 'Como Cozinhar uma Criança',
    type: 'Rua',
    image: cozinhar,
    description: "Em um programa de culinária ao vivo, dois cozinheiros ensinam uma receita cujos ingredientes principais são, nada mais e nada menos, que... CRIANÇAS. A ideia é preparar devidamente os pequenos para que não se tornem adultos intragáveis. O problema aparece quando os chefs não concordam quanto aos métodos de preparo. E agora? Quem será que vai acabar indo pra panela?",
    data: 26,
    time: "17h30",
    local: "Praça João Saldanha, Santa Barbara",
    city: "Juiz de Fora",
    uf: "MG",
    companyName: "Banda Trupicada",
    showInCarousel: true
  },
  {
    id: 23,
    title: 'O Abrazo Girafa',
    type: 'Rua',
    image: girafa,
    description: "Espetáculo solo, de rua e para toda família. Malabarismo com piões acrobáticos acompanham o grande desafio que dá nome ao espetáculo. O clássico número de equilibrismo com um monociclo girafa, que neste caso mede mais de 2 metros. Subir nas alturas , equilibrar uma bola de cristal no topo da cabeça e malabarear com três facões é o desafio. Acreditar no impossível se torna necessário para abraçar a sua criança interior.",
    data: 28,
    time: 11,
    local: "Espaço Eco Cultural",
    uf: "Chile",
    companyName: "Cia Duna",
    showInCarousel: true
  },


  // inf dos cards do calendario 
  {
    id: 24,
    title: 'Mostra Estudantil',
    description: 'Mostra formadas por grupos do ensino medio',
    type: 'Estudantil',
    data: 17,
    time: 10,
    local: 'Sala Nelson Pereira dos Santos',
    showInList: true
  },
  {
    id: 25,
    title: 'Mostra Estudantil',
    description: 'Mostra formadas por grupos do ensino medio',
    type: 'Estudantil',
    data: 17,
    time: 14,
    local: 'Sala Nelson Pereira dos Santos',
    showInList: true
  },
  {
    id: 26,
    title: 'Mostra Estudantil',
    description: 'Mostra formadas por grupos do ensino medio',
    type: 'Estudantil',
    data: 16,
    time: 14,
    local: 'Sala Nelson Pereira dos Santos',
    showInList: true
  },
  {
    id: 28,
    title: 'Mostra Estudantil',
    description: 'Mostra formadas por grupos do ensino medio',
    type: 'Estudantil',
    data: 18,
    time: 10,
    local: 'Sala Nelson Pereira dos Santos',
    showInList: true
  },
  {
    id: 27,
    title: 'Mostra Estudantil',
    description: 'Mostra formadas por grupos do ensino medio',
    type: 'Estudantil',
    data: 18,
    time: 14,
    local: 'Sala Nelson Pereira dos Santos',
    showInList: true
  },
  //Atividades formativas
  {
    id: 29,
    title: 'OFICINA DE TEATRO GESTUAL, Helena Marques',
    description: 'A metodologia segue a linha da autonomia criativa e tem como base o trabalho desenvolvido em 15 anos de oficinas ministradas pela Dobra, cuja principal fonte de inspiração é o trabalho desenvolvido na LISPA (London International School of Performing Arts - Escola Internacional de Artes Performáticas de Londres), além de conceitos de Jacques Lecoq, Dario Fo, Ariane Mnouchkine, Juliana Carneiro da Cunha, John Mowat, Julio Adrião e Eve Doe Bruce. Serão utilizados princípios de estudo do espaço cênico, gestos, estados de emoção, ritmo, percepção corporal individual e do coro. ',
    image: atividadeT,
    type: 'Atividade',
    data: 19,
    time: 14,
    local: 'Macquinho',
    e: "https://docs.google.com/forms/d/e/1FAIpQLSc1eb5jHIydUPpemfig5sH8bWyaRwPOasrxy78UK_5NzV3Qxg/viewform?usp=dialog"
  },
  // {
  //   id: 30,
  //   title: 'MANUAL E GUIA DO PALHAÇO DE RUA, Chacovachi ',
  //   description: ' A oficina é direcionada aos artistas ou futuros artistas que queiram descobrir os segredos do palhaço de rua para aplicá-los nessa disciplina ou em qualquer outra. Direcionado ao trabalho individual em lugares não-convencionais esta oficina se compõe em três partes: treinamento, teoria e filosofia, postura corporal. ',
  //   image: atividadeP,
  //   type: 'Atividade',
  //   data: 20,
  //   time: 14,
  //   local: 'Macquinho',
  //   e: 'https://docs.google.com/forms/d/e/1FAIpQLSecuvg-U-60403ANz573ivKugqPZZU-3bJA2iwz90mCmAwocg/viewform?usp=dialog',
  //   classif: "14 anos"
  // },
  {
    id: 31,
    title: 'BRECHT AGORA - PENSAMENTOS E JOGO, Marcos Henrique Rego',
    description: 'O palco que pode tudo, que não tem limites expressivos, precisa, em primeiro lugar, ser o palco do ator. Isto é, precisa confiar plenamente no ator para a exploração das suas infinitas possibilidades”. A partir da afirmação do saudoso mestre Aderbal Freire-Filho de que era necessário reconhecer Bertolt Brecht como fundamental para o teatro contemporâneo, abordaremos uma breve linha temporal acerca do trabalho do ator, realizaremos experimentos de sensibilização e exercícios com trechos de obras brechtianas',
    image: atividadeJ,
    type: 'Atividade',
    data: 21,
    time: 14,
    local: 'Macquinho',
    e: 'https://docs.google.com/forms/d/e/1FAIpQLSdkSvA9SfLlmg-TsxJ8AG2Jwf8V6LRRblOLp0Ofk1g99Pibvw/viewform?usp=dialog'
  },
  {
    id: 35,
    title: 'O CORPO E AS EPISTEMOLOGIAS EXUSÍACAS NAS ARTES DA CENA, Cátia Costa',
    description: 'Vivência teórico-prática a respeito de conhecimentos ligados ao Orixá Exú (Obá Oritá Metá). E sobretudo, algumas considerações sobre questões artísticas, espirituais e políticas que podem ser analisadas sobre a visão exusíaca. Como o teatro ou as artes da cena podem ser atravessados por um conhecimento ancestral negro-africano?',
    image: atividadec,
    type: 'Atividade',
    data: 28,
    time: 10,
    local: 'Macquinho',
    e: 'https://docs.google.com/forms/d/e/1FAIpQLScMf-LRG22JX0ieH_lDZ91xlsUNup0jx5jwP6-QAVQvxNV_eQ/viewform?usp=dialog',
    classif: "16 anos"
  },


  //Rodada
  {
    id: 34,
    title: 'Rodada de Negócios',
    description: '',
    type: 'Rodada',
    data: 27,
    time: 11,
    local: 'Auditório Cúpula do Caminho Niemeyer',
  },


  //estudantil
  {
    id: 36,
    title: "Cenas Selecionadas",
description: `Agradecemos as 144 inscrições recebidas para o Festival. <br/><br/>

No link abaixo, segue a lista dos selecionados para participar da Mostra Estudantil do 18º Niterói em Cena – Festival Internacional de Teatro. <br/><br/>

Para confirmar a participação, é obrigatória a presença na Reunião de Produção da Mostra, que será realizada de forma remota.`,

    data: 28,
    image: EstudantilM,
    local: "Google Meet - O link da reunião será disponibilizado no grupo do WhatsApp da mostra.",
    time: 21,
    type: 'Estudantil',
    showInList: false,
    e: 'https://drive.google.com/file/d/1DCZkXBvD2lfVNbjLW5EqFZFchwiBC9-B/view',
  }

  
]