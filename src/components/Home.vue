<template>
<div class="home"><br>
 <v-alert icon="new_releases" dismissible  v-model="alert"  transition="scale-transition" color="error">
      City already in the list,please try a different name
    </v-alert>
    <h1>{{ msg }}</h1> <ul><br>
      <li v-for="(currentCity,index) in AllSelectedCities" :key="index"><div class="text-xs-center">
          <v-chip close color="green" text-color="white" @input="deleteFromList(currentCity)" @click="showWeatherReport(currentCity)">
      <v-icon small color="white">visibility</v-icon>
     {{currentCity}}</v-chip>
        </div></li>
    </ul>
      <v-form>
        <v-flex >
            <v-select
              v-bind:items="cities"
              v-model="my_city"
              label="City"
              autocomplete
             ></v-select>
          </v-flex>
   </v-form>
      <v-btn  color="primary" @click="addToList" dark>Add City</v-btn>
 </div>

</template>

<script>
import cities from '../../data/cities'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Select your cities of interest',
      alert:false,
      cities: cities,
      my_city: ''
    }
  },
  computed: mapState(['AllSelectedCities']),
  methods: {
    showWeatherReport (currentCity) {
      this.$store.dispatch('GET_CURRENT_WEATHER', currentCity)
      this.$router.push('/cities/' + currentCity)
    },
    addToList: function () {
      if (this.$store.state.AllSelectedCities.indexOf(this.my_city)<0){
      this.$store.dispatch('ADD_CITY', { city: this.my_city })
      this.my_city = '';
      }
else{
  this.alert=!this.alert;
}
    
    },
    deleteFromList: function (cityToBeDeleted) {
      this.$store.dispatch('REMOVE_CITY', { city: cityToBeDeleted })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
