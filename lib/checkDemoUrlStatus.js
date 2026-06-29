function isSafeDemoUrl(urlString) {
  try {
    const url = new URL(urlString);
    if (url.protocol !== "https:") return false;

    const host = url.hostname.toLowerCase();
    if (host === "localhost" || host.endsWith(".local")) return false;
    if (/^127\./.test(host)) return false;
    if (/^10\./.test(host)) return false;
    if (/^192\.168\./.test(host)) return false;
    if (/^172\.(1[6-9]|2\d|3[01])\./.test(host)) return false;

    return true;
  } catch {
    return false;
  }
}

export async function checkDemoUrlStatus(url, timeoutMs = 8000) {
  if (!isSafeDemoUrl(url)) return false;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      method: "GET",
      signal: controller.signal,
      redirect: "follow",
      headers: { Range: "bytes=0-0" },
    });

    return response.ok || response.status === 206;
  } catch {
    return false;
  } finally {
    clearTimeout(timer);
  }
}

export { isSafeDemoUrl };
