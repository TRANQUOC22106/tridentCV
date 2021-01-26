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
    // let denwabango = document.getElementById("denwabango").value;
    let denwabango1 = document.getElementById("denwabango1").value;
    let denwabango2 = document.getElementById("denwabango2").value;
    let denwabango3 = document.getElementById("denwabango3").value;
    let denwabango = denwabango1 + "-" + denwabango2 + "-" + denwabango3;
    // let keitaibango = document.getElementById("keitaibango").value;
    let keitaibango1 = document.getElementById("keitaibango1").value;
    let keitaibango2 = document.getElementById("keitaibango2").value;
    let keitaibango3 = document.getElementById("keitaibango3").value;
    let keitaibango = keitaibango1 + "-" + keitaibango2 + "-" + keitaibango3;
    let email = document.getElementById("email").value;
    let renrakusaki_yubinbango = document.getElementById("renrakusaki-p-postal-code").value;
    let renrakusaki = document.getElementById("renrakusaki").value;
    let renrakusaki_furigana = document.getElementById("renrakusaki_furigana").value;
    // let renrakusaki_denwabango = document.getElementById("renrakusaki_denwabango").value;
    let renrakusaki_denwabango1 = document.getElementById("renrakusaki_denwabango1").value;
    let renrakusaki_denwabango2 = document.getElementById("renrakusaki_denwabango2").value;
    let renrakusaki_denwabango3 = document.getElementById("renrakusaki_denwabango3").value;
    let renrakusaki_denwabango = renrakusaki_denwabango1 + "-" + renrakusaki_denwabango2 + "-" + renrakusaki_denwabango3;
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
    document.getElementById("pv_jyusho").textContent = jyusho;
    document.getElementById("pv_Mail").textContent = email;
    document.getElementById("pv_renrakusaki_Furigana").textContent = renrakusaki_furigana;
    document.getElementById("pv_renrakusaki_Number").textContent = "〒" + renrakusaki_yubinbango.substr(0, 3) + "-" + renrakusaki_yubinbango.substr(3, 4);
    document.getElementById("pv_renrakusaki").textContent = renrakusaki;
    // document.getElementById("pv_denwa_Number").textContent = denwabango.substr(0, 3) + "-" + denwabango.substr(4, 4) + "-" + denwabango.substr(6, 4);
    document.getElementById("pv_denwa_Number").textContent = denwabango;
    // document.getElementById("pv_keitai_Number").textContent = keitaibango.substr(0, 3) + "-" + keitaibango.substr(4, 4) + "-" + keitaibango.substr(7, 4);
    document.getElementById("pv_keitai_Number").textContent = keitaibango;
    // document.getElementById("pv_subdenwa_Number").textContent = renrakusaki_denwabango.substr(0, 4) + "-" + renrakusaki_denwabango.substr(4, 2) + "-" + renrakusaki_denwabango.substr(6, 4);
    document.getElementById("pv_subdenwa_Number").textContent = renrakusaki_denwabango;
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
    document.getElementById("pv_shumi_1").textContent = shumi.substr(0, 28);
    document.getElementById("pv_shumi_2").textContent = shumi.substr(28, 28);
    document.getElementById("pv_shumi_0").textContent = shumi.substr(56, 28);
    document.getElementById("pv_tokutyou1").textContent = tokutyo.substr(0, 28);
    document.getElementById("pv_tokutyou2").textContent = tokutyo.substr(28, 28);
    document.getElementById("pv_tokutyou3").textContent = tokutyo.substr(56, 28);
    document.getElementById("pv_tokutyou4").textContent = tokutyo.substr(84, 28);
    document.getElementById("pv_tokutyou0").textContent = tokutyo.substr(112, 28);
    document.getElementById("pv_gakuseiseikatu1").textContent = gakuseiseikatu.substr(0, 28);
    document.getElementById("pv_gakuseiseikatu2").textContent = gakuseiseikatu.substr(28, 28);
    document.getElementById("pv_gakuseiseikatu3").textContent = gakuseiseikatu.substr(56, 28);
    document.getElementById("pv_gakuseiseikatu4").textContent = gakuseiseikatu.substr(84, 28);
    document.getElementById("pv_gakuseiseikatu0").textContent = gakuseiseikatu.substr(112, 28);
    document.getElementById("pv_shiboudouki1").textContent = shiboudouki.substr(0, 28);
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
        seibetu: seibetu,
        yubinbango: yubinbango,
        jyusho: jyusho,
        jyusho_furigana: jyusho_furigana,
        denwabango:denwabango,
        keitaibango: keitaibango,
        email: email,
        renrakusaki_yubinbango:renrakusaki_yubinbango,
        renrakusaki:renrakusaki,
        renrakusaki_furigana:renrakusaki_furigana,
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

 /*Firebaseのデータを呼び出す*/
function readData(){
    var userId = firebase.auth().currentUser.uid;
    
    var rootRef = database.ref(userId + '/nyuryokufomu');
    rootRef.on("value", function(snapshot) {
          var childData = snapshot.val();
          document.getElementById("simei").value = childData.simei;
          document.getElementById("furigana").value = childData.furigana;
          document.getElementById("datepicker").value = childData.seinengappi;
          document.getElementById("nenrei_rirekisho").value = childData.nenrei;
          if (childData.seibetu == "男性") {
              document.getElementById("seibetuMan").checked = true;
              document.getElementById("seibetuWoman").checked = false;
            } else if(childData.seibetu == "女性"){
                document.getElementById("seibetuMan").checked = false;
                document.getElementById("seibetuWoman").checked = true;
            }
          document.getElementById("p-postal-code").value = childData.yubinbango;
          document.getElementById("jyusho").value = childData.jyusho;
          document.getElementById("jyusho_furigana").value = childData.jyusho_furigana;
        //   document.getElementById("denwabango").value = childData.denwabango;
        let denwabangoary = childData.denwabango.split('-');
          document.getElementById("denwabango1").value = denwabangoary[0];
          document.getElementById("denwabango2").value = denwabangoary[1];
          document.getElementById("denwabango3").value = denwabangoary[2];
        //   document.getElementById("keitaibango").value = childData.keitaibango;
        let keitaibangoary = childData.keitaibango.split('-');
        document.getElementById("keitaibango1").value = keitaibangoary[0];
        document.getElementById("keitaibango2").value = keitaibangoary[1];
        document.getElementById("keitaibango3").value = keitaibangoary[2];
          document.getElementById("email").value = childData.email;
          document.getElementById("renrakusaki-p-postal-code").value = childData.renrakusaki_yubinbango;
          document.getElementById("renrakusaki").value = childData.renrakusaki;
          document.getElementById("renrakusaki_furigana").value = childData.renrakusaki_furigana;
        //   document.getElementById("renrakusaki_denwabango").value = childData.renrakusaki_denwabango;
        let renrakusaki_denwabangoary = childData.renrakusaki_denwabango.split('-');
        document.getElementById("renrakusaki_denwabango1").value = renrakusaki_denwabangoary[0];
        document.getElementById("renrakusaki_denwabango2").value = renrakusaki_denwabangoary[1];
        document.getElementById("renrakusaki_denwabango3").value = renrakusaki_denwabangoary[2];
          document.getElementById("kamoku1").value = childData.kamoku1;
          document.getElementById("kamoku2").value = childData.kamoku2;
          document.getElementById("shumi").value = childData.shumi;
          document.getElementById("tokutyo").value = childData.tokutyo;
          document.getElementById("gakuseiseikatu").value = childData.gakuseiseikatu;
          document.getElementById("shiboudouki").value = childData.shiboudouki;
          document.getElementById("biko").value = childData.biko;
          document.getElementById("hizuke").value = childData.hizuke;
          let array1 = childData.gakureki_rann[0];
          document.getElementById('gakureki_toshi1').value = array1[0];
          document.getElementById('gakureki_tuki1').value = array1[1];
          document.getElementById('gakureki_rann1').value = array1[2];
          let array2 = childData.gakureki_rann[1];
          document.getElementById('gakureki_toshi2').value = array2[0];
          document.getElementById('gakureki_tuki2').value = array2[1];
          document.getElementById('gakureki_rann2').value = array2[2];
          let array3 = childData.gakureki_rann[2];
          document.getElementById('gakureki_toshi3').value = array3[0];
          document.getElementById('gakureki_tuki3').value = array3[1];
          document.getElementById('gakureki_rann3').value = array3[2];
          let array4 = childData.gakureki_rann[3];
          document.getElementById('gakureki_toshi4').value = array4[0];
          document.getElementById('gakureki_tuki4').value = array4[1];
          document.getElementById('gakureki_rann4').value = array4[2];
          let array5 = childData.gakureki_rann[4];
          document.getElementById('gakureki_toshi5').value = array5[0];
          document.getElementById('gakureki_tuki5').value = array5[1];
          document.getElementById('gakureki_rann5').value = array5[2];
          let array6 = childData.gakureki_rann[5];
          document.getElementById('gakureki_toshi6').value = array6[0];
          document.getElementById('gakureki_tuki6').value = array6[1];
          document.getElementById('gakureki_rann6').value = array6[2];
          let array7 = childData.gakureki_rann[6];
          document.getElementById('gakureki_toshi7').value = array7[0];
          document.getElementById('gakureki_tuki7').value = array7[1];
          document.getElementById('gakureki_rann7').value = array7[2];
          let array8 = childData.gakureki_rann[7];
          document.getElementById('gakureki_toshi8').value = array8[0];
          document.getElementById('gakureki_tuki8').value = array8[1];
          document.getElementById('gakureki_rann8').value = array8[2];
          let array9 = childData.gakureki_rann[8];
          document.getElementById('gakureki_toshi9').value = array9[0];
          document.getElementById('gakureki_tuki9').value = array9[1];
          document.getElementById('gakureki_rann9').value = array9[2];
          let array10 = childData.gakureki_rann[9];
          document.getElementById('gakureki_toshi10').value = array10[0];
          document.getElementById('gakureki_tuki10').value = array10[1];
          document.getElementById('gakureki_rann10').value = array10[2];
          let array11 = childData.gakureki_rann[10];
          document.getElementById('gakureki_toshi11').value = array11[0];
          document.getElementById('gakureki_tuki11').value = array11[1];
          document.getElementById('gakureki_rann11').value = array11[2];
          let array12 = childData.gakureki_rann[11];
          document.getElementById('gakureki_toshi12').value = array12[0];
          document.getElementById('gakureki_tuki12').value = array12[1];
          document.getElementById('gakureki_rann12').value = array12[2];
          let array13 = childData.gakureki_rann[12];
          document.getElementById('gakureki_toshi13').value = array13[0];
          document.getElementById('gakureki_tuki13').value = array13[1];
          document.getElementById('gakureki_rann13').value = array13[2];
          let array14 = childData.gakureki_rann[13];
          document.getElementById('gakureki_toshi14').value = array14[0];
          document.getElementById('gakureki_tuki14').value = array14[1];
          document.getElementById('gakureki_rann14').value = array14[2];
          let shikaku1 = childData.shikaku[0];
          document.getElementById('shikaku_toshi1').value = shikaku1[0];
          document.getElementById('shikaku_tuki1').value = shikaku1[1];
          document.getElementById('shikaku_name1').value = shikaku1[2];
          let shikaku2 = childData.shikaku[1];
          document.getElementById('shikaku_toshi2').value = shikaku2[0];
          document.getElementById('shikaku_tuki2').value = shikaku2[1];
          document.getElementById('shikaku_name2').value = shikaku2[2];
          let shikaku3 = childData.shikaku[2];
          document.getElementById('shikaku_toshi3').value = shikaku3[0];
          document.getElementById('shikaku_tuki3').value = shikaku3[1];
          document.getElementById('shikaku_name3').value = shikaku3[2];
          let shikaku4 = childData.shikaku[3];
          document.getElementById('shikaku_toshi4').value = shikaku4[0];
          document.getElementById('shikaku_tuki4').value = shikaku4[1];
          document.getElementById('shikaku_name4').value = shikaku4[2];
          let shikaku5 = childData.shikaku[4];
          document.getElementById('shikaku_toshi5').value = shikaku5[0];
          document.getElementById('shikaku_tuki5').value = shikaku5[1];
          document.getElementById('shikaku_name5').value = shikaku5[2];
          let shikaku6 = childData.shikaku[5];
          document.getElementById('shikaku_toshi6').value = shikaku6[0];
          document.getElementById('shikaku_tuki6').value = shikaku6[1];
          document.getElementById('shikaku_name6').value = shikaku6[2];
          // プレビューに挿入
          if (childData.seibetu == "男性") {
              seibetu_Id_true = "pv_seibetu_Man";
              seibetu_Id_false = "pv_seibetu_Woman";
              document.getElementById(seibetu_Id_true).style.border = 'solid 1px';
              document.getElementById(seibetu_Id_true).style.borderRadius = '50%';
              document.getElementById(seibetu_Id_false).style.border = 'none';
              document.getElementById(seibetu_Id_false).style.borderRadius = 'none';
            } else if(childData.seibetu == "女性"){
                seibetu_Id_true = "pv_seibetu_Woman";
                seibetu_Id_false = "pv_seibetu_Man";
                document.getElementById(seibetu_Id_true).style.border = 'solid 1px';
                document.getElementById(seibetu_Id_true).style.borderRadius = '50%';
                document.getElementById(seibetu_Id_false).style.border = 'none';
                document.getElementById(seibetu_Id_false).style.borderRadius = 'none';
            }
            document.getElementById("pv_Furigana").textContent = childData.furigana;
            document.getElementById("pv_Simei").textContent = childData.simei;
            let seinengappiary = childData.seinengappi.split('/');
            document.getElementById("pv_birthday_nenrei").textContent = seinengappiary[0] + "年　" + seinengappiary[1] + "月　" + seinengappiary[2] + "日　" + "（満　" +childData.nenrei + "歳）";
            document.getElementById("pv_jyusho_Furigana").textContent = childData.jyusho_furigana;
            document.getElementById("pv_jyusho_Number").textContent = "〒" + childData.yubinbango.substr(0, 3) + "-" + childData.yubinbango.substr(3, 4);
            document.getElementById("pv_jyusho").textContent = childData.jyusho;
            document.getElementById("pv_Mail").textContent = childData.email;
            document.getElementById("pv_renrakusaki_Furigana").textContent = childData.renrakusaki_furigana;
            document.getElementById("pv_renrakusaki_Number").textContent = "〒" + childData.renrakusaki_yubinbango.substr(0, 3) + "-" + childData.renrakusaki_yubinbango.substr(3, 4);
            document.getElementById("pv_renrakusaki").textContent = childData.renrakusaki;
            // document.getElementById("pv_denwa_Number").textContent = childData.denwabango.substr(0, 4) + "-" + childData.denwabango.substr(4, 2) + "-" + childData.denwabango.substr(6, 4);
            document.getElementById("pv_denwa_Number").textContent = denwabangoary[0] + "-" + denwabangoary[1] + "-" +denwabangoary[2];
            // document.getElementById("pv_keitai_Number").textContent = childData.keitaibango.substr(0, 3) + "-" + childData.keitaibango.substr(4, 4) + "-" + childData.keitaibango.substr(7, 4);
            document.getElementById("pv_keitai_Number").textContent = keitaibangoary[0] + "-" + keitaibangoary[1] + "-" +keitaibangoary[2];
            // document.getElementById("pv_subdenwa_Number").textContent = childData.renrakusaki_denwabango.substr(0, 4) + "-" + childData.renrakusaki_denwabango.substr(4, 2) + "-" + childData.renrakusaki_denwabango.substr(6, 4);
            document.getElementById("pv_subdenwa_Number").textContent = renrakusaki_denwabangoary[0] + "-" + renrakusaki_denwabangoary[1] + "-" +renrakusaki_denwabangoary[2];
            document.getElementById("pv_history_Nen1").textContent = array1[0];
            document.getElementById("pv_history_Nen2").textContent = array2[0];
            document.getElementById("pv_history_Nen3").textContent = array3[0];
            document.getElementById("pv_history_Nen4").textContent = array4[0];
            document.getElementById("pv_history_Nen5").textContent = array5[0];
            document.getElementById("pv_history_Nen6").textContent = array6[0];
            document.getElementById("pv_history_Nen7").textContent = array7[0];
            document.getElementById("pv_history_Nen8").textContent = array8[0];
            document.getElementById("pv_history_Nen9").textContent = array9[0];
            document.getElementById("pv_history_Nen10").textContent = array10[0];
            document.getElementById("pv_history_Nen11").textContent = array11[0];
            document.getElementById("pv_history_Nen12").textContent = array12[0];
            document.getElementById("pv_history_Nen13").textContent = array13[0];
            document.getElementById("pv_history_Nen14").textContent = array14[0];
            document.getElementById("pv_history_Tuki1").textContent = array1[1];
            document.getElementById("pv_history_Tuki2").textContent = array2[1];
            document.getElementById("pv_history_Tuki3").textContent = array3[1];
            document.getElementById("pv_history_Tuki4").textContent = array4[1];
            document.getElementById("pv_history_Tuki5").textContent = array5[1];
            document.getElementById("pv_history_Tuki6").textContent = array6[1];
            document.getElementById("pv_history_Tuki7").textContent = array7[1];
            document.getElementById("pv_history_Tuki8").textContent = array8[1];
            document.getElementById("pv_history_Tuki9").textContent = array9[1];
            document.getElementById("pv_history_Tuki10").textContent = array10[1];
            document.getElementById("pv_history_Tuki11").textContent = array11[1];
            document.getElementById("pv_history_Tuki12").textContent = array12[1];
            document.getElementById("pv_history_Tuki13").textContent = array13[1];
            document.getElementById("pv_history_Tuki14").textContent = array14[1];
            document.getElementById("pv_history_Reki1").textContent = array1[2];
            document.getElementById("pv_history_Reki2").textContent = array2[2];
            document.getElementById("pv_history_Reki3").textContent = array3[2];
            document.getElementById("pv_history_Reki4").textContent = array4[2];
            document.getElementById("pv_history_Reki5").textContent = array5[2];
            document.getElementById("pv_history_Reki6").textContent = array6[2];
            document.getElementById("pv_history_Reki7").textContent = array7[2];
            document.getElementById("pv_history_Reki8").textContent = array8[2];
            document.getElementById("pv_history_Reki9").textContent = array9[2];
            document.getElementById("pv_history_Reki10").textContent = array10[2];
            document.getElementById("pv_history_Reki11").textContent = array11[2];
            document.getElementById("pv_history_Reki12").textContent = array12[2];
            document.getElementById("pv_history_Reki13").textContent = array13[2];
            document.getElementById("pv_history_Reki14").textContent = array14[2];
            document.getElementById("pv_kamoku").textContent = "　" + childData.kamoku1 + "　" + childData.kamoku2;
            document.getElementById("pv_shumi_1").textContent = childData.shumi.substr(0, 28);
            document.getElementById("pv_shumi_2").textContent = childData.shumi.substr(28, 28);
            document.getElementById("pv_shumi_0").textContent = childData.shumi.substr(56, 28);
            document.getElementById("pv_tokutyou1").textContent = childData.tokutyo.substr(0, 28);
            document.getElementById("pv_tokutyou2").textContent = childData.tokutyo.substr(28, 28);
            document.getElementById("pv_tokutyou3").textContent = childData.tokutyo.substr(56, 28);
            document.getElementById("pv_tokutyou4").textContent = childData.tokutyo.substr(84, 28);
            document.getElementById("pv_tokutyou0").textContent = childData.tokutyo.substr(112, 28);
            document.getElementById("pv_gakuseiseikatu1").textContent = childData.gakuseiseikatu.substr(0, 28);
            document.getElementById("pv_gakuseiseikatu2").textContent = childData.gakuseiseikatu.substr(28, 28);
            document.getElementById("pv_gakuseiseikatu3").textContent = childData.gakuseiseikatu.substr(56, 28);
            document.getElementById("pv_gakuseiseikatu4").textContent = childData.gakuseiseikatu.substr(84, 28);
            document.getElementById("pv_gakuseiseikatu0").textContent = childData.gakuseiseikatu.substr(112, 28);
            document.getElementById("pv_shiboudouki1").textContent = childData.shiboudouki.substr(0, 28);
            document.getElementById("pv_shiboudouki2").textContent = childData.shiboudouki.substr(28, 28);
            document.getElementById("pv_shiboudouki3").textContent = childData.shiboudouki.substr(56, 28);
            document.getElementById("pv_shiboudouki4").textContent = childData.shiboudouki.substr(84, 28);
            document.getElementById("pv_shiboudouki0").textContent = childData.shiboudouki.substr(112, 28);
            document.getElementById("pv_sikaku_Nen1").textContent = shikaku1[0];
            document.getElementById("pv_sikaku_Nen2").textContent = shikaku2[0];
            document.getElementById("pv_sikaku_Nen3").textContent = shikaku3[0];
            document.getElementById("pv_sikaku_Nen4").textContent = shikaku4[0];
            document.getElementById("pv_sikaku_Nen5").textContent = shikaku5[0];
            document.getElementById("pv_sikaku_Nen6").textContent = shikaku6[0];
            document.getElementById("pv_sikaku_Tuki1").textContent = shikaku1[1];
            document.getElementById("pv_sikaku_Tuki2").textContent = shikaku2[1];
            document.getElementById("pv_sikaku_Tuki3").textContent = shikaku3[1];
            document.getElementById("pv_sikaku_Tuki4").textContent = shikaku4[1];
            document.getElementById("pv_sikaku_Tuki5").textContent = shikaku5[1];
            document.getElementById("pv_sikaku_Tuki6").textContent = shikaku6[1];
            document.getElementById("pv_sikaku_Name1").textContent = shikaku1[2];
            document.getElementById("pv_sikaku_Name2").textContent = shikaku2[2];
            document.getElementById("pv_sikaku_Name3").textContent = shikaku3[2];
            document.getElementById("pv_sikaku_Name4").textContent = shikaku4[2];
            document.getElementById("pv_sikaku_Name5").textContent = shikaku5[2];
            document.getElementById("pv_sikaku_Name6").textContent = shikaku6[2];
            document.getElementById("pv_biko").textContent = "　" + childData.biko;
            let hizukeary = childData.hizuke.split('/');
            document.getElementById("pv_hizuke").textContent = hizukeary[0] + "年 " + hizukeary[1] + "月 " + hizukeary[2] + "日 " + "現在";
            if (childData.renrakusaki == "同上"){
                document.getElementById("pv_renrakusaki_Furigana").textContent = "";
                document.getElementById("pv_renrakusaki_Number").textContent = "〒";
                document.getElementById("pv_renrakusaki").textContent = childData.renrakusaki;
                document.getElementById("pv_renrakusaki").style.display = "flex";
                document.getElementById("pv_renrakusaki").style.justifyContent = "center";
                document.getElementById("pv_renrakusaki").style.alignItems = "center";
                document.getElementById("pv_subdenwa_Number").textContent = childData.renrakusaki_denwabango;
            }
        });
    }