const API_URL = 'https://api-g.weedmaps.com/wm/v2/listings?filter[bounding_box]=39.5861114497988,-105.28026580810547,39.84202241328677,-104.79755401611328&filter[plural_types][]=doctors&filter[plural_types][]=dispensaries&filter[plural_types][]=deliveries&size=100';

export default {
  getListings(page, pageSize) {
    return fetch(`${API_URL}&page_size=${pageSize}&page=${page}`)
      .then(response => response.json())
      .then(result => ({
        listings: result.data.listings,
        total_listings: result.meta.total_listings,
      }));
  },
};
