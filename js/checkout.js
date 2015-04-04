"use strict";
/*----------------
	TOOLTIP
----------------*/
$('.tooltip').tooltipster({
	animation: 'grow',
	position: 'bottom'
});

$('.counter').click(function(e) {
	e.preventDefault();
	var counter = $(this),
		container = counter.siblings('div'),
		content = parseInt(container.text());

	if(counter.hasClass('up')) {
		container.text(++content);
	}

	if(counter.hasClass('down')) {
		if(content > 1) {
			container.text(--content);
		}
	}
	updateSubtotal(counter, content);
});

function updateSubtotal(counter, content) {
	var data = counter.parent().parent().find('h6 span'),
		price = parseFloat(data.eq(0).text()),
		subtotal = data.eq(1);

	subtotal.text((price*content).toFixed(2));
}