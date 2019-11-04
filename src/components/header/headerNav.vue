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
                    <li><a class="search-header-action"><i class="material-icons">search</i></a></li>
                    <li><a class="account-header-action sidenav-trigger" href="#" data-target="account-sidenav"><i
                            class="material-icons">person_add</i></a></li>
                    <li><a class="favorite-header-action"><i class="material-icons">favorite</i></a></li>
                    <li><a class="cart-header-action"><i class="material-icons">shopping_cart</i></a></li>
                </ul>
                <div class="search-bar-wrapper scale-transition scale-out">
                    <input class="search-bar-input" type="text">
                    <a class="search-bar-icon search-icon"><i class="material-icons">search</i></a>
                    <a class="search-bar-icon close-icon" href="#"><i class="material-icons">close</i></a>
                </div>
            </div>

        </nav>
        <div id="account-sidenav" class="right-sidenav sidenav">
            <div class="sidenav-title">
                <p class="sidenav-title-action"><a class="sidenav-close-icon" href="#"><i
                        class="material-icons">close</i></a></p>
                <p class="sidenav-title-content">Login / Register</p>
            </div>
            <div class="sidenav-content">
                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s12">
                                <i class="material-icons prefix">email</i>
                                <input id="account-email" type="text" class="account-input">
                                <label for="account-email">Email</label>
                            </div>
                            <div class="input-field col s12">
                                <i class="material-icons prefix">security</i>
                                <input id="account-password" type="tel" class="account-input">
                                <label for="account-password">Password</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div class="sidenav-footer">
                <button class="btn waves-effect waves-light sidenav-btn" type="submit" name="action">Login
                    <i class="material-icons right">send</i>
                </button>
                <br/>
                <span><a>Forgot Your Password?</a></span><br/>
                <button class="btn waves-effect waves-light sidenav-btn" type="submit" name="action">Register
                    <i class="material-icons right">send</i>
                </button>
            </div>
        </div>
        <ul class="sidenav" id="mobile-demo">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li>
        </ul>
    </div>
</template>

<script>
    import headerDropDownMenu from "./headerDropDownMenu";
    import headerDropDownMenuFull from "./headerDropDownMenuFull";


    export default {
        name: "headerNav",
        components:{headerDropDownMenu,headerDropDownMenuFull}
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
        .search-bar-wrapper{
            position: absolute;
            left: 0;
            width:100%;
            background: #cfd8dc;
            z-index: 2;
            .search-bar-input{
                width:100% !important;
                height: 64px;
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
        .right-sidenav{
            padding: 0 1em;
            .sidenav-title{
                text-align: left;
                line-height: 2em;
                border-bottom: solid 1px #cfd8dc;
                .sidenav-title-action{
                    text-align: right;
                }
                .sidenav-title-content{
                    font-size: 1.2em;
                }
            }
            .sidenav-content{
                margin-top:3em;
            }
            .sidenav-footer{
                margin-top:3em;
                text-align: center;
            }
            .sidenav-btn{
                width: 70%;
                margin: 1em 0;
            }
        }
        .account-input{
            width: 80% !important;
            margin-left: 3rem !important;
        }

    }

</style>
