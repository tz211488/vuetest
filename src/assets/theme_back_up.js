
(function () {

    function ClassA(sColor) {
        this.color = sColor;
        this.name='huangdong';
    }
    /**
     ClassA.prototype.sayColor = function () {
        console.log('color',this.color)
    };**/
    Object.defineProperty(ClassA.prototype,'sayColor',{
        value:function sayColor(){
            console.log('color',this.color);
        },
        configurable: false,
        writable: true,
        enumerable: true
    });
    function ClassB(sColor, sName) {
        ClassA.call(this, sColor);
        this.name = sName;
    }
    ClassB.prototype  = new ClassA();
    ClassB.prototype.sayName = function () {
        console.log('name',this.name);
    }
    var objA = new ClassA("blue");
    var objB = new ClassB("red","John");
    objA.sayColor();

    objB.sayColor();
    objB.sayName();
})();
;(function () {


    var ProductCarousel = function(el, options){
        this.el.M_ProductCarousel = this;
        //M.Component.call(this,el,options);
        M.Carousel.prototype = new Component();
        M.Carousel.call(this,el,options);
        this.$thumbs = $('<ul class="product-thumb"></ul>');
        this.$el.find('.carousel-item').each((el, i) => {
            if (this.showThumbs) {
                let $thumb = $('<li class="thumb-item"></li>');

                // Add active to first by default.
                if (i === 0) {
                    this.$thumbs[0].classList.add('active');
                }

                this.$thumbs.append($thumb);
            }
        });
        if (this.showThumbs) {
            this.$el.append(this.$thumbs);
        }
    };
    ProductCarousel.prototype.constructor = ProductCarousel;
    M.ProductCarousel = ProductCarousel;
    if (M.jQueryLoaded) {
        M.initializeJqueryWrapper(ProductCarousel, 'productcarousel', 'M_ProductCarousel');
    }

})();

(function () {

    function ClassA() {
        this.name='ClassA';
    }

    function ClassB() {
        //ClassA.call(this);

    }

    ClassB.prototype = new ClassA();

    function ClassC() {
        ClassB.call(this);
    }
    ClassC.prototype = new ClassB();
    ClassC.prototype.sayName = function () {
        console.log(this.name);
    };

    var objA = new ClassC();
    objA.sayName();

})();
