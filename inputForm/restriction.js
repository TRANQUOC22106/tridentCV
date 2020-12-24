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

// $("#clone_1").click(function () {

//     $("#gakureki_form").eq(0).clone().insertAfter("#gakureki_form");


// });
// 学歴入力欄追加

// $("#clone_2").click(function () {

//     $("#kamoku_form").eq(0).clone().insertAfter("#kamoku_form");


// });
// 好きな科目入力欄追加

// $("#clone_3").click(function () {

//     $("#shikaku_form").eq(0).clone().insertAfter("#shikaku_form");


// });
// // 免許・資格入力欄追加

$("#datepicker").datepicker({

});
// 生年月日 カレンダー表示

$("#daunrodo_button").click(function () {


    $(".bootstrap").hide();
    $("#profile_card").hide();
    $("#juusho_card").hide();
    $("#rennrakusaki_card").hide();
    $("#gakureki_card").hide();
    $("#kamoku_card").hide();
    $("#shumi_card").hide();
    $("#tokutyou_card").hide();
    $("#etakoto_card").hide();
    $("#douki_card").hide();
    $("#shikaku_card").hide();
    $("#shumi_card").hide();
    $("#bikou_card").hide();
    $("#sakuseibi_card").hide();
    $("#kakuninn_card").hide();

    window.print();

    $(".bootstrap").show();
    $("#profile_card").show();
    $("#juusho_card").show();
    $("#rennrakusaki_card").show();
    $("#gakureki_card").show();
    $("#kamoku_card").show();
    $("#shumi_card").show();
    $("#tokutyou_card").show();
    $("#etakoto_card").show();
    $("#douki_card").show();
    $("#shikaku_card").show();
    $("#shumi_card").show();
    $("#bikou_card").show();
    $("#sakuseibi_card").show();
    $("#kakuninn_card").show();



})
//PDF化、印刷 

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

// $("#kyou_button").click(function () {
//     var nowdate = new Date();
//     var year = nowdate.getFullYear();     // 年(4桁の西暦)
//     var mon = nowdate.getMonth() + 1;    // 月(1～12)
//     var date = nowdate.getDate();

//     $("#hizuke").text(year + "/" + mon + "/" + date);

// });

$("#hizuke").datepicker({

});



