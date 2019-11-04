
(function () {

    class ProductCarousel extends M.Carousel{
        constructor(el, options){

            super(el,options);
            this.el.M_ProductCarousel = this;
            this.showThumbs = this.options.showThumbs;
            this.$thumbs = $('<ul class="thumbs"></ul>');
            this.$el.find('.carousel-item').each((el, i) => {
                var imgurl = $(el).find('img').attr('src');
                if (this.showThumbs) {
                    let $thumb = $('<li class="thumb-item"><img class="thumb-img" src="'+imgurl+'" /></li>');

                    // Add active to first by default.
                    if (i === 0) {
                        $thumb[0].classList.add('active');
                        this.$thumbs.append('<span class="thumb-pre-btn"><i class="material-icons">keyboard_arrow_left</i></span>');
                    }



                    this.$thumbs.append($thumb);

                }
            });
            this.$thumbs.append('<span class="thumb-next-btn"><i class="material-icons">keyboard_arrow_right</i></span>');
            if (this.showThumbs) {

                this.$el.append(this.$thumbs);

            }
            this._setupExtraEventHandlers();
        }
        static getInstance(el) {
            let domElem = !!el.jquery ? el[0] : el;
            return domElem.M_ProductCarousel;
        }
        destroy() {
            this._removeEventHandlers();
            this._removeExtraEventHandlers();
            this.el.M_ProductCarousel = undefined;
        }
        _setupExtraEventHandlers(){
            if (this.showThumbs && this.$thumbs) {
                this._handleThumbClickBound = this._handleThumbClick.bind(this);
                this.$thumbs.find('.thumb-item').each((i,el)=>{
                    el.addEventListener('click',this._handleThumbClickBound);
                });
            }
        }
        _removeExtraEventHandlers(){
            if (this.showThumbs && this.$thumbs) {
                this.$thumbs.find('.thumb-item').each((el,i)=>{
                    el.removeEventListener('click',this._handleThumbClickBound);
                });
            }
        }
        _handleThumbClick(e){
            e.stopPropagation();

            let thumb = $(e.target).closest('.thumb-item');
            thumb.siblings('.active').removeClass('active');
            thumb.addClass('active');
            if (thumb.length) {
                this._cycleTo(thumb.index());
            }
        }

    }
    //var ProductTest = M.Carousel.apply(this,[el,options]);
    //ProductCarousel.__proto__ = M.Carousel.prototype;
    console.dir(M.Carousel)
    console.dir(M.Carousel.prototype)
    console.dir(ProductCarousel)
    M.ProductCarousel = ProductCarousel;
    if (M.jQueryLoaded) {
        M.initializeJqueryWrapper(ProductCarousel, 'productcarousel', 'M_ProductCarousel');
    }



})();
