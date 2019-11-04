<template>
  <div class="home">
    <full-slider />
    <section class="page-content container">
      <category-list/>
      <banner />
      <product-list />
    </section>
  </div>
</template>

<script>

  import fullSlider from "../components/fullSlider/fullSlider";
  import categoryList from "../components/categoryList/categoryList";
  import banner from "../components/banner/banner";
  import productList from "../components/productList/productList";


export default {
  name: 'home',
  components:{categoryList, fullSlider, banner, productList}
}
</script>
