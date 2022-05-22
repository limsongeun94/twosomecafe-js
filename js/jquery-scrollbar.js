(function ($) {
    $.fn.onscroll = function (options) {
        // This is the easiest way to have default options.
        var settings = $.extend({
            backgroundColor: "#645959",
            width: '5px',
            position: 'fixed'
        }, options);
        var mySelector = this.selector;
        this.each(function () {
            $(window).scroll(function () {
                var offsettop = parseInt($(this).scrollTop());
                var parentHeight = parseInt($('body, html').height() - $(window).height());
                var vscrollwidth = offsettop / parentHeight * 100;
                $(mySelector).css({height: vscrollwidth * 2 + 'px'});
            });
            $(mySelector).css({
                backgroundColor: settings.backgroundColor,
                width: settings.width,
                position: settings.position,
                right: '20px',
                top: 'calc(50vh - 100px)'
            });
        });
        return this;
    };
}(jQuery));
