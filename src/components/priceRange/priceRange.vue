<template>
    <li class="price-picker">
        <div class="collapsible-header">Color</div>
        <div class="collapsible-body">
            <p class="range-field">
                <input type="range" id="min-price-btn" min="0" max="100" />
                <input type="range" id="test6" min="0" max="100" />
            </p>
            <div class="price-picker-container">
                <span class="circle-spot mini-price"></span>
                <span class="circle-spot max-price"></span>
                <div class="price-range" id="price-axis"></div>
            </div>
        </div>
    </li>
</template>

<script>
    $(document).ready(function(){
        //高度
        let topY,leftX;
        //可移动最大距离
        let eventX;
        let axisWidth;
        let isDrop = false;

        console.log('topY',topY);
        $('.mini-price').mousedown((e)=>{
              let axis = $('.price-range');
              axisWidth = axis.outerWidth
              topY = axis.offset().top;
              leftX = axis.offset().left;
              eventX = e.pageX;
              isDrop = true;
        });

        $('.price-picker-container').mousemove((e)=>{
            if(e.pageX+10>leftX+axisWidth || e.pageX+10 < leftX){
                return
            }
            if(Math.abs(e.pageY-topY)>8){
                return

            }
            if(isDrop){
                let moveX = e.pageX-eventX;
                $('.mini-price').offset({top:topY-5,left:e.pageX})
            }else{
                return
            }

            }
        );
        $('.price-picker-container').mouseup((e)=>{
            isDrop = false;
        });
    });
    export default {
        name: "priceRange"
    }
</script>

<style lang="scss">
    .price-picker{
        background: white;
        border-bottom: 1px solid #ddd;
        .collapsible-header{
            border:none;
        }
        .collapsible-body{
            border:none;
            padding:1rem 1rem 3rem !important;
            li{
                display: inline-block;
                margin-left: 0.5rem;
            }
        }
        .price-picker-container{
            position: relative;
        }
        .price-range{
            width: 100%;
            height: 5px;
            background: gray;
            border: 1px solid white;
        }
        .circle-spot{

        }
        .mini-price{
            position:absolute;
            height: 15px;
            width: 15px;
            border-radius: 15px;
            background: red;
            top:-5px;

        }
        .max-price{
            position: absolute;
            height: 15px;
            width: 15px;
            border-radius: 15px;
            background: red;
            top:-5px;
            left:30px;
        }
    }

</style>
