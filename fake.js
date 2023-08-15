/* 
    Yazar(Author)     : Konsantre
    Forum             : http://forum.klanlar.org
    Iletisim(Contact) : konsantre.op@gmail.com

    TribalWars Turkey - JavaScript Moderator
*/

if (premium == false) {
    alert('Bu scripti çalıştırmak için premium hesabınız olması gerekir.');
    end();
}
if (game_data.screen != 'info_player') {
    alert('KNS Fake Script Hazırlayıcı\n\nBu script sadece oyuncu profillerinde çalışır.');
    end();
}

if ($('#anadiv').length > 0) {
    if (document.getElementById('duzenle').checked == true) {
        document.getElementById('duzenle').checked = false;
        duzenle();
    }
    if (document.getElementById('karisik').checked == true) {
        document.getElementById('karisik').checked = false;
        karisik();
    }
    if (document.getElementById('dortlu').checked == true) {
        document.getElementById('dortlu').checked = false;
        dortlu();
    }
    if (document.getElementById('casus').checked == true) {
        document.getElementById('casus').checked = false;
        casus();
    }
    if (document.getElementById('uyar').checked == true) {
        document.getElementById('uyar').checked = false;
        uyar();
    }
    Duzenlemesaj = "Oyuncu profilinden alınan \"" + Sayi + "\" köy aşağıdaki gibidir;\n\n" + Koor.join(' ') + " ";
    mesaj();
    end();
}

var Koor = $('#villages_list').html().match(/\d+\|\d+/g);
var Sayi;
var s1 = Koor.join('a');
var s2 = s1.match(/\|/g);
var s3 = s2.join('');
var Sayi = s3.length;

var Oyuncu = $('h2[class^="player_name"]').text().trim();
if (Oyuncu.length > 32) {
    Oyuncu = game_data.player.name;
}

var Duzenlemesaj = document.cookie;
Duzenlemesaj = "Oyuncu profilinden alınan \'" + Sayi + "\' köy aşağıdaki gibidir;\n\n" + Koor.join(' ') + " ";
var Mesajlar = [];

function mpush() {
    Mesajlar.push("Ne diyorsun bu sefer inanacaklar mı saldırıya?");
    Mesajlar.push("Klanlar forumuna geliyormusun? Seni sanki hiç görmedim...");
    Mesajlar.push("Buralar eskiden hep dutluktu");
    Mesajlar.push("Script hazırlıyorsunda bakalım kaç fake atacan");
    Mesajlar.push("KNS Operasyon Planlayıcısı scriptini denedin mi?");
    Mesajlar.push("Ne vereyim abime?");
    Mesajlar.push("Script için önerilerini forumdan konsantre'ye göndrebilirsin");
    Mesajlar.push("İyi düşündün mü? Sonra zararlı çıkma!");
    Mesajlar.push("Naber <font color='#603000'>" + game_data.player.name + "</font> nasılsın?");
    Mesajlar.push("Obaa rakibinin <font color='black'>" + Sayi + "</font> köyü var dikkat et!");
    Mesajlar.push("<font color='#603000'>" + Oyuncu + "</font> azılı bir düşmanın mı?");
    Mesajlar.push("<font color='#603000'>" + game_data.player.name + "</font> arada bir foruma uğra");
    Mesajlar.push("Ne yaptı bu <font color='#603000'>" + Oyuncu + "</font> sana?")
}
mpush();

$('#inner-border').prepend("<div id='anadiv'style='width:820px;height:320px;position:relative;top:5px;bottom:20px;left:10px;background-color:transparent;border-radius:20px;border:4px solid #765942'><div style='padding:5px 10px 5px 10px;'><table width='800px'height='310px'><tr><th width='30%'height='5%'><div style='text-align:center;'><b id='isim'style='color:purple'><small>KNS Fake Script Hazırlayıcı<sup>v4.1</sup></small></b></div></th><td rowspan='2'width='70%'height='100%'><textarea rows=5 id='ustta'style='margin-left:5px;margin-right:5px;width:98%;resize:none;border-radius:10px;background-color:transparent'onfocus=''disabled>Koordinatları düzenle seçeneğini aktif ederek, istemediğin koordintları\nçıkarabilir yada yenilerini ekleyebilirsin.\nYenileri eklemek için herhangi bir profilden \'Köyler Koordinatlar Puan\'\nkısmından ya bir kısmını yada tamamını kopyala ve buraya yapıştır.</textarea><center><font id='ortamesaj'style='font-weight:bold;color:red'></font></center><textarea rows=13 id='altta'style='margin-left:5px;margin-right:5px;width:98%;resize:none;border-radius:10px;background-color:transparent'onfocus='this.select();'></textarea></td></tr><tr><td width='30%'height='95%'style='padding-right:10px;font-weight:bold;font-size:15;'><div id='ayarlama'></div></td></tr></table></div></div>");
var ap = document.getElementById('ayarlama');
ap.innerHTML += "<br/><br/><select size='3'id='birim'style='width:100%;text-align:center;font-weight:bold;color:purple;cursor:pointer;background-color:transparent;overflow:hidden;border:2px solid dimgray;border-radius:10px;' onchange='secenek();'><option value='b0'>Sadece Koordinat</option><option value='b1'selected>Şahmerdan / Mancınık</option><option value='b2'>Mızrakçı / Baltacı</option></select><br/><br/>";
ap.innerHTML += "<input id='duzenle'type='checkbox'onclick='duzenle();'/><font id='duzenlef'color='dimgray'><label for='duzenle'> Koordinatları düzenle</label></font><br/>";
ap.innerHTML += "<input id='karisik'type='checkbox'onclick='karisik();'/><font id='karisikf'color='dimgray'><label for='karisik'> Koordinatları karıştır</label></font><br/>";
ap.innerHTML += "<input id='dortlu'type='checkbox'onclick='dortlu();'/><font id='dortluf'color='dimgray'><label for='dortlu'> Koordinatları 4\'er kere ekle</label></font><br/>";
ap.innerHTML += "<input id='casus'type='checkbox'onclick='casus();'/><font id='casusf'color='dimgray'><label for='casus'> Saldırılara 1\'er casus ekle</label></font><br/>";
ap.innerHTML += "<input id='uyar'type='checkbox'onclick='uyar();'/><font id='uyarf'color='dimgray'><label for='uyar'> Hedefler bittiğinde uyarı ver</label></font><br/>";
ap.innerHTML += "<br/><br/><button id='hazir' style='cursor:pointer;color:purple;margin-left:60px;font-weight:bold;background-color:#FFccAA;height:30px;border:2px solid #765942;border-radius:10px;'type='button'onclick='Konsantre();'>Scripti Hazırla</button>";
ap.innerHTML += "<br/><br/><br/><div align='center'><font size='1' face='Comic Sans MS' color='purple'><a href='https://forum.klanlar.org' target='_blank'>Klanlar Forum</a>\'una uğradın mı?</font></div>";
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
        var mi = Math.floor((Math.random() * Mesajlar.length));
        dortamesaj.innerHTML = Mesajlar[mi];
        Mesajlar.splice(mi, 1);
    }
    if (Mesajlar.length == 1) {
        var mi = Math.floor((Math.random() * Mesajlar.length));
        dortamesaj.innerHTML = Mesajlar[mi];
        Mesajlar.splice(mi, 1);
        mpush();
    }
}
mesaj();

function secenek() {
    if (dbirim.value == 'b0') {
        dcasus.checked = false;
        dcasus.disabled = true;
        dcasusf.color = 'gray';
        duyar.checked = false;
        duyar.disabled = true;
        duyarf.color = 'gray';
        dortamesaj.innerHTML = 'Köylerin sadece koordinatlarını listeler';
    }
    if (dbirim.value == 'b1') {
        dcasus.disabled = false;
        dcasusf.color = 'dimgray';
        duyar.disabled = false;
        duyarf.color = 'dimgray';
        dortamesaj.innerHTML = 'Köyünde şahmerdan varsa şahmerdan, yoksa mancınık gönderir';
    }
    if (dbirim.value == 'b2') {
        dcasus.disabled = false;
        dcasusf.color = 'dimgray';
        duyar.disabled = false;
        duyarf.color = 'dimgray';
        dortamesaj.innerHTML = 'Köyünde mızrakçı varsa mızrakçı, yoksa baltacı gönderir';
    }
    daltta.value = "";
}

function duzenle() {
    if (dduzenle.checked == true) {
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
    if (dkarisik.checked == true) {
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
    if (ddortlu.checked == true) {
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
    if (dcasus.checked == true) {
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
    if (duyar.checked == true) {
        duyarf.color = 'green';
        dortamesaj.innerHTML = 'Hedef kalmayınca uyarı verecek.';
        daltta.value = "";
    } else {
        duyarf.color = 'dimgray';
        dortamesaj.innerHTML = 'Herşeyi önceden bilemem ama bu kadarı yeterli...';
        daltta.value = "";
    }
}

function Konsantre() {
    secenek();
    if (dduzenle.checked == true) {
        Duzenlemesaj = dustta.value;
        Koor = Duzenlemesaj.match(/\d+\|\d+/g);
    }
    if (ddortlu.checked == true) {
        var s1 = Koor.join('a');
        var s2 = s1.match(/\|/g);
        var s3 = s2.join('');
        var Sayi = s3.length;
        var a = Koor.length;
        var b = Math.ceil(a / 4);
        for (var i = 0; i < 4; i++) {
            var sonuc = "";
            var n = Koor.slice(i * b, (i + 1) * b);
            if (n != "") {
                sonuc = n.join(' ') + " ";
                daltta.value += "\n\n\n" + sonuc + '         ' + Sayi + ' Köy';
            }
        }
    } else {
        var sonuc = "";
        sonuc = Koor.join(' ') + " ";
        daltta.value += "\n\n\n" + sonuc + '         ' + Sayi + ' Köy';
    }
    if (dkarisik.checked == true) {
        Koor.sort(function() {
            return 0.5 - Math.random()
        });
        var sonuc = "";
        sonuc = Koor.join(' ') + " ";
        daltta.value = "\n\n\n" + sonuc + '         ' + Sayi + ' Köy';
    }
    if (dcasus.checked == true) {
        daltta.value = daltta.value.replace(/\n\n\n/g, "\n\n🕵️‍♂️🕵️‍♂️\n\n");
    }
    if (duyar.checked == true) {
        daltta.value += "\n\n\nHedef kalmayınca uyarı ver!";
    }
    mesaj();
    alert('Script hazırlandı. Hemen gönder butonuna bas ve köylere saldırı planını yap.');
    end();
}
