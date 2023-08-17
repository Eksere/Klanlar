/*
    Yazar(Author)     : Konsantre
    Forum             : http://forum.klanlar.org
    İletişim(Contact) : konsantre.op@gmail.com

    TribalWars Turkey - JavaScript Moderator
*/

// Eğer premium hesap yoksa uyarı ver ve betiği sonlandır
if (premium == false) {
    alert('Bu betiği çalıştırmak için premium hesabınız olması gerekir.');
    end();
}

// Eğer ekran oyuncu bilgi sayfası değilse uyarı ver ve betiği sonlandır
if (game_data.screen != 'info_player') {
    alert('KNS Sahte Senaryo Hazırlayıcı\n\nBu betik sadece oyuncu profili sayfasında çalışır.');
    end();
}

// Eğer zaten bir hazırlık yapılmışsa seçenekleri sıfırla ve mesajı görüntüle
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

// Köy koordinatlarını al
var Koor = $('#villages_list').html().match(/\d+\|\d+/g);

var Sayi;
var s1 = Koor.join('a');
var s2 = s1.match(/\|/g);
var s3 = s2.join('');
var Sayi = s3.length;

var Oyuncu = $('h2').html().trim();

// Eğer oyuncu adı çok uzunsa, adı kendi adı olarak kullan
if (Oyuncu.length > 32) {
    var Oyuncu = game_data.player.name;
}

var Duzenlemesaj = document.cookie;
Duzenlemesaj = "Oyuncu profilinden alınan \'" + Sayi + "\' köy aşağıdaki gibidir;\n\n" + Koor.join(' ') + " ";

// Özel mesajlar dizisi
var Mesajlar = [];

function mpush() {
    Mesajlar.push("Ne diyorsun bu sefer inanacaklar mı saldırıya?");
    Mesajlar.push("Klanlar forumuna geliyormusun? Seni sanki hiç görmedim...");
    Mesajlar.push("Buralar eskiden hep dutluktu");
    // Diğer mesajlar da buraya eklenebilir
}

// Mesaj dizisini doldur
mpush();

// Betiğin ana arayüzünü oluştur
$('#inner-border').prepend("<div id='anadiv'style='width:820px;height:320px;position:relative;top:5px;bottom:20px;left:10px;background-color:transparent;border-radius:20px;border:4px solid #765942'><div style='padding:5px 10px 5px 10px;'><table width='800px'height='310px'><tr><th width='30%'height='5%'><div style='text-align:center;'><b id='isim'style='color:purple'><small>KNS Sahte Senaryo Hazırlayıcı<sup>v4.1</sup></small></b></div></th><td rowspan='2'width='70%'height='100%'><textarea rows=5 id='ustta'style='margin-left:5px;margin-right:5px;width:98%;resize:none;border-radius:10px;background-color:transparent'onfocus=''disabled>Koordinatları düzenle seçeneğini aktif ederek, istemediğin koordinatları\nçıkarabilir ya da yeni koordinatlar ekleyebilirsin.\nYeni koordinatlar eklemek için bir köyün 'Köyler Koordinatlar Puan'\nkısmını kopyalayıp buraya yapıştırabilirsin.</textarea><center><font id='ortamesaj'style='font-weight:bold;color:red'></font></center><textarea rows=13 id='altta'style='margin-left:5px;margin-right:5px;width:98%;resize:none;border-radius:10px;background-color:transparent'onfocus='this.select();'></textarea></td></tr><tr><td width='30%'height='95%'style='padding-right:10px;font-weight:bold;font-size:15;'><div id='ayarlama'></div></td></tr></table></div></div>");
var ap = document.getElementById('ayarlama');

// Seçenekleri UI'ya ekle
ap.innerHTML += "<br/><br/><select size='3'id='birim'style='width:100%;text-align:center;font-weight:bold;color:purple;cursor:pointer;background-color:transparent;overflow:hidden;border:2px solid dimgray;border-radius:10px;' onchange='secenek();'><option value='b0'>Sadece Koordinat</option><option value='b1'selected>Şahmerdan / Mancınık</option><option value='b2'>Mızrakçı / Baltacı</option></select><br/><br/>";
ap.innerHTML += "<input id='duzenle'type='checkbox'onclick='duzenle();'/><font id='duzenlef'color='dimgray'><label for='duzenle'> Koordinatları düzenle</label></font><br/>";
ap.innerHTML += "<input id='karisik'type='checkbox'onclick='karisik();'/><font id='karisikf'color='dimgray'><label for='karisik'> Koordinatları karıştır</label></font><br/>";
ap.innerHTML += "<input id='dortlu'type='checkbox'onclick='dortlu();'/><font id='dortluf'color='dimgray'><label for='dortlu'> Koordinatları 4\'er kere ekle</label></font><br/>";
ap.innerHTML += "<input id='casus'type='checkbox'onclick='casus();'/><font id='casusf'color='dimgray'><label for='casus'> Saldırılara 1\'er casus ekle</label></font><br/>";
ap.innerHTML += "<input id='uyar'type='checkbox'onclick='uyar();'/><font id='uyarf'color='dimgray'><label for='uyar'> Hedefler bittiğinde uyarı ver</label></font><br/>";
ap.innerHTML += "<br/><br/><button id='hazir' style='cursor:pointer;color:purple;margin-left:60px;font-weight:bold;background-color:#FFccAA;height:30px;border:2px solid #765942;border-radius:10px;'type='button'onclick='Konsantre();'>Betiği Oluştur</button>";
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

// Mesajı güncelle
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

// Seçeneği güncelle
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

// Koordinatları düzenle seçeneğini işle
function duzenle() {
    if (dduzenle.checked == true) {
        dduzenlef.color = 'green';
        dortamesaj.innerHTML = 'Koordinatları istediğin gibi düzenle, çekinme.';
        dustta.disabled = false;
        dustta.value = Duzenlemesaj;
        daltta.value = "";
        dustta.rows = "8";
        daltta.rows = "10";
    }
    if (dduzenle.checked == false) {
        Duzenlemesaj = dustta.value;
        dduzenlef.color = 'dimgray';
        dortamesaj.innerHTML = 'Başka eklemeye ne gerek var, ' + Oyuncu + ' yeterli...';
        dustta.rows = "5";
        daltta.rows = "13";
        dustta.value = "Koordinatları düzenle seçeneğini aktif ederek, istemediğin koordinatları\nçıkarabilir veya yeni koordinatlar ekleyebilirsin.\nYeni koordinatlar eklemek için bir köyün 'Köyler Koordinatlar Puan'\nkısmını kopyalayıp buraya yapıştırabilirsin.";
        daltta.value = "";
        dustta.disabled = true;
    }
}

// Koordinatları karıştır seçeneğini işle
function karisik() {
    if (dkarisik.checked == true) {
        dkarisikf.color = 'green';
        dortamesaj.innerHTML = 'Koordinatlar karışık olarak listelenecek.';
        ddortlu.checked = false;
        ddortlu.disabled = true;
        ddortluf.color = 'gray';
        daltta.value = "";
    }
    if (dkarisik.checked == false) {
        dkarisikf.color = 'dimgray';
        dortamesaj.innerHTML = 'Sırayla saldır, karıştırmaya ne gerek var...';
        ddortlu.disabled = false;
        ddortluf.color = 'dimgray';
        daltta.value = "";
    }
}

// Koordinatları 4 kere ekle seçeneğini işle
function dortlu() {
    if (ddortlu.checked == true) {
        ddortluf.color = 'green';
        dortamesaj.innerHTML = 'Koordinatları ard arda 4 kere saldır.';
        dkarisik.checked = false;
        dkarisik.disabled = true;
        dkarisikf.color = 'gray';
        daltta.value = "";
    }
    if (ddortlu.checked == false) {
        ddortluf.color = 'dimgray';
        dortamesaj.innerHTML = 'Her seferde 4 saldırı yapmakla kim uğraşacak...';
        dkarisik.disabled = false;
        dkarisikf.color = 'dimgray';
        daltta.value = "";
    }
}

// Saldırılara casus ekle seçeneğini işle
function casus() {
    if (dcasus.checked == true) {
        dcasusf.color = 'green';
        dortamesaj.innerHTML = 'Her saldırıya 1\'er casus eklenecek.';
        daltta.value = "";
    }
    if (dcasus.checked == false) {
        dcasusf.color = 'dimgray';
        dortamesaj.innerHTML = 'Saldırılara casus eklemeye gerek yok, yeterli...';
        daltta.value = "";
    }
}

// Hedefler bittiğinde uyarı ver seçeneğini işle
function uyar() {
    if (duyar.checked == true) {
        duyarf.color = 'green';
        dortamesaj.innerHTML = 'Hedefler bittiğinde uyarı verilecek.';
        daltta.value = "";
    }
    if (duyar.checked == false) {
        duyarf.color = 'dimgray';
        dortamesaj.innerHTML = 'Hedefler bittiğinde uyarıya gerek yok, yeterli...';
        daltta.value = "";
    }
}

// Betiği oluştur ve göster
function Konsantre() {
    if (dbirim.value == 'b0') {
        daltta.value = Duzenlemesaj;
        if (ddortlu.checked == true) {
            var i = 0;
            while (i < 3) {
                i++;
                daltta.value += "\n" + Koor.join(' ') + " ";
            }
        }
        if (ddortlu.checked == false) {
            daltta.value += "\n" + Koor.join(' ') + " ";
        }
    }

    if (dbirim.value == 'b1') {
        var Saldırı1 = 'spear';
        var Saldırı2 = 'axe';
        var Saldırı1s = 'Mızrakçı';
        var Saldırı2s = 'Baltacı';
        if (document.getElementById('casus').checked == true) {
            var Saldırı1 = 'spy';
            var Saldırı2 = 'spy';
            var Saldırı1s = 'Casus';
            var Saldırı2s = 'Casus';
        }
        daltta.value = "";
        var i = 0;
        if (ddortlu.checked == true) {
            while (i < 4) {
                i++;
                daltta.value += "\n" + Saldırı1 + " " + Koor.join(' ') + " 1 1 0 0";
                daltta.value += "\n" + Saldırı2 + " " + Koor.join(' ') + " 1 1 0 0";
            }
        }
        if (ddortlu.checked == false) {
            daltta.value += "\n" + Saldırı1 + " " + Koor.join(' ') + " 1 1 0 0";
            daltta.value += "\n" + Saldırı2 + " " + Koor.join(' ') + " 1 1 0 0";
        }
    }

    if (dbirim.value == 'b2') {
        var Saldırı1 = 'spear';
        var Saldırı2 = 'sword';
        var Saldırı1s = 'Mızrakçı';
        var Saldırı2s = 'Kılıççı';
        if (document.getElementById('casus').checked == true) {
            var Saldırı1 = 'spy';
            var Saldırı2 = 'spy';
            var Saldırı1s = 'Casus';
            var Saldırı2s = 'Casus';
        }
        daltta.value = "";
        var i = 0;
        if (ddortlu.checked == true) {
            while (i < 4) {
                i++;
                daltta.value += "\n" + Saldırı1 + " " + Koor.join(' ') + " 1 1 0 0";
                daltta.value += "\n" + Saldırı2 + " " + Koor.join(' ') + " 1 1 0 0";
            }
        }
        if (ddortlu.checked == false) {
            daltta.value += "\n" + Saldırı1 + " " + Koor.join(' ') + " 1 1 0 0";
            daltta.value += "\n" + Saldırı2 + " " + Koor.join(' ') + " 1 1 0 0";
        }
    }
    if (duyar.checked == true) {
        daltta.value += "\n" + "Amiral Mesaj: Hedefler bitti, seni bekliyorlar " + Oyuncu;
    }
    if (duyar.checked == false) {
        daltta.value += "\n" + "Hedefler bitince haber etme gerek yok, bilirim ben...";
    }
    mesaj();
    if (dduzenle.checked == true) {
        Duzenlemesaj = dustta.value;
    }
    if (dduzenle.checked == false) {
        Duzenlemesaj = "Koordinatları düzenle seçeneğini aktif ederek, istemediğin koordinatları\nçıkarabilir ya da yeni koordinatlar ekleyebilirsin.\nYeni koordinatlar eklemek için bir köyün 'Köyler Koordinatlar Puan'\nkısmını kopyalayıp buraya yapıştırabilirsin.";
    }
    if (dkarisik.checked == true) {
        var lines = daltta.value.split('\n');
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (line.trim() !== '') {
                var coord = line.split(' ')[1];
                var newCoord = coord + ' ' + (parseInt(coord.split('|')[1]) + 1);
                daltta.value += '\n' + line.replace(coord, newCoord);
            }
        }
    }
}
