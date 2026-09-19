// Easter Egg no Console solicitado pelo Luka
export function initLukaEasterEgg() {
  if (typeof window === 'undefined') return;

  const printBigLuka = () => {
    console.log(
      '%cFEITO PELO LUKA KKKKKKKKKKKKKK',
      'background: #0055ff; color: #ffffff; font-size: 26px; font-weight: 900; padding: 10px 20px; border-radius: 8px;'
    );
  };

  // Mensagem inicial de destaque
  printBigLuka();

  // Flood de mensagens "MADE BY LUKA" durante os primeiros 3 segundos
  const startTime = Date.now();
  const floodInterval = setInterval(() => {
    if (Date.now() - startTime >= 3000) {
      clearInterval(floodInterval);
      printBigLuka();
      return;
    }
    console.log('%cMADE BY LUKA', 'color: #0055ff; font-weight: bold; font-size: 14px;');
  }, 50);

  // Detecta quando o usuário aperta F12 ou atalhos de desenvolvedor
  window.addEventListener('keydown', (e) => {
    const isF12 = e.key === 'F12' || e.keyCode === 123;
    const isDevToolsShortcut = 
      (e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j');

    if (isF12 || isDevToolsShortcut) {
      printBigLuka();
      for (let i = 0; i < 15; i++) {
        console.log('%cMADE BY LUKA', 'color: #ff0055; font-weight: 800; font-size: 16px;');
      }
      printBigLuka();
    }
  });

  // Gatilho inteligente ao abrir o DevTools / Console
  let devtoolsOpen = false;
  const element = new Image();
  Object.defineProperty(element, 'id', {
    get: function () {
      if (!devtoolsOpen) {
        devtoolsOpen = true;
        printBigLuka();
        for (let i = 0; i < 20; i++) {
          console.log('%cMADE BY LUKA', 'color: #10b981; font-weight: bold; font-size: 15px;');
        }
        printBigLuka();
      }
    },
  });
  console.log('%c', element);
}
