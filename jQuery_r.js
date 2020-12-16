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

// フォーカスから外れたとき、押したとき、全角文字を消去する

// https://pisuke-code.com/jquery-input-number-only/


/* <script>
    function getAge( birthday ) 
    {
        var today = new Date();
        var tdate = ( today.getFullYear() * 10000 ) + (( today.getMonth() + 1 ) * 100 ) + today.getDate() ;
        return( Math.floor(( tdate - birthday ) / 10000 )) ;
    }
</script> */

$("#aaa").on("click", function () {
    alert(a);
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

