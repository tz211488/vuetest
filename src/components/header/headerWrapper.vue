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

    $(document).ready(function(){
        //点击搜索，出现searchbar
        $('.search-header-action').click(function(){
            $('.search-bar-wrapper').removeClass('scale-out').addClass('scale-in');
        });
        $('.search-bar-icon.close-icon').click(function(){
            $('.search-bar-wrapper').removeClass('scale-in').addClass('scale-out');
        });
        //设置账户侧边栏
        let rightSidenavOptions={
            edge:'right',
        };
        $('.right-sidenav').sidenav(rightSidenavOptions);
        $('.sidenav-close-icon').click(()=>{
            $('.right-sidenav').sidenav('close');
        });


    });
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
