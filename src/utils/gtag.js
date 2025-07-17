export const initGA = (measurementId) => {
  if (!window.gtag) {
    // Create script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Init gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    script.onload = () => {
      gtag("js", new Date());
      gtag("config", measurementId, {
        page_path: window.location.pathname,
      });
    };
  } else {
    window.gtag("config", measurementId, {
      page_path: window.location.pathname,
    });
  }
};


export const trackEvent = (name, category, label, value = 1) => {
  if (typeof window.gtag !== 'function') return;
  window.gtag("event", name, {
    event_category: category,
    event_label: label,
    value,
  });
};
