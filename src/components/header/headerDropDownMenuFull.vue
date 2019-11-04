<template>
    <li class="header-drop-down-menu-full">
        <a class='dropdown-trigger header-menu-full' data-target='menu-item-full'>Drop Me!</a>
        <div id='menu-item-full' class='dropdown-content menu-item-full'>
            <div class="row">
                <div class="col m3 sub-menu-wrapper">
                    <a class="menu-sub-category">sdfasdfasfdas</a>
                    <ul class="menu-sub-item">
                        <li>sdfasdfasfsaf</li>
                        <li>sdfasdfasfsaf</li>
                        <li>sdfasdfasfsaf</li>
                        <li>sdfasdfasfsaf</li>
                        <li>sdfasdfasfsaf</li>
                    </ul>
                </div>
                <div class="col m3 sub-menu-wrapper">
                    <a class="menu-sub-category">sdfasdfasfdas</a>
                    <ul class="menu-sub-item">
                        <li>sdfasdfasfsaf</li>
                        <li>sdfasdfasfsaf</li>
                        <li>sdfasdfasfsaf</li>
                        <li>sdfasdfasfsaf</li>
                        <li>sdfasdfasfsaf</li>
                    </ul>
                </div>
                <div class="col m3 sub-menu-wrapper">
                    <a class="menu-sub-category">sdfasdfasfdas</a>
                    <ul class="menu-sub-item">
                        <li>sdfasdfasfsaf</li>
                        <li>sdfasdfasfsaf</li>
                        <li>sdfasdfasfsaf</li>
                        <li>sdfasdfasfsaf</li>
                        <li>sdfasdfasfsaf</li>
                    </ul>
                </div>

            </div>

        </div>
    </li>
</template>

<script>
    $(document).ready(function(){
        let containerX = $('.menu-item-full').offset().left;
        let headerMenuDropDownFull = {
            alignment:'center',
            hover:true,
            autoTrigger:false,
            constrainWidth:false,
            coverTrigger:false
        };
        $('.header-menu-full').dropdown(headerMenuDropDownFull);

        let menu = $('.menu-item-full')
        $('nav').after(menu);

    });
    export default {
        name: "headerDropDownMenuFull"
    }
</script>

<style lang="scss">
    .menu-item-full{
        width:100vw!important;
        position: absolute !important;
        left: 0 !important;
        padding: 3rem 15%;
    }
    .menu-sub-category{
        font-size: 1.2rem;
    }
    .menu-sub-item{
        li{color: #90a4ae !important;}
    }

</style>
