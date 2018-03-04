<template>
  <div class="hello">
    <nav aria-label="Page navigation example">
      <ul class="pagination pagination-sm">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li
          class="page-item"
          :class="{
            active: currentPage === page
          }"
          v-for="page in totalPages"
          :key="page">
          <a @click="getPage(page)" class="page-link" href="#">{{page}}</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
    <div v-if="loading">
      <video src="https://media.giphy.com/media/dZBa6EQnbnsHe/giphy.mp4" autoplay loop>

      </video>
    </div>
    <ul v-if="!loading" class="list-unstyled">
      <li class="media m-3" v-for="listing in listings" :key="listing.id">
        <img class="mr-3" :src="listing.avatar_image.small_url" alt="Generic placeholder image">
        <div class="media-body">
          <h5 class="mt-0 mb-1">
            <a :href="listing.web_url" target="_blank">{{listing.name}}</a>
          </h5>
          <dl class="row">
            <dt class="col-sm-3">Type</dt>
            <dd class="col-sm-9 capitalize">{{listing.license_type}}</dd>
            <dt class="col-sm-3">Address</dt>
            <dd class="col-sm-9">{{listing.address}}</dd>
            <dt class="col-sm-3">Today's Hours</dt>
            <dd class="col-sm-9">{{listing.todays_hours_str}}</dd>
          </dl>
          <p v-html="listing.intro_body"></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import API from '@/lib/API';

export default {
  name: 'Listings',
  data() {
    return {
      loading: true,
      listings: [],
      currentPage: 1,
      page_size: 20,
      totalPages: 0,
      total_listings: 0,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      this.getPage(1);
    },
    getPage(page) {
      this.currentPage = page;
      this.loading = true;
      API
        .getListings(page, this.page_size)
        .then((result) => {
          this.listings = result.listings;
          this.total_listings = result.total_listings;
          this.totalPages = Math.ceil(this.total_listings / this.page_size);
          setTimeout(() => {
            this.loading = false;
          }, 1000);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.capitalize {
  text-transform: capitalize;
}
.loading-image img {
  width: 200px;
  height: auto;
}
</style>
