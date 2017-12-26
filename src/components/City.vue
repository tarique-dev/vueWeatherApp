<template>
<v-layout row>
      <v-flex xs4 v-for="(item,index) in weather" :key="index">
      
      <v-card>
        <v-card-media
          :src="item.icon"
          height="200px"
        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{item.main.temp}}</div>
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
          <span class="subheading">Min-temp</span>{{item.main.temp_min}}<br>
          <span class="subheading">Max-temp</span>{{item.main.temp_max}}<br>
          <span class="subheading">Humidity</span>{{item.main.humidity}}<br>
          <span class="subheading">Wind Speed</span>{{item.wind.speed}}<br>


          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "city",
  data: () => ({}),
  computed: mapState({
    weather: state => state.currentWeatherReport
  }),
  methods: {
    toggleWeatherDetail: function(index) {
      this.$store.dispatch("TOGGLE_DESC", index);
    }
  }
};
</script>