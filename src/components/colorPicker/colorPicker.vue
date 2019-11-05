<template>
    <li class="color-picker">
        <div class="collapsible-header">Color</div>
        <div class="collapsible-body">
            <ul>
                <li class="color-item">
                    <a class="btn-floating btn-small waves-effect waves-light green"><i class="material-icons">done</i></a>
                </li>
                <li class="color-item">
                    <a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">add</i></a>
                </li>
                <li class="color-item">
                    <a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">add</i></a>
                </li>
            </ul>
        </div>
    </li>

</template>

<script>
    $(document).ready(function(){
        $('.color-item').click((e)=>{

            console.log('e',e);
            console.log('i', $(e.target).find('i'));
            let colorItemTarget = $(e.target).closest('.color-item').find('i');
            let addText = colorItemTarget.text()==='add'?'done':'add';
            colorItemTarget.text(addText);
        });
    });
    export default {
        name: "colorPicker"
    }
</script>

<style lang="scss">
    .color-picker{
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
