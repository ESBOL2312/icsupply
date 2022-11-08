<template>
    <div class="components_cards">
        <div v-for="(block, index) in blocks" :key="index">
            <img class="w-100" :src="block.img" alt="">
            <Paragraph margin="20px 0 0 0" class="components_p">
                {{ block.paragraph }}
            </Paragraph>
        </div>
    </div>
</template>

<script>
import Paragraph from './Paragraph.vue';

export default {
    name: 'ImageBlocks',
    components: { Paragraph },
    props: ['blocks'],
};
</script>

<style scoped>

.components_cards {
    display: inline-flex;
    gap: 80px 19px;
    flex-wrap: wrap;
}

.components_cards div {
    width: 49%;
}

.components_cards p {
    font-weight: 500;
    font-size: 22px;
    line-height: 36px;
    color: #333333;
    margin-top: 20px;
}

.components_cards img {
    border-radius: 6px;
}
</style>

<style>
@media screen and (max-width: 1200px) {
    .components_p {
        font-size: 20px !important;
    }
    .components_cards div {
        width: 48% !important;
    }
}

@media screen and (max-width: 992px) {
    .components_p {
        font-size: 18px !important;

    }
    .components_cards {
        gap: 40px 15px !important;
    }
}

@media screen and (max-width: 768px) {
    .components_p {
        font-size: 16px !important;
        line-height: 20px !important;
    }
}

@media screen and (max-width: 575px) {
    .components_p {
        font-size: 12px !important;
        line-height: 16px !important;
    }
}
@media screen and (max-width: 400px) {
    .components_cards div {
        width: 47% !important;
    }
    .components_cards {
        gap: 25px 10px !important;
    }
}
</style>
