$(document).ready(function () {

 

	var count_click = 2;

	$(document).on('click', '.next_btn', function () {

		if(count_click == 2){
			$('.'+count_click).find('span').html('<i class="fa-solid fa-check"></i>');
			$('.'+count_click).find('span').addClass('menu_active');
			$('.packeage_first_show').hide();
			$('.packeage_second_show').show();
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
		}else {
			$('.packegae_2_title').html('425');
			$('.packegae_3_title').html('745');
			$('.package_date').html('Week');
		} 

	});





});

