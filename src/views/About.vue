<template>
    <div class="container">
        <Paragraph class="about_paragraph" margin="40px 0 0 0">
            ICsupply is a leading professional supplier of electronic devices and components. We offer to our customers
            a wide range of supplying products including all kinds of active and passive electronic components, metering
            tools and instruments, telecommunication devices.
        </Paragraph>
        <img class="about_img" style="margin-top: 40px;"
             src="../assets/images/about_img.jpg" alt="">
        <Paragraph class="about_paragraph" margin="40px 0 0 0">
            We serving customers needs in many industries, focusing mainly on Telecommunications and Industrial
            Automation markets. Having a solid experience in supplying of electronic components and devices, ICsupply
            provide customers with reliable offers in a short time. Along with professional Procurement Service, we also
            offer engineering support and Testing services to fully satisfy any customer need.
        </Paragraph>
        <Paragraph class="about_paragraph" margin="60px 0 75px 0">
            The priority of our company is to always meet the expectations of our customers in terms of quality, product
            variety and service. A good deal is only one where both parties are satisfied.
        </Paragraph>
    </div>
</template>

<script>
import Paragraph from '../components/Paragraph.vue';

export default {
    name: 'About',
    components: { Paragraph },
};
</script>

<style scoped>
.about_img {
    width: 100%;
    border-radius: 6px;
}
</style>
<style>
@media screen and (max-width: 1200px) {
    .about_paragraph {
        font-size: 20px !important;
    }
}

@media screen and (max-width: 992px) {
    .about_paragraph {
        margin-top: 30px !important;
        font-size: 18px !important;

    }
}

@media screen and (max-width: 768px) {
    .about_paragraph {
        margin-top: 20px !important;
        font-size: 16px !important;
        line-height: 20px !important;
    }
}

@media screen and (max-width: 400px) {
    .about_paragraph {
        margin-top: 15px !important;
        font-size: 14px !important;
        line-height: 18px !important;
    }
}
</style>
