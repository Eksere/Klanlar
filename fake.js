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

// ... (diğer değişkenler ve kod parçaları)

// Karışık seçeneği işlevi
function karisik() {
    if (dkarisik.checked == true) {
        dkarisikf.color = 'green';
        dortamesaj.innerHTML = 'Köyleri karışık bir sırayla listeler';
        var temp = [];
        for (var i = Koor.length - 1; i >= 0; i--) {
            temp.push(Koor[i]);
        }
        Koor = temp;
    } else {
        dkarisikf.color = 'dimgray';
        dortamesaj.innerHTML = 'Başka eklemeye ne gerek var, ' + Oyuncu + ' yeterli...';
    }
}

// Dört kere ekle seçeneği işlevi
function dortlu() {
    if (ddortlu.checked == true) {
        ddortluf.color = 'green';
        dortamesaj.innerHTML = 'Her köyü 4 kez ekler';
        var temp = [];
        for (var i = 0; i < Koor.length; i++) {
            temp.push(Koor[i]);
            temp.push(Koor[i]);
            temp.push(Koor[i]);
            temp.push(Koor[i]);
        }
        Koor = temp;
    } else {
        ddortluf.color = 'dimgray';
        dortamesaj.innerHTML = 'Başka eklemeye ne gerek var, ' + Oyuncu + ' yeterli...';
    }
}

// Casus seçeneği işlevi
function casus() {
    if (dcasus.checked == true) {
        dcasusf.color = 'green';
        dortamesaj.innerHTML = 'Saldırılara 1\'er casus ekler';
        Mızrakçı = 0;
        Kılıç_Ustası = 0;
        Baltacı = 0;
        Okçu = 0;
        Casus = 1;
        Hafif_Atlı = 0;
        Atlı_Okçu = 0;
        Ağır_Atlı = 0;
        Şahmerdan = 0;
        Mancınık = 0;
        Şövalye = 0;
        Misyoner = 0;
    } else {
        dcasusf.color = 'dimgray';
        dortamesaj.innerHTML = 'Başka eklemeye ne gerek var, ' + Oyuncu + ' yeterli...';
        Casus = 0;
    }
}

// Uyarı seçeneği işlevi
function uyar() {
    if (duyar.checked == true) {
        duyarf.color = 'green';
        dortamesaj.innerHTML = 'Hedefler bittiğinde uyarı verir';
    } else {
        duyarf.color = 'dimgray';
        dortamesaj.innerHTML = 'Başka eklemeye ne gerek var, ' + Oyuncu + ' yeterli...';
    }
}

// ... (diğer işlevler)

// Betiği hazırla
function Konsantre() {
    if (dduzenle.checked == false) {
        var Koor = $('#villages_list').html().match(/\d+\|\d+/g);
        // Diğer değişkenleri burada güncelleyin
        // ...

        // İlk kodunuzdaki kısmı buraya ekleyin
        var silk = "javascript:Koordinatlar='" + Koordinat.join(' ') + "';$.getScript('https://media.innogamescdn.com/com_DS_TR/Scripts/5678.js";

        // ... (kalan kısım)

        // İlk kodunuzdaki mesajı güncelleyin
        dortamesaj.innerHTML = 'Betik <font color="black">\'' + Koysayisi + '\'</font> köy için hazırlanmıştır';

        // ... (kalan kısım)
    }

    // Daha fazla kod ekleyebilirsiniz
    // ...
}
