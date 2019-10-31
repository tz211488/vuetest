<template>
<header>
    <header-top />
    <header-panel />
    <header-nav />
</header>

</template>

<script>
    import headerTop from "./headerTop";
    import headerNav from "./headerNav";
    import headerPanel from "./headerPanel";
    export default {
        name: "headerWrapper",
        components:{
            headerTop,
            headerPanel,
            headerNav,
        }
    }
</script>

<style scoped>
    .header-top{
        font-size: 1rem;
        line-height: 3rem;
        text-align: center;
    }

</style>
