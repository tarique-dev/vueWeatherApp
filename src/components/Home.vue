<template>
<div class="home">
    <h1>{{ msg }}</h1> <ul>
      <li v-for="(currentCity,index) in AllSelectedCities" :key="index"><div class="text-xs-center">
          <v-chip close  @input="deleteFromList(currentCity)" @click="showWeatherReport(currentCity)">{{currentCity}}</v-chip>
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
import cities from "../../data/cities";
import { mapState } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      msg: "Select your city of interest",
      cities: cities,
      my_city: ""
    };
  },
  computed: mapState(["AllSelectedCities"]),
  created: function() {},
  methods: {
    showWeatherReport(current_city){
       this.$store.dispatch("GET_CURRENT_WEATHER", current_city);
           this.$router.push("/cities/" + current_city);
    },
    addToList: function() {
      this.$store.dispatch("ADD_CITY", { city: this.my_city });
      this.my_city = "";
    },
    deleteFromList: function(cityToBeDeleted) {
      this.$store.dispatch("REMOVE_CITY", { city: cityToBeDeleted });
    }
  }
};
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
