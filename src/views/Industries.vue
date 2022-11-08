<template>
    <div class="container" style="margin-top: 40px;">
        <MarketCards />
        <Paragraph class="industries_paragraph" margin="60px 0 400px 0">
            We serving customers needs in many industries, focusing mainly on Telecommunications and Industrial
            Automation markets. Having a solid experience in supplying of electronic components and devices, ICsupply
            provide customers with reliable offers in a short time. Along with professional Procurement Service, we also
            offer engineering support and Testing services to fully satisfy any customer need.
        </Paragraph>
    </div>
</template>

<script>
import Paragraph from '../components/Paragraph.vue';
import MarketCards from '../components/MarketCards.vue';

export default {
    name: 'Industries',
    components: { MarketCards, Paragraph },
};
</script>

<style scoped>
.industries_img {
    width: 100%;
    margin: 60px 0 64px 0;
    border-radius: 6px;
}
</style>
<style>
@media screen and (max-width: 1200px) {
    .industries_paragraph {
        font-size: 20px !important;
        margin: 50px 0 350px 0 !important;
    }
}

@media screen and (max-width: 992px) {
    .industries_paragraph {
        margin: 30px 0 250px 0 !important;
        font-size: 18px !important;

    }
}

@media screen and (max-width: 768px) {
    .industries_paragraph {
        margin: 20px 0 200px 0 !important;
        font-size: 16px !important;
        line-height: 20px !important;
    }
}

@media screen and (max-width: 400px) {
    .industries_paragraph {
        margin: 15px 0 150px 0 !important;
        font-size: 14px !important;
        line-height: 18px !important;
    }
}
</style>
