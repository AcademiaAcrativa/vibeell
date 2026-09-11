export interface HardwareComponent {
  id: string;
  name: string;
  role: string;
  unit: 'Transmissor' | 'Receptor' | 'Ambos';
  specs: string;
  description: string;
  whyChosen: string;
  pinout: string[];
  icon: string;
}

export interface VibrationPattern {
  id: string;
  name: string;
  subtitle: string;
  pattern: number[]; // ms pulse / ms pause
  durationMs: number;
  frequencyLabel: string;
  intensity: 'Suave' | 'Médio' | 'Intenso';
  description: string;
  useCase: string;
}

export interface ProjectMilestone {
  date: string;
  title: string;
  status: 'Concluído' | 'Em Andamento' | 'Programado';
  description: string;
}
