import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { api_key, endpoint } from '../api'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    AllSelectedCities: [],
    currentWeatherReport: [],
    current_city: ''
  },
  actions: {
    ADD_CITY: function ({ commit }, item) {
      commit('ADD_CITY', item.city)
    },
    REMOVE_CITY: function ({ commit }, item) {
      commit('REMOVE_CITY', item.city)
    },
    GET_CURRENT_WEATHER: function ({ commit, state }, item) {
      axios.get(endpoint + 'q=' + item + '&units=metric&APPID=' + api_key + '')
        .then(response => {
          commit('SET_CURRENT_WEATHER', response)
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    TOGGLE_DESC: function ({ commit }, item) {
      commit('TOGGLE_DESC', item)
    }
  },
  mutations: {
    SET_CURRENT_WEATHER: (state, weather_report) => {
      state.currentWeatherReport = weather_report.data.list.slice(0, 5).map(item=>{
         item.show=false;
        item.icon="http://openweathermap.org/img/w/"+item.weather[0].icon+".png";
         return item
       });

    },
    REMOVE_CITY: (state, city_name) => {
      state.AllSelectedCities.splice(state.AllSelectedCities.indexOf(city_name), 1);
    },
    ADD_CITY: (state, city_name) => {

      state.AllSelectedCities.push(city_name)
    },
    TOGGLE_DESC: (state,index) => {
      state.currentWeatherReport[index].show = !state.currentWeatherReport[index].show
    }
  },
  getters: {

  }

})
export default store
