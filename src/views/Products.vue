<template>
    <div class="container">
        <div class="row cards_wrapper">
            <div v-for="(card, index) in cards" :key="index" class="col-6 col-sm-4 p-1">
                <div class="custom_card" @click="showModalData(card.modalData, card.title)">
                    <img :src="card.img" alt="">
                    <p>
                        {{ card.title }}
                    </p>
                </div>
            </div>
        </div>
        <Paragraph class="components_paragraph" margin="0 0 56px 0">
            {{$t('products.ph1')}}
        </Paragraph>
        <b-modal v-model="modalShow" centered :title="modalTitle" :hide-footer="true">
            <ol class="products-data-list">
                <li v-for="(mdata, index) in modalData" :key="index">
                    {{
                        mdata
                    }}
                </li>
            </ol>
        </b-modal>
    </div>
</template>

<script>
import Paragraph from '../components/Paragraph.vue';

export default {
    name: 'Components',
    components: { Paragraph },
    data(){
        return{
            modalShow:false,
            modalData:[],
            modalTitle:''
        }
    },
    computed: {
        cards(){    
            return [
                {
                    img: require('../assets/images/product_img1.jpg'),
                    title: this.$t('products.active_components'),
                    modalData:[
                        this.$t('products.ac1'),
                        this.$t('products.ac2'),
                        this.$t('products.ac3'),
                        this.$t('products.ac4'),
                        this.$t('products.ac5'),
                        this.$t('products.ac6'),
                        this.$t('products.ac7')
                    ]
                },
                {
                    img: require('../assets/images/product_img2.jpg'),
                    title: this.$t('products.passive_components'),
                    modalData:[
                        this.$t('products.pc1'),
                        this.$t('products.pc2'),
                        this.$t('products.pc3'),
                        this.$t('products.pc4'),
                        this.$t('products.pc5'),
                    ]
                },
                {
                    img: require('../assets/images/product_img3.jpg'),
                    title: this.$t('products.connectors'),
                    modalData:[
                        this.$t('products.cs1'),
                        this.$t('products.cs2'),
                        this.$t('products.cs3'),
                        this.$t('products.cs4'),
                        this.$t('products.cs5'),
                    ]
                },
                {
                    img: require('../assets/images/product_img4.jpg'),
                    title: this.$t('products.electromechanics'),
                    modalData:[
                        this.$t('products.es1'),
                        this.$t('products.es2'),
                        this.$t('products.es3'),
                        this.$t('products.es4'),
                    ]
                },
                {
                    img: require('../assets/images/product_img5.jpg'),
                    title: this.$t('products.instruments_tools'),
                    modalData:[
                        this.$t('products.it1'),
                        this.$t('products.it2'),
                        this.$t('products.it3'),
                        this.$t('products.it4'),
                    ]
                },
                {
                    img: require('../assets/images/product_img6.jpg'),
                    title: this.$t('products.telecommunication_equipment'),
                    modalData:[
                        this.$t('products.te1'),
                        this.$t('products.te2'),
                        this.$t('products.te3'),
                        this.$t('products.te4'),
                    ]
                },
            ]
        }
    },
    methods:{
        showModalData(data, title){
            this.modalShow = true
            this.modalData = data
            this.modalTitle = title
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
.products-data-list{
    padding: 0 30px;
}
.products-data-list li{
    font-size: 18px;
    margin-bottom: 10px;
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
