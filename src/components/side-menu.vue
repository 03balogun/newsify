<template>
    <ion-menu>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Menu</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <ion-list>
                <ion-list-header>
                    Categories
                </ion-list-header>
                <ion-menu-toggle v-for="(category, index) of categories" :key="index" auto-hide="false">
                    <ion-item @click="changeCategory(category)" button>
                        <ion-icon slot="start" class="icon-color mr-15" :name='category.icon'></ion-icon>
                        <ion-label class="mt-15">
                            {{category.name}}
                        </ion-label>
                    </ion-item>
                </ion-menu-toggle>
            </ion-list>
        </ion-content>
    </ion-menu>
</template>

<script>
    import {categories} from '../settings';

    export default {
        name: "side-menu",
        data() {
            return {
                categories
            }
        },
        methods: {
            changeCategory(category) {
                this.$store.commit('changeCurrentCategory', category);
                this.$router.push({path: '/'})
            }
        }
    }
</script>

<style scoped>

</style>