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