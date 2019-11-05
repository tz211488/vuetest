<template>
    <li class="price-picker">
        <div class="collapsible-header">Color</div>
        <div class="collapsible-body">
            <p class="range-field">
                <input type="range" id="test5" min="0" max="100" />
                <input type="range" id="test6" min="0" max="100" />
            </p>
            <div class="price-picker-container">
                <span class="circle-spot mini-price"></span>
                <span class="circle-spot max-price"></span>
                <div class="price-range"></div>
            </div>
        </div>
    </li>
</template>

<script>
    $(document).ready(function(){
        $('.color-item').click((e)=>{

            console.log('e',e);
            console.log('i', $(e.target).find('i'));
            let colorItemTarget = $(e.target).closest('.color-item').find('i');
            let addText = colorItemTarget.text()==='add'?'done':'add';
            colorItemTarget.text(addText);
        });
    });
    export default {
        name: "priceRange"
    }
</script>

<style lang="scss">
    .price-picker{
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
