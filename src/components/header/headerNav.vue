<template>
    <div class="header-nav">
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">Logo</a>
                <div class="main-menu-wrapper">
                    <ul class="main-menu hide-on-med-and-down">
                        <header-drop-down-menu />
                        <header-drop-down-menu-full />
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">Javascript</a></li>
                        <li><a href="mobile.html">Mobile</a></li>
                    </ul>
                </div>
                <ul class="right hide-on-med-and-down header-actions">
                    <header-action-search />
                    <header-action-account />
                    <li><a class="favorite-header-action"><i class="material-icons">favorite</i></a></li>
                    <li><a class="cart-header-action"><i class="material-icons">shopping_cart</i></a></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    import headerDropDownMenu from "./headerDropDownMenu";
    import headerDropDownMenuFull from "./headerDropDownMenuFull";
    import headerActionSearch from "./headerActionSearch";
    import headerActionAccount from "./headerActionAccount";


    export default {
        name: "headerNav",
        components:{headerDropDownMenu,headerDropDownMenuFull,headerActionSearch,headerActionAccount}
    }
</script>

<style lang="scss">

    .header-nav{
        .brand-logo{
            margin-left: 3rem;
        }
        .main-menu-wrapper{
            position: relative;
            float: left;
            left: 50%;
        }
        .main-menu{
            position: relative;
            float: left;
            right: 50%;
        }
        .header-actions{
            margin-right: 3rem;
            position: absolute;
            right: 0;
            z-index: 1;
            .account-header-action{
                &.sidenav-trigger{
                    display: block !important;
                }
            }
        }
    }

</style>
