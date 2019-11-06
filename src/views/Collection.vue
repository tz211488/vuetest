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
    <div class="page-main row">
        <section class="collection-sidebar col m3">
            <ul class="collapsible expandable">
                <collapsible-collection />
                <color-picker />
                <size-picker />
                <price-range />
                <sidenav-product />
                <sidenav-custom />
            </ul>
        </section>
        <section class="collection-content col m9">
            <div class="collection-top">
            </div>
            <div class="collection-main">
                <collection-bar-wrapper />
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
    import sidenavProduct from "../components/sidenavProduct/sidenavProduct";
    import sidenavCustom from "../components/sidenavCustom/sidenavCustom";
    import collectionBarWrapper from "../components/collectionBar/collectionBarWrapper";
    $(document).ready(function(){
        let sidenavCollapsible = {
            accordion:false
        }
        $('.collapsible').collapsible(sidenavCollapsible);

    });
    export default {
        name: "Collection",
        components:{collapsibleCollection, colorPicker, sizePicker, priceRange, sidenavProduct,sidenavCustom,collectionBarWrapper}
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
        height: 1400px;

    }
    .collection-content{
        width:75%;
    }
}
</style>
