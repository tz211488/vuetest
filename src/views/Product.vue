<template>
    <div class="product">
        <div class="page-head">
            <div class="top-breadcrumbs">
                <a href="#!" class="breadcrumb">First</a>
                <a href="#!" class="breadcrumb">Second</a>
                <a href="#!" class="breadcrumb">Third</a>
            </div>
            <h3 class="page-title">
                Cofdsfasfasfasf
            </h3>
            <div class="page-banner">
                <img src="../assets/image/banner.jpg" />
            </div>
        </div>
        <div class="page-main">
            <section class="product-sidebar-left">
                <ul class="collapsible expandable">

                </ul>
            </section>
            <section class="product-content row">
                <div class="col m6 product-photo-wrapper">
                    <product-photo />

                </div>
                <div class="col m3 product-shop-wrapper">
                    <product-shop />

                </div>
                <div class="product-middle">

                </div>
                <div class="product-detail">
                    <product-detail />

                </div>
            </section>
            <section class="product-sidebar-right">
                <ul class="collapsible expandable">

                </ul>
            </section>
        </div>
        <div class="page-bottom">
        </div>
    </div>
</template>



<script>

    import productPhoto from "../components/product/productPhoto";
    import productShop from "../components/product/productShop";
    import productDetail from "../components/product/productDetail";
    export default {
        name: "Product",
        components:{productPhoto,productShop,productDetail}
    }
</script>

<style scoped>

</style>
