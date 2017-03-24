<template>
  <header>
    <i class="el-icon-menu menu"></i>
    <div>
      <span>{{data.results[0].location.name}}</span>
      <i class=""></i>
    </div>
    <i class="el-icon-setting setting"></i>
    <div>{{data.results[0].hourly[0].text}}</div>
  </header>
  
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      currentCity: this.$store.state.currentCity,
      data: '',
      msg: ''
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    fetch1 () {
      let url = 'https://crossorigin.me/https://api.seniverse.com/v3/weather/now.json?&key=ia5o9dx2c8gailyr&language=zh-Hans&unit=c&'
      url = url + 'location=' + this.currentCity
      this.$http.get(url)
        .then(response => {
          this.data = response.data
          console.log(this.data)
        })
        .catch()
    },
    fetch () {
      let url = 'https://crossorigin.me/https://api.seniverse.com/v3/weather/hourly.json?key=ia5o9dx2c8gailyr&location=beijing&language=zh-Hans&unit=c&start=0&hours=24'
      // url = url + 'location=' + 'ip'
      this.$http.get(url)
        .then(response => {
          this.data = response.data
          console.log(this.data)
        })
        .catch(response => {
          console.log(response)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  width:90%;
  margin:0 auto;
  font-size:30px;
}
header div{
  display:inline-block;
}
.menu{
  float:left;
}
.setting{
  float:right;
}
</style>
