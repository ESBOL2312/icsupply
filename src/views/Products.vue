<template>
    <div class="container">
        <div class="row cards_wrapper">
            <div v-for="(card, index) in cards" :key="index" class="col-6 col-sm-4 p-1">
                <div class="custom_card">
                    <img :src="card.img" alt="">
                    <p>
                        {{ card.title }}
                    </p>
                </div>
            </div>
        </div>
        <Paragraph class="components_paragraph" margin="0 0 56px 0">ICsupply is a leading professional supplier of
            electronic devices and components. We offer to our customers a wide range of supplying products including
            all kinds of active and passive electronic components, metering tools and instruments, telecommunication
            devices.
        </Paragraph>
    </div>
</template>

<script>
import Paragraph from '../components/Paragraph.vue';

export default {
    name: 'Components',
    components: { Paragraph },
    data() {
        return {
            cards: [
                {
                    img: require('../assets/images/product_img1.jpg'),
                    title: 'Active Components (AKTIVA)'
                },
                {
                    img: require('../assets/images/product_img2.jpg'),
                    title: 'Passive Components (PASIVA)'
                },
                {
                    img: require('../assets/images/product_img3.jpg'),
                    title: 'Connectors (KONEKTORI)'
                },
                {
                    img: require('../assets/images/product_img4.jpg'),
                    title: 'Electromechanical (ELEKTROMEHANIKA)'
                },
                {
                    img: require('../assets/images/product_img5.jpg'),
                    title: 'Instruments and Tools (INSTRUMENTI I ALATI)'
                },
                {
                    img: require('../assets/images/product_img6.jpg'),
                    title: 'Telecommunication (TELEKOMUNIKACIONA OPREMA)'
                },
            ]
        }
    }
};
</script>


<style scoped>
.cards_wrapper {
    margin: 50px 0 70px 0;
}

.custom_card {
    background: #FFFFFF;
    border: 1px solid #EFEFEF;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    height: 316px;
}

.custom_card img {
    width: 100%;
}

.custom_card p {
    padding: 5px 21px 0 21px;
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 36px;
    color: #333333;
    margin: 0;
    word-wrap: break-word;
}
</style>

<style>
@media screen and (max-width: 1200px) {
    .custom_card {
        height: 266px !important;
    }
    .components_paragraph {
        font-size: 20px !important;
    }
    .custom_card p {
        padding: 5px 15px 23px 15px !important;
    }
}

@media screen and (max-width: 992px) {
    .components_paragraph {
        font-size: 18px !important;
    }
    .custom_card p {
        padding: 5px 15px 13px 15px !important;
        font-size: 18px !important;
        line-height: 26px !important;
    }
    .cards_wrapper {
        margin: 30px 0 50px 0 !important;
    }
    .custom_card {
        height: 196px !important;
    }
}

@media screen and (max-width: 768px) {
    .components_paragraph {
        font-size: 16px !important;
        line-height: 20px !important;
    }
    .custom_card p {
        padding: 5px 7px 9px 7px !important;
        font-size: 16px !important;
        line-height: 20px !important;
    }
    .cards_wrapper {
        margin: 15px 0 25px 0 !important;
    }
    .custom_card {
        height: 166px !important;
    }
}
@media screen and (max-width: 577px) {
    .custom_card {
        height: 186px !important;
    }
}
@media screen and (max-width: 450px) {
    .custom_card {
        height: 160px !important;
    }
}

@media screen and (max-width: 400px) {
    .components_paragraph {
        font-size: 14px !important;
        line-height: 18px !important;
    }
}
</style>
