<template>
    <b-navbar-nav class="navigation">
        <b-nav-item>
            <router-link :to="{ name: 'About' }">About</router-link>
        </b-nav-item>
        <b-nav-item>
            <router-link :to="{ name: 'Industries' }">Industries / Markets</router-link>
        </b-nav-item>
        <b-nav-item>
            <router-link :to="{ name: 'Products' }">Products</router-link>
        </b-nav-item>
        <b-nav-item>
            <router-link :to="{ name: 'Services' }">Our Services</router-link>
        </b-nav-item>
        <b-nav-item>
            <router-link :to="{ name: 'Contacts' }">Contact Us</router-link>
        </b-nav-item>
    </b-navbar-nav>
</template>

<script>
export default {
    name: 'NavLinks',
};
</script>

<style scoped>
.navigation {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-left: 58px;
}

.navigation a {
    color: #333333;
    text-decoration: none;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
}

@media screen and (max-width: 1200px) {
    .navigation {
        margin-left: 18px;
        gap: 8px;
    }
}
</style>
