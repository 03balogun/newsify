<template>
    <div>
        <ion-card v-if="headlines.length" v-for="(headline, index) of headlines"
                  :key="index" @click="detailScreen(index)">
            <ion-img :src="headline.urlToImage"></ion-img>
            <ion-card-header>
                <ion-card-subtitle>{{headline.source.name}}</ion-card-subtitle>
                <ion-card-title class="title">{{headline.title}}</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                <p>{{headline.content || headline.description}}</p>
            </ion-card-content>
        </ion-card>

        <div v-if="headlines.length === 0 && (!isLoading && !errorMessage)" class="text-center">
            <p>
                <ion-icon name="alert"></ion-icon>
                No article found for this category
            </p>
        </div>

        <content-placeholders v-if="isLoading" :rounded="true">
            <content-placeholders-img/>
            <content-placeholders-heading/>
        </content-placeholders>

        <div v-if="errorMessage && !isLoading" class="text-center">
            <p>
                <ion-icon name="alert"></ion-icon>
                {{errorMessage}}
            </p>
        </div>
    </div>
</template>

<script>
  import axios from 'axios';
  import { apiKey, country } from '../settings';

  export default {
    name: 'Content',
    mounted() {
      this.fetchNewsCategory();
    },
    data() {
      return {
        isLoading: true,
        errorMessage: null,
      };
    },
    computed: {
      selectedCategory() {
        return this.$store.getters.getCurrentCategory;
      },
      headlines() {
        return this.$store.getters.getHeadlines;
      },
    },
    watch: {
      selectedCategory(newCategory) {
        this.isLoading = true;
        this.headlines.length = 0;
        this.fetchNewsCategory(newCategory);
      },
    },
    methods: {
      fetchNewsCategory() {
        axios.get(`https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&category=${this.selectedCategory.name}&country=${country}`)
          .then(({ data: { articles } }) => this.$store.commit('setHeadlines', articles))
          .catch((error) => {
            this.errorMessage = error.message;
          })
          .finally(() => {
            this.isLoading = false;
          });
      },
      detailScreen(index) {
        this.$router.push({ path: `/headline/${index}` });
      },
    },
  };
</script>

<style scoped>

</style>
