/* ===========================================
   AZ Concrete King — Pricing
   Loads and renders pricing cards from JSON
   =========================================== */

document.addEventListener('DOMContentLoaded', () => {
  loadPricing();
});

async function loadPricing() {
  const container = document.getElementById('pricing-cards');
  if (!container) return;

  try {
    const response = await fetch('data/pricing.json');
    const data = await response.json();
    renderPricingCards(container, data.tiers);
  } catch (error) {
    container.innerHTML = '<p>Unable to load pricing. Please try again later.</p>';
  }
}

function renderPricingCards(container, tiers) {
  const html = tiers.map((tier, index) => {
    const isFeatured = index === 1;
    const featuredClass = isFeatured ? ' pricing-card--featured' : '';
    const badge = isFeatured ? '<span class="pricing-card__badge">Most Popular</span>' : '';

    const features = tier.features
      .map(feature => `<li class="pricing-card__feature">${feature}</li>`)
      .join('');

    return `
      <div class="pricing-card${featuredClass}">
        ${badge}
        <h3 class="pricing-card__title">${tier.name}</h3>
        <p class="pricing-card__description">${tier.description}</p>
        <p class="pricing-card__price">${tier.price_range}</p>
        <p class="pricing-card__sqft">${tier.sqft_range}</p>
        <ul class="pricing-card__features">
          ${features}
        </ul>
        <a href="contact.html" class="btn btn--primary">Get a Quote</a>
      </div>
    `;
  }).join('');

  container.innerHTML = html;
}
