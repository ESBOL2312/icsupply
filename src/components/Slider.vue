<template>
    <div
        class="slider_wrapper"
        v-touch:swipe.left="nextSlide"
        v-touch:swipe.right="lastSlide"
    >
        <img
            v-for="(slide, index) in slides"
            :key="index"
            class="slide_img"
            :style="{opacity: activeIndex === index ? '1': '0'}"
            :src="slide.img"
            alt=""
        >
        <div class="slide_body w-100 d-flex flex-column align-items-center">
            <div class="d-flex justify-content-between w-100 align-items-center">
                <h1 class="slide_title">
                    {{ slides[activeIndex].title || '' }}
                </h1>
                <router-link style="text-decoration: none;" :to="slides[activeIndex].link || '#'">
                    <button class="slide_more_btn">
                        more
                    </button>
                </router-link>

            </div>
            <div class="slide_pagination">
        <span
            v-for="(item, index) in slides"
            :key="index"
            class="slide_dot"
            :class="index === activeIndex && 'active'"
            @click="changeSlide(index)"
        />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Slider',
    props: ['width', 'height', 'slides'],
    data() {
        return {
            activeIndex: 0,
        };
    },
    methods: {
        changeSlide(index) {
            this.activeIndex = index;
        },
        nextSlide() {
            this.activeIndex < this.slides.length - 1 ? this.activeIndex += 1 : this.activeIndex = 0;
        },
        lastSlide() {
            this.activeIndex > 0 ? this.activeIndex -= 1 : this.activeIndex = (this.slides.length - 1);
        },
    },
};
</script>

<style scoped>
.slider_wrapper {
    width: 100%;
    height: 450px;
    position: relative;
}

.slider_wrapper::after {
    content: '';
    width: 100%;
    height: 100%;
    background: rgba(39, 39, 39, 0.5);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 6px;
}

.slide_title {
    font-style: normal;
    font-weight: 600;
    font-size: 38px;
    line-height: 57px;
    color: #FFFFFF;
    margin: 0;
}

.slide_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    z-index: -1;
    border-radius: 6px;
    position: absolute;
    transition: 0.3s opacity;
}

.slide_body {
    position: absolute;
    padding: 0 40px;
    bottom: 20px;
    z-index: 1;
}

.slide_pagination {
    display: inline-flex;
    gap: 10px;
    margin-top: 26px;
}

.slide_dot {
    width: 14px;
    height: 14px;
    background: #969696;
    border-radius: 50%;
    transition: background-color 0.3s ease;
}

.slide_dot.active {
    background: #ffffff !important;
}

.slide_more_btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 0;
    gap: 10px;
    background: #439B24;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    border: none;
    min-width: 150px;
    height: 40px;
    color: #ffffff;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
}

@media screen and (max-width: 1200px) {
    .slide_title {
        font-size: 30px !important;
    }

    .slide_more_btn {
        min-width: 100px;
        padding: 0 5px;
    }
}

@media screen and (max-width: 992px) {
    .slide_title {
        font-size: 26px !important;
        line-height: 30px;
    }
}

@media screen and (max-width: 768px) {
    .slide_title {
        font-size: 22px !important;
    }

    .slide_more_btn {
        min-width: 70px;
        height: 25px;
    }

    .slide_more_btn a {
        font-size: 12px;
        line-height: 20px;
    }

    .slide_dot {
        width: 12px;
        height: 12px;
    }

    .slide_body {
        padding: 0 20px;
        bottom: 15px;
    }

    .slider_wrapper {
        height: 350px;
    }
}

@media screen and (max-width: 446px) {
    .slide_dot {
        width: 8px;
        height: 8px;
    }

    .slide_title {
        font-size: 20px !important;
        line-height: 16px;
    }

    .slide_more_btn {
        min-width: 40px;
        height: 15px;
        border-radius: 4px;
        margin-left: 5px;
    }

    .slide_more_btn a {
        font-size: 9px;
    }

    .slide_pagination {
        margin-top: 16px !important;
    }

    .slider_wrapper {
        height: 250px;
    }
}
</style>
