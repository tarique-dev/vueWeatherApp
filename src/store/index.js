import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { apiKey, endpoint } from '../api'

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
      axios.get(endpoint + 'q=' + item + '&units=metric&APPID=' + apiKey + '')
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
    SET_CURRENT_WEATHER: (state, weatherReport) => {
      var initDate = new Date()
      state.currentWeatherReport = weatherReport.data.list.filter(item => {
        initDate.setHours(0, 0, 0, 0)
        var myDate = new Date(item.dt_txt)
        myDate.setHours(0, 0, 0, 0)
        var dateDiff = myDate - initDate
        if (dateDiff / (1000 * 3600) === 24) {
          initDate = myDate
          if (item.weather[0].id >= 200 && item.weather[0].id <= 232) {
            item.icon = '../src/assets/thunderstorm.png'
          }
          if (item.weather[0].id >= 300 && item.weather[0].id <= 321) {
            item.icon = '../src/assets/drizzle.png'
          }
          if (item.weather[0].id >= 500 && item.weather[0].id <= 531) {
            item.icon = '../src/assets/heavyrain.gif'
          }
          if (item.weather[0].id >= 801 && item.weather[0].id <= 804) {
            item.icon = '../src/assets/clouds.png'
          } else {
            item.icon = '../src/assets/clearsky.jpg'
          }
          item.show = false
          return item
        }
      })
    },
    REMOVE_CITY: (state, cityName) => {
      state.AllSelectedCities.splice(state.AllSelectedCities.indexOf(cityName), 1)
    },
    ADD_CITY: (state, cityName) => {
      state.AllSelectedCities.push(cityName)
    },
    TOGGLE_DESC: (state, index) => {
      state.currentWeatherReport[index].show = !state.currentWeatherReport[index].show
    }
  }

})
export default store
