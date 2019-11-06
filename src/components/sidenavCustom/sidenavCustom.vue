<template>
    <li class="sidenav-custom">
        <div class="collapsible-header">Custom Block</div>
        <div class="collapsible-body">
            <ul>


            </ul>
        </div>
    </li>
</template>

<script>
    export default {
        name: "sidenavCustom"
    }
</script>

<style lang="scss">
    .sidenav-custom{
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
