<template>
    <div class="d-flex w-100 market_cards justify-content-center">
        <div v-for="(card, index) in marketCards" class="market_card d-flex flex-column align-items-center">
            <div class="image_wrapper">
                <img :src="card.img" alt="">
            </div>
            <Paragraph class="text-center card_paragraph" fontWeight="600" margin="0 0 30px 0">
                {{ card.paragraph }}
            </Paragraph>
        </div>
    </div>
</template>

<script>
import Paragraph from './Paragraph.vue';

export default {
    name: 'MarketCards',
    components: { Paragraph },
    data() {
        return {
            marketCards: [
                {
                    img: require('../assets/images/robot.svg'),
                    paragraph: 'Industrial Automation',
                },
                {
                    img: require('../assets/images/satellite.svg'),
                    paragraph: 'Telecommunication',
                },
                {
                    img: require('../assets/images/security_cam.svg'),
                    paragraph: 'Security and Surveillance',
                },
                {
                    img: require('../assets/images/spark.svg'),
                    paragraph: 'Energy',
                },
                {
                    img: require('../assets/images/car.svg'),
                    paragraph: 'Automotive',
                },
            ],
        };
    },
};
</script>

<style scoped>
.market_cards {
    gap: 5px;
}

.market_card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    background: #FFFFFF;
    border: 1px solid #EFEFEF;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
}

.image_wrapper {
    width: 158px;
    height: 158px;
    padding: 31px;
    background: #EEEEEE;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 18px;
    margin-bottom: 15px;
}

.image_wrapper img {
    width: 100%;
}

.card_paragraph {
    word-wrap: break-word;
    width: 95%;
}

@media screen and (max-width: 768px) {
    .market_cards {
        gap: 15px;
    }
}
</style>

<style>

@media screen and (max-width: 1200px) {
    .card_paragraph {
        font-size: 20px !important;
    }
}

@media screen and (max-width: 992px) {
    .card_paragraph {
        font-size: 18px !important;
        margin-bottom: 10px !important;

    }
    .image_wrapper {
        width: 100px !important;
        height: 100px !important;
        padding: 21px !important;
    }
}

@media screen and (max-width: 768px) {
    .card_paragraph {
        font-size: 16px !important;
        line-height: 20px !important;
    }
    .market_cards {
        flex-wrap: wrap !important;
    }
    .market_card {
        width: 25% !important;
    }
}

@media screen and (max-width: 575px) {
    .card_paragraph {
        font-size: 12px !important;
        line-height: 12px !important;
    }

    .market_card {
        width: 25% !important;
    }

    .market_card img {
        width: 70% !important;
    }
    .image_wrapper {
        width: 70% !important;
        height: 80px !important;
        padding: 0 !important;
        margin: 10px 0 !important;
    }
    .market_cards {
        gap: 10px 5px !important;
    }
}
@media screen and (max-width: 440px) {
    .image_wrapper {
        width: 90% !important;
        height: 80px !important;
        padding: 0 !important;
        margin: 10px 0 !important;
    }
}

</style>