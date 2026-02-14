/* ===========================================
   AZ Concrete King — Reviews
   Loads and renders review cards from JSON
   =========================================== */

document.addEventListener('DOMContentLoaded', () => {
  loadReviews();
});

async function loadReviews() {
  try {
    const response = await fetch('data/reviews.json');
    const data = await response.json();

    // Render featured reviews on home page (first 3)
    const featuredContainer = document.getElementById('featured-reviews');
    if (featuredContainer) {
      renderReviewCards(featuredContainer, data.reviews.slice(0, 3));
    }

    // Render all reviews on reviews page
    const allContainer = document.getElementById('all-reviews');
    if (allContainer) {
      renderReviewCards(allContainer, data.reviews);
    }
  } catch (error) {
    const containers = document.querySelectorAll('#featured-reviews, #all-reviews');
    containers.forEach(container => {
      container.innerHTML = '<p>Unable to load reviews. Please try again later.</p>';
    });
  }
}

function renderReviewCards(container, reviews) {
  const html = reviews.map(review => {
    const stars = generateStars(review.rating);
    const date = new Date(review.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });

    return `
      <div class="review-card">
        <div class="review-card__stars">${stars}</div>
        <p class="review-card__text">"${review.text}"</p>
        <p class="review-card__author">${review.name}</p>
        <p class="review-card__location">${review.location} &middot; ${date}</p>
      </div>
    `;
  }).join('');

  container.innerHTML = html;
}
