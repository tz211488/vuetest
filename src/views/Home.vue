<template>
  <div class="home">
    <full-slider />
    <section class="page-content container">
      <category-list/>
      <banner />
      <banner-slider />
      <product-list />
    </section>
  </div>
</template>

<script>

  import fullSlider from "../components/fullSlider/fullSlider";
  import categoryList from "../components/categoryList/categoryList";
  import banner from "../components/banner/banner";
  import bannerSlider from "../components/banner/bannerSlider";
  import productList from "../components/productList/productList";



export default {
  name: 'home',
  components:{categoryList, fullSlider, banner,bannerSlider, productList}
}
</script>
