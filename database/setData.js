function chg(val){
    seibetu = val;
}

let button = document.getElementById("pills-tabContent");
button.addEventListener("change", function (){
    // alert('保存された');
    // get the values which the user types
    let simei = document.getElementById("simei").value;
    let furigana = document.getElementById("furigana").value;
    let seinengappi = document.getElementById("datepicker").value;
    let nenrei = document.getElementById("nenrei_rirekisho").value;
    let yubinbango = document.getElementById("p-postal-code").value;
    let jyusho = document.getElementById("jyusho").value;
    let jyusho_furigana = document.getElementById("jyusho_furigana").value;
    let keitaibango = document.getElementById("keitaibango").value;
    let renrakusaki_meru = document.getElementById("renrakusaki_meru").value;
    let email = document.getElementById("email").value;
    let renrakusaki_denwabango = document.getElementById("renrakusaki_denwabango").value;
    let gakureki_rann = document.getElementById("gakureki_rann").value;
    let kamoku = document.getElementById("kamoku").value;
    let shumi = document.getElementById("shumi").value;
    let tokutyo = document.getElementById("tokutyo").value;
    let gakuseiseikatu = document.getElementById("gakuseiseikatu").value;
    let shiboudouki = document.getElementById("shiboudouki").value;
    let sikaku = document.getElementById("sikaku").value;
    let biko = document.getElementById("biko").value;

    document.getElementById("inputName").textContent = simei;
    document.getElementById("inputFurigana").textContent = furigana;


    var userId = firebase.auth().currentUser.uid;

    // if(simei == "" || furigana == ""){
    //     alert("Please enter the fields");
    // }else{
        //make the object
        var data = {
            simei: simei,
            furigana:furigana,
            seinengappi:seinengappi,
            nenrei:nenrei,
            yubinbango:yubinbango,
            jyusho:jyusho,
            jyusho_furigana:jyusho_furigana,
            keitaibango:keitaibango,
            seibetu:seibetu,
            renrakusaki_meru:renrakusaki_meru,
            email:email,
            renrakusaki_denwabango:renrakusaki_denwabango,
            gakureki_rann:gakureki_rann,
            kamoku:kamoku,
            shumi:shumi,
            tokutyo:tokutyo,
            gakuseiseikatu:gakuseiseikatu,
            shiboudouki:shiboudouki,
            sikaku:sikaku,
            biko:biko
            //プロジェクトに必要なデータ
            
    //        gakuseiID:gakuseiID,
    //        hizuke:hizuke,
    //        seibetu:seibetu,						
    //        renrakusaki_yubinbango:renrakusaki_yubinbango,
    //        renrakusaki_jyusho:renrakusaki_jyusho,
    //        gakureki_nengappi:gakureki_nengappi,
    //        gakuseiseikatu:gakuseiseikatu,
    //        siboudouki:siboudouki,
    //        sikaku_hiduke:sikaku_hiduke,
    //        biko:biko,
    //        sibousaki:sibousaki
        }
        
        //save the data to the firebase
        var database = firebase.database();

        //which gets the database
        // var ref = database.ref(userId + '/nyuryokufomu').set(data);
        firebase.database().ref(userId + '/nyuryokufomu').update(data);
})