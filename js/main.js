$(function () {
	/**
	 * 海报*/
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
	 * 推荐此站*/
	var recommendBtn = '#top .content_l ul li.item3';
	$(recommendBtn).on('mouseover', function () {
		$('#recommend').stop().slideDown('fast');
	}).on('mouseout', function () {
		$('#recommend').stop().slideUp('fast');
	});

	/**
	 * 标题栏*/
	var headbarList = '#main #headbar ul.headbar_list';

	//清除所有标题栏样式
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

});




















