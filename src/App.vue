<template>
  <v-app id="app">
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-title>Weather App</v-toolbar-title>
          <router-link xs6 v-bind:to="'/'"><v-btn flat>Home</v-btn> </router-link>
          <router-link xs6  v-bind:to="'/cities'"><v-btn flat>Cities</v-btn></router-link>
      </v-toolbar>
    <v-content>
       <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
           <router-view></router-view>
      </v-flex>
    </v-layout>
       </v-container>
     </v-content>
     <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
   
  </v-app>
</template>
<script>
export default {
  name: 'app',
  data () {
      return {
        drawer: null,
      }},
  mounted: function () {
   
  }
}
</script>


