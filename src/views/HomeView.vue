<script>
import LanDing from './LanDing.vue'

export default {
  name: "HomeView",

  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      console.warn("loggedin");

    },
    components: {
      LanDing
    }
  }
}
</script>

<template>
  <div class="wrapper">
  
  
  
    <RouterLink to="/">Home</RouterLink>
  
    <div>
      EMAIL:<input type="email" placeholder="Enter email" /></div>
    <div><br />
      PASSWORD:<input type="password" placeholder="Enter password" /></div><br />
    <div><button v-on:click=login() src="./views/LanDing">LOGIN</button>This button gives message in console as "loggedin"
      everytime it gets triggered
    </div><br />
    <div>
      <router-link to="/land" src="./views/LanDing.vue">LOGIN</router-link> Onclicking this link we get other two components
    </div><br />
    <!-- <div> 
          <router-link to="/comic" src="./views/ComicPage.vue" >ComicPage </router-link></div><br /> -->
  
  
  </div>
  
  
  <RouterView />
</template>
