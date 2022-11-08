<template>
    <div class="footer_wrapper">
        <div class="container h-100">
            <div class="d-flex align-items-center h-100 justify-content-between">
                <div class="footer_body d-flex align-items-center h-100">
                    <img class="logo" src="../assets/images/logo.svg" alt="">
                </div>
                <ContactsSection />
            </div>
        </div>
    </div>
</template>

<script>
import ContactsSection from '../components/ContactsSection.vue';

export default {
    name: 'Footer',
    components: { ContactsSection },
};
</script>

<style scoped>
.footer_wrapper {
    border-top: #D9D9D9 1px solid;
    height: 120px;
}

.footer_wrapper .logo {
    width: 247px;
}

.footer_body p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #969696;
    margin: 0 0 0 30px;
}

.footer_wrapper .contacts a {
    color: #333333;
    text-decoration: none;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
}

.footer_wrapper .contacts a {
    font-size: 10px;
}

.footer_wrapper .contacts img {
    margin: 0 12px 2px 0;
}

@media screen and (max-width: 1200px) {
    .footer_wrapper .logo {
        width: 200px;
    }
}

@media screen and (max-width: 768px) {
    .footer_wrapper .logo {
        width: 150px;
    }

    .footer_body p {
        font-size: 10px;
    }

    .footer_wrapper .contacts a {
        font-size: 8px;
        line-height: 10px;
    }

    .footer_wrapper .contacts img {
        width: 10px;
        margin: 0 6px 2px 0;
    }

    .footer_wrapper {
        height: 100px;
    }
}

@media screen and (max-width: 510px) {
    .footer_wrapper .logo {
        width: 120px;
    }

    .footer_body p {
        font-size: 8px;
        margin: 0 0 0 10px;
    }

    .footer_wrapper .contacts a {
        font-size: 6px;
    }

    .footer_wrapper .contacts img {
        width: 8px;
        margin: 0 4px 0 0;
    }

    .footer_wrapper {
        height: 80px;
    }
}
</style>
