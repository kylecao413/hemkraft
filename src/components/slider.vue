<template>
  <div class="box"><span>Household info</span><span>Bathrooms</span><span>Appliances</span><span>Done</span></div>
  //slider
  <div class="block">
    <span class="demonstration">Default value</span>
    <el-slider v-model="value1"></el-slider>
  </div>
  <div> <h2 ref="attrs">{{banner}}</h2> </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      value1: 50,
      banner: "This is a banner"
    }
  },
  methods: {
    // getBanner() {
    //   return this.banner;
    // }
  }
}
</script>
<style scoped>
.box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background-color: #f2f2f2;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
}
</style>
