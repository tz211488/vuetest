<template>
    <li class="size-picker">
        <div class="collapsible-header">Size</div>
        <div class="collapsible-body">
            <ul>
                <li class="size-item">
                    <a class="btn-floating btn-small waves-effect waves-light red">13.5</a>
                </li>
                <li class="size-item">
                    <a class="btn-floating btn-small waves-effect waves-light red">13.5</a>
                </li>
                <li class="size-item">
                    <a class="btn-floating btn-small waves-effect waves-light red">13.5</a>
                </li>
                <li class="size-item">
                    <a class="btn-floating btn-small waves-effect waves-light red">13.5</a>
                </li>
                <li class="size-item">
                    <a class="btn-floating btn-small waves-effect waves-light red">13.5</a>
                </li>

            </ul>
        </div>
    </li>
</template>

<script>
    $(document).ready(function(){
        $('.size-item').click((e)=>{
            let sizeItemTarget = $(e.target).closest('.size-item').find('a');
            sizeItemTarget.toggleClass('red');
            sizeItemTarget.toggleClass('blue');
        });
    });
    export default {
        name: "sizePicker"
    }
</script>

<style lang="scss">
    .size-picker{
        background: white;
        border-bottom: 1px solid #ddd;
        .collapsible-header{
            border:none;
        }
        .collapsible-body{
            border:none;
            padding:1rem 1rem 3rem !important;
            li{
                display: inline-block;
                margin-left: 0.5rem;
            }
        }
    }

</style>
