<template>
    <div class="error-message">
      <h3>404 NOT FOUND</h3>
      <p>The city name you have typed was not found, try again with another name</p>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.error-message{
    text-shadow: 3px 6px rgba(0, 0, 0, 0.10);
    background-color: rgba(255, 255, 255, 0.35);
    border-radius: 16px;
    margin: 30px 0;
    box-shadow: $weather-shadow;
    h3{
        display: inline-block;
        padding: 5px 15px;
        color: rgb(253, 253, 253);
        font-size: 82px;
        font-weight: 900;
        text-align: center;
    }
    p{
        display: inline-block;
        padding: 10px 25px;
        color: rgb(253, 253, 253);
        font-size: 55px;
    }
}
</style>