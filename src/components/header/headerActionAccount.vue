<template>
    <li><a class="account-header-action sidenav-trigger" href="#" data-target="account-sidenav"><i
            class="material-icons">person_add</i></a>
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
    </li>

</template>

<script>
    $(document).ready(function(){
        let accountRightSidenav = $('#account-sidenav');
        $('nav').after(accountRightSidenav);

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
        name: "headerActionAccount"
    }
</script>

<style lang="scss">
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
        .account-input{
            width: 80% !important;
            margin-left: 3rem !important;
        }
    }


</style>
