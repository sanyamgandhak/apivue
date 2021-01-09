<template>
  <div class="content">
           <button @click="created()">get request</button>
     
    <button @click="put()">put request</button>
    <button @click="post()">post request</button>
    <button @click="patch()">patch request</button>
    <button @click="delet()">delete request</button><hr>
       <label>{{datas}}</label>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'api',
  data(){
      return{
          datas:[],
      }
  },
mounted(){

},
methods:{
  created() {
    axios.get("https://reqres.in/api/users?page=2").then((result) => {
      console.log(result.data);
      this.datas = result.data
    })
  },
  put() {
    axios.put("https://reqres.in/api/users/2").then((result) => {
      console.log(result.data);
      this.datas = result.data
    })
  },
   post() {
    axios.post("https://reqres.in/api/users").then((result) => {
      console.log(result.data);
      this.datas = result.data
    })
  },
   patch() {
    axios.post("https://reqres.in/api/users/2").then((result) => {
      console.log(result.data);
      this.datas = result.data
    })
   },
    delet() {
    axios.delete("https://reqres.in/api/users/2").then((result) => {
      console.log(result.data);
      this.datas = result.data
    })
  },
}
};

</script>

<style scoped lang="scss">
</style>
