<template>
<div class="collection">
    <div class="page-head">
        <div class="top-breadcrumbs">
            <a href="#!" class="breadcrumb">First</a>
            <a href="#!" class="breadcrumb">Second</a>
            <a href="#!" class="breadcrumb">Third</a>
        </div>
        <h3 class="page-title">
           Collection
        </h3>
        <div class="page-banner">
          <img src="../assets/image/banner.jpg" />
        </div>
    </div>
    <div class="page-main">
        <section class="collection-sidebar">
            <ul class="collapsible expandable">
                <collapsible-collection />
                <color-picker />
                <size-picker />
                <price-range />
                <custom-block-sidenav />
            </ul>
        </section>
        <section class="collection-content">
            <div class="collection-top">
            </div>
            <div class="collection-main">
            </div>
            <div class="collection-foot">
            </div>
        </section>
    </div>
    <div class="page-bottom">
    </div>
</div>
</template>

<script>
    import collapsibleCollection from "../components/collapseCollection/collapsibleCollection";
    import colorPicker from "../components/colorPicker/colorPicker";
    import sizePicker from "../components/sziePicker/sizePicker";
    import priceRange from "../components/priceRange/priceRange";
    import customBlockSidenav from "../components/customBlock/customBlockSidenav";
    $(document).ready(function(){
        $('.collapsible').collapsible();
    });
    export default {
        name: "Collection",
        components:{collapsibleCollection, colorPicker, sizePicker, priceRange, customBlockSidenav}
    }
</script>

<style lang="scss">
.collection{
    padding: 0 10%;
    border:none;
    .top-breadcrumbs{
        .breadcrumb{
            line-height: 1em;
            color: black;
            &:before{
                color: black;
                line-height: 1em;
            }
        }
    }
    .page-title{
        text-align: center;
    }
    .page-banner{
        img{
            width:100%;
        }
    }

    .collection-sidebar{
        width:25%;
        height: 700px;
        background: #00acc1;
    }
    .collection-content{
        width:75%;
    }
}
</style>
