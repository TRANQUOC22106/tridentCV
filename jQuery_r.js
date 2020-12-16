// $(function () {
//     $("#clone").on("click", function () {
//         $(this).clone(true).appendTo(".this");
//     });
// });

$("#aaa").on("click", function () {
    alert("クリックされました");
});

$("#clone").on("click", function () {
    $(".gakureki_edit").clone(false).insertAfter("#gakureki_card");
});
// 学歴入力欄をコピー

$("#clone_2").on("click", function () {
    $(".kamoku_edit").clone(false).insertAfter("#kamoku_card");
});
// 科目入力欄をコピー

$("#clone_3").on("click", function () {
    $(".shikaku_edit").clone(false).insertAfter("#shikaku_card");
});

$("#before_button").on("click", function () {
    $("#kakuninn_card").hide();
    $("#profile_card").show();
    $("#preview_card").hide();
});
// 「前へ」ボタンを押したとき

$("#next_button").on("click", function () {
    $("#kakuninn_card").show();
    $("#profile_card").hide();
    $("#preview_card").hide();
});
// 「次へ」ボタンを押したとき


$("#preview_button").on("click", function () {
    $("#kakuninn_card").hide();
    $("#profile_card").hide();
    $("#preview_card").show();

    $("#preview_card").load("preview.html");
});
// 「プレビュー」ボタンを押したとき

