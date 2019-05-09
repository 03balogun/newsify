<template>
    <ion-header class="text-center" translucent>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-toggle>
                    <ion-button>
                        <ion-icon slot="icon-only" name="menu"></ion-icon>
                    </ion-button>
                </ion-menu-toggle>
            </ion-buttons>
            <ion-title>{{selectedCategory.name}}</ion-title>
        </ion-toolbar>
    </ion-header>
</template>

<script>
    export default {
      name: 'app-header',
      computed: {
        selectedCategory() {
          return this.$store.getters.getCurrentCategory;
    },
      },
    };
</script>

<style scoped>
</style>