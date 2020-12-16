//保存ボタンに繋げているけど、今、ボタンをおわっていないです

let button = document.getElementById("preview_button");
button.addEventListener("click", function (){
    // get the values which the user types
    let simei = document.getElementById("simei").value;
    let furigana = document.getElementById("furigana").value;
    let seinengappi = document.getElementById("datepicker").value;
    let nenrei = document.getElementById("nenrei_rirekisho").value;
    let yubinbango = document.getElementById("p-postal-code").value;
    let jyusho = document.getElementById("jyusho").value;
    let jyusho_furigana = document.getElementById("jyusho_furigana").value;
    let keitaibango = document.getElementById("keitaibango").value;

    var userId = firebase.auth().currentUser.uid;

    if(simei == "" || furigana == ""){
        alert("Please enter the fields");
    }else{
        //make the object
        var data = {
            simei: simei,
            furigana:furigana,
            seinengappi:seinengappi,
            nenrei:nenrei,
            yubinbango:yubinbango,
            jyusho:jyusho,
            jyusho_furigana:jyusho_furigana,
            keitaibango:keitaibango
            //プロジェクトに必要なデータ
            
    //        ,
    //        gakuseiID:gakuseiID,
    //        hizuke:hizuke,
    //        simei:simei,
    //        seibetu:seibetu,			
    //        meru:meru,			
    //        keitaibango:keitaibango,
    //        denwabango:denwabango,
    //        renrakusaki_yubinbango:renrakusaki_yubinbango,
    //        renrakusaki_jyusho:renrakusaki_jyusho,
    //        renrakusaki_denwabango:renrakusaki_denwabango,
    //        gakureki:gakureki,
    //        gakureki_nengappi:gakureki_nengappi,
    //        kamoku:kamoku,
    //        shumi:shumi,
    //        tokutyo:tokutyo,
    //        gakuseiseikatu:gakuseiseikatu,
    //        siboudouki:siboudouki,
    //        sikaku:sikaku,
    //        sikaku_hiduke:sikaku_hiduke,
    //        biko:biko,
    //        sibousaki:sibousaki
        }
        
        //save the data to the firebase
        var database = firebase.database();

        //which gets the database
        // var ref = database.ref(userId + '/nyuryokufomu').set(data);
        firebase.database().ref(userId + '/nyuryokufomu').update(data);
        
    }
})