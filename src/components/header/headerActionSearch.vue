<template>
    <li>
        <a class="search-header-action"><i class="material-icons">search</i></a>
        <div class="search-bar-wrapper scale-transition scale-out">
            <input class="search-bar-input" type="text">
            <a class="search-bar-icon search-icon"><i class="material-icons">search</i></a>
            <a class="search-bar-icon close-icon" href="#"><i class="material-icons">close</i></a>
        </div>
    </li>
</template>

<script>
    $(document).ready(function(){

        let headerActionSearch = $('.search-bar-wrapper');
        $('.header-actions').after(headerActionSearch);
        //点击搜索，出现searchbar
        $('.search-header-action').click(function(){
            $('.search-bar-wrapper').removeClass('scale-out').addClass('scale-in');
        });
        $('.search-bar-icon.close-icon').click(function(){
            $('.search-bar-wrapper').removeClass('scale-in').addClass('scale-out');
        });

    });

    export default {
        name: "headerActionSearch"
    }
</script>

<style lang="scss">
    .search-bar-wrapper{
        position: absolute;
        left: 0;
        width:100%;
        background: #cfd8dc;
        z-index: 2;
        .search-bar-input{
            width:100% !important;
            height: 64px !important;
        }
        .search-bar-icon{
            position: absolute;
            right: 2em;
            top: 0;
            &.search-icon{
                right:4em;
            }
        }
    }

</style>
