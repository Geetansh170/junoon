$(document).ready(function() {
    'use strict';
    /*-----------------------------------------------------------------------------------*/
    /*	STICKY HEADER
    /*-----------------------------------------------------------------------------------*/
    if ($(".navbar").length) {
        var options = {
            offset: 350,
            offsetSide: 'top',
            classes: {
                clone: 'banner--clone fixed',
                stick: 'banner--stick',
                unstick: 'banner--unstick'
            },
            onStick: function() {
                $($.SmartMenus.Bootstrap.init);
            },
            onUnstick: function() {
                $('.navbar .btn-group').removeClass('open');
            }
        };
        var banner = new Headhesive('.navbar', options);
    }
    /*-----------------------------------------------------------------------------------*/
    /*	HAMBURGER MENU ICON
    /*-----------------------------------------------------------------------------------*/
	$(".hamburger.animate").on( "click", function() {
        $(".hamburger.animate").toggleClass("active");
    });
    $('.onepage .navbar li a').on('click', function() {
        $('.navbar .navbar-collapse.show').collapse('hide');
        $('.hamburger.animate').removeClass('active');
    });
    /*-----------------------------------------------------------------------------------*/
    /*	IMAGE ICON HOVER
    /*-----------------------------------------------------------------------------------*/
    $('.overlay:not(.caption) > a, .overlay:not(.caption) > span, .overlay.caption-overlay > a, .overlay.caption-overlay > span').prepend('<span class="bg"></span>');
    /*-----------------------------------------------------------------------------------*/
    /*	FLICKITY
    /*-----------------------------------------------------------------------------------*/
	function enableFlickitySlider(){
		$('.flickity-slider-container').each( function( i, container ) {
		    var $container = $( container );
		    var $sliderMain = $container.find('.flickity-slider-main').flickity({
		      imagesLoaded: true,
			  percentPosition: false,
			  wrapAround: true,
			  pageDots: false,
			  prevNextButtons: false,
			  fullscreen: $container.hasClass('fullscreen') ? true : false
		    });
		    $container.find('.flickity-slider-nav').flickity({
		      asNavFor: $sliderMain[0],
		      imagesLoaded: true,
			  percentPosition: false,
			  pageDots: false,
			  contain: true,
			  prevNextButtons: false
		    });
		    $container.find('.flickity-slider-main').css({ opacity: 1 });
		    $container.find('.flickity-slider-nav').css({ opacity: 1 });
		});
	}
	enableFlickitySlider();
	function enableFlickityCarousel(){
		$('.flickity-carousel-container').each( function( i, container ) {
		    var $container = $( container );
		    var $carousel = $container.find('.flickity-carousel').flickity({
		      imagesLoaded: true,
			  percentPosition: false,
			  wrapAround: true,
			  pageDots: false,
			  fullscreen: $container.hasClass('fullscreen') ? true : false
		    });
		    $carousel.css({ opacity: 1 });
			var flkty = $carousel.data('flickity');
			var $status = $container.find('.flickity-status');
				$carousel.on( 'change.flickity', updateStatus );
			function updateStatus() {
				var slideNumber = ("0" + (flkty.selectedIndex + 1)).slice(-2);
				var flktyLength = ("0" + flkty.slides.length).slice(-2);
				$status.html( '<span>' + slideNumber + '</span>/<span>' + flktyLength + '</span>' );
			}
			updateStatus();
			var $caption = $container.find('.flickity-caption');
				$carousel.on( 'select.flickity', function() {
				var captionalt = $(flkty.selectedElement).find('img').attr('alt')
				$caption.text( captionalt )
			});
		});
	}
	enableFlickityCarousel();
    /*-----------------------------------------------------------------------------------*/
    /*	CUBE PORTFOLIO
    /*-----------------------------------------------------------------------------------*/
    var $cubeinline = $('#cube-inline');
	$cubeinline.cubeportfolio({
        filters: '#cube-inline-filter',
        layoutMode: 'grid',
        mediaQueries: [{width: 1680, cols: 1}, {width: 1440, cols: 1}, {width: 1024, cols: 1}, {width: 768, cols: 1}, {width: 575, cols: 1}, {width: 480, cols: 1}],
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        caption: 'fadeIn',
        displayType: 'bottomToTop',
        displayTypeSpeed: 100,
        // singlePageInline
        singlePageInlineDeeplinking: true,
        singlePageInlineDelegate: '.cbp-singlePageInline',
        singlePageInlinePosition: 'below',
        singlePageInlineInFocus: true,
        singlePageInlineCallback: function(url, element) {
            // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
            var t = this;
            $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'html',
                    timeout: 30000
                })
                .done(function(result) {
                    t.updateSinglePageInline(result);
                    $('.image-tooltip').tooltip('hide')
                })
                .fail(function() {
                    t.updateSinglePageInline('AJAX Error! Please refresh the page!');
                });
        },
        plugins: {
            loadMore: {
                element: '#cube-inline-more',
                action: 'click',
                loadItems: 3,
            },
            singlePageInline: {
                offset: 200
            }
        },
    });
    $cubeinline.on('updateSinglePageInlineStart.cbp', function() {
    	enableFlickityCarousel();
    	enableVanillaForm();
    	enableFlickitySlider();
	});
	var $cubeinline5 = $('#cube-inline-5');
	$cubeinline5.cubeportfolio({
        filters: '#cube-inline-5-filter',
        layoutMode: 'grid',
        mediaQueries: [{width: 1680, cols: 2}, {width: 1440, cols: 2}, {width: 1024, cols: 2}, {width: 768, cols: 2}, {width: 575, cols: 1}, {width: 480, cols: 1}],
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        caption: 'fadeIn',
        displayType: 'bottomToTop',
        displayTypeSpeed: 100,
        // singlePageInline
        singlePageInlineDeeplinking: true,
        singlePageInlineDelegate: '.cbp-singlePageInline',
        singlePageInlinePosition: 'above',
        singlePageInlineInFocus: true,
        singlePageInlineCallback: function(url, element) {
            // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
            var t = this;
            $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'html',
                    timeout: 30000
                })
                .done(function(result) {
                    t.updateSinglePageInline(result);
                })
                .fail(function() {
                    t.updateSinglePageInline('AJAX Error! Please refresh the page!');
                });
        },
        plugins: {
            loadMore: {
                element: '#cube-inline-5-more',
                action: 'click',
                loadItems: 3,
            },
            singlePageInline: {
                offset: 58
            }
        },
    });
    $cubeinline5.on('updateSinglePageInlineStart.cbp', function() {
    	enableFlickityCarousel();
	});
	var $cubeinline6 = $('#cube-inline-6');
	$cubeinline6.cubeportfolio({
        filters: '#cube-inline-6-filter',
        layoutMode: 'grid',
        mediaQueries: [{width: 1680, cols: 3}, {width: 1440, cols: 3}, {width: 1000, cols: 3}, {width: 740, cols: 2}, {width: 575, cols: 1}, {width: 480, cols: 1}],
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 10,
        gapVertical: 10,
        gridAdjustment: 'responsive',
        caption: 'fadeIn',
        displayType: 'bottomToTop',
        displayTypeSpeed: 100,
        // singlePageInline
        singlePageInlineDeeplinking: true,
        singlePageInlineDelegate: '.cbp-singlePageInline',
        singlePageInlinePosition: 'above',
        singlePageInlineInFocus: true,
        singlePageInlineCallback: function(url, element) {
            // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
            var t = this;
            $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'html',
                    timeout: 30000
                })
                .done(function(result) {
                    t.updateSinglePageInline(result);
                })
                .fail(function() {
                    t.updateSinglePageInline('AJAX Error! Please refresh the page!');
                });
        },
        plugins: {
            loadMore: {
                element: '#cube-inline-6-more',
                action: 'click',
                loadItems: 3,
            },
            singlePageInline: {
                offset: 58
            }
        },
    });
    $cubeinline6.on('updateSinglePageInlineStart.cbp', function() {
    	enableFlickityCarousel();
	});
	var $cubeinline7 = $('#cube-inline-7');
	$cubeinline7.cubeportfolio({
        filters: '#cube-inline-7-filter',
        layoutMode: 'grid',
        mediaQueries: [{width: 1680, cols: 3}, {width: 1440, cols: 3}, {width: 960, cols: 3}, {width: 720, cols: 2}, {width: 575, cols: 1}, {width: 480, cols: 1}],
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 10,
        gapVertical: 10,
        gridAdjustment: 'responsive',
        caption: 'fadeIn',
        displayType: 'bottomToTop',
        displayTypeSpeed: 100,
        // singlePageInline
        singlePageInlineDeeplinking: true,
        singlePageInlineDelegate: '.cbp-singlePageInline',
        singlePageInlinePosition: 'top',
        singlePageInlineInFocus: true,
        singlePageInlineCallback: function(url, element) {
            // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
            var t = this;
            $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'html',
                    timeout: 30000
                })
                .done(function(result) {
                    t.updateSinglePageInline(result);
                })
                .fail(function() {
                    t.updateSinglePageInline('AJAX Error! Please refresh the page!');
                });
        },
        plugins: {
            loadMore: {
                element: '#cube-inline-7-more',
                action: 'click',
                loadItems: 3,
            },
            singlePageInline: {
                offset: 150
            }
        },
    });
    $cubeinline7.on('updateSinglePageInlineStart.cbp', function() {
    	const players = Plyr.setup('.player'); 
	});
	var $cubeinline8 = $('#cube-inline-8');
	$cubeinline8.cubeportfolio({
        filters: '#cube-inline-8-filter',
        layoutMode: 'grid',
        mediaQueries: [{width: 1680, cols: 3}, {width: 1440, cols: 3}, {width: 960, cols: 3}, {width: 720, cols: 2}, {width: 575, cols: 1}, {width: 480, cols: 1}],
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 10,
        gapVertical: 10,
        gridAdjustment: 'responsive',
        caption: 'fadeIn',
        displayType: 'bottomToTop',
        displayTypeSpeed: 100,
        // singlePageInline
        singlePageInlineDeeplinking: true,
        singlePageInlineDelegate: '.cbp-singlePageInline',
        singlePageInlinePosition: 'top',
        singlePageInlineInFocus: true,
        singlePageInlineCallback: function(url, element) {
            // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
            var t = this;
            $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'html',
                    timeout: 30000
                })
                .done(function(result) {
                    t.updateSinglePageInline(result);
                })
                .fail(function() {
                    t.updateSinglePageInline('AJAX Error! Please refresh the page!');
                });
        },
        plugins: {
            loadMore: {
                element: '#cube-inline-8-more',
                action: 'click',
                loadItems: 3,
            },
            singlePageInline: {
                offset: 150
            }
        },
    });
    $cubeinline8.on('updateSinglePageInlineStart.cbp', function() {
    	enableFlickitySlider();
	});
	var $cubegrid = $('#cube-grid');
    $cubegrid.cubeportfolio({
        filters: '#cube-grid-filter',
        loadMore: '#cube-grid-more',
        loadMoreAction: 'click',
        layoutMode: 'grid',
        mediaQueries: [{width: 1440, cols: 3}, {width: 1024, cols: 3}, {width: 768, cols: 3}, {width: 575, cols: 2}, {width: 480, cols: 1}],
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 15,
        gapVertical: 15,
        gridAdjustment: 'responsive',
        caption: 'fadeIn',
        displayType: 'bottomToTop',
        displayTypeSpeed: 100,
        plugins: {
            loadMore: {
                loadItems: 4
            }
        }
    });
    $cubegrid.on('onAfterLoadMore.cbp', function(event, newItemsAddedToGrid) {
        $('.cbp-item-load-more .overlay > a, .cbp-item-load-more .overlay > span').prepend('<span class="bg"></span>');
        $lg.data('lightGallery').destroy(true);
        enablelightGallery();  
    });
    var $cubegridfull = $('#cube-grid-full');
    $cubegridfull.cubeportfolio({
        filters: '#cube-grid-full-filter',
        loadMore: '#cube-grid-full-more',
        loadMoreAction: 'click',
        layoutMode: 'grid',
        mediaQueries: [{width: 1500, cols: 4}, {width: 1100, cols: 4}, {width: 800, cols: 3}, {width: 670, cols: 2}, {width: 320, cols: 1}],
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 15,
        gapVertical: 15,
        gridAdjustment: 'responsive',
        caption: 'fadeIn',
        displayType: 'bottomToTop',
        displayTypeSpeed: 100,
        plugins: {
            loadMore: {
                loadItems: 4
            }
        }
    });
    $cubegridfull.on('onAfterLoadMore.cbp', function(event, newItemsAddedToGrid) {
        $('.cbp-item-load-more .overlay > a, .cbp-item-load-more .overlay > span').prepend('<span class="bg"></span>');
        $lg.data('lightGallery').destroy(true);
        enablelightGallery();  
    });
    var $cubegridlarge = $('#cube-grid-large');
    $cubegridlarge.cubeportfolio({
        filters: '#cube-grid-large-filter',
        loadMore: '#cube-grid-large-more',
        loadMoreAction: 'click',
        layoutMode: 'grid',
        mediaQueries: [{width: 1440, cols: 2}, {width: 1024, cols: 2}, {width: 768, cols: 2}, {width: 575, cols: 2}, {width: 480, cols: 1}],
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 15,
        gapVertical: 15,
        gridAdjustment: 'responsive',
        caption: 'fadeIn',
        displayType: 'bottomToTop',
        displayTypeSpeed: 100,
        plugins: {
            loadMore: {
                loadItems: 4
            }
        }
    });
    $cubegridlarge.on('onAfterLoadMore.cbp', function(event, newItemsAddedToGrid) {
        $('.cbp-item-load-more .overlay > a, .cbp-item-load-more .overlay > span').prepend('<span class="bg"></span>');
        $lg.data('lightGallery').destroy(true);
        enablelightGallery();  
    });
    var $cubemosaic = $('#cube-grid-mosaic');
    $cubemosaic.cubeportfolio({
        filters: '#cube-grid-mosaic-filter',
        loadMore: '#cube-grid-mosaic-more',
        loadMoreAction: 'click',
        layoutMode: 'mosaic',
        mediaQueries: [{width: 1440, cols: 2}, {width: 1024, cols: 2}, {width: 768, cols: 2}, {width: 575, cols: 2}, {width: 320, cols: 1}],
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 10,
        gapVertical: 10,
        gridAdjustment: 'responsive',
        caption: 'fadeIn',
        displayType: 'bottomToTop',
        displayTypeSpeed: 100,
        plugins: {
            loadMore: {
                loadItems: 4
            }
        }
    });
    var $cubemosaicfull = $('#cube-grid-mosaic-full');
    $cubemosaicfull.cubeportfolio({
        filters: '#cube-grid-mosaic-full-filter',
        loadMore: '#cube-grid-mosaic-full-more',
        loadMoreAction: 'click',
        layoutMode: 'mosaic',
        mediaQueries: [{width: 1440, cols: 2}, {width: 1024, cols: 2}, {width: 768, cols: 2}, {width: 575, cols: 2}, {width: 320, cols: 1}],
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        caption: 'fadeIn',
        displayType: 'bottomToTop',
        displayTypeSpeed: 100,
        plugins: {
            loadMore: {
                loadItems: 4
            }
        }
    });
	$('.cube-slider').cubeportfolio({
        layoutMode: 'slider',
        drag: true,
        auto: false,
        autoTimeout: 5000,
        autoPauseOnHover: true,
        showNavigation: true,
        showPagination: true,
        rewindNav: true,
        scrollByPage: false,
        gridAdjustment: 'responsive',
        mediaQueries: [{width: 0, cols: 1}],
        gapHorizontal: 0,
        gapVertical: 0,
        caption: '',
        displayType: 'default',
    }); 
	$('.cube-carousel').cubeportfolio({
        layoutMode: 'slider',
        drag: true,
        auto: false,
        autoTimeout: 5000,
        autoPauseOnHover: true,
        showNavigation: true,
        showPagination: true,
        rewindNav: false,
        scrollByPage: false,
        gridAdjustment: 'responsive',
        mediaQueries: [{width: 1680, cols: 3}, {width: 1440, cols: 3}, {width: 960, cols: 3}, {width: 720, cols: 2}, {width: 575, cols: 1}, {width: 480, cols: 1}],
        gapHorizontal: 0,
        gapVertical: 0,
        caption: 'overlayBottomReveal',
        displayType: 'fadeIn',
        displayTypeSpeed: 100,
    });
	/*-----------------------------------------------------------------------------------*/
    /*	SLIDER REVOLUTION
    /*-----------------------------------------------------------------------------------*/
	$('#slider').revolution({
        sliderType: "standard",
        sliderLayout: "fullscreen",
        spinner: "spinner2",
        delay: 9000,
        shadow: 0,
        gridwidth:[1140, 1024, 778, 480],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: true,
				hide_under:1024,
                style: 'ares',
                tmp: ''
            },
            touch: {
                touchenabled: 'on',
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: 'horizontal',
                drag_block_vertical: true
            },
            bullets: {
                enable: true,
                style: 'zeus',
                tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span>',
                hide_onleave: true,
                hide_onmobile: false,
                h_align: "center",
                v_align: "bottom",
                space: 8,
                h_offset: 0,
                v_offset: 20
            }
        }
    });
    $('#slider2').revolution(
    {
        sliderType: "standard",
        sliderLayout: "fullscreen",
        fullScreenOffsetContainer: ".navbar:not(.fixed)",
        spinner: "spinner2",
        delay: 9000,
        shadow: 0,
        gridwidth:[1140, 1024, 778, 480],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: false
            },
            touch: { 
		        touchenabled: 'on',
		        swipe_threshold: 75,
		        swipe_min_touches: 1,
		        swipe_direction: 'horizontal',
		        drag_block_vertical: true		 
		    },
            bullets: {
                enable: false
            }
        }    
    });
    $('#slider3').revolution({
        sliderType: "standard",
        sliderLayout: "fullscreen",
        fullScreenOffsetContainer: ".navbar:not(.fixed)",
        spinner: "spinner2",
        delay: 9000,
        shadow: 0,
        gridwidth: [1140, 1024, 778, 480],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: true,
				hide_under:1024,
                style: 'ares',
                tmp: ''
            },
            touch: {
                touchenabled: 'on',
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: 'horizontal',
                drag_block_vertical: true
            },
            bullets: {
                enable: true,
                style: 'zeus',
                tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span>',
                hide_onleave: true,
                hide_onmobile: false,
                h_align: "center",
                v_align: "bottom",
                space: 8,
                h_offset: 0,
                v_offset: 20
            }
        }
    });
    $('#slider4').revolution(
    {
        sliderType: "standard",
        sliderLayout: "fullscreen",
        spinner: "spinner2",
        delay: 9000,
        shadow: 0,
        gridwidth:[1140, 1024, 778, 480],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: false
            },
            touch: { 
		        touchenabled: 'on',
		        swipe_threshold: 75,
		        swipe_min_touches: 1,
		        swipe_direction: 'horizontal',
		        drag_block_vertical: true		 
		    },
            bullets: {
                enable: false
            }
        }    
    });
    $('#slider5').revolution(
    {
        sliderType: "standard",
        sliderLayout: "auto",
        spinner: "spinner2",
        delay: 9000,
        shadow: 0,
        gridwidth:[1140, 1024, 778, 480],
        gridheight:[600, 525, 400, 400],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: true,
                hide_under:1024,
                style: 'ares',
                tmp: ''
            },
            touch: { 
		        touchenabled: 'on',
		        swipe_threshold: 75,
		        swipe_min_touches: 1,
		        swipe_direction: 'horizontal',
		        drag_block_vertical: true		 
		    },
            bullets: {
                enable: true,
                style: 'zeus',
                tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span>',
                hide_onleave: true,
                hide_onmobile: true,
                h_align: "center",
                v_align: "bottom",
                space: 8,
                h_offset: 0,
                v_offset: 20
            }
        }   
    });
    $('#slider6').revolution({
        sliderType: "standard",
        sliderLayout: "fullscreen",
        spinner: "spinner2",
        delay: 9000,
        shadow: 0,
        gridwidth:[1140, 1024, 778, 480],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
	        mouseScrollNavigation:"on",
            arrows: {
                enable: true,
                hide_onleave: true,
				hide_under:1024,
                style: 'ares',
                tmp: ''
            },
            touch: {
                touchenabled: 'on',
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: 'vertical',
                drag_block_vertical: true
            },
            tabs: {
                        style: 'zeus',
                        enable: true,
                        width: 50,
                        height: 50,
                        min_width: 50,
                        wrapper_padding: 0,
                        wrapper_color: 'none',
                        wrapper_opacity: '0.5',
                        tmp: '<span class="tp-tab-image"></span>',
                        visibleAmount: 20,
                        hide_onmobile: true,
                        hide_onleave: false,
                        hide_delay: 200,
                        direction: 'horizontal',
                        span: true,
                        position: 'inner',
                        space: 5,
                        h_align: 'left',
                        v_align: 'bottom',
                        h_offset: 20,
                        v_offset: 20
                    },
                    bullets: {
                enable: false
            }
        }
    });
    $('#slider7').revolution(
    {
        sliderType: "standard",
        sliderLayout: "auto",
        spinner: "spinner2",
        delay: 9000,
        shadow: 0,
        gridwidth:[780, 1024, 778, 480],
        gridheight:[550, 525, 400, 400],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: true,
                hide_under:1024,
                style: 'ares',
                tmp: ''
            },
            touch: { 
		        touchenabled: 'on',
		        swipe_threshold: 75,
		        swipe_min_touches: 1,
		        swipe_direction: 'horizontal',
		        drag_block_vertical: true		 
		    },
            bullets: {
                enable: false
            },
            thumbnails: {
					style:"gyges",
					enable:true,
					width:68,
					height:68,
					min_width:68,
					wrapper_padding:5,
					wrapper_color:"rgba(255,255,255,1)",
					tmp:'<span class="tp-thumb-img-wrap"><span class="tp-thumb-image"></span></span>',
					visibleAmount:5,
					hide_onmobile:false,
					hide_over:777,
					hide_onleave:false,
					direction:"vertical",
					span:true,
					position:"outer-left",
					space:5,
					h_align:"left",
					v_align:"top",
					h_offset:5,
					v_offset:5
				}
				,
				tabs: {
					style:"gyges",
					enable:true,
					width:300,
					height:98,
					min_width:300,
					wrapper_padding:30,
					wrapper_color:"rgba(255,255,255,1)",
					tmp:'<div class="tp-tab-content"><span class="tp-tab-title">{{title}}</span><span class="tp-tab-date">{{param1}}</span></div><div class="tp-tab-image"></div>',
					visibleAmount: 5,
					hide_onmobile: true,
					hide_under:778,
					hide_onleave:false,
					hide_delay:200,
					direction:"vertical",
					span:true,
					position:"outer-left",
					space:0,
					h_align:"left",
					v_align:"top",
					h_offset:0,
					v_offset:0
				}
        }   
    });
    $('#slider8').revolution(
    {
        sliderType: "standard",
        sliderLayout: "fullwidth",
        spinner: "spinner2",
        delay: 9000,
        shadow: 0,
        gridwidth:[1140, 1024, 778, 480],
		gridheight:[600, 525, 400, 400],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: false
            },
            touch: { 
		        touchenabled: 'on',
		        swipe_threshold: 75,
		        swipe_min_touches: 1,
		        swipe_direction: 'horizontal',
		        drag_block_vertical: true		 
		    },
            bullets: {
                enable: false
            }
        }    
    });
    $('#slider9').revolution(
    {
        sliderType: "standard",
        sliderLayout:"fullscreen",
			dottedOverlay:"none",
			delay:9000,
			navigation: {
				keyboardNavigation:"off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
 							mouseScrollReverse:"default",
				onHoverStop:"off",
				touch:{
					touchenabled:"on",
					touchOnDesktop:"off",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				},
				arrows: {
	                enable: true,
	                hide_onleave: true,
					hide_under:768,
	                style: 'ares',
	                tmp: ''
            	}
			},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth: [1140,1200,1000,480], 
			gridheight: [700,900,700,700],
			spinner: "spinner2",
			autoHeight:"off",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false 
    });
    $('#slider10').revolution({
        sliderType: "standard",
        sliderLayout: "fullscreen",
        spinner: "spinner2",
        delay: 9000,
        shadow: 0,
        gridwidth:[1140, 1024, 778, 480],
        responsiveLevels: [1240, 1024, 778, 480],
        disableProgressBar:"on",
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: true,
				hide_under:1024,
                style: 'ares',
                tmp: ''
            },
            touch: {
                touchenabled: 'on',
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: 'horizontal',
                drag_block_vertical: true
            },
            tabs: {
                        style: 'zeus',
                        enable: true,
                        width: 50,
                        height: 50,
                        min_width: 50,
                        wrapper_padding: 0,
                        wrapper_color: 'none',
                        wrapper_opacity: '0.5',
                        tmp: '<span class="tp-tab-image"></span>',
                        visibleAmount: 20,
                        hide_onmobile: true,
                        hide_onleave: false,
                        hide_delay: 200,
                        direction: 'horizontal',
                        span: true,
                        position: 'inner',
                        space: 5,
                        h_align: 'center',
                        v_align: 'bottom',
                        h_offset: 20,
                        v_offset: 20
                    },
                    bullets: {
                enable: false
            }
        }
    });
    $('#slider11').revolution({
        sliderType: "standard",
        sliderLayout: "fullscreen",
        fullScreenOffsetContainer: ".navbar:not(.fixed)",
        spinner: "spinner2",
        delay: 9000,
        shadow: 0,
        gridwidth:[1140, 1024, 778, 480],
        responsiveLevels: [1240, 1024, 778, 480],
        disableProgressBar:"on",
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: true,
				hide_under:1024,
                style: 'ares',
                tmp: ''
            },
            touch: {
                touchenabled: 'on',
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: 'horizontal',
                drag_block_vertical: true
            },
            tabs: {
                        style: 'zeus',
                        enable: true,
                        width: 50,
                        height: 50,
                        min_width: 50,
                        wrapper_padding: 0,
                        wrapper_color: 'none',
                        wrapper_opacity: '0.5',
                        tmp: '<span class="tp-tab-image"></span>',
                        visibleAmount: 20,
                        hide_onmobile: true,
                        hide_onleave: false,
                        hide_delay: 200,
                        direction: 'horizontal',
                        span: true,
                        position: 'inner',
                        space: 5,
                        h_align: 'center',
                        v_align: 'bottom',
                        h_offset: 20,
                        v_offset: 20
                    },
                    bullets: {
                enable: false
            }
        }
    });
    $('#slider12').revolution(
    {
        sliderType: "standard",
        sliderLayout:"fullscreen",
        fullScreenOffsetContainer: ".navbar:not(.fixed)",
			dottedOverlay:"none",
			delay:9000,
			navigation: {
				keyboardNavigation:"off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
 							mouseScrollReverse:"default",
				onHoverStop:"off",
				touch:{
					touchenabled:"on",
					touchOnDesktop:"off",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				},
				arrows: {
	                enable: true,
	                hide_onleave: true,
					hide_under:768,
	                style: 'ares',
	                tmp: ''
            	}
			},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth: [1140,1200,1000,480], 
			gridheight: [700,900,700,700],
			spinner: "spinner2",
			autoHeight:"off",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false 
    });
    $('#slider13').revolution(
    {
        sliderType: "standard",
        sliderLayout: "fullwidth",
        spinner: "spinner2",
        delay: 9000,
        shadow: 0,
        gridwidth:[1140, 1024, 778, 480],
		gridheight:[600, 600, 600, 600],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: true,
				hide_under:1024,
                style: 'ares',
                tmp: ''
            },
            touch: {
                touchenabled: 'on',
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: 'horizontal',
                drag_block_vertical: true
            },
            bullets: {
                enable: true,
                style: 'zeus',
                tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span>',
                hide_onleave: true,
                hide_onmobile: false,
                h_align: "center",
                v_align: "bottom",
                space: 8,
                h_offset: 0,
                v_offset: 20
            }
        }   
    });
    $('#slider14').revolution(
    {
        sliderType: "standard",
        sliderLayout: "fullwidth",
        spinner: "spinner2",
        delay: 9000,
        shadow: 0,
        gridwidth:[1140, 1024, 778, 480],
		gridheight:[600, 600, 600, 600],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: false
            },
            touch: { 
		        touchenabled: 'on',
		        swipe_threshold: 75,
		        swipe_min_touches: 1,
		        swipe_direction: 'horizontal',
		        drag_block_vertical: true		 
		    },
            bullets: {
                enable: false
            }
        }     
    });
	/*-----------------------------------------------------------------------------------*/
    /*	LIGHTGALLERY
    /*-----------------------------------------------------------------------------------*/   
    function enablelightGallery(){
		var $lg = $('.light-gallery');
	    $lg.lightGallery({
	        thumbnail: false,
	        selector: 'a',
	        mode: 'lg-fade',
	        download: false,
	        autoplayControls: false,
	        zoom: false,
	        fullScreen: false,
	        videoMaxWidth: '1000px',
	        loop: false,
	        hash: false,
	        mousewheel: true,
	        videojs: true,
	        share: false
	    });
	}
	enablelightGallery();  
	/*-----------------------------------------------------------------------------------*/
    /*	COUNTER UP
    /*-----------------------------------------------------------------------------------*/
    $('.counter .value').counterUp({
        delay: 50,
        time: 1000
    });
	/*-----------------------------------------------------------------------------------*/
    /*	COUNTDOWN
	/*-----------------------------------------------------------------------------------*/
    $(".countdown").countdown();	
    /*-----------------------------------------------------------------------------------*/
    /*	PLYR
    /*-----------------------------------------------------------------------------------*/
    const players = Plyr.setup('.player'); 
    /*-----------------------------------------------------------------------------------*/
    /*	PROGRESSBAR
	/*-----------------------------------------------------------------------------------*/
    var $pline = $('.progressbar.line');
    $pline.each(function(i) {
        var line = new ProgressBar.Line(this, {
            strokeWidth: 3,
            trailWidth: 3,
            duration: 3000,
            easing: 'easeInOut',
            text: {
                style: {
                    color: 'inherit',
                    position: 'absolute',
                    right: '0',
                    top: '-30px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            step: function(state, line, attachment) {
                line.setText(Math.round(line.value() * 100) + ' %');
            }
        });
        var value = ($(this).attr('data-value') / 100);
        $pline.waypoint(function() {
            line.animate(value);
        }, {
            offset: "100%"
        })
    });
    /*-----------------------------------------------------------------------------------*/
    /*	AOS
    /*-----------------------------------------------------------------------------------*/
    AOS.init({
        easing: 'ease-in-out-sine',
        duration: 800,
        once: true
    });
    /*-----------------------------------------------------------------------------------*/
    /*	PRETTIFY
    /*-----------------------------------------------------------------------------------*/
    window.prettyPrint && prettyPrint();
    /*-----------------------------------------------------------------------------------*/
    /*	ISOTOPE GRID
	/*-----------------------------------------------------------------------------------*/
    var $isogrid = $('.grid .isotope');
    $isogrid.isotope({
        itemSelector: '.item',
        percentPosition: true,
        transitionDuration: '0.7s',
        masonry: {
            columnWidth: $isogrid.width() / 12
        },
        layoutMode: 'masonry'
    });
    $(window).resize(function() {
        $isogrid.isotope({
            masonry: {
                columnWidth: $isogrid.width() / 12
            }
        });
    });
    $(window).on("load", function() {
        $isogrid.isotope({
            masonry: {
                columnWidth: $isogrid.width() / 12
            }
        });
    });
    $isogrid.imagesLoaded(function() {
        $isogrid.isotope('layout');
    });
    /*-----------------------------------------------------------------------------------*/
    /*	BACKGROUND IMAGE
    /*-----------------------------------------------------------------------------------*/
    $(".bg-image").css('background-image', function() {
        var bg = ('url(' + $(this).data("image-src") + ')');
        return bg;
    });
    /*-----------------------------------------------------------------------------------*/
    /*	TOOLTIP
    /*-----------------------------------------------------------------------------------*/
    $('.has-tooltip').tooltip();
    $('.image-tooltip').tooltip({
	    html: true,
	    container: 'body',
	    trigger: 'hover',
	    template: '<div class="image-tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
    });
    $('.has-popover').popover({
        trigger: 'focus',
    });
    /*-----------------------------------------------------------------------------------*/
    /*	VIDEO WRAPPER
    /*-----------------------------------------------------------------------------------*/
    $('.video-wrapper video').backgroundVideo({
        $outerWrap: $('.video-wrapper'),
        pauseVideoOnViewLoss: false,
        parallaxOptions: {
            effect: 3
        }
    });
    /*-----------------------------------------------------------------------------------*/
    /*	PARALLAX MOBILE
    /*-----------------------------------------------------------------------------------*/
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i)) {
        $('.image-wrapper').addClass('mobile');
    }
    /*-----------------------------------------------------------------------------------*/
    /*	INSTAGRAM
    /*-----------------------------------------------------------------------------------*/
    var instagramFeed = new Instafeed({
        target: 'instafeed',
        get: 'user',
        limit: 6,
        userId: 1215763826,
        accessToken: '1215763826.f1627ea.512d3a9b334a4c91ac2e83d4f4d9b291',
        resolution: 'low_resolution',
        template: '<div class="item col-6 col-sm-4 col-md-2"><figure class="overlay overlay4 rounded"><a href="{{link}}" target="_blank"><img src="{{image}}" /><figcaption class="d-flex"><div class="align-self-center mx-auto"><i class="fa fa-instagram"></i></div></figcaption></figure></div>',
        after: function() {
            $('#instafeed figure.overlay a').prepend('<span class="bg"></span>');
        }
    });
    $('#instafeed').each(function() {
        instagramFeed.run();
    });
    var instagramFeed2 = new Instafeed({
        target: 'instafeed2',
        get: 'user',
        limit: 8,
        userId: 1215763826,
        accessToken: '1215763826.f1627ea.512d3a9b334a4c91ac2e83d4f4d9b291',
        resolution: 'low_resolution',
        template: '<div class="item col-6 col-md-3"><figure class="overlay overlay4 rounded"><a href="{{link}}" target="_blank"><img src="{{image}}" /><figcaption class="d-flex"><div class="align-self-center mx-auto"><i class="fa fa-instagram"></i></div></figcaption></figure></div>',
        after: function() {
            $('#instafeed2 figure.overlay a').prepend('<span class="bg"></span>');
        }
    });
    $('#instafeed2').each(function() {
        instagramFeed2.run();
    });
    var instagramFeed3 = new Instafeed({
        target: 'instafeed-widget',
        get: 'user',
        limit: 6,
        userId: 1215763826,
        accessToken: '1215763826.f1627ea.512d3a9b334a4c91ac2e83d4f4d9b291',
        resolution: 'low_resolution',
        template: '<div class="item col-6 col-md-6 col-lg-4"><figure class="overlay overlay4 rounded"><a href="{{link}}" target="_blank"><img src="{{image}}" /><figcaption class="d-flex"><div class="align-self-center mx-auto"><i class="fa fa-instagram"></i></div></figcaption></figure></div>',
        after: function() {
            $('#instafeed-widget figure.overlay a').prepend('<span class="bg"></span>');
        }
    });
    $('#instafeed-widget').each(function() {
        instagramFeed3.run();
    });
    var instagramFeed4 = new Instafeed({
        target: 'instafeed-wedding',
        get: 'user',
        limit: 6,
        userId: 8496407961,
        accessToken: '8496407961.17f53f4.5e0a8ef3ccd84de5ace5caca71882827',
        resolution: 'low_resolution',
        template: '<div class="item col-6 col-sm-4 col-md-2"><figure class="overlay overlay4 rounded"><a href="{{link}}" target="_blank"><img src="{{image}}" /><figcaption class="d-flex"><div class="align-self-center mx-auto"><i class="fa fa-instagram"></i></div></figcaption></figure></div>',
        after: function() {
            $('#instafeed-wedding figure.overlay a').prepend('<span class="bg"></span>');
        }
    });
    $('#instafeed-wedding').each(function() {
        instagramFeed4.run();
    });
    var instagramFeed5 = new Instafeed({
        target: 'instafeed-portrait',
        get: 'user',
        limit: 6,
        userId: 8499296840,
        accessToken: '8499296840.a5f34eb.fac290a263ac482189f8b74db310ac33',
        resolution: 'low_resolution',
        template: '<div class="item col-6 col-sm-4 col-md-2"><figure class="overlay overlay4 rounded"><a href="{{link}}" target="_blank"><img src="{{image}}" /><figcaption class="d-flex"><div class="align-self-center mx-auto"><i class="fa fa-instagram"></i></div></figcaption></figure></div>',
        after: function() {
            $('#instafeed-portrait figure.overlay a').prepend('<span class="bg"></span>');
        }
    });
    $('#instafeed-portrait').each(function() {
        instagramFeed5.run();
    });
    var instagramFeed6 = new Instafeed({
        target: 'instafeed-minimal',
        get: 'user',
        limit: 6,
        userId: 8567158531,
        accessToken: '8567158531.e3842d2.e29434544808474eb57688333240c08d',
        resolution: 'low_resolution',
        template: '<div class="item col-6 col-sm-4 col-md-2"><figure class="overlay overlay4 rounded"><a href="{{link}}" target="_blank"><img src="{{image}}" /><figcaption class="d-flex"><div class="align-self-center mx-auto"><i class="fa fa-instagram"></i></div></figcaption></figure></div>',
        after: function() {
            $('#instafeed-minimal figure.overlay a').prepend('<span class="bg"></span>');
        }
    });
    $('#instafeed-minimal').each(function() {
        instagramFeed6.run();
    });
    var instagramFeed7 = new Instafeed({
        target: 'instafeed-widget-wedding',
        get: 'user',
        limit: 6,
        userId: 8496407961,
        accessToken: '8496407961.17f53f4.5e0a8ef3ccd84de5ace5caca71882827',
        resolution: 'low_resolution',
        template: '<div class="item col-6 col-md-6 col-lg-4"><figure class="overlay overlay4 rounded"><a href="{{link}}" target="_blank"><img src="{{image}}" /><figcaption class="d-flex"><div class="align-self-center mx-auto"><i class="fa fa-instagram"></i></div></figcaption></figure></div>',
        after: function() {
            $('#instafeed-widget-wedding figure.overlay a').prepend('<span class="bg"></span>');
        }
    });
    $('#instafeed-widget-wedding').each(function() {
        instagramFeed7.run();
    });
    var instagramFeed8 = new Instafeed({
        target: 'instafeed-wedding-2',
        get: 'user',
        limit: 8,
        userId: 8496407961,
        accessToken: '8496407961.17f53f4.5e0a8ef3ccd84de5ace5caca71882827',
        resolution: 'low_resolution',
        template: '<div class="item col-6 col-md-3"><figure class="overlay overlay4 rounded"><a href="{{link}}" target="_blank"><img src="{{image}}" /><figcaption class="d-flex"><div class="align-self-center mx-auto"><i class="fa fa-instagram"></i></div></figcaption></figure></div>',
        after: function() {
            $('#instafeed-wedding-2 figure.overlay a').prepend('<span class="bg"></span>');
        }
    });
    $('#instafeed-wedding-2').each(function() {
        instagramFeed8.run();
    });
    /*-----------------------------------------------------------------------------------*/
    /*	PAGE LOADING
    /*-----------------------------------------------------------------------------------*/
	$('.page-loading').delay(350).fadeOut('slow');
    $('.page-loading .status').fadeOut('slow'); 
    /*-----------------------------------------------------------------------------------*/
    /*	VANILLA
    /*-----------------------------------------------------------------------------------*/
    function enableVanillaForm(){
		var myForm;
    myForm = new VanillaForm($("form.vanilla-form"));
	}
	enableVanillaForm(); 
    /*-----------------------------------------------------------------------------------*/
    /*	ONEPAGE HEADER OFFSET
    /*-----------------------------------------------------------------------------------*/	
    var header_height = $('.navbar:not(.banner--clone)').outerHeight();
    var shrinked_header_height = 58;
    var firstStyle = {
        'padding-top': '' + shrinked_header_height + 'px',
        'margin-top': '-' + shrinked_header_height + 'px'
    };
    $('.onepage section').css(firstStyle);
    var secondStyle = {
        'padding-top': '' + header_height + 'px',
        'margin-top': '-' + header_height + 'px'
    };
    $('.onepage section:first-of-type').css(secondStyle);
	/*-----------------------------------------------------------------------------------*/
    /*	ONEPAGE NAV LINKS
    /*-----------------------------------------------------------------------------------*/	
	var empty_a = $('.onepage .navbar ul.navbar-nav a[href="#"]');	
	empty_a.on('click', function(e) {
	    e.preventDefault();
	});
    /*-----------------------------------------------------------------------------------*/
	/*	ONEPAGE SMOOTH SCROLL
	/*-----------------------------------------------------------------------------------*/	
	$(function() {
	  setTimeout(function() {
	    if (location.hash) {
	      window.scrollTo(0, 0);
	      var target = location.hash.split('#');
	      smoothScrollTo($('#'+target[1]));
	    }
	  }, 1);  
	  $('a.scroll[href*="#"]:not([href="#"])').on('click', function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      smoothScrollTo($(this.hash));
	      return false;
	    }
	  });  
	  function smoothScrollTo(target) {
	    var target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	    if (target.length) {
	      $('html,body').animate({
	        scrollTop: target.offset().top
	      }, 1500, 'easeInOutExpo');
	    }
	  }
	});
});