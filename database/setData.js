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
    let siboudouki = document.getElementById("siboudouki").value;
    let sikaku = document.getElementById("sikaku").value;
    let biko = document.getElementById("biko").value;

    document.getElementById("pv_Furigana").textContent = furigana;
    document.getElementById("pv_Simei").textContent = simei;
    // document.getElementById("pv_birthday_Nen").textContent = seinengappi.substr(0,4);
    // document.getElementById("pv_birthday_Tuki").textContent = seinengappi.substr(5,2);
    // document.getElementById("pv_birthday_Nichi").textContent = seinengappi.substr(8,2);
    // document.getElementById("pv_Nenrei").textContent = nenrei;
    document.getElementById("pv_birthday_nenrei").textContent = seinengappi.substr(0,4)+"年 "+seinengappi.substr(5,2)+"月 "+seinengappi.substr(8,2)+"日 "+"（満 "+nenrei+"歳）";
    // document.getElementById("").textContent = ;
    document.getElementById("pv_jyusho_Furigana").textContent = jyusho_furigana;
    document.getElementById("pv_jyusho_Number").textContent = "〒"+yubinbango;
    document.getElementById("pv_jyusho").textContent = jyusho;
    document.getElementById("pv_Mail").textContent = email;
    // document.getElementById("pv_renrakusaki_Furigana").textContent = ;
    // document.getElementById("pv_renrakusaki_Number").textContent = "〒"+;
    // document.getElementById("pv_renrakusaki").textContent = ;
    // document.getElementById("pv_denwa_Number").textContent = ;
    document.getElementById("pv_keitai_Number").textContent = keitaibango;
    document.getElementById("pv_subdenwa_Number").textContent = renrakusaki_denwabango;
    // document.getElementById("pv_hidtory_Nen1").textContent = ;
    // document.getElementById("pv_hidtory_Nen2").textContent = ;
    // document.getElementById("pv_hidtory_Nen3").textContent = ;
    // document.getElementById("pv_hidtory_Nen4").textContent = ;
    // document.getElementById("pv_hidtory_Nen5").textContent = ;
    // document.getElementById("pv_hidtory_Nen6").textContent = ;
    // document.getElementById("pv_hidtory_Nen7").textContent = ;
    // document.getElementById("pv_hidtory_Nen8").textContent = ;
    // document.getElementById("pv_hidtory_Nen9").textContent = ;
    // document.getElementById("pv_hidtory_Nen10").textContent = ;
    // document.getElementById("pv_hidtory_Nen11").textContent = ;
    // document.getElementById("pv_hidtory_Nen12").textContent = ;
    // document.getElementById("pv_hidtory_Nen13").textContent = ;
    // document.getElementById("pv_hidtory_Nen14").textContent = ;
    // document.getElementById("pv_hidtory_Tuki1").textContent = ;
    // document.getElementById("pv_hidtory_Tuki2").textContent = ;
    // document.getElementById("pv_hidtory_Tuki3").textContent = ;
    // document.getElementById("pv_hidtory_Tuki4").textContent = ;
    // document.getElementById("pv_hidtory_Tuki5").textContent = ;
    // document.getElementById("pv_hidtory_Tuki6").textContent = ;
    // document.getElementById("pv_hidtory_Tuki7").textContent = ;
    // document.getElementById("pv_hidtory_Tuki8").textContent = ;
    // document.getElementById("pv_hidtory_Tuki9").textContent = ;
    // document.getElementById("pv_hidtory_Tuki10").textContent = ;
    // document.getElementById("pv_hidtory_Tuki11").textContent = ;
    // document.getElementById("pv_hidtory_Tuki12").textContent = ;
    // document.getElementById("pv_hidtory_Tuki13").textContent = ;
    // document.getElementById("pv_hidtory_Tuki14").textContent = ;
    // document.getElementById("pv_hidtory_Reki1").textContent = ;
    // document.getElementById("pv_hidtory_Reki2").textContent = ;
    // document.getElementById("pv_hidtory_Reki3").textContent = ;
    // document.getElementById("pv_hidtory_Reki4").textContent = ;
    // document.getElementById("pv_hidtory_Reki5").textContent = ;
    // document.getElementById("pv_hidtory_Reki6").textContent = ;
    // document.getElementById("pv_hidtory_Reki7").textContent = ;
    // document.getElementById("pv_hidtory_Reki8").textContent = ;
    // document.getElementById("pv_hidtory_Reki9").textContent = ;
    // document.getElementById("pv_hidtory_Reki10").textContent = ;
    // document.getElementById("pv_hidtory_Reki11").textContent = ;
    // document.getElementById("pv_hidtory_Reki12").textContent = ;
    // document.getElementById("pv_hidtory_Reki13").textContent = ;
    // document.getElementById("pv_hidtory_Reki14").textContent = ;
    document.getElementById("pv_kamoku").textContent = kamoku;
    document.getElementById("pv_shumi_1").textContent = shumi.substr(0,25);
    document.getElementById("pv_shumi_2").textContent = shumi.substr(26,25);
    document.getElementById("pv_shumi_0").textContent = shumi.substr(51,25);
    // document.getElementById("pv_tokutyou1").textContent = tokutyo;
    // document.getElementById("pv_tokutyou2").textContent = tokutyo;
    // document.getElementById("pv_tokutyou3").textContent = tokutyo;
    // document.getElementById("pv_tokutyou4").textContent = tokutyo;
    // document.getElementById("pv_tokutyou0").textContent = tokutyo;
    // document.getElementById("pv_gakuseiseikatu1").textContent = gakuseiseikatu;
    // document.getElementById("pv_gakuseiseikatu2").textContent = gakuseiseikatu;
    // document.getElementById("pv_gakuseiseikatu3").textContent = gakuseiseikatu;
    // document.getElementById("pv_gakuseiseikatu4").textContent = gakuseiseikatu;
    // document.getElementById("pv_gakuseiseikatu0").textContent = gakuseiseikatu;
    // document.getElementById("").textContent = siboudouki;
    // document.getElementById("").textContent = siboudouki;
    // document.getElementById("").textContent = siboudouki;
    // document.getElementById("").textContent = siboudouki;
    // document.getElementById("").textContent = siboudouki;
    // document.getElementById("pv_sikaku_Nen1").textContent = ;
    // document.getElementById("pv_sikaku_Nen2").textContent = ;
    // document.getElementById("pv_sikaku_Nen3").textContent = ;
    // document.getElementById("pv_sikaku_Nen4").textContent = ;
    // document.getElementById("pv_sikaku_Nen5").textContent = ;
    // document.getElementById("pv_sikaku_Nen6").textContent = ;
    // document.getElementById("pv_sikaku_Tuki1").textContent = ;
    // document.getElementById("pv_sikaku_Tuki2").textContent = ;
    // document.getElementById("pv_sikaku_Tuki3").textContent = ;
    // document.getElementById("pv_sikaku_Tuki4").textContent = ;
    // document.getElementById("pv_sikaku_Tuki5").textContent = ;
    // document.getElementById("pv_sikaku_Tuki6").textContent = ;
    // document.getElementById("pv_sikaku_Reki1").textContent = ;
    // document.getElementById("pv_sikaku_Reki2").textContent = ;
    // document.getElementById("pv_sikaku_Reki3").textContent = ;
    // document.getElementById("pv_sikaku_Reki4").textContent = ;
    // document.getElementById("pv_sikaku_Reki5").textContent = ;
    // document.getElementById("pv_sikaku_Reki6").textContent = ;
    document.getElementById("pv_biko").textContent = biko;
    // document.getElementById("").textContent = ;


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
            siboudouki:siboudouki,
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