var m7x4z5;
(function (d, t) {
	var s = d.createElement(t), options = {
		'userName': 'bitblu',
		'formHash': 'm7x4z5',
		'autoResize': true,
		'height': '495',
		'async': true,
		'header': 'show'
	};
	s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'wufoo.com/scripts/embed/form.js';
	s.onload = s.onreadystatechange = function () {
		var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
		try { m7x4z5 = new WufooForm(); m7x4z5.initialize(options); m7x4z5.display(); } catch (e) { } 
	};
	var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
})(document, 'script');

function scrollToAnchor(aid, id) {
	var divTag = $("div[id='" + aid + "']");
	var menuTag = $("div[id='Menu']");
	$('html,body').animate({ scrollTop: divTag.offset().top - menuTag.height() - 50 }, 'meduim');

	if (id != null) {
		markSelected(id);
	}
}

function markSelected(selected) {
	x1 = selected.offsetLeft + 15;
	x2 = selected.offsetLeft + selected.offsetWidth - 15;
	$(Menu).drawLine(x1, 0, x2, 0, "menuItem", "#393562", 6);
}

function clearOnResize() {
	$(Menu).clearLine("menuItem");
}

function linedraw(ax, ay, bx, by) {
	if (ay > by) {
		bx = ax + bx;
		ax = bx - ax;
		bx = bx - ax;
		by = ay + by;
		ay = by - ay;
		by = by - ay;
	}
	var calc = Math.atan((ay - by) / (bx - ax));
	calc = calc * 180 / Math.PI;
	var length = Math.sqrt((ax - bx) * (ax - bx) + (ay - by) * (ay - by));
	document.body.innerHTML += "<div id='line' style='height:" + length + "px;width:1px;background-color:black;position:absolute;top:" + (ay) + "px;left:" + (ax) + "px;transform:rotate(" + calc + "deg);-ms-transform:rotate(" + calc + "deg);transform-origin:0% 0%;-moz-transform:rotate(" + calc + "deg);-moz-transform-origin:0% 0%;-webkit-transform:rotate(" + calc + "deg);-webkit-transform-origin:0% 0%;-o-transform:rotate(" + calc + "deg);-o-transform-origin:0% 0%;'></div>"
}

bool = true;
function cycleImages(radio) 
{
	if (!radio.checked) {

		radio.checked = true;

		if (bool) {
			$(secondImg).attr("src", $("#img" + radio.value).text());
			$(firstImg).fadeOut(800);
			$(secondImg).fadeIn(800);
		}
		else {
			$(firstImg).attr("src", $("#img" + radio.value).text());
			$(firstImg).fadeIn(800);
			$(secondImg).fadeOut(800);
		}

		bool = !bool;
		$(actionTitle).text($("#textOpt" + radio.value).text());
	}
}

function cycleImagesAuto(radio) {
	if (!radio.checked) {

		radio.checked = true;

		if (bool) {
			$(secondImg).attr("src", $("#img" + radio.prop("value")).text());
			$(firstImg).fadeOut(800);
			$(secondImg).fadeIn(800);
		}
		else {
			$(firstImg).attr("src", $("#img" + radio.prop("value")).text());
			$(firstImg).fadeIn(800);
			$(secondImg).fadeOut(800);
		}

		bool = !bool;
		$(actionTitle).text($("#textOpt" + radio.prop("value")).text());
	}
}

$(document).ready(function () 
{
	var refreshId = setInterval(function () 
	{
		var next = $('input[name=pic]:checked', "#pictureRadios").next().prop("checked", "true");
		if (next.length == 0) 
		{
			$(radio1).prop("checked", "true");
			next = $('input[name=pic]:checked', "#pictureRadios");
		}

		cycleImagesAuto(next);

	}, 13000);
});

function onLoad() {
	$(homeSplittingLine).drawLine(0, 0, 993, 0, "splittingLine", "#cccccc", 1);
	$(homeSplittingLine2).drawLine(0, 0, 993, 0, "splittingLine", "#cccccc", 1);
	$(homeSplittingLine3).drawLine(0, 0, 993, 0, "splittingLine", "#cccccc", 1);
	$(homeSplittingLine4).drawLine(0, 0, 993, 0, "splittingLine", "#cccccc", 1);
	$(homeSplittingLine5).drawLine(0, 0, 993, 0, "splittingLine", "#cccccc", 1);
}


function changeMailingList() {
	if ($("#addToMailingList", "#mc-embedded-subscribe-form").prop("checked")) {
		$("#mc-embedded-subscribe-form").prop("action", "http://bitblu.us7.list-manage1.com/subscribe/post?u=01a79b4a9782a30551e3702fa&amp;id=5ff95a04cc");
	}
	else {
		$("#mc-embedded-subscribe-form").prop("action", "http://bitblu.us7.list-manage1.com/subscribe/post?u=01a79b4a9782a30551e3702fa&amp;id=3cd83a70d2");
	}

}

function emailTextBox(textBox) {
	if (textBox.value == "Your e-mail") {
		textBox.value = "";
	}
}

function emailTextBoxBlur(textBox)
{
	if (textBox.value == "") {
		textBox.value = "Your e-mail";
	}
}

function submitEmail() {
	isValid = true;
	textBox = $("#mce-EMAIL", "#mc-embedded-subscribe-form");

	if ((textBox.prop("value") == "") || (textBox.prop("value") == "Your e-mail")) {
		alert("Please enter an e-mail");
		isValid = false;
	}
	else {
		if (!isValidEmailAddress(textBox.prop("value")))
		{
			alert("Please enter a valid e-mail");
			isValid = false;
		}
	}

	if (isValid) {
		$("#mc-embedded-subscribe-form").ajaxSubmit();
	}
	
	return false;
}

function isValidEmailAddress(emailAddress) {
	var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
	return pattern.test(emailAddress);
};