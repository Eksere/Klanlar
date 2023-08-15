onclick='karisik();'/><font id='karisikf'color='dimgray'><label for='karisik'> Koordinatları karıştır</label></font><br/>";
ap.innerHTML += "<input id='dortlu'type='checkbox'onclick='dortlu();'/><font id='dortluf'color='dimgray'><label for='dortlu'> Koordinatları 4\'er kere ekle</label></font><br/>";
ap.innerHTML += "<input id='casus'type='checkbox'onclick='casus();'/><font id='casusf'color='dimgray'><label for='casus'> Saldırılara 1\'er casus ekle</label></font><br/>";
ap.innerHTML += "<input id='uyar'type='checkbox'onclick='uyar();'/><font id='uyarf'color='dimgray'><label for='uyar'> Hedefler bittiğinde uyarı ver</label></font><br/>";
ap.innerHTML += "<br/><br/><button id='hazir' style='cursor:pointer;color:purple;margin-left:60px;font-weight:bold;background-color:#FFccAA;height:30px;border:2px solid #765942;border-radius:10px;'type='button'onclick='Konsantre();'>Scripti Hazırla</button>";
ap.innerHTML += "<br/><br/><br/><div align='center'><font size='1' face='Comic Sans MS' color='purple'><a href='https://forum.klanlar.org' target='_blank'>Klanlar Forum</a>'una uğradın mı?</font></div>";
var dustta = document.getElementById('ustta');
var daltta = document.getElementById('altta');
var dortamesaj = document.getElementById('ortamesaj');
var dbirim = document.getElementById('birim');
var dduzenle = document.getElementById('duzenle');
var dduzenlef = document.getElementById('duzenlef');
var ddortlu = document.getElementById('dortlu');
var ddortluf = document.getElementById('dortluf');
var dkarisik = document.getElementById('karisik');
var dkarisikf = document.getElementById('karisikf');
var dcasus = document.getElementById('casus');
var dcasusf = document.getElementById('casusf');
var duyar = document.getElementById('uyar');
var duyarf = document.getElementById('uyarf');

function mesaj() {
    if (Mesajlar.length > 1) {
        var mi = Math.floor(Math.random() * Mesajlar.length);
        dortamesaj.innerHTML = Mesajlar[mi];
        Mesajlar.splice(mi, 1);
    }
    if (Mesajlar.length === 1) {
        var mi = Math.floor(Math.random() * Mesajlar.length);
        dortamesaj.innerHTML = Mesajlar[mi];
        Mesajlar.splice(mi, 1);
        mpush();
    }
}
mesaj();

function secenek() {
    if (dbirim.value === 'b0') {
        dcasus.checked = false;
        dcasus.disabled = true;
        dcasusf.color = 'gray';
        duyar.checked = false;
        duyar.disabled = true;
        duyarf.color = 'gray';
        dortamesaj.innerHTML = 'Köylerin sadece koordinatlarını listeler';
    }
    if (dbirim.value === 'b1') {
        dcasus.disabled = false;
        dcasusf.color = 'dimgray';
        duyar.disabled = false;
        duyarf.color = 'dimgray';
        dortamesaj.innerHTML = 'Köyünde şahmerdan varsa şahmerdan, yoksa mancınık gönderir';
    }
    if (dbirim.value === 'b2') {
        dcasus.disabled = false;
        dcasusf.color = 'dimgray';
        duyar.disabled = false;
        duyarf.color = 'dimgray';
        dortamesaj.innerHTML = 'Köyünde mızrakçı varsa mızrakçı, yoksa baltacı gönderir';
    }
    daltta.value = "";
}

function duzenle() {
    if (dduzenle.checked === true) {
        dduzenlef.color = 'green';
        dortamesaj.innerHTML = 'Koordinatları istediğin gibi düzenle, hiç çekinme.';
        dustta.disabled = false;
        dustta.value = Duzenlemesaj;
        daltta.value = "";
        dustta.rows = "8";
        daltta.rows = "10";
    } else {
        Duzenlemesaj = dustta.value;
        dduzenlef.color = 'dimgray';
        dortamesaj.innerHTML = 'Başka eklemeye ne gerek var, <font color="#603000">' + Oyuncu + '</font> yeterli...';
        dustta.rows = "5";
        daltta.rows = "13";
        dustta.value = "Koordinatları düzenle seçeneğini aktif ederek, istemediğin koordintları\nçıkarabilir yada yenilerini ekleyebilirsin.\nYenileri eklemek için herhangi bir profilden \'Köyler Koordinatlar Puan\'\nkısmından ya bir kısmını yada tamamını kopyala ve buraya yapıştır.";
        daltta.value = "";
        dustta.disabled = true;
    }
}

function karisik() {
    if (dkarisik.checked === true) {
        dkarisikf.color = 'green';
        dortamesaj.innerHTML = 'Koordinatlar karışık olarak listelenicek.';
        ddortlu.checked = false;
        ddortlu.disabled = true;
        ddortluf.color = 'gray';
        daltta.value = "";
    } else {
        dkarisikf.color = 'dimgray';
        dortamesaj.innerHTML = 'At işte sırayla karışık neyine yarayacak...';
        ddortlu.disabled = false;
        ddortluf.color = 'dimgray';
        daltta.value = "";
    }
}

function dortlu() {
    if (ddortlu.checked === true) {
        ddortluf.color = 'green';
        dortamesaj.innerHTML = 'Koordinatlara ard arda 4\'er kere saldıracaksın.';
        dkarisik.checked = false;
        dkarisik.disabled = true;
        dkarisikf.color = 'gray';
        daltta.value = "";
    } else {
        ddortluf.color = 'dimgray';
        dortamesaj.innerHTML = 'Kim uğraşacak 4\'er sefer saldırmakla...';
        dkarisik.disabled = false;
        dkarisikf.color = 'dimgray';
        daltta.value = "";
    }
}

function casus() {
    if (dcasus.checked === true) {
        dcasusf.color = 'green';
        dortamesaj.innerHTML = 'Her sefere 1\'er casus ekleyecek.';
        daltta.value = "";
    } else {
        dcasusf.color = 'dimgray';
        dortamesaj.innerHTML = 'Üzgünüm ama buna gerek yok...';
        daltta.value = "";
    }
}

function uyar() {
    if (duyar.checked === true) {
        duyarf.color = 'green';
        dortamesaj.innerHTML = 'Hedef kalmayınca uyarı verilecek.';
        daltta.value = "";
    } else {
        duyarf.color = 'dimgray';
        dortamesaj.innerHTML = 'Her şeyi önceden bilemem ama bu kadarı yeterli...';
        daltta.value = "";
    }
}

function Konsantre() {
    secenek();
    if (dduzenle.checked === true) {
        Duzenlemesaj = dustta.value;
        Koor = Duzenlemesaj.match(/\d+\|\d+/g);
    }
    if (ddortlu.checked === true) {
        var s1 = Koor.join('a');
        var s2 = s1.match(/\|/g);
        var s3 = s2.join('');
        var Sayi = s3.length;
        var a = Koor.length;
        var b = Math.ceil(a / 4);
        for (var i = 0; i < 4; i++) {
            var sonuc = "";
            var n = Koor.slice(i * b, (i + 1) * b);
            if (n !== "") {
                sonuc = n.join(' ') + " ";
                daltta.value += "\n\n\n" + sonuc + '         ' + Sayi + ' Köy';
            }
        }
    } else {
        var sonuc = "";
        sonuc = Koor.join(' ') + " ";
        daltta.value += "\n\n\n" + sonuc + '         ' + Sayi + ' Köy';
    }
    if (dkarisik.checked === true) {
        Koor.sort(function() {
            return 0.5 - Math.random();
        });
        var sonuc = "";
        sonuc = Koor.join(' ') + " ";
        daltta.value = "\n\n\n" + sonuc + '         ' + Sayi + ' Köy';
    }
    if (dcasus.checked === true) {
        daltta.value = daltta.value.replace(/\n\n\n/g, "\n\n🕵️‍♂️🕵️‍♂️\n\n");
    }
    if (duyar.checked === true) {
        daltta.value += "\n\n\nHedef kalmayınca uyarı ver!";
    }
    mesaj();
    alert('Script hazırlandı. Hemen gönder butonuna bas ve köylere saldırı planını yap.');
    end();
}
