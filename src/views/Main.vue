<template>
    <div class="container">
        <MarketCards class="market_cards_wrapper" />
        <Slider
            class="slider_wrapper"
            :slides="slides"
        />
        <ImageBlocks class="image_blocks" :blocks="imageBlocks" />
        <Paragraph margin="40px 0 100px 0" class="main_paragraph">
            We serving customers needs in many industries, focusing mainly on Telecommunications and Industrial
            Automation markets. Having a solid experience in supplying of electronic components and devices, ICsupply
            provide customers with reliable offers in a short time. Along with professional Procurement Service, we also
            offer engineering support and Testing services to fully satisfy any customer need.
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
    data() {
        return {
            slides: [
                {
                    title: 'ICsupply is a leading professional supplier of electronic devices and components',
                    img: require('../assets/images/main_slider_img1.jpg'),
                    link: { name: 'About' },
                },
                {
                    title: 'We serving customers needs in many industries, focusing mainly on Telecommunications and Industrial Automation markets.',
                    img: require('../assets/images/main_slider_img2.jpg'),
                    link: { name: 'Industries' },
                },
                {
                    title: 'Along with professional Procurement Service, we also offer engineering support and Testing services to fully satisfy any customer need.',
                    img: require('../assets/images/main_slider_img3.jpg'),
                    link: { name: 'Products' },
                },
            ],
            imageBlocks: [
                {
                    img: require('../assets/images/services_img.jpg'),
                    paragraph: 'ICsupply offers a full cycle of professional Procurement Service, provided by our highly qualified stuff with many years of experience at electronic market. We offering you a wide range of services of costly and time-consuming procurement.',
                },
                {
                    img: require('../assets/images/services_img2.jpg'),
                    paragraph: 'Providing Excess Inventory Management Service, we are helping our customers to deal with their excess stocks. Quick stock evaluation and components marketing allow ICsupply to turn waste goods from their warehoused to a fresh cash flow.',
                },
            ],
        };
    },
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
