import React from 'react';

interface VibeellLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export function VibeellLogo({ className = '', size = 'md', showText = true }: VibeellLogoProps) {
  // Proporções de tamanho
  const height = size === 'sm' ? 28 : size === 'lg' ? 44 : 36;

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 group select-none ${className}`}>
      <svg
        height={height}
        viewBox="0 0 280 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-auto max-h-[38px] sm:max-h-[44px] transition-transform duration-200 group-hover:scale-[1.02]"
        aria-label="Vibeell - Campainha e Pulseira Acessível"
      >
        {/* ================================================================
            PARTE 1: SÍMBOLO DA CAMPAINHA TRANSMISSORA COM ONDAS DE SINAL
            ================================================================ */}
        <g id="transmitter-symbol" transform="translate(4, 0)">
          {/* Onda Externa Esquerda */}
          <path
            d="M 8 18 C 3 24, 3 40, 8 46"
            stroke="#0055ff"
            strokeWidth="3.4"
            strokeLinecap="round"
            fill="none"
          />
          {/* Onda Interna Esquerda */}
          <path
            d="M 16 23 C 13 27, 13 37, 16 41"
            stroke="#0055ff"
            strokeWidth="3.4"
            strokeLinecap="round"
            fill="none"
          />

          {/* Botão / Campainha Central (Squircle Preto Fosco com Cantos Arredondados) */}
          <rect
            x="24"
            y="20"
            width="24"
            height="24"
            rx="6"
            fill="#09090b"
          />
          {/* Suave brilho tátil no topo */}
          <rect
            x="26"
            y="21.5"
            width="20"
            height="2.5"
            rx="1.2"
            fill="#ffffff"
            opacity="0.18"
          />

          {/* Onda Interna Direita */}
          <path
            d="M 56 23 C 59 27, 59 37, 56 41"
            stroke="#0055ff"
            strokeWidth="3.4"
            strokeLinecap="round"
            fill="none"
          />
          {/* Onda Externa Direita */}
          <path
            d="M 64 18 C 69 24, 69 40, 64 46"
            stroke="#0055ff"
            strokeWidth="3.4"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* ================================================================
            PARTE 2: LOGOTIPO "Vibeell" COM A PULSEIRA ESTILIZADA NO "b"
            ================================================================ */}
        {showText && (
          <g id="brand-text" transform="translate(82, 0)">
            {/* Letra V */}
            <path
              d="M 6 22 L 18 48 L 29 22"
              stroke="#0055ff"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />

            {/* Letra i */}
            {/* Pingo do i */}
            <circle cx="39" cy="23" r="2.4" fill="#0055ff" />
            {/* Haste do i */}
            <line
              x1="39"
              y1="29"
              x2="39"
              y2="48"
              stroke="#0055ff"
              strokeWidth="3.8"
              strokeLinecap="round"
            />

            {/* Letra b (Smartband / Pulseira Háptica com Ondas de Vibração) */}
            <g id="smartband-b" transform="translate(48, 0)">
              {/* Ondas de Vibração no Topo da Pulseira */}
              <path
                d="M 4 8 C 8 5, 15 5, 19 8"
                stroke="#0055ff"
                strokeWidth="2.4"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 6 12 C 9 10, 14 10, 17 12"
                stroke="#0055ff"
                strokeWidth="2.2"
                strokeLinecap="round"
                fill="none"
              />

              {/* Corpo da Pulseira (Haste superior em forma de correia que fecha o arco do b) */}
              {/* Aro/Correia Superior */}
              <path
                d="M 12 14 C 18 15, 20 22, 17 29"
                stroke="#0055ff"
                strokeWidth="2.8"
                strokeLinecap="round"
                fill="none"
              />
              {/* Orifícios / Pontos de Ajuste da Pulseira */}
              <circle cx="15.5" cy="18" r="0.9" fill="#0055ff" />
              <circle cx="17.2" cy="22" r="0.9" fill="#0055ff" />
              <circle cx="17.8" cy="26" r="0.9" fill="#0055ff" />

              {/* Haste Principal do b / Face da Pulseira */}
              <path
                d="M 7 14 L 7 48"
                stroke="#0055ff"
                strokeWidth="3.8"
                strokeLinecap="round"
              />

              {/* Bojo da Letra b (Fecho elíptico da pulseira) */}
              <path
                d="M 7 30 C 7 30, 11 28, 19 30 C 27 32, 28 42, 21 47 C 14 50, 7 48, 7 48"
                stroke="#0055ff"
                strokeWidth="3.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />

              {/* Ondas de Vibração Abaixo da Pulseira */}
              <path
                d="M 6 54 C 9 56, 14 56, 17 54"
                stroke="#0055ff"
                strokeWidth="2.2"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 4 58 C 8 61, 15 61, 19 58"
                stroke="#0055ff"
                strokeWidth="2.4"
                strokeLinecap="round"
                fill="none"
              />
            </g>

            {/* Primeiro 'e' */}
            <g id="letter-e1" transform="translate(86, 0)">
              <path
                d="M 22 41 C 21 46, 17 48, 12 48 C 5 48, 1 42, 1 37 C 1 30, 6 27, 13 27 C 20 27, 22 32, 22 36 L 2 36"
                stroke="#0055ff"
                strokeWidth="3.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </g>

            {/* Segundo 'e' */}
            <g id="letter-e2" transform="translate(112, 0)">
              <path
                d="M 22 41 C 21 46, 17 48, 12 48 C 5 48, 1 42, 1 37 C 1 30, 6 27, 13 27 C 20 27, 22 32, 22 36 L 2 36"
                stroke="#0055ff"
                strokeWidth="3.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </g>

            {/* Primeiro 'l' */}
            <line
              x1="144"
              y1="16"
              x2="144"
              y2="48"
              stroke="#0055ff"
              strokeWidth="3.8"
              strokeLinecap="round"
            />

            {/* Segundo 'l' */}
            <line
              x1="154"
              y1="16"
              x2="154"
              y2="48"
              stroke="#0055ff"
              strokeWidth="3.8"
              strokeLinecap="round"
            />
          </g>
        )}
      </svg>
    </div>
  );
}

// Ícone isolado (apenas o símbolo da campainha com as ondas de sinal)
export function VibeellIcon({ size = 36, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Onda Externa Esquerda */}
      <path
        d="M 8 18 C 3 24, 3 40, 8 46"
        stroke="#0055ff"
        strokeWidth="3.6"
        strokeLinecap="round"
        fill="none"
      />
      {/* Onda Interna Esquerda */}
      <path
        d="M 17 23 C 14 27, 14 37, 17 41"
        stroke="#0055ff"
        strokeWidth="3.6"
        strokeLinecap="round"
        fill="none"
      />

      {/* Botão Central Preto */}
      <rect
        x="24"
        y="18"
        width="24"
        height="24"
        rx="6"
        fill="#09090b"
      />
      {/* Brilho Superior */}
      <rect
        x="26"
        y="19.5"
        width="20"
        height="2.5"
        rx="1.2"
        fill="#ffffff"
        opacity="0.25"
      />

      {/* Onda Interna Direita */}
      <path
        d="M 55 23 C 58 27, 58 37, 55 41"
        stroke="#0055ff"
        strokeWidth="3.6"
        strokeLinecap="round"
        fill="none"
      />
      {/* Onda Externa Direita */}
      <path
        d="M 64 18 C 69 24, 69 40, 64 46"
        stroke="#0055ff"
        strokeWidth="3.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
