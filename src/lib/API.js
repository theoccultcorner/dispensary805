const API_URL = 'https://api-g.weedmaps.com/discovery/v1/listings?filter%5Bany_retailer_services%5D%5B%5D=doctor&filter%5Bany_retailer_services%5D%5B%5D=storefront&filter%5Bany_retailer_services%5D%5B%5D=delivery&filter%5Bregion_slug%5Bdeliveries%5D%5D=santa-maria-lompoc-solvang&filter%5Bregion_slug%5Bdispensaries%5D%5D=santa-maria-lompoc-solvang&filter%5Bregion_slug%5Bdoctors%5D%5D=central-coast&page_size=100&size=100';

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
