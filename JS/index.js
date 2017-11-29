(function ($) {
    var arr = {
        "White Paper": 'w1',
        "Leaders": 'w2',
        "SCIO News": 'w3',
        "Public Diplomacy": 'w4',
        "Int'l Cooperation": 'w5',
        "Economy": 'w6',
        "Sci-Tech": 'w7',
        "Press Conference": 'w8',
        "Policy Briefing": 'w9',
        "Culture": 'w10',
        "Policy": 'w11',
        "CPC": 'w12',
        "National Defense": 'w13',
        "Society": 'w14',
        "Around China": 'w15',
		"Belt & Road": 'w16',
		"Education": 'w17',
		"Think Tank": 'w18',
		"Politics": 'w19',
		"Int'l Exchange": 'w20',
		"Diplomacy": 'w21',
		"Human Rights": 'w22',
		"Environment": 'w23',
		"Media Cooperation": 'w24',
		"International Cooperation": 'w25',
		"International Exchanges": 'w26'
    };
    $('.mmmm').each(function () {
        var curTitle = $.trim($(this).text());
        $(this).addClass(arr[curTitle]).html('<a href="http://english.scio.gov.cn/search.htm?strUrl=englishscio&sub='+ curTitle +'" target="_top">'+ curTitle +'</a>')
    });
})(jQuery);

(function ($) {
    var wTop = $('.ban2').offset().top;
    $(window).scroll(function () {
        var t = $(document).scrollTop();
        if (t >= wTop) {
            $('.ban2').css({ 'position': 'fixed', 'z-index': '99999', 'top': '0' });
        } else {
            $('.ban2').css({ 'position': 'static', 'margin': '0 auto 30px auto' });
        }
    });
})(jQuery);