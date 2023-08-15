// Güncellenmiş ve Düzeltmiş Kod

if (typeof premium === 'undefined' || !premium) {
    alert('Bu scripti çalıştırmak için premium hesabınız olması gerekir.');
    throw new Error('Premium hesap gereklidir.');
}

if (game_data.screen !== 'info_player') {
    alert('KNS Operasyon Planlayıcısı\n\nBu script sadece oyuncu profillerinde çalışır.');
    throw new Error('Oyuncu profili ekranında çalıştırılmalıdır.');
}

var Koor = $('#villages_list').text().match(/\d+\|\d+/g);
var Koor4 = [];
for (var i = 0; i < Koor.length; i++) {
    for (var j = 0; j < 4; j++) {
        Koor4.push(Koor[i]);
    }
}
var Oyuncu = $('h2').first().text().trim() || game_data.player.name;

var z1 = "<select id='gun' disabled><option value='x'>Gün</option>";
var z2 = "<select id='ay' disabled><option value='x'>Ay</option>";
var z3 = "<select id='st' disabled><option value='x'>Saat</option>";
var z4 = "<select id='dk' disabled><option value='x'>Dakika</option>";

for (var i = 1; i <= 31; i++) {
    z1 += "<option value='" + i + "'>" + (i < 10 ? "0" : "") + i + "</option>";
}

var aylar = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
for (var i = 0; i < aylar.length; i++) {
    z2 += "<option value='" + aylar[i] + "'>" + aylar[i] + "</option>";
}

for (var i = 0; i < 24; i++) {
    z3 += "<option value='" + i + "'>" + (i < 10 ? "0" : "") + i + "</option>";
}

for (var i = 0; i < 60; i += 5) {
    z4 += "<option value='" + i + "'>" + (i < 10 ? "0" : "") + i + "</option>";
}

z1 += "</select>";
z2 += "</select>";
z3 += "</select>";
z4 += "</select>";

var Gra = {
    Puan: "[img]http://tr.twstats.com/image.php?type=playergraph&amp;graph=points&amp;id=" + InfoPlayer.player_id + "&amp;s=" + game_data.world + "[/img]",
    Koy: "[img]http://tr.twstats.com/image.php?type=playergraph&amp;graph=villages&amp;id=" + InfoPlayer.player_id + "&amp;s=" + game_data.world + "[/img]",
    Oda: "[img]http://tr.twstats.com/image.php?type=playergraph&amp;graph=oda&amp;id=" + InfoPlayer.player_id + "&amp;s=" + game_data.world + "[/img]",
    Odd: "[img]http://tr.twstats.com/image.php?type=playergraph&amp;graph=odd&amp;id=" + InfoPlayer.player_id + "&amp;s=" + game_data.world + "[/img]"
};

var Script = {
    Sah: "[spoiler=Şahmerdan/Mancınık Scripti][code]javascript:Kont='" + Koor.join(" ") + "';$.getScript('https://eksere.github.io/klanlar/operasyonsah.js')[/code][/spoiler]",
    Sah4: "[spoiler=Şahmerdan/Mancınık Scripti (4\'lü)][code]javascript:Kont='" + Koor4.join(" ") + "';$.getScript('https://eksere.github.io/klanlar/operasyonsah.js')[/code][/spoiler]",
    Miz: "[spoiler=Mızrakçı/Baltacı Scripti][code]javascript:Kont='" + Koor.join(" ") + "';$.getScript('https://eksere.github.io/klanlar/balta.js')[/code][/spoiler]",
    Miz4: "[spoiler=Mızrakçı/Baltacı Scripti (4\'lü)][code]javascript:Kont='" + Koor4.join(" ") + "';$.getScript('https://eksere.github.io/klanlar/balta.js')[/code][/spoiler]"
};

var apDiv = document.createElement('div');
apDiv.id = 'div';
apDiv.style.width = '300px';
apDiv.style.height = 'auto';
apDiv.style.left = '60%';
apDiv.style.top = '30%';
apDiv.style.position = 'fixed';
apDiv.style.overflowY = 'hidden';
apDiv.style.backgroundColor = '#FFccAA';
apDiv.style.borderRadius = '20px';
apDiv.style.border = '3px solid brown';

var tableHTML = "<table width='100%'><tr><th width='90%'><center><b id='isim' style='color:purple'>KNS Operasyon Planlayıcısı<sup>v1.1</sup></b></center></th><th width='10%'><button id='kapa' style='color:white;font-weight:bold;background-color:red;border:2px solid red;border-radius:20px;cursor:pointer;' type='button'>X</button></th></tr></table>";

apDiv.innerHTML = tableHTML;
var asDiv = document.createElement('div');
asDiv.id = 'as';
asDiv.style.paddingLeft = '20px';
asDiv.style.paddingTop = '5px';
asDiv.style.paddingBottom = '10px';
asDiv.style.paddingRight = '0px';

apDiv.appendChild(asDiv);
document.getElementById('inner-border').appendChild(apDiv);

asDiv.innerHTML += "<input id='zaman' type='checkbox' onclick='zaman();'/> Operasyon zamanını ayarla<br/>";
asDiv.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;" + z1 + "&nbsp;" + z2 + "&nbsp;" + z3 + "&nbsp;" + z4 + "<br/>";
asDiv.innerHTML += "<input id='opmes' type='checkbox' onclick='opmesaj();'/> Operasyon anlatım mesajı ekle<br/>";
asDiv.innerHTML += "<textarea id='mes' style='width:85%;height:70px;margin-left:20px;background-color:transparent;resize:none;display:none;border-radius:10px'></textarea>";
asDiv.innerHTML += "<input id='koy' type='checkbox' onclick='koyler();'/> Köy koordinatlarını ekle<br/>";
asDiv.innerHTML += "<input id='alin' type='checkbox' style='margin-left:15px' onclick='koyler();' disabled/> Köylerin dağıtımını yap<br/>";
asDiv.innerHTML += "<input id='alsil' type='checkbox' style='margin-left:30px' onclick='' disabled/> Dağıtılmayan köyleri ekleme<br/>";
asDiv.innerHTML += "<input id='gra' type='checkbox' onclick=''/> Gelişim grafiklerini ekle<br/>";
asDiv.innerHTML += "<input id='scr' type='checkbox' onclick='scr();'/> Fake scriptleri ekle<br/>";
asDiv.innerHTML += "<input id='scr1' type='checkbox' style='margin-left:15px' onclick='' disabled/> Şahmerdan/Mancınık Scripti<br/>";
asDiv.innerHTML += "<input id='scr2' type='checkbox' style='margin-left:15px' onclick='' disabled/> Şahmerdan/Mancınık Scripti (4\'lü)<br/>";
asDiv.innerHTML += "<input id='scr3' type='checkbox' style='margin-left:15px' onclick='' disabled/> Mızrakçı/Baltacı Scripti<br/>";
asDiv.innerHTML += "<input id='scr4' type='checkbox' style='margin-left:15px' onclick='' disabled/> Mızrakçı/Baltacı Scripti (4\'lü)<br/>";
asDiv.innerHTML += "<br/><button id='tamam' style='cursor:pointer;color:purple;margin-left:17%;font-weight:bold;background-color:#F4E4BC;height:30px;border:2px solid #765942;border-radius:10px;' type='button'>Forum Mesajını Hazırla</button>";
asDiv.innerHTML += "<br/><textarea id='plan' style='width:90%;height:100px;background-color:transparent;resize:none;display:none;border-radius:10px' onfocus='this.select();' readonly></textarea>";

document.getElementById('kapa').addEventListener('click', function () {
    document.getElementById('div').remove();
});

function zaman() {
    var checkbox = document.getElementById('zaman');
    var disabled = !checkbox.checked;
    document.getElementById('gun').disabled = disabled;
    document.getElementById('ay').disabled = disabled;
    document.getElementById('st').disabled = disabled;
    document.getElementById('dk').disabled = disabled;
}

function opmesaj() {
    var checkbox = document.getElementById('opmes');
    var textarea = document.getElementById('mes');
    textarea.style.display = checkbox.checked ? 'inline' : 'none';
}

function koyler() {
    var checkbox = document.getElementById('koy');
    var alinCheckbox = document.getElementById('alin');
    var alsilCheckbox = document.getElementById('alsil');
    var inputs = document.querySelectorAll("input[id^='i']");

    alinCheckbox.disabled = !checkbox.checked;
    if (!checkbox.checked) {
        alinCheckbox.checked = false;
        alsilCheckbox.checked = false;
        alsilCheckbox.disabled = true;
        inputs.forEach(function (input) {
            input.style.display = 'none';
        });
    }
}

function scr() {
    var checkbox = document.getElementById('scr');
    var checkboxes = document.querySelectorAll("input[id^='scr']");
    checkboxes.forEach(function (cb) {
        cb.disabled = !checkbox.checked;
        cb.checked = checkbox.checked;
    });
}

function Konsantre() {
    var pp = document.getElementById('plan');
    var mesaj = document.getElementById('mes').value;
    var gun = document.getElementById('gun').value;
    var ay = document.getElementById('ay').value;
    var st = document.getElementById('st').value;
    var dk = document.getElementById('dk').value;
    var gk = document.querySelectorAll("input:checked").length;

    pp.innerHTML = "[size=12][u][player]" + Oyuncu + "[/player][/u][/size]\n";

    if (gun !== 'x' && ay !== 'x' && st !== 'x' && dk !== 'x') {
        pp.innerHTML += "[b][color=#742e74]Operasyon Zamanı:[/color] " + gun + " " + ay + "[/b] saat [b][color=#ae0e0e]" + st + ":" + dk + ":00[/color][/b]\n";
    }

    if (document.getElementById('opmes').checked && mesaj.length > 0) {
        pp.innerHTML += "[color=#0000ff][i]" + mesaj + "[/i][/color]\n";
    }

    if (document.getElementById('gra').checked) {
        pp.innerHTML += "[b][color=#742e74]Oyuncuya ait grafikler:[/color][/b]\n\n";
        pp.innerHTML += "[table][*][b](Puan Grafiği)[/b]\n";
        pp.innerHTML += Gra.Puan + "\n";
        pp.innerHTML += "[|][b](Köy Grafiği)[/b]\n";
        pp.innerHTML += Gra.Koy + "\n";
        pp.innerHTML += "[*][b](Saldırı Puanı Grafiği)[/b]\n";
        pp.innerHTML += Gra.Oda + "\n";
        pp.innerHTML += "[|][b](Savunma Puanı Grafiği)[/b]\n";
        pp.innerHTML += Gra.Odd + "\n";
        pp.innerHTML += "[/table]\n";
    }

    if (document.getElementById('koy').checked) {
        pp.innerHTML += "[b][color=#742e74]Oyuncuya ait köyler:[/color][/b]\n\n";
        if (document.getElementById('alin').checked) {
            pp.innerHTML += "[table][**]Hedef Köy[||]Alacak Oyuncu[/**]\n";
            var inputs = document.querySelectorAll("input[id^='i']");
            inputs.forEach(function (input, index) {
                var k1 = Koor[index];
                var a1 = input.value.trim();
                if (a1.length > 0) {
                    pp.innerHTML += "[*] " + k1 + " [|][player]" + a1 + "[/player]\n";
                }
            });
            pp.innerHTML += "[/table]\n";
        } else {
            pp.innerHTML += Koor.join('\n') + "\n";
        }
    }

    if (document.getElementById('scr').checked) {
        pp.innerHTML += "[b][color=#742e74]Oyuncuya ait fake scriptler:[/color][/b]\n\n";
        var checkboxes = document.querySelectorAll("input[id^='scr']:checked");
        checkboxes.forEach(function (cb) {
            var scriptName = cb.getAttribute('data-script-name');
            pp.innerHTML += Script[scriptName] + "\n";
        });
    }

    pp.innerHTML += "[size=6]Bu planlama KNS Operasyon Planlayıcısı tarafından yapılmıştır. Scriptler ve daha fazlası için [url=https://forum.klanlar.org/konu/45987/]buraya tıklayınız[/url].[/size]";
}

document.getElementById('tamam').addEventListener('click', function () {
    Konsantre();
});
