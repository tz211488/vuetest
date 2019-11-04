<template>
    <div class="row product-list">
        <div class="col s12 m12 product-list-header">
            <h4 class="product-list-title">Hot Selling</h4>
            <h6 class="product-list-subtitle">this is a category subtitle</h6>
        </div>
        <div class="col s12 m3">
            <div class="card">
                <div class="card-image">
                    <div class="product-badges">
                        <span class="new badge green product-badge-item">4</span>
                        <span class="new badge red product-badge-item">5</span>
                    </div>
                    <img src="../../assets/image/category-1.jpg">
                    <div class="fixed-action-btn product-action-btn">
                        <a class="btn-floating red product-action-trigger">
                            <i class="large material-icons">pie_chart_outlined</i>
                        </a>
                        <ul class="product-action-wrapper">
                            <li class="product-action-item"><a class="btn-floating btn-small red"><i class="material-icons">favorite</i></a></li>
                            <li class="product-action-item"><a class="btn-floating btn-small yellow darken-1"><i class="material-icons">shopping_cart</i></a></li>
                            <li class="product-action-item"><a class="btn-floating btn-small green"><i class="material-icons">share</i></a></li>
                            <li class="product-action-item"><a class="btn-floating btn-small blue"><i class="material-icons">mouse</i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="card-content">
                    <p class="product-category-list grey-text">T-Shirt</p>
                    <p class="product-title-list">
                        T-shoirt Women's Fashion
                    </p>
                    <p class="product-price-list"><span class="original-price grey-text">$45.00</span>from<span class="discount-price">$25.00</span></p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    $(document).ready(function(){
        let productFloatActionJson={
            direction:'right',
        };
        $('.product-action-btn').floatingActionButton(productFloatActionJson);
    });
    export default {
        name: "productList"
    }
</script>

<style lang="scss">
    .product-list{
        .product-list-header{
            text-align: center;
            margin-bottom: 2em;
        }
        .product-badges{
            position: absolute;
            top: 2px;
            right: 2px;
            z-index: 1;
        }
        .product-action-btn{
            position: absolute;
            left: 5px;
            bottom: -20px;
            .product-action-wrapper{
                left:45px !important;
            }
            .product-action-item{
                margin: 7.5px 0 0 8px;
            }
        }
        .product-category-list{

        }
        .product-price-list{
            .original-price{
                margin-right: 0.5em;
                font-size: 0.8em;
                text-decoration:line-through;
            }
            .discount-price{
                margin-left: 0.5em;
                font-size: 1.2em;
            }
        }
    }
</style>
