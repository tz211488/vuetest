<template>
    <li class="feature-products">
        <div class="collapsible-header">Featured Products</div>
        <div class="collapsible-body">
            <ul>
                <li class="product-item">
                    <div class="card horizontal">
                        <div class="card-image">
                            <img src="https://lorempixel.com/100/190/nature/6">
                        </div>
                        <div class="card-stacked">
                            <div class="card-content">
                                <p>Pants</p>
                                <p>Straigt Good Pants</p>
                                <p> $150</p>
                            </div>
                            <div class="card-action">
                                <a href="#">See More</a>
                            </div>
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    </li>
</template>

<script>
    export default {
        name: "sidenavProduct"
    }
</script>

<style lang="scss">
    .feature-products{
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
        .card-image{
            width: 60% !important;
            max-width: 60%;
        }
        .card-stacked{
            width: 40% !important;
            .card-content{
                padding: 0 !important;
            }
            .card-content{
                padding: 0 !important;
            }
        }
    }

</style>
