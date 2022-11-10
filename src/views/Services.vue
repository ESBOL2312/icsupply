<template>
    <div class="container">
        <ImageBlocks class="image_blocks" :blocks="imageBlocks" />
    </div>
</template>

<script>
import Paragraph from '../components/Paragraph.vue';
import ImageBlocks from '../components/ImageBlocks.vue';

export default {
    name: 'Services',
    components: { ImageBlocks, Paragraph },
    data() {
        return {
            imageBlocks: [
                {
                    img: require('../assets/images/services_img.jpg'),
                    paragraph: 'ICsupply offers a full cycle of professional Procurement Service, provided by our highly qualified stuff with many years of experience at electronic market. We offers you a wide range of services of costly and time-consuming procurement.',
                },
                {
                    img: require('../assets/images/services_img2.jpg'),
                    paragraph: 'Providing Excess Inventory Management Service, we support our customers to deal with their excess stocks. Quick stock evaluation and components marketing allow ICsupply to turn waste goods from their warehoused to a fresh cash flow.',
                },
                {
                    img: require('../assets/images/services_img3.jpg'),
                    paragraph: 'Our company established trustworthy relations with a wide range of distributors and suppliers of all sorts of electronic components and devices. As well as purchasing from distributors, we are also working directly with factories and manufacturers across the world. In addition, ICsupply has proven itself as a reliable supplier of discontinued and allocated components.',
                },
                {
                    img: require('../assets/images/services_img4.jpg'),
                    paragraph: 'Professional procurement service also includes control for quality of supplied goods. Our qualified warehouse staff has a sharp eye for every discrepancy that can cause discomfort to our customers uncomfortable. When receiving goods, ICSupply staff always checking integrity and quality of packaging. We can make visual inspection and solderability test. For any special customer request, we cooperate with professional testing laboratories and facilities.',
                },
            ],
        };
    },
};
</script>

<style scoped>
.image_blocks {
    margin: 40px 0 81px 0;
}
</style>
<style>
@media screen and (max-width: 768px) {
    .image_blocks {
        margin: 20px 0 41px 0 !important;
    }
}

</style>
