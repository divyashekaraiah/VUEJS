<script>
import { RouterLink, RouterView } from 'vue-router'
// import ToDo from './views/ToDo.vue'
// import LanDing from './views/LanDing.vue'
import HomeView from './views/HomeView.vue'
export default {
  name: "Homeview",

  data() {
    return {

    }
  },
  components: {
      HomeView,
    }
  }


</script>

<template>
  
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
        <!-- <RouterLink to="/">Home</RouterLink> -->
      <!-- <HomeView/> -->
      
         <!-- <RouterLink to="/">Home</RouterLink> -->
        
        <!-- <div>
        EMAIL:<input type="email" placeholder="Enter email"/></div>
        <div><br/> -->
          <!-- PASSWORD:<input type="password" placeholder="Enter password"/></div><br />
        <div><button v-on:click=login() src="./views/LanDing">LOGIN</button>This button gives message in console as "loggedin" everytime  it gets triggered
            </div>
        <div> -->
        <!-- <router-link to="/land" src="./views/LanDing.vue">LOGIN</router-link></div><br /> -->
        <!-- <div> 
        <router-link to="/comic" src="./views/ComicPage.vue" >ComicPage </router-link></div><br /> --> 
      
      
    </div>
  

  <RouterView/>
</template>

<style scoped>


.logo {
  display: block;
  margin: 0 auto 2rem;
}






  
</style>
