$(document).ready(function() {
    $('.lang-rows .tabbed h2').click(function() {
        $this = $(this);
        var tab = $this.attr('id');

        $('.lang-rows .tabbed h2').removeClass('current');
        $this.addClass('current');
        $('.lang-rows section').addClass('hidden');

        switch (tab) {
            case 'tab-en':
                $('section[lang=en]').removeClass('hidden');
                break;
            case 'tab-de':
                $('section[lang=de]').removeClass('hidden');
                break;
            case 'tab-fr':
                $('section[lang=fr]').removeClass('hidden');
                break;
            default:
                console.log('Something bad happened - tab does not exist');
        }
    });
});
