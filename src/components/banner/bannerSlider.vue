<template>
    <div class="carousel carousel-slider banner-slider">
        <a class="carousel-item banner-slider-item" href="#one!"><img src="../../assets/image/banner.jpg"></a>
        <a class="carousel-item banner-slider-item" href="#two!"><img src="../../assets/image/banner.jpg"></a>
        <a class="carousel-item banner-slider-item" href="#three!"><img src="../../assets/image/banner.jpg"></a>
        <a class="carousel-item banner-slider-item" href="#four!"><img src="../../assets/image/banner.jpg"></a>
    </div>
</template>

<script>

    $(document).ready(()=>{
        $('.banner-slider').carousel({
            fullWidth: true
        });
    });

    export default {
        name: "bannerSlider"
    }
</script>

<style lang="scss">
    .banner-slider{
        .banner-slider-item{

        }
    }

</style>
