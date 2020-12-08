'use strict';

// #profile_card 
//  #juusho_card 
//   #rennrakusaki_card
//   #shikaku_card   
//   #preview_card
//   #bikou_card
//   #preview_card

// var profile_card =
//     document.getElementById("profile_card")
//         .style.display = "none";

var juusho_card =
    document.getElementById("juusho_card")
        .style.display = "none";

var rennrakusaki_card =
    document.getElementById("rennrakusaki_card")
        .style.display = "none";

var gakureki_card =
    document.getElementById("gakureki_card")
        .style.display = "none";

var kamoku_card =
    document.getElementById("kamoku_card")
        .style.display = "none";

var shumi_card =
    document.getElementById("shumi_card")
        .style.display = "none";

var tokutyou_card =
    document.getElementById("tokutyou_card")
        .style.display = "none";

var etakoto_card =
    document.getElementById("etakoto_card")
        .style.display = "none";

var douki_card =
    document.getElementById("douki_card")
        .style.display = "none";

var shikaku_card =
    document.getElementById("shikaku_card")
        .style.display = "none";

var bikou_card =

    document.getElementById("bikou_card")
        .style.display = "none";

var sakuseibi_card =
    document.getElementById("sakuseibi_card")
        .style.display = "none";

var kakuninn_card =
    document.getElementById("kakuninn_card")
        .style.display = "none";

var preview_card =

    document.getElementById("preview_card")
        .style.display = "none";

// 変数にそれぞれの変数と同じの名のcardのIDを代入、非表示にする

var array_card = new Array(profile_card, juusho_card, rennrakusaki_card, shikaku_card, bikou_card, preview_card);

// 上記の変数を一つの配列に格納する


function before() {
    var now_card = document.getElementById('bikou_card');
    now_card.style.display = 'none';

    var preview_card = document.getElementById('preview_card');
    preview_card.style.display = 'none';

    var next_card = document.getElementById('profile_card');
    next_card.style.display = 'block';
}

// 「前へ」ボタンを押したとき

function next() {
    var now_card = document.getElementById('profile_card');
    now_card.style.display = 'none';

    var preview_card = document.getElementById('preview_card');
    preview_card.style.display = 'none';

    var next_card = document.getElementById('bikou_card');
    next_card.style.display = 'block';
}

// 「次へ」ボタンを押したとき

function preview() {
    var now_card = document.getElementById('profile_card');
    now_card.style.display = 'none';

    var preview_card = document.
        getElementById('preview_card');
    preview_card.style.display = 'block';

    var next_card = document.
        getElementById('bikou_card');
    next_card.style.display = 'none';
}

// getElementByIdとは、指定したid値を持つ要素をElementオブジェクトとして返すメソッドです。

// HTMLタグの中から指定したidを取得して何らかの処理をしたい場合などに使用されます。
// https://techacademy.jp/magazine/15289

// sytle.display プロパティとは、要素の表示に関する CSS の display の参照や更新ができるプロパティです。

// ボタンクリックで対象要素の 表示/非表示 を切り替えたり、JavaScript で要素を組み立てたりする際に使用できます。
// https://techacademy.jp/magazine/33333

// display noneの場合には、要素は無くなったものと見なされ、次にある要素が詰めて表示されることになります。
// https://allabout.co.jp/gm/gc/23973/#aa23973display

