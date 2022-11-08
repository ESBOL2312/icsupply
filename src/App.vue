<template>
    <div id="app">
        <Navbar />
        <router-view />
        <CustomFooter />
    </div>
</template>

<script>
import Navbar from './layouts/Navbar.vue';
import CustomFooter from './layouts/CustomFooter.vue';

export default {
    components: { Navbar, CustomFooter },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
}
</style>