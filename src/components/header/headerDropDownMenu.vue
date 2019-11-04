<template>
<li class="header-drop-down-menu">
    <a class='dropdown-trigger header-menu' data-target='menu-item'>Drop Me!</a>
    <ul id='menu-item' class='dropdown-content menu-item'>
        <li><a href="#!">one</a></li>
        <li><a href="#!">two</a></li>
        <li class="divider" tabindex="-1"></li>
        <li><a href="#!">three</a></li>
        <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
        <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
    </ul>
</li>
</template>

<script>
    $(document).ready(function(){
        let headerMenuDropDown = {
            hover:true,
            autoTrigger:false,
            constrainWidth:true,
            coverTrigger:false
        };
        $('.header-menu').dropdown(headerMenuDropDown);
    });

    export default {
        name: "headerDropDownMenu"
    }
</script>

<style lang="scss">
    .header-menu{

    }
    .menu-item{

    }

</style>
