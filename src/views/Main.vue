<template>
    <div class="container">
        <MarketCards class="market_cards_wrapper" />
        <Slider
            class="slider_wrapper"
            :slides="slides"
        />
        <ImageBlocks class="image_blocks" :blocks="imageBlocks" />
        <Paragraph margin="40px 0 100px 0" class="main_paragraph">
            {{$t('main.main_paragraph')}}
        </Paragraph>
    </div>
</template>

<script>
import Slider from '../components/Slider.vue';
import ComponentsSection from '../components/ImageBlocks.vue';
import ImageBlocks from '../components/ImageBlocks.vue';
import Paragraph from '../components/Paragraph.vue';
import MarketCards from '../components/MarketCards.vue';

export default {
    name: 'Main',
    components: { MarketCards, ImageBlocks, Paragraph, ComponentsSection, Slider },
    computed:{
        slides(){
            return [
                {
                    title: this.$t('main.slide1'),
                    img: require('../assets/images/main_slider_img1.jpg'),
                    link: { name: 'About' },
                },
                {
                    title: this.$t('main.slide2'),
                    img: require('../assets/images/main_slider_img2.jpg'),
                    link: { name: 'Industries' },
                },
                {
                    title: this.$t('main.slide3'),
                    img: require('../assets/images/main_slider_img3.jpg'),
                    link: { name: 'Products' },
                },
            ]
        },
        imageBlocks(){
            return  [
                {
                    img: require('../assets/images/services_img.jpg'),
                    paragraph: this.$t('main.components_block1')
                },
                {
                    img: require('../assets/images/services_img2.jpg'),
                    paragraph: this.$t('main.components_block2')
                },
            ]
        }

    }
};
</script>

<style scoped>

.image_blocks {
    margin: 81px 0 85px 0;
}

.slider_wrapper {
    margin-top: 50px;
}
.market_cards_wrapper {
    margin: 50px 0;
}

@media screen and (max-width: 768px) {
    .image_blocks {
        margin: 61px 0 65px 0 !important;
    }
}
@media screen and (max-width: 400px) {
    .image_blocks {
        margin: 21px 0 25px 0 !important;
    }
}
</style>

<style>
@media screen and (max-width: 1200px) {
    .main_paragraph {
        font-size: 20px !important;
    }
}

@media screen and (max-width: 992px) {
    .main_paragraph {
        margin-top: 30px !important;
        font-size: 18px !important;
    }
}

@media screen and (max-width: 768px) {
    .main_paragraph {
        margin-top: 20px !important;
        margin-bottom: 50px;
        font-size: 16px !important;
        line-height: 20px !important;
    }
    .slider_wrapper {
        margin-top: 25px !important;
    }
    .market_cards_wrapper {
        margin: 15px 0 !important;
    }
}

@media screen and (max-width: 400px) {
    .main_paragraph {
        margin-top: 10px !important;
        margin-bottom: 35px !important;
        font-size: 14px !important;
        line-height: 18px !important;
    }
    .slider_wrapper {
        margin-top: 10px;
    }
    .market_cards_wrapper {
        margin: 10px 0 !important;
    }
}
</style>
