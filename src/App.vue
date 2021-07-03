<template>
  <WeatherBody />
</template>

<script>
  import WeatherBody from "./components/WeatherBody.vue";
  export default {
    components:{
      WeatherBody
    }
  }
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style lang="scss">

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: 'montserrat', sans-serif;
}
</style>
