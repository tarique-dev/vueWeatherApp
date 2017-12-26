<template>
<v-layout row>
      <v-flex xs4 v-for="(item,index) in weather" :key="index">
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{item.main.temp}}</div>
            <span class="grey--text">{{item.weather[0].description}}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'city',
   data: () => ({
      show: false,
      items:[1,2,4,5],
     // weather:[]
    }),
   computed:mapState({
         weather: (state)=> {

          return state.currentWeatherReport
           },
   }),
    methods:{
       parseWeatherState:function() {
         debugger
        console.log(this.weather)
      }
    },
     created: function() {
       this.parseWeatherState();
     }
}
</script>