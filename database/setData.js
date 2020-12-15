//保存ボタンに繋げているけど、今、ボタンをおわっていないです

let button = document.getElementById("preview_button");
button.addEventListener("click", function (){
    // get the values which the user types
    let simei = document.getElementById("simei").value;
    let furigana = document.getElementById("furigana").value;
    var userId = firebase.auth().currentUser.uid;

    if(simei == "" || furigana == ""){
        alert("Please enter the fields");
    }else{
        //make the object
        var data = {
            simei: simei,
            furigana:furigana
            //プロジェクトに必要なデータ
            
    //        ,
    //        gakuseiID:gakuseiID,
    //        hizuke:hizuke,
    //        hurigana:hurigana,
    //        simei:simei,
    //        seibetu:seibetu,
    //        seinengappi:seinengappi,
    //        nenrei:nenrei,
    //        yubinbango:yubinbango,				
    //        jyusho:jyusho,			
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