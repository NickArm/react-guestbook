// components/UpdateManager.jsx
import { useState, useEffect } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';

export function UpdateManager() {
  const [offlineReady, setOfflineReady] = useState(false);
  const [updateAvailable, setUpdateAvailable] = useState(false);
  let updateInterval;

  const {
    offlineReady: [swOfflineReady, setSwOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(registration) {
    console.log('SW Registered successfully');

    registration.update();
    updateInterval = setInterval(() => {
        registration?.update();
    }, 15 * 60 * 1000);
    },
    onRegisterError(error) {
      console.log('SW registration error', error);
    },
    onOfflineReady() {
      setOfflineReady(true);
      setTimeout(() => setOfflineReady(false), 4000); // Auto-hide after 4s
    },
    onNeedRefresh() {
      // Με autoUpdate, αυτό δεν θα τρέχει συχνά
      // αλλά το κρατάμε για fallback
      setUpdateAvailable(true);
    }
  });

  // Simple version checking για browsers χωρίς SW support
  useEffect(() => {
    const checkVersion = async () => {
      try {
        const response = await fetch('/version.json?' + Date.now());
        const data = await response.json();
        const storedVersion = localStorage.getItem('app_version');
        
        if (storedVersion && storedVersion !== data.version) {
          setUpdateAvailable(true);
        } else if (!storedVersion) {
          localStorage.setItem('app_version', data.version);
        }
      } catch (error) {
        // Silent fail - δεν είναι critical
      }
    };

    // Check on mount and then every 2 minutes
    checkVersion();
    const interval = setInterval(checkVersion, 120000);
    return () => clearInterval(interval);
  }, []);

  const handleManualUpdate = () => {
    if (updateServiceWorker) {
      updateServiceWorker(true);
    } else {
      // Fallback για browsers χωρίς SW
      fetch('/version.json?' + Date.now())
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('app_version', data.version);
          window.location.reload();
        })
        .catch(() => window.location.reload());
    }
    setUpdateAvailable(false);
  };

  return (
    <>
      {/* Offline Ready Notification - Μόνο αυτό χρειάζεται */}
      {offlineReady && (
        <div className="offline-notification fixed bottom-4 right-4 bg-green-600 text-white p-3 rounded-lg shadow-lg z-[9998] text-sm max-w-xs">
          <div className="flex items-center gap-2">
            <span>📱 Offline Version Ready!</span>
            <button
              onClick={() => setOfflineReady(false)}
              className="text-green-200 hover:text-white px-1 text-lg leading-none"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Update Available - Σπάνια θα εμφανίζεται με autoUpdate */}
      {(updateAvailable || needRefresh) && (
        <div className="update-notification fixed top-4 right-4 bg-blue-600 text-white p-3 rounded-lg shadow-lg z-[9999] text-sm max-w-xs">
          <div className="flex items-center gap-2">
            <span>🔄 New version!</span>
            <button
              onClick={handleManualUpdate}
              className="bg-primary text-blue-600 px-2 py-1 rounded text-xs font-medium hover:bg-gray-100 transition-colors"
            >
              Update
            </button>
            <button
              onClick={() => {
                setUpdateAvailable(false);
                setNeedRefresh(false);
              }}
              className="text-blue-200 hover:text-white px-1 text-lg leading-none"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}