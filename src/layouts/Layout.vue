<template>
   
    <Navbar/>
    <main>
      <router-view/>
    </main>
</template>

<script>
import Navbar from "@/components/Navigation.vue";
    export default {
        name:'layout',
        components:{
            Navbar
        }
    }
</script>
<style lang="scss" scoped>

</style>