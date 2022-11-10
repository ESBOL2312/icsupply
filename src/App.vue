<template>
    <div id="app">
        <Navbar />
        <div class="content_wrapper">
            <transition name="fade" mode="out-in" appear>
                <router-view />
            </transition>
        </div>
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

.content_wrapper {
    padding-top: 90px;
}

@media screen and (max-width: 992px) {

    .content_wrapper {
        padding-top: 70px !important;
    }
}

@media screen and (max-width: 768px) {
    .content_wrapper {
        padding-top: 60px !important;
    }
}
</style>