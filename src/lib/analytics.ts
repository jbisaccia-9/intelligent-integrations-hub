declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

const measurementId = import.meta.env
  .VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY as string | undefined;

let initialized = false;

export function gtag(...args: unknown[]) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

export function initAnalytics() {
  if (typeof window === "undefined" || initialized || !measurementId) return;
  initialized = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  gtag("js", new Date());
  gtag("config", measurementId, { send_page_view: true });
}

export function trackPageView(path: string) {
  if (!measurementId) return;
  gtag("event", "page_view", {
    page_path: path,
    page_location: typeof window !== "undefined" ? window.location.href : path,
    page_title: typeof document !== "undefined" ? document.title : undefined,
  });
}

/** Conversion: a visitor submitted a contact/inquiry form. */
export function trackFormSubmission(formName: string, params: Record<string, unknown> = {}) {
  if (!measurementId) return;
  gtag("event", "generate_lead", {
    form_name: formName,
    currency: "USD",
    value: 1,
    ...params,
  });
  gtag("event", "form_submit", { form_name: formName, ...params });
}
