if (import.meta.env.PROD) {
  const scriptAnalyticsEl = document.createElement("script");
  scriptAnalyticsEl.src = "https://umami.ony.world/script.js";
  scriptAnalyticsEl.dataset.websiteId = "30bae818-7971-4733-9870-71832c4e6259";

  document.head.append(scriptAnalyticsEl);
}
