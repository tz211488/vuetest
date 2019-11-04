<template>
<div class="header-top">
    <span>Free Shipping Over the World, New User 10% OFF (Use Code: BZEEYNEW)</span>
    <a class="close-header-top" href="#"><i class="material-icons">close</i> </a>
</div>
</template>

<script>
    $(document).ready(function(){
        $('.close-header-top').click(()=>$('.header-top').hide());
    });
    export default {
        name: "headerTop"
    }
</script>

<style lang="scss">
    .header-top {
        font-size: 1rem;
        line-height: 3rem;
        text-align: center;
        .close-header-top{
            position: absolute;
            top:0;
            right: 0;
        }
    }
</style>
