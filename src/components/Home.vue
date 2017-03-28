<template>
  <header>
    <i class="el-icon-menu menu"></i>
    <div>
      <span></span>
      <i class=""></i>
    </div>
    <i class="el-icon-setting setting"></i>
    <div>{{show}}</div>
  </header>
  
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
      city: this.$store.state.currentCity,
      tempNow: '',
      tempHourly: [],
      tempdaily: []
    }
  },
  created () {
    this.$store.dispatch('GET_HOURLY')
  },
  computed: mapGetters([
    'show'
  ])
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
