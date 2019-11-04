<template>
    <div class="carousel carousel-slider product-photo">
        <a class="carousel-item" href="#one!"><img src="../../assets/image/product-1.jpg"></a>
        <a class="carousel-item" href="#two!"><img src="../../assets/image/product-2.jpg"></a>
        <a class="carousel-item" href="#three!"><img src="../../assets/image/product-3.jpg"></a>
        <a class="carousel-item" href="#four!"><img src="../../assets/image/product-4.jpg"></a>
    </div>
</template>

<script>

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.product-photo');
        var instances = M.ProductCarousel.init(elems,{showThumbs:true,fullWidth: false,indicators: false});
        //var instances = new M.Carousel.init(elems,{fullWidth: false,indicators: false});
    });

    export default {
        name: "productPhoto"
    }
</script>

<style lang="scss">
    .product-photo{
        .thumbs{
            position: relative;
        }
        .thumb-pre-btn{
            position: absolute;
            left: 0px;
        }
        .thumb-next-btn{
            position: absolute;
            right: 0px;
        }
        .thumb-item{
            display: inline-block;
            margin: 0 0.5em;
            & img{
                width:60px;
            }
        }
    }
</style>
