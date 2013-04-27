$(document).ready(function() {
    $('.lang-rows .tabbed h2').click(function() {
        $this = $(this);
        $('.lang-rows .tabbed h2').removeClass('current');
        $this.addClass('current');
        if ($this.attr('id') == 'tab-en') {
            $('.lang-rows section').addClass('hidden');
            $('section[lang=en]').removeClass('hidden');
        } else if ($this.attr('id') == 'tab-de') {
            $('.lang-rows section').addClass('hidden');
            $('section[lang=de]').removeClass('hidden');
        } else if ($this.attr('id') == 'tab-fr') {
            $('.lang-rows section').addClass('hidden');
            $('section[lang=fr]').removeClass('hidden');
        }
    });
});
