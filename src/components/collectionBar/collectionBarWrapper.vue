<template>
<div class="collection-action-bar row">
    <div class="col m3">
        <!-- Dropdown Trigger -->
        <span>Sort:</span>
        <a class='dropdown-trigger sort-feature-action' href='#' data-target='sort-by-feature'>Drop Me!<i class="material-icons">keyboard_arrow_down</i> </a>

        <!-- Dropdown Structure -->
        <ul id='sort-by-feature' class='dropdown-content'>
            <li><a href="#!">one</a></li>
            <li><a href="#!">two</a></li>
            <li class="divider" tabindex="-1"></li>
            <li><a href="#!">three</a></li>
            <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
            <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
        </ul>
    </div>
    <div class="col m4">
        <span>Showing 1–12 of 43 results</span>
    </div>
    <div class="col m5">
        <span>
            <!-- Dropdown Trigger -->
        <span>Sort:</span>
        <a class='dropdown-trigger sort-feature-action' href='#' data-target='sort-by-page'>Drop Me!<i class="material-icons">keyboard_arrow_down</i> </a>

            <!-- Dropdown Structure -->
        <ul id='sort-by-page' class='dropdown-content'>
            <li><a href="#!">one</a></li>
            <li><a href="#!">two</a></li>
            <li class="divider" tabindex="-1"></li>
            <li><a href="#!">three</a></li>
            <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
            <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
        </ul>
        </span>
        <span><i class="material-icons">border_all</i> </span>
        <span><i class="material-icons">view_module</i> </span>
        <span><i class="material-icons">view_comfy</i> </span>
        <span><i class="material-icons">view_list</i> </span>

    </div>
</div>
</template>

<script>
    $(document).ready(()=>{
        let sortFeatureTrigger ={
            coverTrigger:false,
            hover:true
        };
        $('.sort-feature-action').dropdown(sortFeatureTrigger);
        $('.sort-feature-page').dropdown(sortFeatureTrigger);
    });
    export default {
        name: "collectionBarWrapper"
    }
</script>

<style scoped>

</style>
