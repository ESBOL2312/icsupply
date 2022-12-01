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
    computed:{
        imageBlocks() {
            return [
                {
                    img: require('../assets/images/services_img.jpg'),
                    paragraph: this.$t('services.ph1')
                },
                {
                    img: require('../assets/images/services_img2.jpg'),
                    paragraph: this.$t('services.ph2')
                },
                {
                    img: require('../assets/images/services_img3.jpg'),
                    paragraph:  this.$t('services.ph3')
                },
                {
                    img: require('../assets/images/services_img4.jpg'),
                    paragraph: this.$t('services.ph4')
                },
            ]
        }
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
