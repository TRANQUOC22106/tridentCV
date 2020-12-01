'use strict';

function before() {
    var now_layout = document.getElementById('juusho_card');
    now_layout.style.display = 'none';
    var next_layout = document.getElementById('profile_card');
    next_layout.style.display = 'block';
}

// 「前へ」ボタンを押したとき

function next() {
    var now_layout = document.getElementById('profile_card');
    now_layout.style.display = 'none';
    var next_layout = document.getElementById('juusho_card');
    next_layout.style.display = 'block';
}

// 「次へ」ボタンを押したとき

// getElementByIdとは、指定したid値を持つ要素をElementオブジェクトとして返すメソッドです。

// HTMLタグの中から指定したidを取得して何らかの処理をしたい場合などに使用されます。
// https://techacademy.jp/magazine/15289

// sytle.display プロパティとは、要素の表示に関する CSS の display の参照や更新ができるプロパティです。

// ボタンクリックで対象要素の 表示/非表示 を切り替えたり、JavaScript で要素を組み立てたりする際に使用できます。
// https://techacademy.jp/magazine/33333

// display noneの場合には、要素は無くなったものと見なされ、次にある要素が詰めて表示されることになります。
// https://allabout.co.jp/gm/gc/23973/#aa23973display