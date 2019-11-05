<template>
<li class="collapsible-collection">
    <label class="collection-checkbox">
        <input type="checkbox" />
        <span></span>
    </label>
    <div class="collapsible-header sidebar-collection">
        <span>Filled in</span>
    </div>
    <div class="collapsible-body medium-item">
        <ul class="collapsible expandable child-collection">
            <li class="child-collection-item">
                <label class="collection-checkbox">
                    <input type="checkbox" />
                    <span></span>
                </label>
                <div class="collapsible-header">Second</div>
                <div class="collapsible-body">
                    <ul class="collapsible expandable child-collection">
                        <li class="child-collection-item">
                            <label class="collection-checkbox">
                                <input type="checkbox" />
                                <span></span>
                            </label>
                            <div class="collapsible-header">Second1</div>
                        </li>
                        <li class="child-collection-item">
                            <label class="collection-checkbox">
                                <input type="checkbox" />
                                <span></span>
                            </label>
                            <div class="collapsible-header">Second2</div>
                        </li>
                        <li class="child-collection-item">
                            <label class="collection-checkbox">
                                <input type="checkbox" />
                                <span></span>
                            </label>
                            <div class="collapsible-header">Second3</div>
                        </li>

                    </ul>
                </div>
            </li>
            <li class="child-collection-item">
                <label class="collection-checkbox">
                    <input type="checkbox" />
                    <span></span>
                </label>
                <div class="collapsible-header">Second</div>
                <div class="collapsible-body">
                    <ul class="collapsible expandable child-collection">
                        <li class="child-collection-item">
                            <label class="collection-checkbox">
                                <input type="checkbox" />
                                <span></span>
                            </label>
                            <div class="collapsible-header">Second1</div>
                        </li>
                        <li class="child-collection-item">
                            <label class="collection-checkbox">
                                <input type="checkbox" />
                                <span></span>
                            </label>
                            <div class="collapsible-header">Second2</div>
                        </li>
                        <li class="child-collection-item">
                            <label class="collection-checkbox">
                                <input type="checkbox" />
                                <span></span>
                            </label>
                            <div class="collapsible-header">Second3</div>
                        </li>

                    </ul>
                </div>
            </li>
            <li class="child-collection-item">
                <label class="collection-checkbox">
                    <input type="checkbox" />
                    <span></span>
                </label>
                <div class="collapsible-header">Second</div>
                <div class="collapsible-body">
                    <ul class="collapsible expandable child-collection">
                        <li class="child-collection-item">
                            <label class="collection-checkbox">
                                <input type="checkbox" />
                                <span></span>
                            </label>
                            <div class="collapsible-header">Second1</div>
                        </li>
                        <li class="child-collection-item">
                            <label class="collection-checkbox">
                                <input type="checkbox" />
                                <span></span>
                            </label>
                            <div class="collapsible-header">Second2</div>
                        </li>
                        <li class="child-collection-item">
                            <label class="collection-checkbox">
                                <input type="checkbox" />
                                <span></span>
                            </label>
                            <div class="collapsible-header">Second3</div>
                        </li>

                    </ul>
                </div>
            </li>

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
    .collapsible-collection{
        position:relative;
        border-bottom: 1px solid #ddd;
        .sidebar-collection{
            border:none;
        }
        .collection-checkbox{
            position: absolute;
            line-height: 2em;
            top:13px;
            left:10px;
        }
        .collapsible-header{
            padding-left: 4em;
            border:none;
        }
        .collapsible-body{
            padding: 0 20px;
            background-color:white;
            border:none;
            &.medium-item > .collapsible{
                box-shadow: none;
                border:none;
            }
        }
        .collapsible{
            margin: 0 0 0 0 !important;
        }
        .child-collection-item{
            position:relative;
            margin-top:2px;
        }

    }
</style>
