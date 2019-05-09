<template>
    <div class="padding">
        <h2>{{headline.title}}</h2>
        <p>
            <ion-icon name="person" class="icon-color"></ion-icon> {{headline.author || '--'}}<br/>
            <ion-icon name="globe" class="icon-color"></ion-icon> {{headline.source.name}}<br/>
            <ion-icon name="calendar" class="icon-color"></ion-icon> {{headline.publishedAt}}<br/>
        </p>
        <ion-img :src="headline.urlToImage"></ion-img>
        <p>
            {{headline.content || headline.description}}
        </p>
        <ion-button :href="headline.url" expand="block">Read full story on {{headline.source.name}}</ion-button>

        <!--<ion-button color="primary" fill="solid" block>-->
            <!--Read full story-->
        <!--</ion-button>-->
        <!--{{headline.source}}-->
    </div>
</template>

<script>
    export default {
      name: 'detail',
      data() {
        return {
          headline: {
            source: {},
          },
        };
      },
      computed: {
        headlines() {
          return this.$store.getters.getHeadlines;
        },
      },
      beforeMount() {
        if (!this.headlines[this.$route.params.index]) {
          this.$router.push({ path: '/' });
        }
      },
      mounted() {
        this.headline = this.headlines[this.$route.params.index];
      },
    };
</script>

<style scoped>

</style>
