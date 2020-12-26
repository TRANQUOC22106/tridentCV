jQuery(function ($) {
    $('.tab').click(function () {
        $('.active').removeClass('active');
        $(this).addClass('active');
        $('.show').removeClass('show');
        // クリックしたタブからインデックス番号を取得
        const index = $(this).index();
        // クリックしたタブと同じインデックス番号をもつコンテンツを表示
        $('.content').eq(index).addClass('show');
    });
});

// https://blog-and-destroy.com/7389