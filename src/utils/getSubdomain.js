export function getSubdomain() {
  const host = window.location.hostname;

  // Αν είμαστε σε localhost και χρησιμοποιούμε π.χ. mantouki.localhost
  if (host.endsWith("localhost")) {
    const parts = host.split(".");
    if (parts.length === 2) {
      return parts[0]; // mantouki.localhost -> mantouki
    }
    return null;
  }

  // Αν είμαστε σε production π.χ. mantouki.welcomy.net
  const parts = host.split(".");
  if (parts.length >= 3) {
    return parts[0];
  }

  return null;
}
