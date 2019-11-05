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

<style lang="scss">
    header {


    }
</style>
