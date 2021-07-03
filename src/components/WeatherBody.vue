<template>
  <div id="app" :class="typeof weather.main != 'undefined' && weather.main.temp > 16 ? 'warm' : ''" >
    <main>
      <div class="search-box">
        <input 
          type="text" 
          class="search-bar" 
          placeholder="Search ..."
          v-model="query"
          @keyup.enter="fetchWeather"
        >
      </div>

      <div class="weather-wrap" v-if= "typeof weather.main != 'undefined'">
        <weather-wrap :weather="weather" />
      </div>

      <div class="error-wrap" v-else-if= "weather.cod == 404">
          <not-found />
      </div>
    </main>
  </div>
</template>

<script>
  import {apiKey} from "../../env";
  import WeatherWrap from "./WeatherWrap.vue";
  import NotFound from "./NotFound.vue";
  export default{
    name: 'app',
    data(){
      return{
        api_key: apiKey,
        url_base: 'https://api.openweathermap.org/data/2.5/',
        query: '',
        weather: {}
      }
    },
    components: {
        WeatherWrap,
        NotFound
    },
    methods: {
      fetchWeather(){
        console.log(this.query)
        fetch(`${this.url_base}weather?q=${this.query}&units=metric&&APPID=${this.api_key}`)
        .then(res =>{
          // console.log(res);
            return res.json();
        })
        .then(res => this.setResults(res))
        .catch((err) =>{
          console.error("an error has occured");
        });        
      },
      setResults(results){
        //console.log(results.main);
        console.log(results);
        //console.log(results.cod == 404)
        //console.log(results.weather[0]);
        this.weather = results;
      }
    }
  }
</script>

<style lang="scss">
#app{
  background-image: url('../assets/cold-bg.jpg');
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;

  .warm{
    background-image: url('../assets/warm-bg.jpg');
  }
  main{
    min-height: 100vh;
    padding: 25px;

    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
  }
}

.search-box{
  width: 100%;
  margin-bottom: 30px;

  .search-bar{
    display: block;
    width: 100%;
    padding: 15px;

    color: #313131;
    font-size: 20px;

    appearance: none;
    border: none;
    outline: none;
    background: none;

    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.45);
    border-radius: 0 16px;
    transition: 0.4s;

    &:focus{
      box-shadow: 0 0 16px rgba(0, 0, 0, 0.25);
      background-color: rgba(255, 255, 255, 0.75);
      border-radius: 16px 0;
    }
  }
}
</style>