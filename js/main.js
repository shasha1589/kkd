"use strict";
/*----------------
	TOOLTIP
----------------*/
$('.tooltip').tooltipster({
	content: 'Add to WishList',
	animation: 'grow',
	position: 'top'
});
/*-----------------
	MAIN SLIDER
-----------------*/
$('#main-slider').bxSlider({
	pager: false,
	prevSelector: '#previous',
	prevText: '<img src="images/arrow-left.png">',
	nextSelector: '#next',
	nextText: '<img src="images/arrow-right.png">',
	easing: 'ease-in',
	speed: 800,
	auto: true
});

/*-----------------
   REVIEW SLIDER
-----------------*/
$('#review-slider').bxSlider({
	pager: false,
	controls: false,
	easing: 'ease-in',
	speed: 800,
	auto: true
});

$(function() {
	/*-----------------------------
		CONTACT FORM VALIDATION
	-----------------------------*/
	function ctcValidation() {
		var email = document.getElementById('email'),
			message = document.getElementById('message'),
			form = email.form,
			button = document.getElementById('ctc-submit'),
			valid = true;

		// Button reset
		button.innerHTML = 'Send Message';
		button.className = '';

		// Message Validation
		if(message.value == null || (message.value).length == 0 || /^\s+$/.test(message.value)) { 
		  	message.focus();
		  	message.className = 'error';
		    form.getElementsByClassName('msg-wrng')[0].style.display = 'block';
		  	valid = false;
		} else {
			message.className = '';
			form.getElementsByClassName('msg-wrng')[0].style.display = 'none';
		}

		// Email Validation
		if( !(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(email.value)) ) {
		  	email.focus();
		  	email.className = 'error';
		  	 form.getElementsByClassName('email-wrng')[0].style.display = 'block';
		  	valid = false;
		} else {
			email.className = '';
			form.getElementsByClassName('email-wrng')[0].style.display = 'none';
		}

		return valid;
	}

	var ctcButton = document.getElementById('ctc-submit');
	ctcButton.onclick = ctcValidation;

	/*--------------
	   WAYPOINTS
	--------------*/
	// SPECIALS
	$('#specials').waypoint(function() {
		$('#specials span.ribbon').slideDown(600);
	}, {triggerOnce: true}
	);

	// STAT CHARTS
	$('#combos h6').waypoint(function() {
		var count = 4;
		$('.stats').easyPieChart({
			barColor: '#db2e2e',
			trackColor: '#535353',
			lineWidth: 12,
			size: 200,
			lineCap: 'square',
			scaleColor: false,
			onStep: function(from, to, percent) {
	            $(this.el).find('span').each(function() {
	            	var value, perc;
	            	if(count) {
	            		value = $(this).text();          		
	            		$(this).data('value', value);
	            		count--;
	            	} else {
	            		value = $(this).data('value');
	            	}
	            	perc = (percent * value/100);
	            	$(this).text(Math.round(perc));
	            });
	        }
		});
	}, {triggerOnce: true}
	);
});