!function(){
	function Swiper(options){
		this.init();
	}

	var p = Swiper.prototype;

	p.config = {
		swiper_wrap_select: '.swiper-wrap',
		direction: 'horizontal',
	}

	p.content_width = undefined;

	p.elements = {
		$swiper_wrap: null,
		$swiper_box: null,
		$swiper_slides: null
	}

	p.init = function() {
		this.getElements();
		this.layout();
	}

	p.getElements = function() {
		var swiper_wrap_select = this.config.swiper_wrap_select;
		if(swiper_wrap_select.indexOf('.') >= 0) {
			var swiper_wraps = document.getElementsByClassName(swiper_wrap_select.replace('.',''));
			if(swiper_wraps.length > 0) {
				this.elements.$swiper_wrap = swiper_wraps[0];
				this.elements.$swiper_box = this.elements.$swiper_wrap.children[0];
				this.elements.$swiper_slides = this.elements.$swiper_box.children;
				console.log(this.elements);
			}
			
			// for(item in this.elements.$swiper_wrap){
			// 	console.log(item)
			// }
		}
		//this.layout();
	}

	p.layout = function() {
		var $swiper_slides = this.elements.$swiper_slides;
		for(var index in $swiper_slides) {
			if($swiper_slides[parseInt(index)]){
				this.layoutSlideItem($swiper_slides[parseInt(index)]);	
			}	
		}
		//this.layoutSlideItem();	
	}

	p.layoutSlideItem = function($item) {
		if(this.config.direction == 'horizontal'){
			$item.className += ' swiper-horizontal';
		}
		console.log($item);

	}

	window.Swiper = Swiper;
}()