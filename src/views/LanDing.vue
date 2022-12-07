<template>
    <div class="design">
            
            <router-link to="/todo" src="./ToDo.vue">ToDo</router-link><br/><br /><br />
            
            <router-link to="/comic" src="./ComicPage.vue">ComicPage </router-link>
            <!-- <router-link to="/todo">ToDo</router-link>
            
            <router-link to="/comic">ComicPage </router-link> -->
    </div>

</template>
<script>
import ToDo from './ToDo.vue'
import ComicPage from './ComicPage.vue'
export default {
    name: "LanDing",

    data() {
        return {
            
        };
    },
    
        components: {
            ToDo, ComicPage
        }
    }

</script>
<style>
.design {
    width: 30%;
    padding: 10px 18px;
    font-size: 18px;
    margin-bottom: 16px;
}

.design {
    size: 4px;
    font-size: large;
    cursor: pointer;
    font-style: normal;
    font-family: 'Courier New', Courier, monospace;

}

.design {
    margin-bottom: 12px;
    /* display: flex; */
    align-items: center;
    justify-content: center;

}
</style>
