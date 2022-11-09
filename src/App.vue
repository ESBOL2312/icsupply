<template>
    <div id="app">
        <Navbar />
        <transition name="fade" mode="out-in" appear>
            <router-view />
        </transition>
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


.fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
}

.fade-enter, .fade-leave-active {
    opacity: 0;
}
</style>