jQuery(document).on('keydown', '.hannkaku_desu', function (e) {
    let k = e.keyCode;
    let str = String.fromCharCode(k);
    if (!(str.match(/[0-9]/) || (37 <= k && k <= 40) || k === 8 || k === 46)) {
        return false;
    }
});

// 削除キーや制御キーの入力を許可する

jQuery(document).on('keyup', '.hannkaku_desu', function (e) {
    this.value = this.value.replace(/[^0-9]+/i, '');
});

// キーを押したとき、全角文字を消去する

jQuery(document).on('blur', '.hannkaku_desu', function () {
    this.value = this.value.replace(/[^0-9]+/i, '');
});




$('form').attr('autocomplete', 'off');
// 入力候補、履歴を非表示



$("#shumi").on("input", function () {

    var cnt = $(this).val().length;
    $(".now_cnt_1").text(cnt);

});

// 趣味・特技の文字数カウント

$("#tokutyo").on("input", function () {

    var cnt = $(this).val().length;
    $(".now_cnt_2").text(cnt);

});
// 私の特長の文字数カウント

$("#gakuseiseikatu").on("input", function () {

    var cnt = $(this).val().length;
    $(".now_cnt_3").text(cnt);

});
// 学校生活を通じて得たことの文字数カウント

$("#shiboudouki").on("input", function () {

    var cnt = $(this).val().length;
    $(".now_cnt_4").text(cnt);

});
// 志望動機の文字数カウント

// $("#aaa").click(function () {

//     var obj = $(".gakureki_edit").clone();

//     $(".gakureki_edit").after(obj);

// });

$("#datepicker").datepicker({

});
// 生年月日 カレンダー表示

$(function () {
    $.fn.autoKana('#simei', '#furigana', {
        katakana: true  //true：カタカナ、false：ひらがな（デフォルト）
    });
});

// 氏名 フリガナ 自動入力
// https://www.aiship.jp/knowhow/archives/26817

// $(function () {
//     $.fn.autoKana('#jyusho', '#jyusho_furigana', {
//         katakana: true  //true：カタカナ、false：ひらがな（デフォルト）
//     });
// });

