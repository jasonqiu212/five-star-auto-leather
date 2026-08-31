window.dataLayer = window.dataLayer || [];
window.gtag =
  window.gtag ||
  function () {
    window.dataLayer.push(arguments);
  };

window.gtag('js', new Date());
window.gtag('config', 'G-0TFGCVSWFZ');

function trackConversion(eventName, conversionLabel, parameters = {}) {
  if (typeof window.gtag !== 'function') return;

  // Google Analytics
  window.gtag('event', eventName, parameters);

  // Google Ads
  window.gtag('event', 'conversion', {
    send_to: 'AW-10791822528/' + conversionLabel,
  });
}

document.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const link = target.closest('[data-conversion-event]');
  if (!(link instanceof HTMLElement)) return;

  const eventName = link.dataset.conversionEvent;
  const conversionLabel = link.dataset.conversionLabel;
  if (!eventName || !conversionLabel) return;

  trackConversion(eventName, conversionLabel, { method: eventName });
});
