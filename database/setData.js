seibetu = "";
function chg(val) {
    seibetu = val;
}

function updateData() {
    // get the values which the user types
    let simei = document.getElementById("simei").value;
    let furigana = document.getElementById("furigana").value;
    let seinengappi = document.getElementById("datepicker").value;
    let nenrei = document.getElementById("nenrei_rirekisho").value;
    let yubinbango = document.getElementById("p-postal-code").value;
    let jyusho = document.getElementById("jyusho").value;
    let jyusho_furigana = document.getElementById("jyusho_furigana").value;
    let denwabango = document.getElementById("denwabango").value;
    let keitaibango = document.getElementById("keitaibango").value;
    let email = document.getElementById("email").value;
    let renrakusaki_yubinbango = document.getElementById("renrakusaki-p-postal-code").value;
    let renrakusaki_furigana = document.getElementById("renrakusaki_furigana").value;
    let renrakusaki = document.getElementById("renrakusaki").value;
    let renrakusaki_denwabango = document.getElementById("renrakusaki_denwabango").value;
    let gakureki_toshi1 = document.getElementById("gakureki_toshi1").value;
    let gakureki_toshi2 = document.getElementById("gakureki_toshi2").value;
    let gakureki_toshi3 = document.getElementById("gakureki_toshi3").value;
    let gakureki_toshi4 = document.getElementById("gakureki_toshi4").value;
    let gakureki_toshi5 = document.getElementById("gakureki_toshi5").value;
    let gakureki_toshi6 = document.getElementById("gakureki_toshi6").value;
    let gakureki_toshi7 = document.getElementById("gakureki_toshi7").value;
    let gakureki_toshi8 = document.getElementById("gakureki_toshi8").value;
    let gakureki_toshi9 = document.getElementById("gakureki_toshi9").value;
    let gakureki_toshi10 = document.getElementById("gakureki_toshi10").value;
    let gakureki_toshi11 = document.getElementById("gakureki_toshi11").value;
    let gakureki_toshi12 = document.getElementById("gakureki_toshi12").value;
    let gakureki_toshi13 = document.getElementById("gakureki_toshi13").value;
    let gakureki_toshi14 = document.getElementById("gakureki_toshi14").value;
    let gakureki_tuki1 = document.getElementById("gakureki_tuki1").value;
    let gakureki_tuki2 = document.getElementById("gakureki_tuki2").value;
    let gakureki_tuki3 = document.getElementById("gakureki_tuki3").value;
    let gakureki_tuki4 = document.getElementById("gakureki_tuki4").value;
    let gakureki_tuki5 = document.getElementById("gakureki_tuki5").value;
    let gakureki_tuki6 = document.getElementById("gakureki_tuki6").value;
    let gakureki_tuki7 = document.getElementById("gakureki_tuki7").value;
    let gakureki_tuki8 = document.getElementById("gakureki_tuki8").value;
    let gakureki_tuki9 = document.getElementById("gakureki_tuki9").value;
    let gakureki_tuki10 = document.getElementById("gakureki_tuki10").value;
    let gakureki_tuki11 = document.getElementById("gakureki_tuki11").value;
    let gakureki_tuki12 = document.getElementById("gakureki_tuki12").value;
    let gakureki_tuki13 = document.getElementById("gakureki_tuki13").value;
    let gakureki_tuki14 = document.getElementById("gakureki_tuki14").value;
    let gakureki_rann1 = document.getElementById("gakureki_rann1").value;
    let gakureki_rann2 = document.getElementById("gakureki_rann2").value;
    let gakureki_rann3 = document.getElementById("gakureki_rann3").value;
    let gakureki_rann4 = document.getElementById("gakureki_rann4").value;
    let gakureki_rann5 = document.getElementById("gakureki_rann5").value;
    let gakureki_rann6 = document.getElementById("gakureki_rann6").value;
    let gakureki_rann7 = document.getElementById("gakureki_rann7").value;
    let gakureki_rann8 = document.getElementById("gakureki_rann8").value;
    let gakureki_rann9 = document.getElementById("gakureki_rann9").value;
    let gakureki_rann10 = document.getElementById("gakureki_rann10").value;
    let gakureki_rann11 = document.getElementById("gakureki_rann11").value;
    let gakureki_rann12 = document.getElementById("gakureki_rann12").value;
    let gakureki_rann13 = document.getElementById("gakureki_rann13").value;
    let gakureki_rann14 = document.getElementById("gakureki_rann14").value;
    let kamoku1 = document.getElementById("kamoku1").value;
    let kamoku2 = document.getElementById("kamoku2").value;
    let shumi = document.getElementById("shumi").value;
    let tokutyo = document.getElementById("tokutyo").value;
    let gakuseiseikatu = document.getElementById("gakuseiseikatu").value;
    let shiboudouki = document.getElementById("shiboudouki").value;
    let shikaku_toshi1 = document.getElementById("shikaku_toshi1").value;
    let shikaku_toshi2 = document.getElementById("shikaku_toshi2").value;
    let shikaku_toshi3 = document.getElementById("shikaku_toshi3").value;
    let shikaku_toshi4 = document.getElementById("shikaku_toshi4").value;
    let shikaku_toshi5 = document.getElementById("shikaku_toshi5").value;
    let shikaku_toshi6 = document.getElementById("shikaku_toshi6").value;
    let shikaku_tuki1 = document.getElementById("shikaku_tuki1").value;
    let shikaku_tuki2 = document.getElementById("shikaku_tuki2").value;
    let shikaku_tuki3 = document.getElementById("shikaku_tuki3").value;
    let shikaku_tuki4 = document.getElementById("shikaku_tuki4").value;
    let shikaku_tuki5 = document.getElementById("shikaku_tuki5").value;
    let shikaku_tuki6 = document.getElementById("shikaku_tuki6").value;
    let shikaku_name1 = document.getElementById("shikaku_name1").value;
    let shikaku_name2 = document.getElementById("shikaku_name2").value;
    let shikaku_name3 = document.getElementById("shikaku_name3").value;
    let shikaku_name4 = document.getElementById("shikaku_name4").value;
    let shikaku_name5 = document.getElementById("shikaku_name5").value;
    let shikaku_name6 = document.getElementById("shikaku_name6").value;
    let biko = document.getElementById("biko").value;
    let hizuke = document.getElementById("hizuke").value;

    // プレビューに挿入

    if (seibetu == "男性") {
        seibetu_Id_true = "pv_seibetu_Man";
        seibetu_Id_false = "pv_seibetu_Woman";
        document.getElementById(seibetu_Id_true).style.border = 'solid 1px';
        document.getElementById(seibetu_Id_true).style.borderRadius = '50%';
        document.getElementById(seibetu_Id_false).style.border = 'none';
        document.getElementById(seibetu_Id_false).style.borderRadius = 'none';
    } else if(seibetu == "女性"){
        seibetu_Id_true = "pv_seibetu_Woman";
        seibetu_Id_false = "pv_seibetu_Man";
        document.getElementById(seibetu_Id_true).style.border = 'solid 1px';
        document.getElementById(seibetu_Id_true).style.borderRadius = '50%';
        document.getElementById(seibetu_Id_false).style.border = 'none';
        document.getElementById(seibetu_Id_false).style.borderRadius = 'none';
    }
    
    document.getElementById("pv_Furigana").textContent = furigana;
    document.getElementById("pv_Simei").textContent = simei;
    let seinengappiary = seinengappi.split('/');
    document.getElementById("pv_birthday_nenrei").textContent = seinengappiary[0] + "年　" + seinengappiary[1] + "月　" + seinengappiary[2] + "日　" + "（満　" + nenrei + "歳）";
    document.getElementById("pv_jyusho_Furigana").textContent = jyusho_furigana;
    document.getElementById("pv_jyusho_Number").textContent = "〒" + yubinbango.substr(0, 3) + "-" + yubinbango.substr(3, 4);
    // let yubinbangoary = yubinbango.split('-');
    // document.getElementById("pv_jyusho_Number").textContent = "〒" + yubinbangoary[0] + "-" + yubinbangoary[1];
    document.getElementById("pv_jyusho").textContent = jyusho;
    document.getElementById("pv_Mail").textContent = email;
    document.getElementById("pv_renrakusaki_Furigana").textContent = renrakusaki_furigana;
    document.getElementById("pv_renrakusaki_Number").textContent = "〒" + renrakusaki_yubinbango.substr(0, 3) + "-" + renrakusaki_yubinbango.substr(3, 4);
    // let renrakusaki_yubinbangoary = renrakusaki_yubinbango.split('-');
    // document.getElementById("pv_renrakusaki_Number").textContent = "〒" + renrakusaki_yubinbangoary[0] + "-" + renrakusaki_yubinbangoary[1];
    document.getElementById("pv_renrakusaki").textContent = renrakusaki;
    document.getElementById("pv_denwa_Number").textContent = denwabango.substr(0, 4) + "-" + denwabango.substr(4, 2) + "-" + denwabango.substr(6, 4);
    document.getElementById("pv_keitai_Number").textContent = keitaibango.substr(0, 3) + "-" + keitaibango.substr(4, 4) + "-" + keitaibango.substr(7, 4);
    document.getElementById("pv_subdenwa_Number").textContent = renrakusaki_denwabango.substr(0, 4) + "-" + renrakusaki_denwabango.substr(4, 2) + "-" + renrakusaki_denwabango.substr(6, 4);
    // let denwabangoary = denwabango.split('-');
    // document.getElementById("pv_denwa_Number").textContent = denwabangoary[0] + "-" + denwabangoary[1] + "-" + denwabango[2];
    // let keitaibangoary = keitaibango.spit('-');
    // document.getElementById("pv_keitai_Number").textContent = keitaibangoary[0] + "-" + keitaibangoary[1] + "-" + keitaibangoary[2];
    // let renrakusaki_denwabangoary = renrakusaki_denwabango.split('-');
    // document.getElementById("pv_subdenwa_Number").textContent = renrakusaki_denwabangoary[0] + "-" + renrakusaki_denwabango[1] + "-" + renrakusaki_denwabango[2];
    document.getElementById("pv_history_Nen1").textContent = gakureki_toshi1;
    document.getElementById("pv_history_Nen2").textContent = gakureki_toshi2;
    document.getElementById("pv_history_Nen3").textContent = gakureki_toshi3;
    document.getElementById("pv_history_Nen4").textContent = gakureki_toshi4;
    document.getElementById("pv_history_Nen5").textContent = gakureki_toshi5;
    document.getElementById("pv_history_Nen6").textContent = gakureki_toshi6;
    document.getElementById("pv_history_Nen7").textContent = gakureki_toshi7;
    document.getElementById("pv_history_Nen8").textContent = gakureki_toshi8;
    document.getElementById("pv_history_Nen9").textContent = gakureki_toshi9;
    document.getElementById("pv_history_Nen10").textContent = gakureki_toshi10;
    document.getElementById("pv_history_Nen11").textContent = gakureki_toshi11;
    document.getElementById("pv_history_Nen12").textContent = gakureki_toshi12;
    document.getElementById("pv_history_Nen13").textContent = gakureki_toshi13;
    document.getElementById("pv_history_Nen14").textContent = gakureki_toshi14;
    document.getElementById("pv_history_Tuki1").textContent = gakureki_tuki1;
    document.getElementById("pv_history_Tuki2").textContent = gakureki_tuki2;
    document.getElementById("pv_history_Tuki3").textContent = gakureki_tuki3;
    document.getElementById("pv_history_Tuki4").textContent = gakureki_tuki4;
    document.getElementById("pv_history_Tuki5").textContent = gakureki_tuki5;
    document.getElementById("pv_history_Tuki6").textContent = gakureki_tuki6;
    document.getElementById("pv_history_Tuki7").textContent = gakureki_tuki7;
    document.getElementById("pv_history_Tuki8").textContent = gakureki_tuki8;
    document.getElementById("pv_history_Tuki9").textContent = gakureki_tuki9;
    document.getElementById("pv_history_Tuki10").textContent = gakureki_tuki10;
    document.getElementById("pv_history_Tuki11").textContent = gakureki_tuki11;
    document.getElementById("pv_history_Tuki12").textContent = gakureki_tuki12;
    document.getElementById("pv_history_Tuki13").textContent = gakureki_tuki13;
    document.getElementById("pv_history_Tuki14").textContent = gakureki_tuki14;
    document.getElementById("pv_history_Reki1").textContent = gakureki_rann1;
    document.getElementById("pv_history_Reki2").textContent = gakureki_rann2;
    document.getElementById("pv_history_Reki3").textContent = gakureki_rann3;
    document.getElementById("pv_history_Reki4").textContent = gakureki_rann4;
    document.getElementById("pv_history_Reki5").textContent = gakureki_rann5;
    document.getElementById("pv_history_Reki6").textContent = gakureki_rann6;
    document.getElementById("pv_history_Reki7").textContent = gakureki_rann7;
    document.getElementById("pv_history_Reki8").textContent = gakureki_rann8;
    document.getElementById("pv_history_Reki9").textContent = gakureki_rann9;
    document.getElementById("pv_history_Reki10").textContent = gakureki_rann10;
    document.getElementById("pv_history_Reki11").textContent = gakureki_rann11;
    document.getElementById("pv_history_Reki12").textContent = gakureki_rann12;
    document.getElementById("pv_history_Reki13").textContent = gakureki_rann13;
    document.getElementById("pv_history_Reki14").textContent = gakureki_rann14;
    document.getElementById("pv_kamoku").textContent = "　" + kamoku1 + "　" + kamoku2;
    document.getElementById("pv_shumi_1").textContent = "　" + shumi.substr(0, 28);
    document.getElementById("pv_shumi_2").textContent = shumi.substr(28, 28);
    document.getElementById("pv_shumi_0").textContent = shumi.substr(56, 28);
    document.getElementById("pv_tokutyou1").textContent = "　" + tokutyo.substr(0, 28);
    document.getElementById("pv_tokutyou2").textContent = tokutyo.substr(28, 28);
    document.getElementById("pv_tokutyou3").textContent = tokutyo.substr(56, 28);
    document.getElementById("pv_tokutyou4").textContent = tokutyo.substr(84, 28);
    document.getElementById("pv_tokutyou0").textContent = tokutyo.substr(112, 28);
    document.getElementById("pv_gakuseiseikatu1").textContent = "　" + gakuseiseikatu.substr(0, 28);
    document.getElementById("pv_gakuseiseikatu2").textContent = gakuseiseikatu.substr(28, 28);
    document.getElementById("pv_gakuseiseikatu3").textContent = gakuseiseikatu.substr(56, 28);
    document.getElementById("pv_gakuseiseikatu4").textContent = gakuseiseikatu.substr(84, 28);
    document.getElementById("pv_gakuseiseikatu0").textContent = gakuseiseikatu.substr(112, 28);
    document.getElementById("pv_shiboudouki1").textContent = "　" + shiboudouki.substr(0, 28);
    document.getElementById("pv_shiboudouki2").textContent = shiboudouki.substr(28, 28);
    document.getElementById("pv_shiboudouki3").textContent = shiboudouki.substr(56, 28);
    document.getElementById("pv_shiboudouki4").textContent = shiboudouki.substr(84, 28);
    document.getElementById("pv_shiboudouki0").textContent = shiboudouki.substr(112, 28);
    document.getElementById("pv_sikaku_Nen1").textContent = shikaku_toshi1;
    document.getElementById("pv_sikaku_Nen2").textContent = shikaku_toshi2;
    document.getElementById("pv_sikaku_Nen3").textContent = shikaku_toshi3;
    document.getElementById("pv_sikaku_Nen4").textContent = shikaku_toshi4;
    document.getElementById("pv_sikaku_Nen5").textContent = shikaku_toshi5;
    document.getElementById("pv_sikaku_Nen6").textContent = shikaku_toshi6;
    document.getElementById("pv_sikaku_Tuki1").textContent = shikaku_tuki1;
    document.getElementById("pv_sikaku_Tuki2").textContent = shikaku_tuki2;
    document.getElementById("pv_sikaku_Tuki3").textContent = shikaku_tuki3;
    document.getElementById("pv_sikaku_Tuki4").textContent = shikaku_tuki4;
    document.getElementById("pv_sikaku_Tuki5").textContent = shikaku_tuki5;
    document.getElementById("pv_sikaku_Tuki6").textContent = shikaku_tuki6;
    document.getElementById("pv_sikaku_Name1").textContent = shikaku_name1;
    document.getElementById("pv_sikaku_Name2").textContent = shikaku_name2;
    document.getElementById("pv_sikaku_Name3").textContent = shikaku_name3;
    document.getElementById("pv_sikaku_Name4").textContent = shikaku_name4;
    document.getElementById("pv_sikaku_Name5").textContent = shikaku_name5;
    document.getElementById("pv_sikaku_Name6").textContent = shikaku_name6;
    document.getElementById("pv_biko").textContent = "　" + biko;
    // document.getElementById("pv_hizuke").textContent = hizuke.substr(0, 4) + "年 " + hizuke.substr(5, 2) + "月 " + hizuke.substr(8, 2) + "日 " + "現在";
    let hizukeary = hizuke.split('/');
    document.getElementById("pv_hizuke").textContent = hizukeary[0] + "年 " + hizukeary[1] + "月 " + hizukeary[2] + "日 " + "現在";

    if (renrakusaki == "同上"){
    document.getElementById("pv_renrakusaki_Furigana").textContent = "";
    document.getElementById("pv_renrakusaki_Number").textContent = "〒";
    document.getElementById("pv_renrakusaki").textContent = renrakusaki;
    document.getElementById("pv_renrakusaki").style.display = "flex";
    document.getElementById("pv_renrakusaki").style.justifyContent = "center";
    document.getElementById("pv_renrakusaki").style.alignItems = "center";
    document.getElementById("pv_subdenwa_Number").textContent = renrakusaki_denwabango;
    }

    let gakureki_rann = [[gakureki_toshi1, gakureki_tuki1, gakureki_rann1],
    [gakureki_toshi2, gakureki_tuki2, gakureki_rann2],
    [gakureki_toshi3, gakureki_tuki3, gakureki_rann3],
    [gakureki_toshi4, gakureki_tuki4, gakureki_rann4],
    [gakureki_toshi5, gakureki_tuki5, gakureki_rann5],
    [gakureki_toshi6, gakureki_tuki6, gakureki_rann6],
    [gakureki_toshi7, gakureki_tuki7, gakureki_rann7],
    [gakureki_toshi8, gakureki_tuki8, gakureki_rann8],
    [gakureki_toshi9, gakureki_tuki9, gakureki_rann9],
    [gakureki_toshi10, gakureki_tuki10, gakureki_rann10],
    [gakureki_toshi11, gakureki_tuki11, gakureki_rann11],
    [gakureki_toshi12, gakureki_tuki12, gakureki_rann12],
    [gakureki_toshi13, gakureki_tuki13, gakureki_rann13],
    [gakureki_toshi14, gakureki_tuki14, gakureki_rann14]];

    let shikaku = [[shikaku_toshi1, shikaku_tuki1, shikaku_name1],
    [shikaku_toshi2, shikaku_tuki2, shikaku_name2],
    [shikaku_toshi3, shikaku_tuki3, shikaku_name3],
    [shikaku_toshi4, shikaku_tuki4, shikaku_name4],
    [shikaku_toshi4, shikaku_tuki5, shikaku_name5],
    [shikaku_toshi6, shikaku_tuki6, shikaku_name6]];

    var userId = firebase.auth().currentUser.uid;

    //make the object
    var data = {
        simei: simei,
        furigana: furigana,
        seinengappi: seinengappi,
        nenrei: nenrei,
        yubinbango: yubinbango,
        jyusho: jyusho,
        jyusho_furigana: jyusho_furigana,
        keitaibango: keitaibango,
        seibetu: seibetu,
        email: email,
        renrakusaki_denwabango: renrakusaki_denwabango,
        gakureki_rann: gakureki_rann,
        kamoku1: kamoku1,
        kamoku2: kamoku2,
        shumi: shumi,
        tokutyo: tokutyo,
        gakuseiseikatu: gakuseiseikatu,
        shiboudouki: shiboudouki,
        shikaku: shikaku,
        biko: biko,
        hizuke: hizuke
    }

    //save the data to the firebase
    var database = firebase.database();

    //which gets the database
    firebase.database().ref(userId + '/nyuryokufomu').update(data);
}
function readData(){
    var userId = firebase.auth().currentUser.uid;
    
    var rootRef = database.ref(userId + '/nyuryokufomu');
    rootRef.on("value", function(snapshot) {
          var childData = snapshot.val();
          document.getElementById("simei").value = childData.simei;
          document.getElementById("biko").value = childData.biko;
          document.getElementById("email").value = childData.email;
          document.getElementById("furigana").value = childData.furigana;
          document.getElementById("gakuseiseikatu").value = childData.gakuseiseikatu;
          document.getElementById("hizuke").value = childData.hizuke;
          document.getElementById("jyusho").value = childData.jyusho;
          document.getElementById("jyusho_furigana").value = childData.jyusho_furigana;
          document.getElementById("kamoku1").value = childData.kamoku1;
          document.getElementById("kamoku2").value = childData.kamoku2;
          document.getElementById("keitaibango").value = childData.keitaibango;
          document.getElementById("nenrei_rirekisho").value = childData.nenrei;
          document.getElementById("renrakusaki_denwabango").value = childData.renrakusaki_denwabango;
          document.getElementById("datepicker").value = childData.seinengappi;
          document.getElementById("shiboudouki").value = childData.shiboudouki;
          document.getElementById("shumi").value = childData.shumi;
          document.getElementById("tokutyo").value = childData.tokutyo;
          document.getElementById("p-postal-code").value = childData.yubinbango;
            let array1 = childData.gakureki_rann[0];
            document.getElementById('gakureki_toshi1').value = array1[0];
            document.getElementById('gakureki_tuki1').value = array1[1];
            document.getElementById('gakureki_rann1').value = array1[2];
            let array2 = childData.gakureki_rann[1];
            document.getElementById('gakureki_toshi2').value = array2[0];
            document.getElementById('gakureki_tuki2').value = array2[1];
            document.getElementById('gakureki_rann2').value = array2[2];
            let shikaku1 = childData.shikaku[0];
            document.getElementById('shikaku_toshi1').value = shikaku1[0];
            document.getElementById('shikaku_tuki1').value = shikaku1[1];
            document.getElementById('shikaku_name1').value = shikaku1[2];
            let shikaku2 = childData.shikaku[0];
            document.getElementById('shikaku_toshi2').value = shikaku2[0];
            document.getElementById('shikaku_tuki2').value = shikaku2[1];
            document.getElementById('shikaku_name2').value = shikaku2[2];
        });
}