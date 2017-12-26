<template >
  <div id="cities">
   <v-layout>
    <v-flex>
      <v-card>
        <v-toolbar color="cyan" dark>
          
          <v-toolbar-title>Current Selections</v-toolbar-title>
          <v-spacer></v-spacer>
          
        </v-toolbar>
        <v-list two-line>
          <template v-for="(currentCity,index) in AllSelectedCities" >
          
            <v-list-tile avatar  v-bind:key="index" @click="getWeatherReport(currentCity)">
              <v-list-tile-content>
              <router-link v-bind:to="'/cities/'+currentCity"><v-list-tile-title v-html="currentCity"></v-list-tile-title> </router-link>
                <!-- <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title> -->
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
    <!-- <ul>

     <li v-for="(currentCity,index) in AllSelectedCities" :key="index" @click="getWeatherReport(currentCity)"> <router-link v-bind:to="'/cities/'+currentCity">{{currentCity}}</router-link></li>
    </ul> -->
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'cities',
 data() {
    return {
      msg: "This is city page",
     
    };
  },
  methods:{
    getWeatherReport:function(city_name){
      this.$store.dispatch('GET_CURRENT_WEATHER',city_name);
    }
  },
  computed:mapState([
    'AllSelectedCities'
  ]),
}
</script>
<!-- styling for the component -->
<style>
#about {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.card ul{
  max-height: 200px;
  overflow: auto;
}
#cities{
  width:100%;
}
a{
  color: #000 !important;
    text-decoration: none !important;
}
</style>