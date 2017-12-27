<template >
  <div id="cities">
     <v-card-text>
    <p style="position:absolute;right: 20%;" class="display-3 ">{{$route.params.city}}</p>
     </v-card-text>
      <v-flex xs6>
            <v-select
              v-bind:items="AllSelectedCities"
              v-model="current_city"
              label="Select"
              single-line
              v-on:change="onChange"
              bottom
              autocomplete
            ></v-select>
           </v-flex>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'cities',
  data () {
    return {
      current_city: this.$route.params.city
    }
  },
  methods: {
    onChange (currentCity) {
      this.getWeatherReport(currentCity)
      this.$router.push('/cities/' + currentCity)
    },
    getWeatherReport: function (cityName) {
      this.$store.dispatch('GET_CURRENT_WEATHER', cityName)
    }
  },
  computed: mapState(['AllSelectedCities'])
}
</script>
<!-- styling for the component -->
<style>
#about {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.card ul {
  max-height: 200px;
  overflow: auto;
}
#cities {
  width: 100%;
}
a {
  color: #000 !important;
  text-decoration: none !important;
}
</style>