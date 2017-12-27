<template>
<v-layout row >
   <v-flex xs4 v-for="(item,index) in weather" :key="index">
      <v-card><span class="subheading">{{new Date(item.dt_txt.substr(0,10)).toString().substr(0,15)}}</span> 
        <v-card-media
          :src="item.icon"
          height="200px"
        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class="headline">Temp {{item.main.temp}} &#8451;</div>
            <span class="grey--text">{{item.weather[0].description}}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon @click="toggleWeatherDetail(index)">
            <v-icon>{{ item.show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="item.show">
          <span class="subheading">Min-temp</span><span class="extraDesc">{{item.main.temp_min}} &#8451;</span><br>
          <span class="subheading">Max-temp</span> <span class="extraDesc">{{item.main.temp_max}} &#8451;</span><br>
          <span class="subheading">Humidity</span><span class="extraDesc">{{item.main.humidity}}</span><br>
          <span class="subheading">Wind Speed</span><span class="extraDesc">{{item.wind.speed}}</span><br>
        </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'city',
  data: () => ({}),
  computed: mapState({
    weather: state => state.currentWeatherReport
  }),
  methods: {
    toggleWeatherDetail: function (index) {
      this.$store.dispatch('TOGGLE_DESC', index)
      setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight)
      })
    }
  }
}
</script>
<style>
.card__media__background {
  background-size: contain !important;
}
.extraDesc {
  margin-left: 12px;
  font-weight: 500;
  font-size: large;
}
</style>
