<template>
    <div class="location-box">
        <div class="location">{{weather.name}}, {{weather.sys.country}}</div>
        <div class="date">{{dateBuilder()}}</div>
    </div>
    <div class="weather-box">
        <div class="temp">
            {{Math.round(weather.main.temp)}}°C
            <div class="feels-like-temp">
               Feels like: {{Math.round(weather.main.feels_like)}}°C
            </div>
            <div class="temp-variation">
              <img v-bind:src="`${image_url}${weather.weather[0].icon}.png`" alt="" class="weather-icon">
              <p class="max-temp">{{weather.main.temp_max.toFixed(1)}}°C</p>
              <p class="min-temp">{{weather.main.temp_min.toFixed(1)}}°C</p>
            </div>
        </div>
        
        <div class="weather">{{weather.weather[0].main}}</div>
    </div>
</template>

<script>
export default {
    data(){
      return{
        image_url: 'http://openweathermap.org/img/wn/'
      }
    },
    props: {
        weather: {
            type: Object,
            required: true
        }
    },
    methods:{
        dateBuilder(){
            let d = new Date();
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

            let day = days[d.getDay()];
            let date = d.getDate();
            let month = months[d.getMonth()];
            let year = d.getFullYear();

            return `${day}, ${date} ${month} ${year}`
        }
    }
}
</script>

<style lang="scss">
.location-box{
  .location{
    color: #FFF;
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
  }
  .date{
    color: #FFF;
    font-size: 20px;
    font-weight: 300;
    font-style: italic;
    text-align: center;
  }
}

.weather-box{
  text-align: center;

  .temp{
    display: inline-block;
    padding: 10px 25px;
    color: #FFF;
    font-size: 102px;
    font-weight: 900;

    text-shadow: $weather-shadow;
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 16px;
    margin: 30px 0;
    box-shadow: $weather-shadow;

    .feels-like-temp{
        font-size: 36px;
        padding: 7px 20px;

    }    
  }

  .temp-variation{
    padding: 10px 15px;
    color: #FFF;
    font-weight: 900;
    background-color: rgba(255, 255, 255, 0.481);
    border-radius: 16px;

    .weather-icon{
      vertical-align: text-bottom;
    }

    .max-temp{
      font-size: 33px;
    }

    .min-temp{
      font-size: 30px;
      color: rgb(245, 240, 240);
    }
  }

  .weather{
    color: #FFF;
    font-size: 48px;
    font-weight: 700;
    font-style: italic;
    text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  }
}
</style>