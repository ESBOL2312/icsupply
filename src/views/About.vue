<template>
    <div class="container">
        <Paragraph class="about_paragraph" margin="40px 0 0 0">
            {{$t('about.paragraph1')}}
        </Paragraph>
        <img class="about_img" style="margin-top: 40px;"
             src="../assets/images/about_img.jpg" alt="">
        <Paragraph class="about_paragraph" margin="40px 0 0 0">
              {{$t('about.paragraph2')}}
        </Paragraph>
        <Paragraph class="about_paragraph" margin="60px 0 75px 0">
               {{$t('about.paragraph3')}}
        </Paragraph>
    </div>
</template>

<script>
import Paragraph from '../components/Paragraph.vue';

export default {
    name: 'About',
    components: { Paragraph },
};
</script>

<style scoped>
.about_img {
    width: 100%;
    border-radius: 6px;
}
</style>
<style>
@media screen and (max-width: 1200px) {
    .about_paragraph {
        font-size: 20px !important;
    }
}

@media screen and (max-width: 992px) {
    .about_paragraph {
        margin-top: 30px !important;
        font-size: 18px !important;

    }
}

@media screen and (max-width: 768px) {
    .about_paragraph {
        margin-top: 20px !important;
        font-size: 16px !important;
        line-height: 20px !important;
    }
}

@media screen and (max-width: 400px) {
    .about_paragraph {
        margin-top: 15px !important;
        font-size: 14px !important;
        line-height: 18px !important;
    }
}
</style>
