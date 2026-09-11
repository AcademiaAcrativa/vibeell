import { HardwareComponent, VibrationPattern, ProjectMilestone } from '../types';

export const HARDWARE_COMPONENTS: HardwareComponent[] = [
  {
    id: 'esp32-tx',
    name: 'ESP32 SuperMini (Transmissor)',
    role: 'Processamento & Envio Sem Fio',
    unit: 'Transmissor',
    specs: 'Dual Core 240MHz, Wi-Fi/Bluetooth, ESP-NOW 2.4GHz, Deep Sleep < 15µA',
    description: 'Microcontrolador ultracompacto alojado na unidade externa da campainha. Ao detectar o acionamento do botão, desperta do modo Deep Sleep instantaneamente e dispara um pacote criptografado via ESP-NOW.',
    whyChosen: 'Tamanho diminuto (22.5 x 18 mm), consumo energético quase nulo em repouso e latência sem fio inferior a 12 milissegundos sem depender de roteador Wi-Fi.',
    pinout: ['GPIO 0 (Input Push Button)', '3.3V (Alimentação)', 'GND (Terra)', 'Antena cerâmica integrada'],
    icon: 'Cpu'
  },
  {
    id: 'esp32-rx',
    name: 'ESP32 SuperMini (Receptor)',
    role: 'Recepção de Pacote & Controle Háptico',
    unit: 'Receptor',
    specs: 'Dual Core 240MHz, ESP-NOW Receiver, PWM Haptic Drive',
    description: 'Cérebro da unidade móvel/vestível. Monitora o canal ESP-NOW dedicado 24/7. Ao receber o código de disparo do transmissor, comanda o circuito de potência via PWM para gerar ritmos vibratórios distintos.',
    whyChosen: 'Capacidade de pareamento ponto-a-ponto instantâneo, permitindo que múltiplos receptores (no bolso, na cabeceira, na sala) recebam o mesmo sinal simultaneamente.',
    pinout: ['GPIO 2 (Sinal PWM Base Transistor)', '3.3V / VBUS (Alimentação Bateria)', 'GND (Terra Geral)'],
    icon: 'Radio'
  },
  {
    id: 'tp4056',
    name: 'Módulo de Carregamento (TP4056 USB-C)',
    role: 'Gestão Inteligente de Energia',
    unit: 'Receptor',
    specs: 'Entrada USB Tipo C 5V 1A, Tensão de Corte 4.2V ± 1%, Proteção DW01A + 8205A',
    description: 'Controlador de carga linear para a bateria Li-Po com proteção avançada contra sobretensão, descarga profunda e curto-circuito.',
    whyChosen: 'Garante recarga rápida e segura através do conector universal USB-C moderno, mantendo a integridade química da bateria e a segurança do usuário durante o uso diário.',
    pinout: ['IN+ / IN- (USB-C 5V)', 'BAT+ / BAT- (Conexão Li-Po)', 'OUT+ / OUT- (Saída regulada para circuito)'],
    icon: 'Zap'
  },
  {
    id: 'lipo-battery',
    name: 'Bateria Li-Po 3.7V',
    role: 'Fonte Autônoma de Alta Densidade',
    unit: 'Receptor',
    specs: 'Íon de Polímero de Lítio 3.7V nominal (4.2V pico), 650mAh, Taxa 1C',
    description: 'Fornece energia limpa e portátil para a unidade receptora. Proporciona autonomia de até 5 a 7 dias em modo de espera com gerenciamento de energia inteligente do ESP32.',
    whyChosen: 'Fator de forma ultrafino e leve (peso inferior a 14 gramas), permitindo que o receptor seja transportado no bolso, em clipe de roupa ou pulseira sem desconforto.',
    pinout: ['Terminal Positivo (+) 3.7V', 'Terminal Negativo (-) GND'],
    icon: 'BatteryCharging'
  },
  {
    id: 'transistor',
    name: 'Transistor de Potência (NPN / MOSFET)',
    role: 'Chaveamento Eletrônico de Carga',
    unit: 'Receptor',
    specs: '2N2222A / MOSFET canal N 30V 2A, Diodo Flyback 1N4148 em paralelo',
    description: 'Atua como chave eletrônica ultrarrápida. Isola o microcontrolador da corrente exigida pelo motor vibratório, acionando-o diretamente da linha de bateria com total eficiência.',
    whyChosen: 'Os pinos GPIO do ESP32 fornecem no máximo ~40mA, enquanto o motor vibratório exige de 80mA a 150mA em pico. O transistor amplifica o controle garantindo resposta imediata sem queimar a placa.',
    pinout: ['Base / Gate (via Resistor no GPIO)', 'Coletor / Dreno (ao Polo Negativo do Motor)', 'Emissor / Source (ao GND)'],
    icon: 'ToggleRight'
  },
  {
    id: 'push-button',
    name: 'Push Button (Chave Tátil de Precisão)',
    role: 'Interface de Acionamento Físico',
    unit: 'Transmissor',
    specs: 'Chave táctil selada IP67, curso curto de 0.3mm, vida útil de 500.000 cliques',
    description: 'Instalado na elegante placa frontal da campainha. Ao ser pressionado pelo visitante na porta, fecha o contato com feedback mecânico suave e nítido.',
    whyChosen: 'Alta confiabilidade mecânica, resistência a intempéries e disparo limpo com circuito debounce por resistor.',
    pinout: ['Terminal A (GPIO ESP32)', 'Terminal B (GND)', 'Resistor Pull-up interno/externo'],
    icon: 'Disc'
  },
  {
    id: 'resistor',
    name: 'Resistores de Precisão',
    role: 'Limitadores de Corrente & Pull-Down',
    unit: 'Ambos',
    specs: 'Filme metálico 1% de precisão (1kΩ, 10kΩ e 220Ω SMD/THT)',
    description: 'Componentes passivos fundamentais para polarização de base do transistor, proteção do LED indicador e estabilização de nível lógico no pino de disparo do botão.',
    whyChosen: 'Evitam leituras flutuantes (floating pins) causadas por indução eletromagnética e garantem a durabilidade dos semicondutores sob variações térmicas.',
    pinout: ['10kΩ Pull-down/Pull-up (Botão)', '1kΩ Base (Transistor de Chaveamento)'],
    icon: 'Activity'
  },
  {
    id: 'vibration-motor',
    name: 'Motor Vibratório (Haptic Core)',
    role: 'Atuador Háptico Sensorial',
    unit: 'Receptor',
    specs: 'Motor ERM tipo Moeda (Coin Haptic) 10x2.7mm, 12.000 RPM, 3V-3.7V',
    description: 'O elemento central de inclusão do Vibeel. Converte o impulso elétrico em vibrações mecânicas intensas porém silenciosas, perceptíveis imediatamente ao toque, na roupa ou sobre a mesa.',
    whyChosen: 'Totalmente selado, ultracompacto e com inércia balanceada para criar diferentes padrões rítmicos reconhecíveis pelo usuário surdo.',
    pinout: ['Fio Vermelho (+ Polo Positivo 3.7V)', 'Fio Azul/Preto (- Polo Negativo via Transistor)'],
    icon: 'Waves'
  }
];

export const VIBRATION_PATTERNS: VibrationPattern[] = [
  {
    id: 'visita-padrao',
    name: 'Visita Residencial',
    subtitle: 'Cadência elegante e compassada',
    pattern: [300, 200, 300],
    durationMs: 800,
    frequencyLabel: '180 Hz • 1.8G',
    intensity: 'Médio',
    description: 'Dois pulsos firmes e suaves, desenhados para não assustar o usuário, mas alertar com total clareza.',
    useCase: 'Campainha tradicional de visita em ambiente doméstico.'
  },
  {
    id: 'urgencia',
    name: 'Alerta / Urgência',
    subtitle: 'Pulsos rápidos de alta frequência',
    pattern: [150, 80, 150, 80, 150, 80, 300],
    durationMs: 990,
    frequencyLabel: '240 Hz • 2.6G',
    intensity: 'Intenso',
    description: 'Sequência rápida de vibrações incisivas para situações de emergência ou insistência.',
    useCase: 'Alerta de segurança, chamadas repetidas ou emergência familiar.'
  },
  {
    id: 'entrega-rapida',
    name: 'Entrega Rápida / Delivery',
    subtitle: 'Pulso singular com reforço tátil',
    pattern: [500, 150, 200],
    durationMs: 850,
    frequencyLabel: '210 Hz • 2.2G',
    intensity: 'Intenso',
    description: 'Um pulso longo inicial seguido de confirmação breve, ideal para encomendas e entregadores apressados.',
    useCase: 'Entregas de e-commerce, correios e delivery de comida.'
  },
  {
    id: 'modo-noturno',
    name: 'Modo Noturno Gentil',
    subtitle: 'Ondulação suave para repouso',
    pattern: [200, 400, 200],
    durationMs: 800,
    frequencyLabel: '120 Hz • 0.9G',
    intensity: 'Suave',
    description: 'Vibração atenuada por PWM ideal quando o receptor está sob o travesseiro ou na cabeceira da cama.',
    useCase: 'Uso durante o sono ou descanso, sem despertar assustador.'
  }
];

export const FECIP_MILESTONES: ProjectMilestone[] = [
  {
    date: 'Etapa 1 • Concepção',
    title: 'Pesquisa com a Comunidade Surda',
    status: 'Concluído',
    description: 'Entrevistas com usuários de LIBRAS e pessoas com deficiência auditiva identificaram que luzes estroboscópicas convencionais falham quando o indivíduo está de costas, em outro cômodo ou dormindo.'
  },
  {
    date: 'Etapa 2 • Arquitetura',
    title: 'Seleção do Hardware ETERJ',
    status: 'Concluído',
    description: 'Dimensionamento elétrico nos laboratórios da ETERJ: escolha do ESP32 SuperMini pelo ESP-NOW sem dependência de internet e motor háptico de alto rendimento com transistor de chaveamento.'
  },
  {
    date: 'Etapa 3 • Prototipagem',
    title: 'Bancada de Testes & Autonomia',
    status: 'Concluído',
    description: 'Testes de alcance físico (mais de 120 metros livres), consumo energético da bateria Li-Po 3.7V e tempo de resposta aferido em bancada osciloscópica inferior a 15ms.'
  },
  {
    date: 'Etapa 4 • Design & FECIP 2026',
    title: 'Gabinete Ergonômico de Luxo & Apresentação',
    status: 'Em Andamento',
    description: 'Desenvolvimento do case estético premium em polímero fosco com detalhes dourados e preparação da apresentação técnica para a Feira de Ciência e Inovação da ETERJ 2026.'
  }
];
