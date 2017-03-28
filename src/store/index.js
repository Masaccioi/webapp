import Vue from 'vue'
import Vuex from 'vuex'
import resource from 'vue-resource'
Vue.use(resource)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentCity: 'ip',
    cityLists: [],
    data: ['aa', 'bb']
  },
  getters: {
    show: state => state.data
  },
  actions: {
    GET_HOURLY: ({commit}) => {
      let url = 'https://crossorigin.me/https://api.seniverse.com/v3/weather/hourly.json?key=ia5o9dx2c8gailyr&language=zh-Hans&unit=c&start=0&hours=24'
      url = url + 'location=' + this.currentCity
      console.log('aa')
      this.$http.get(url)
        .then(response => {
          commit('GET_DATA', {response})
        })
        .catch(response => {
          console.log(response)
        })
    }
  },
  mutations: {
    GET_CITY: (state, {city}) => {
      state.currentCity = city
    },
    GET_DATA: (state, {data}) => {
      state.data = data
    }
  }
})
export default store
