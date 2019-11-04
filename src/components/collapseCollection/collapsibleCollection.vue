<template>
<li class="collapsibleCollection">
    <label class="collection-checkbox">
        <input type="checkbox" />
        <span></span>
    </label>
    <div class="collapsible-header sidebar-collection">
        <span>Filled in</span>
    </div>
    <div class="collapsible-body">
        <ul class="collapsible expandable child-collection">
            <li class="child-collection-item">
                <label class="collection-checkbox">
                    <input type="checkbox" />
                    <span></span>
                </label>
                <div class="collapsible-header">Second</div>
                <div class="collapsible-body">
                    <ul>
                        <li><span>dsfsdfsdfsdfsdf</span></li>
                        <li><span>dsfsdfsdfsdfsdf</span></li>
                        <li><span>dsfsdfsdfsdfsdf</span></li>
                        <li><span>dsfsdfsdfsdfsdf</span></li>
                    </ul>
                </div>
            </li>
            <li>11345</li>
            <li>11345</li>
            <li>11345</li>
        </ul>
    </div>
</li>
</template>

<script>
    $(document).ready(function(){
        $('.scollection-title').sidenav();
    });
    export default {
        name: "collapsibleCollection"
    }
</script>

<style lang="scss">
    .collapsibleCollection{
        position:relative;
        .collection-checkbox{
            position: absolute;
            line-height: 2em;
            top:13px;
            left:10px;
        }
        .collapsible-header{
            padding-left: 4em;
        }
        .collapsible-body{
            padding: 0 20px;
        }
        .child-collection{

        }
        .child-collection-item{
            position:relative;
        }

    }
</style>
