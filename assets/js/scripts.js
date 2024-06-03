$(document).ready(function () {



	var count_click = 2;

	$(document).on('click', '.next_btn', function () {

		if (count_click == 2) {
			$('.' + count_click).find('span').html('<i class="fa-solid fa-check"></i>');
			$('.' + count_click).find('span').addClass('menu_active');
			$('.' + count_click).addClass('active_back');
			$('.packeage_first_show').hide();
			$('.packeage_second_show').show();
			$('.next_btn').removeClass('enabled');
			$('.package_button a').addClass('btn_2_addclass');

			count_click = 3;
		} else if (count_click == 3) {
			$('.' + count_click).find('span').html('<i class="fa-solid fa-check"></i>');
			$('.' + count_click).find('span').addClass('menu_active');
			$('.' + count_click).addClass('active_back');

			$('.packeage_first_show').hide();
			$('.packeage_second_show').hide();
			$('.package_button').hide();
			$('.footer').hide();
			$('.confirm_show').show();
			$('.confirm_footer').show();

			count_click = 4;
		} else if (count_click == 4) {
			$('.' + count_click).find('span').html('<i class="fa-solid fa-check"></i>');
			$('.' + count_click).find('span').addClass('menu_active');
			$('.' + count_click).addClass('active_back');

			$('.packeage_first_show').hide();
			$('.packeage_second_show').hide();
			$('.package_button').hide();
			$('.confirm_show').hide();
			$('.confirm_footer').hide();
			$('.footer').hide();
			$('.select_date_show').show();
			$('.modal_main').css({ 'display': 'flex' });

			count_click = 5;
		} else if (count_click == 5) {
			location.reload()
		}



		return false;
	});

	$(document).on('click', '.menu a.active_back', function () {
		var step = parseInt($(this).attr('class').split(' ')[0]); 
		 
		$('.menu a').removeClass('active');
		 
		$(this).addClass('active');
		 
		$('.packeage_first_show, .packeage_second_show, .package_button, .footer, .confirm_show, .confirm_footer, .select_date_show, .modal_main').hide();
		
		if (step == 1) {
			$('.packeage_first_show, .package_button, .footer').show(); 
		} else if (step == 2) {
			$('.packeage_second_show, .package_button, .footer').show();
		} else if (step == 3) {
			$('.confirm_show, .confirm_footer').show();
		} else if (step == 4) {
			$('.select_date_show, .modal_main').show();
		}
		
		return false; 
	});
	
	
	


	$(document).on('click', '.modal_hide', function () {
		$('.modal_main').hide();

		return false;
	})


	$('#switch').on('change', function () {
		var checkbox = $(this).is(':checked');

		if (checkbox == true) {
			$('.packegae_2_title').html('1530');
			$('.packegae_3_title').html('2650');
			$('.package_date').html('Month');
			$('.save_month_money').show();
		} else {
			$('.packegae_2_title').html('425');
			$('.packegae_3_title').html('745');
			$('.package_date').html('Week');
			$('.save_month_money').hide();
		}

	});

	var pack_price = 0;

	$(document).on('click', '.first_page_row .package_single', function () {
		$('.first_page_row .package_single').removeClass('active');
		var package_first_title = $(this).find('.package_first_title').html();
		$('.active_first_title_here').html(package_first_title);
		$(this).addClass('active');
		$('.package_popular').hide();
		$(this).find('.package_popular').show();
		pack_price = $(this).find('.pack_price').html();
		$('.first_price_add').html(pack_price);
		$('.next_btn').addClass('enabled');
	})
	

	var selectedPackages = [];

	$(document).on('click', '.package_second_row .second_package_single', function () {
		var packageTitle = $(this).find('.package_first_title2').text();
		var packagePrice = $(this).find('.pack_price2').text();
		var staticPrice = parseInt($('.first_price_add').text());
		var subTotal = 0;
		var total_due = 0;

		$(this).toggleClass('active');
		if ($(this).hasClass('active')) {
			$(this).find('.package_popular2').show();
			selectedPackages.push({ title: packageTitle, price: packagePrice });
		} else {
			$(this).find('.package_popular2').hide();
			selectedPackages = selectedPackages.filter(function (pkg) {
				return pkg.title !== packageTitle;
			});
		}

		subTotal = staticPrice + selectedPackages.reduce(function (sum, pkg) {
			return sum + parseInt(pkg.price);
		}, 0);
		var sub_add_amount = subTotal * 0.10; 
		$('.sub_add_amount').html(sub_add_amount);
		total_due = subTotal + (subTotal * 0.10);

		updatePriceList(selectedPackages);
		$('.subTotal').html(subTotal);
		$('.total_due').html(total_due);

		if (selectedPackages.length > 0) {
			$('.next_btn').addClass('enabled');
		} else {
			$('.next_btn').removeClass('enabled');
		}
	});

	function updatePriceList(selectedPackages) {
		var $confirmUl = $('.confirm_ul.data_add_here');

		$confirmUl.find('.dynamic-package-item').remove();

		selectedPackages.forEach(function (pkg) {
			$confirmUl.append(`
            <li class="dynamic-package-item">
                <p> <span class="title_width_confirm"> ${pkg.title}</span>  Qty
                    <select name="" class="package_qty" data-price="${pkg.price}">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </p>
                <h4>$<span class="second_price_add">${pkg.price}</span></h4>
            </li>
        `);
		});
	}








});

