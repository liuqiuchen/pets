$(function () {
	/**
	 * 海报
	 * */
	var bill = $('#bill');

	bill.on('mouseover', function () {
		$(this).find('i.animals_tooltips').css('display', 'block');
	}).on('mouseout', function () {
		$(this).find('i.animals_tooltips').css('display', 'none');
	});

	bill.find('input.search').on('focus', function () {
		$(this).animate({
			width: '150px'
		}, 'fast');
	}).on('blur', function () {
		$(this).animate({
			width: '100px'
		}, 'fast');
	});


	/**
	 * 推荐此站
	 * */
	var recommendBtn = '#top .content_l ul li.item3';
	$(recommendBtn).on('mouseover', function () {
		$('#recommend').stop().slideDown('fast');
	}).on('mouseout', function () {
		$('#recommend').stop().slideUp('fast');
	});


	/**
	 * 标题栏
	 * */
	var headbarList = '#main #headbar ul.headbar_list';

	//清除标题栏的所有样式
	var clearHeadbarStyle = function () {
		$(headbarList).find('li').each(function (index, docEle) {
			$(docEle).find('span.line').not('span.line_focus').stop().animate({width: '0'}, 200);
		});
	};

	$(headbarList).find('li').each(function (index, docEle) {
		var _this = $(this);

		_this.on('mouseover', function () {
			clearHeadbarStyle();

			_this.find('span.line').stop().animate({width: '100%'}, 200);

		}).on('mouseout', function () {
			clearHeadbarStyle();
		});
	});


	/**
	 * 手绘
	 * */
	var freehand = $('#freehand');
	var bannerWrapper = freehand.find('.banner_wrapper');
	var dotList = freehand.find('#dot_list');
	var bannerList = freehand.find('.banner_list');
	var bannerWidth = bannerList.find('li').width();
	var bannerInterval = null;

	var bannerChangeAuto = function () {
		if(bannerIndex < parseInt(dotList.find('li').size() - 1)) {
			bannerIndex++;
		}else {
			bannerIndex = 0;
		}

		dotList.find('li').eq(bannerIndex).addClass('dot_active').siblings().removeClass('dot_active');

		var bannerL = bannerWidth*bannerIndex;
		bannerWrapper.animate({'left': -bannerL + 'px'}, 500);
	};

	dotList.find('li').on('mouseover', function () {
		clearInterval(bannerInterval);

		var i = $(this).index();
		var bannerL = bannerWidth*i;
		var _this = $(this);

		bannerWrapper.animate({'left': -bannerL + 'px'}, 500);
		_this.addClass('dot_active').siblings().removeClass('dot_active');
	}).on('mouseout', function () {
		//console.log($(this).index());
		//bannerInterval = setInterval(bannerChangeAuto, 3000);
		var outIndex = $(this).index();

		bannerInterval = setInterval(function () {

			if(outIndex < parseInt(dotList.find('li').size() - 1)) {
				outIndex++
			}else {
				outIndex = 0;
			}

			dotList.find('li').eq(outIndex).addClass('dot_active').siblings().removeClass('dot_active');

			var bannerL = bannerWidth*outIndex;
			bannerWrapper.animate({'left': -bannerL + 'px'}, 500);
		}, 3000);

	});

	var bannerIndex = 0;
	bannerInterval = setInterval(bannerChangeAuto, 3000);


	/**
	 * 宠物用品热卖 推广链接
	 * */
	var spreadLayer = '#main .main_r .pets_goods_spread ul li span.spread_layer';

	$(spreadLayer).on('mouseover', function () {
		$(spreadLayer).each(function (index, docEle) {
			$(docEle).css('display', 'block');
		});
		//console.log('mouseover');

		$(this).css('display', 'none')
			.prev('a')
			.on('mouseout', function () {
				//console.log('mouseout');
				//console.log($(this));
				$(this).next('span.spread_layer').css('display', 'block')
			});
	});



	/**
	 * 宠物贴子 和宠物的点点滴滴
	 * */
	// tab选项卡
	var petsPost = {
		nav: '#main .main_r .pets_post_tab ul.post_tab_nav li',
		cont: '#main .main_r .pets_post .pets_post_tab ul.post_tab_content li.post_content_item',
		index: null,
		_this: null
	};

	$(petsPost.nav).on('click', function () {
		petsPost._this = $(this);
		petsPost.index = petsPost._this.index();

		petsPost._this
			.addClass('post_nav_active')
			.siblings()
			.removeClass('post_nav_active');

		$(petsPost.cont)
			.eq(petsPost.index)
			.addClass('post_content_active')
			.siblings()
			.removeClass('post_content_active');
	});


	/**
	 * 一周图集
	 * */
	var weekPic = {
		weekPicList: '#main .main_r .week_pic_cont ul.week_pic_total ul.week_pic_branches',
		item1: $(this).find('li.week_pic_item1'),
		item4: $(this).find('li.week_pic_item4'),
		item7: $(this).find('li.week_pic_item7'),
		toggleTips: function (obj) {
			obj.on('mouseover', function () {
				$(this).find('span.week_tips')
					.stop()
					.animate({
						'bottom': '0'
					}, 'normal');
			}).on('mouseout', function () {
				$(this).find('span.week_tips')
					.stop()
					.animate({
						'bottom': '-40px'
					}, 'normal');
			});
		}
	};

	weekPic.toggleTips(weekPic.item1);
	weekPic.toggleTips(weekPic.item4);
	weekPic.toggleTips(weekPic.item7);

	/**
	 * 设置图片延迟加载
	 * */
	$("img.lazy").lazyload({
		effect: 'fadeIn'
	});

	/**
	 * 宠物与主人 视频*/
	var petsMaster = {
		picWrapper: '#main .main_r .pets_master .pets_master_cont li div.pm_pic',
		playBtn: 'i.play_icon'
	};

	$(petsMaster.picWrapper).on('mouseover', function () {
		$(this)
			.find(petsMaster.playBtn)
			.css('display', 'block')
			.stop()
			.animate({
				'bottom': '34px'
			}, 100);
	}).on('mouseout', function () {
		$(this)
			.find(petsMaster.playBtn)
			.stop()
			.animate({
				'bottom': '0'
			}, 100, function () {
				$(this).css('display', 'none');
			});
	});


	/**
	 * 回到顶部
	 * */
	var toTopDistance = 700;

	//侦听滚动事件
	$(window).on('scroll', function () {
		//console.log($(document).scrollTop());
		//console.log(toTopDistance);

		/**
		 * 滚到一定程度，回到顶部按钮一直显示在右上方*/
		if($(document).scrollTop() >= toTopDistance) {

			$('#to_top').css({
				'position': 'fixed',
				'top': 0,
				'margin': '0 0 0 1020px'
			});

		}else {
			$('#to_top').css({
				'position': 'static',
				'margin': '500px 0 0 1020px'
			});
		}
	});

});




















