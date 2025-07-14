import { useEffect, useState } from 'react';

export default function useAddToHomeScreenPrompt() {
  const [promptEvent, setPromptEvent] = useState(null);

  useEffect(() => {
    const ready = (e) => {
      e.preventDefault();
      setPromptEvent(e);
    };

    window.addEventListener('beforeinstallprompt', ready);
    return () => window.removeEventListener('beforeinstallprompt', ready);
  }, []);

  const promptToInstall = () => {
    if (promptEvent) {
      promptEvent.prompt();
      promptEvent.userChoice.then(() => {
        setPromptEvent(null);
      });
    }
  };

  return [promptEvent, promptToInstall];
}
