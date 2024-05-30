$(document).ready(function () {

 

	var count_click = 2;

	$(document).on('click', '.next_btn', function () {

		if(count_click == 2){
			$('.'+count_click).find('span').html('<i class="fa-solid fa-check"></i>');
			$('.'+count_click).find('span').addClass('menu_active');
			$('.packeage_first_show').hide();
			$('.packeage_second_show').show(); 
			$('.next_btn').removeClass('enabled');
			$('.package_button a').addClass('btn_2_addclass');

			count_click = 3;
		}else if (count_click == 3){
			$('.'+count_click).find('span').html('<i class="fa-solid fa-check"></i>');
			$('.'+count_click).find('span').addClass('menu_active');

			$('.packeage_first_show').hide();
			$('.packeage_second_show').hide();
			$('.package_button').hide(); 
			$('.footer').hide(); 
			$('.confirm_show').show(); 
			$('.confirm_footer').show(); 

			count_click = 4;
		}else if (count_click == 4){
			$('.'+count_click).find('span').html('<i class="fa-solid fa-check"></i>');
			$('.'+count_click).find('span').addClass('menu_active'); 

			$('.packeage_first_show').hide();
			$('.packeage_second_show').hide();
			$('.package_button').hide();
			$('.confirm_show').hide();
			$('.confirm_footer').hide();
			$('.footer').hide(); 
			$('.select_date_show').show();
			$('.modal_main').css({'display':'flex'});

			count_click = 5;
		} else if (count_click == 5){
			location.reload()
		}  
		


		return false;
	});


	$(document).on('click','.modal_hide',function(){ 
		$('.modal_main').hide();

		return false;
	})


	$('#switch').on('change', function() {
		var checkbox = $(this).is(':checked');
		
		if(checkbox == true){
			$('.packegae_2_title').html('1530');
			$('.packegae_3_title').html('2650');
			$('.package_date').html('Month');
			$('.save_month_money').show();
		}else {
			$('.packegae_2_title').html('425');
			$('.packegae_3_title').html('745');
			$('.package_date').html('Week');
			$('.save_month_money').hide();
		} 

	});

	var pack_price = 0;

	$(document).on('click','.first_page_row .package_single',function(){
		$('.first_page_row .package_single').removeClass('active');
		$(this).addClass('active');
		pack_price = $(this).find('.pack_price').html();
		$('.first_price_add').html(pack_price); 
		$('.next_btn').addClass('enabled');
	})

	$(document).on('click','.package_second_row .second_package_single',function(){
		$('.package_second_row .second_package_single').removeClass('active');
		$(this).addClass('active');
		var pack_price2 = $(this).find('.pack_price2').html();
		var subTotal = parseInt(pack_price) + parseInt(pack_price2);
		var total_due = parseInt(subTotal) + 10;
		$('.second_price_add').html(pack_price2); 
		$('.subTotal').html(subTotal); 
		$('.total_due').html(total_due); 
		$('.next_btn').addClass('enabled');
	})





});

