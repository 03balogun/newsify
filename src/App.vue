<template>
  <ion-app id="app">
    <side-menu/>
    <div class="ion-page" main>
      <app-header/>
      <div class="padding">
        <router-view/>
      </div>
    </div>
    <ion-menu-controller/>
  </ion-app>
</template>

<script>
  import sideMenu from './components/side-menu';
  import appHeader from './components/header';

  export default {
    name: 'App',
    components: {
      sideMenu,
      appHeader,
    },
  };
</script>

<style>
  body {
    margin: 0px !important;
  }

  .text-center {
    text-align: center !important;
  }
  .padding{
    padding: 16px !important;
  }
  .title {
    font-size: 20px;
  }

  .mt-15 {
    margin-top: 15px !important;
  }
  .mr-15 {
    margin-right: 15px !important;
  }
  .icon-color {
    color: #424242bd;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
