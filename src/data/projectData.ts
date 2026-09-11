export interface TeamMember {
  name: string;
  role: string;
  contribution: string;
}

export interface HardwareItem {
  id: string;
  name: string;
  quantity: string;
  role: string;
  specs: string;
  description: string;
  connection: string;
  importance: string;
}

export const OFFICIAL_PROJECT_INFO = {
  institution: "ETERJ - Escola Técnica do Rio de Janeiro",
  event: "XL Feira de Ciências e de Informação Profissional (FECIP)",
  title: "VIBEELL",
  subtitle: "Campainha Vibratória para Pessoas com Deficiência Auditiva",
  classNumber: "Turma: 1121",
  advisor: "Professora Orientadora: Tacila Vanessa",
  summary: "Solução tecnológica em tecnologia assistiva que converte o sinal de campainha em vibrações físicas de alta precisão através da rede Wi-Fi residencial. Conta com sistema inteligente de pareamento próprio, garantindo autonomia, segurança e inclusão para pessoas surdas de forma prática.",
};

export const BANNER_TEXTS = {
  introducao: `A acessibilidade é essencial para promover a inclusão e a autonomia das pessoas com deficiência. Nesse contexto, foi desenvolvido o VIBEELL, um sistema inteligente composto por uma campainha e uma pulseira que se comunicam através da rede Wi-Fi da residência para traduzir toques em alertas táteis.`,
  
  desenvolvimento: `O desenvolvimento focou em criar uma experiência simples: ao ser ligado, o sistema busca a última rede Wi-Fi conectada. Caso não a encontre, cria automaticamente uma rede própria. O usuário se conecta a ela pelo celular e é direcionado a uma tela de configuração com todas as redes disponíveis, onde escolhe o seu Wi-Fi de casa, garantindo um funcionamento rápido.`,
  
  resultados: `A comunicação via Wi-Fi demonstrou excelente confiabilidade. Sempre que a campainha é pressionada, o sinal é enviado via internet para a pulseira, que vibra de forma imediata e perceptível, validando o Vibeell como uma ferramenta robusta de acessibilidade.`,
  
  referencias: `O VIBEELL teve como referência tecnologias assistivas de resposta tátil e protocolos modernos de Internet das Coisas (IoT). O uso de microcontroladores Wi-Fi com sistemas de configuração embarcada (SmartConfig/Manager) serviu de base tecnológica para o projeto.`
};

export const TEAM_MEMBERS: TeamMember[] = [
  { name: "Pedro Luka", role: "Representante & Desenvolvedor Líder", contribution: "Idealização do projeto, programação do microcontrolador (C++), desenvolvimento do site e design da marca." },
  { name: "Daniel Silva", role: "Prototipagem Estrutural", contribution: "Desenvolvimento e construção da maquete física." },
  { name: "Davi Silva", role: "Prototipagem Estrutural", contribution: "Desenvolvimento e construção da maquete física." },
  { name: "Daniel Alves", role: "Prototipagem Estrutural", contribution: "Desenvolvimento e construção da maquete física." },
  { name: "Cauã Garcia", role: "Design Visual", contribution: "Criação do banner de apresentação e desenvolvimento da identidade visual do projeto." },
  { name: "Pedro Henrique", role: "Design Visual", contribution: "Criação do banner de apresentação e desenvolvimento da identidade visual do projeto." },
  { name: "Marlon Dias", role: "Design Visual & Web", contribution: "Apoio no desenvolvimento do site oficial, criação do banner e interface visual." },
  { name: "Cauã Valentim", role: "Gestão Financeira", contribution: "Análise de viabilidade econômica, planejamento e orçamento dos componentes do projeto." }
];

export const HARDWARE_PIECES: HardwareItem[] = [
  {
    id: "esp32-supermini",
    name: "ESP32 SuperMini",
    quantity: "2 unidades (1 Transmissor TX + 1 Receptor RX)",
    role: "Cérebro computacional & Comunicação sem fio",
    specs: "Microcontrolador 32-bit Dual-Core 240MHz, Wi-Fi 802.11 b/g/n, Bluetooth, Antena cerâmica integrada, 520KB SRAM.",
    description: "Escolhido pelo time da ETERJ pelo tamanho ultracompacto (apenas 22.5 x 18 mm) e pelo suporte nativo a redes Wi-Fi. Ele é capaz de conectar à internet da casa ou criar a própria rede de configuração (Modo AP) para o usuário inserir a senha facilmente.",
    connection: "TX: GPIO04 conectado ao Push Button. RX: GPIO02 conectado à base do Transistor via resistor.",
    importance: "Sendo o cérebro do sistema, comunica a campainha e a pulseira de forma instantânea através do Wi-Fi residencial."
  },
  {
    id: "tp4056",
    name: "Módulo de Carregamento TP4056 USB-C",
    quantity: "1 unidade",
    role: "Gerenciamento inteligente de carga e proteção de bateria",
    specs: "Tensão de entrada: 4.5V a 5.5V (via USB-C), Corrente de carga máxima: 1A, Tensão de corte final: 4.2V ± 1%, Proteção DW01A contra sobredescarga (< 2.4V).",
    description: "Módulo linear de recarga para baterias de lítio de célula única. Permite que o usuário surdo recarregue o receptor portátil utilizando qualquer carregador de celular comum com cabo USB Tipo C padrão.",
    connection: "IN+ e IN- alimentados via USB-C. B+ e B- ligados aos terminais da bateria Li-Po 3.7V. OUT+ e OUT- ligados ao VCC/GND do receptor.",
    importance: "Garante segurança máxima contra sobrecarga, curto-circuito e aquecimento indesejado, estendendo a vida útil da célula química."
  },
  {
    id: "lipo-battery",
    name: "Bateria Li-Po 3.7V",
    quantity: "1 unidade",
    role: "Fonte de energia recarregável autônoma",
    specs: "Química: Polímero de Íons de Lítio (Li-Po), Tensão nominal: 3.7V (4.2V quando totalmente carregada), Capacidade típica: 500mAh a 1200mAh.",
    description: "Fornece energia estável de corrente contínua para o receptor portátil (puck tátil). Seu formato ultrafino possibilita criar um receptor leve que a pessoa pode carregar no bolso da calça, prender no cinto ou deixar na cabeceira da cama.",
    connection: "Terminais soldados diretamente nas ilhas B+ (positivo/vermelho) e B- (negativo/preto) da placa TP4056.",
    importance: "Autonomia de 5 a 7 dias sem recarga devido ao gerenciamento do ESP32 que acorda o circuito apenas quando a campainha é tocada."
  },
  {
    id: "transistor",
    name: "Transistor de Potência (NPN / BJT)",
    quantity: "1 unidade",
    role: "Chave eletrônica para acionamento do motor",
    specs: "Modelo de chaveamento BJT de uso geral (2N2222 ou BC547 / MOSFET), Vce sat: < 0.3V, Corrente de coletor Ic suportada até 800mA.",
    description: "Os pinos GPIO do ESP32 fornecem no máximo 12 a 20 mA de corrente, enquanto o motor vibratório exige de 80 a 140 mA durante o pico de partida. O transistor atua como um interruptor eletrônico acionado pelo sinal lógico do microcontrolador.",
    connection: "Base ligada ao GPIO02 através do Resistor de 1kΩ. Coletor ligado ao polo negativo do motor vibratório. Emissor ligado ao GND comum.",
    importance: "Protege o microcontrolador contra sobrecorrente e ruídos de retorno eletromagnético gerados pelo enrolamento do motor."
  },
  {
    id: "push-button",
    name: "Push Button (Botão de Pressão Tátil)",
    quantity: "1 unidade",
    role: "Disparador mecânico externo",
    specs: "Chave táctil momentânea Normalmente Aberta (NA), Vida mecânica estimada: > 100.000 acionamentos, Curso mecânico curto de 0.25mm.",
    description: "Localizado na unidade externa de fachada (junto ao portão ou porta de entrada). Ao ser pressionado pelo visitante, fecha o circuito elétrico instantaneamente, gerando um pulso de nível lógico alto que desperta o microcontrolador transmissor.",
    connection: "Um terminal ligado ao VCC (3.3V). O outro terminal ligado ao pino de entrada GPIO04 e referenciado ao GND pelo resistor de pull-down.",
    importance: "Resposta mecânica clara com clique de confirmação tátil para o visitante que toca a campainha."
  },
  {
    id: "resistor",
    name: "Resistor de Precisão (1kΩ e 10kΩ)",
    quantity: "2 unidades",
    role: "Polarização de corrente e referência estável (Pull-Down)",
    specs: "Resistores de filme metálico, 1/4W, tolerância de 1% a 5% (10kΩ para pull-down e 1kΩ para limitação de base do transistor).",
    description: "O resistor de 10kΩ mantém o pino do botão travado firmemente em nível lógico zero (0V) quando o botão não está pressionado, evitando que ruídos estáticos do ar acionem a campainha falsamente. O resistor de 1kΩ limita a corrente na base do transistor.",
    connection: "Resistor 10kΩ entre o GPIO04 e o GND. Resistor 1kΩ em série entre o GPIO02 e a base do Transistor.",
    importance: "Elimina falsos disparos provocados por indução eletromagnética da rede elétrica residencial e protege a base do semicondutor."
  },
  {
    id: "motor-vibratorio",
    name: "Motor Vibratório (Motorvibrarall / ERM)",
    quantity: "1 unidade",
    role: "Atuador háptico principal",
    specs: "Motor DC de massa excêntrica rotativa tipo moeda (Coin Vibration Motor) ou cilíndrico, Tensão de operação: 2.5V a 3.7V, Rotação: 10.000 a 12.000 RPM.",
    description: "O elemento transformador de todo o projeto. Ele converte a energia elétrica pulsante em energia mecânica vibratória de alta frequência. Quando a campainha é acionada, ele vibra vigorosamente contra o corpo do usuário, avisando-o com clareza imediata.",
    connection: "Polo positivo ligado ao VCC da bateria. Polo negativo ligado ao coletor do Transistor de potência.",
    importance: "Permite que a pessoa com surdez moderada a profunda perceba visitas sem depender de estímulos luminosos que possuem pontos cegos."
  }
];

export const METHODOLOGY_STEPS = [
  {
    step: "01",
    title: "Identificação da Demanda & Pesquisa Social",
    desc: "Levantamento com a comunidade surda sobre as falhas das campainhas tradicionais. Constatou-se que luzes possuem pontos cegos quando a pessoa está em outro cômodo ou dormindo.",
    badge: "Planejamento"
  },
  {
    step: "02",
    title: "Seleção e Dimensionamento das Peças",
    desc: "Escolha de microcontroladores ESP32 com suporte a Wi-Fi embarcado, garantindo o envio instantâneo do sinal de alerta pela internet residencial com baixo custo.",
    badge: "Engenharia"
  },
  {
    step: "03",
    title: "Montagem em Bancada & Soldagem",
    desc: "Montagem dos circuitos na ETERJ: acoplamento do sistema de energia (Li-Po + TP4056) na pulseira e ligação do botão físico da campainha transmissora.",
    badge: "Laboratório ETERJ"
  },
  {
    step: "04",
    title: "Lógica de Conexão Wi-Fi Inteligente",
    desc: "Programação (C++) do sistema que busca a última rede salva. Se falhar, ele cria uma rede Wi-Fi própria que abre um portal no celular do usuário para escolha da rede e senha da casa.",
    badge: "Software & Wi-Fi"
  },
  {
    step: "05",
    title: "Testes Práticos e Maquete",
    desc: "Construção da maquete física para simular o ambiente residencial e validação do pareamento Wi-Fi e resposta tátil da pulseira em uso cotidiano.",
    badge: "Resultados Finais"
  }
];

export const FAQ_ITEMS = [
  {
    q: "Como o Vibeell funciona na prática?",
    a: "O sistema vem com uma pulseira e uma campainha. Quando o visitante aperta o botão da campainha no portão, a pulseira vibra instantaneamente no braço do usuário, avisando sobre a visita."
  },
  {
    q: "Preciso de internet para o Vibeell funcionar?",
    a: "Sim. Você precisa conectar tanto a campainha quanto a pulseira na internet (Wi-Fi) da sua casa para que elas conversem entre si e o sistema funcione corretamente."
  },
  {
    q: "Como configuro a rede Wi-Fi do sistema?",
    a: "Ao ligar, ele procura a última internet conectada. Caso não encontre, ele cria uma rede Wi-Fi própria. Pelo seu celular, você conecta nessa rede temporária, o que abrirá uma tela de configuração. Ali aparecerão todas as redes da sua vizinhança; basta escolher a sua, colocar a senha, e o aparelho funcionará automaticamente."
  },
  {
    q: "E a bateria da pulseira, como recarrega?",
    a: "Com a bateria Li-Po de 3.7V, a pulseira possui excelente autonomia. A recarga é feita de maneira simples utilizando qualquer cabo e carregador de celular comum com ponta USB Tipo C."
  },
  {
    q: "Qual a distância máxima de alcance entre a campainha e a pulseira?",
    a: "Como o sistema utiliza a rede Wi-Fi e a internet, a pulseira receberá o alerta em qualquer lugar da casa em que ela estiver conectada à mesma rede sem fio. O alcance acompanha o sinal do seu roteador."
  },
  {
    q: "Quem é a equipe responsável pelo VIBEELL na FECIP 2026?",
    a: "O projeto foi concebido e montado pelos alunos da Turma 1121 da ETERJ: Cauã Garcia, Cauã Valentim, Daniel Silva, Daniel Alves, Davi Silva, Marlon Dias, Pedro Henrique e Pedro Luka, sob a orientação da Professora Tacila Vanessa."
  }
];
