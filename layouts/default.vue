<template>
  <div>
    <v-app>
      <div class="wrapper-project">
        <Menu/>
          <nuxt/>
        <Footer/>
      </div>
    </v-app>
  </div>
</template>

<script>
  import Menu from '~/components/MainPage/Menu.vue'
  import Footer from '~/components/MainPage/Footer.vue'
  export default {
    components: {
      Menu,
      Footer
    }
  }
</script>


<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.wrapper-project{
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>

