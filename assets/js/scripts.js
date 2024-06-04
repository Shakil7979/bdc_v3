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
			// $('.' + count_click).find('span').html('<i class="fa-solid fa-check"></i>');
			// $('.' + count_click).find('span').addClass('menu_active');
			// $('.' + count_click).addClass('active_back');

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
			count_click = 2;
		} else if (step == 2) {
			$('.packeage_second_show, .package_button, .footer').show(); 
			count_click = 3;
		} else if (step == 3) {
			$('.confirm_show, .confirm_footer').show(); 
			count_click = 4;
		} else if (step == 4) {
			$('.select_date_show, .modal_main').show(); 
			count_click = 5;
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
		// $('.package_popular').hide();
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
			// $(this).find('.package_popular2').hide();
			selectedPackages = selectedPackages.filter(function (pkg) {
				return pkg.title !== packageTitle;
			});
		}

		subTotal = staticPrice + selectedPackages.reduce(function (sum, pkg) {
			return sum + parseInt(pkg.price);
		}, 0);
		var sub_add_amount = subTotal * 0.10; 
		
		if (Number.isInteger(sub_add_amount)) {
			sub_add_amount = sub_add_amount.toFixed(2); // Append .00 to integer values
		}
		$('.sub_add_amount').html('$'+sub_add_amount);
		total_due = subTotal + (subTotal * 0.10);

		if (Number.isInteger(total_due)) {
			total_due = total_due.toFixed(2); // Append .00 to integer values
		}

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
                <h4>$<span class="second_price_add">${pkg.price}</span>.00</h4>
            </li>
        `);
		});
	}


 
});



function generate_year_range(start, end) {
    var years = "";
    for (var year = start; year <= end; year++) {
        years += "<option value='" + year + "'>" + year + "</option>";
    }
    return years;
}

today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");


createYear = generate_year_range(1970, 2050);
/** or
 * createYear = generate_year_range( 1970, currentYear );
 */

document.getElementById("year").innerHTML = createYear;

var calendar = document.getElementById("calendar");
var lang = calendar.getAttribute('data-lang');

var months = "";
var days = "";

var monthDefault = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var dayDefault = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

if (lang == "en") {
    months = monthDefault;
    days = dayDefault;
} else if (lang == "id") {
    months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    days = ["Ming", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
} else if (lang == "fr") {
    months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    days = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
} else {
    months = monthDefault;
    days = dayDefault;
}


var $dataHead = "<tr>";
for (dhead in days) {
    $dataHead += "<th data-days='" + days[dhead] + "'>" + days[dhead] + "</th>";
}
$dataHead += "</tr>";

//alert($dataHead);
document.getElementById("thead-month").innerHTML = $dataHead;


monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);



function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

    var firstDay = ( new Date( year, month ) ).getDay();

    tbl = document.getElementById("calendar-body");

    
    tbl.innerHTML = "";

    
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    var date = 1;
    for ( var i = 0; i < 6; i++ ) {
        
        var row = document.createElement("tr");

        
        for ( var j = 0; j < 7; j++ ) {
            if ( i === 0 && j < firstDay ) {
                cell = document.createElement( "td" );
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (date > daysInMonth(month, year)) {
                break;
            } else {
                cell = document.createElement("td");
                cell.setAttribute("data-date", date);
                cell.setAttribute("data-month", month + 1);
                cell.setAttribute("data-year", year);
                cell.setAttribute("data-month_name", months[month]);
                cell.className = "date-picker";
                cell.innerHTML = "<span>" + date + "</span>";

                if ( date === today.getDate() && year === today.getFullYear() && month === today.getMonth() ) {
                    cell.className = "date-picker selected";
                }
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row);
    }

}

function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}






