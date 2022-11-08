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
                    paragraph: 'ICsupply offers a full cycle of professional Procurement Service, provided by our highly qualified stuff with many years of experience at electronic market. We offering you a wide range of services of costly and time-consuming procurement.',
                },
                {
                    img: require('../assets/images/services_img2.jpg'),
                    paragraph: 'Providing Excess Inventory Management Service, we are helping our customers to deal with their excess stocks. Quick stock evaluation and components marketing allow ICsupply to turn waste goods from their warehoused to a fresh cash flow.',
                },
                {
                    img: require('../assets/images/services_img3.jpg'),
                    paragraph: 'Our company established trustworthy relations with a wide range of distributors and suppliers of all sorts of electronic components and devices. As well as purchasing from distributors, we also ordering directly from factories and manufacturers across the world. In addition, ICsupply has proven itself as a reliable supplier of discontinued and allocated components.',
                },
                {
                    img: require('../assets/images/services_img4.jpg'),
                    paragraph: 'Providing Excess Inventory Management Service, we are helping our customers to deal with their excess stocks. Quick stock evaluation and components marketing allow ICsupply to turn waste goods from their warehoused to a fresh cash flow.',
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
