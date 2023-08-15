/* 
	Yazar(Author): Konsantre
	Forum: http://forum.klanlar.org
	Iletisim(Contact): konsantre.op@gmail.com

	TribalWars Turkey - JavaScript Moderator
*/

if (premium == false) {
    alert('Bu scripti çalıştırmak için premium hesabınız olması gerekir.');
    end();
}
if (game_data.screen != 'info_player') {
    alert('KNS Operasyon Planlayıcısı\n\nBu script sadece oyuncu profillerinde çalışır.');
    end();
}

var Koor = $('#villages_list').html().match(/\d+\|\d+/g);
var s1 = Koor.join('a');
var s2 = s1.match(/\|/g);
var s3 = s2.join('');
var Sayi = s3.length;
Koor4 = [];
var Koor_a = $('#villages_list').html().match(/\d+\|\d+/g);
var l = Koor_a.length;
for (i = 0; i < l; i++) {
    Koor4.push(Koor_a[i]);
    Koor4.push(Koor_a[i]);
    Koor4.push(Koor_a[i]);
    Koor4.push(Koor_a[i]);
}
var Oyuncu = $('h2[class=]').html().trim();
if (Oyuncu.length > 32) {
    var Oyuncu = game_data.player.name;
}
var z1 = "<select id='gun' onchange='' disabled><option value='x'>Gün</option><option value='1'>01</option><option value='2'>02</option><option value='3'>03</option><option value='4'>04</option><option value='5'>05</option><option value='6'>06</option><option value='7'>07</option><option value='8'>08</option><option value='9'>09</option><option value='10'>10</option><option value='11'>11</option><option value='12'>12</option><option value='13'>13</option><option value='14'>14</option><option value='15'>15</option><option value='16'>16</option><option value='17'>17</option><option value='18'>18</option><option value='19'>19</option><option value='20'>20</option><option value='21'>21</option><option value='22'>22</option><option value='23'>23</option><option value='24'>24</option><option value='25'>25</option><option value='26'>26</option><option value='27'>27</option><option value='28'>28</option><option value='29'>29</option><option value='30'>30</option><option value='31'>31</option></select>";
var z2 = "<select id='ay' onchange='' disabled><option value='x'>Ay</option><option value='Ocak'>Ocak</option><option value='Şubat'>Şubat</option><option value='Mart'>Mart</option><option value='Nisan'>Nisan</option><option value='Mayıs'>Mayıs</option><option value='Haziran'>Haziran</option><option value='Temmuz'>Temmuz</option><option value='Ağustos'>Ağustos</option><option value='Eylül'>Eylül</option><option value='Ekim'>Ekim</option><option value='Kasım'>Kasım</option><option value='Aralık'>Aralık</option></select>";
var z3 = "<select id='st' onchange='' disabled><option value='x'>Saat</option><option value='00'>00</option><option value='01'>01</option><option value='02'>02</option><option value='03'>03</option><option value='04'>04</option><option value='05'>05</option><option value='06'>06</option><option value='07'>07</option><option value='08'>08</option><option value='09'>09</option><option value='10'>10</option><option value='11'>11</option><option value='12'>12</option><option value='13'>13</option><option value='14'>14</option><option value='15'>15</option><option value='16'>16</option><option value='17'>17</option><option value='18'>18</option><option value='19'>19</option><option value='20'>20</option><option value='21'>21</option><option value='22'>22</option><option value='23'>23</option></select>";
var z4 = "<select id='dk' onchange='' disabled><option value='x'>Dakika</option><option value='00'>00</option><option value='05'>05</option><option value='10'>10</option><option value='15'>15</option><option value='20'>20</option><option value='25'>25</option><option value='30'>30</option><option value='35'>35</option><option value='40'>40</option><option value='45'>45</option><option value='50'>50</option><option value='55'>55</option></select>";
var Gra = {
    Puan: ('[img]http://tr.twstats.com/image.php?type=playergraph&amp;graph=points&amp;id=' + InfoPlayer.player_id + '&amp;s=' + game_data.world + '[/img]'),
    Koy: ('[img]http://tr.twstats.com/image.php?type=playergraph&amp;graph=villages&amp;id=' + InfoPlayer.player_id + '&amp;s=' + game_data.world + '[/img]'),
    Oda: ('[img]http://tr.twstats.com/image.php?type=playergraph&amp;graph=oda&amp;id=' + InfoPlayer.player_id + '&amp;s=' + game_data.world + '[/img]'),
    Odd: ('[img]http://tr.twstats.com/image.php?type=playergraph&amp;graph=odd&amp;id=' + InfoPlayer.player_id + '&amp;s=' + game_data.world + '[/img]'),
};
var Script = {
    Sah: ("[spoiler=Şahmerdan/Mancınık Scripti][code]javascript:Kont='" + Koor.join(" ") + "';$.getScript('https://media.innogamescdn.com/com_DS_TR/Scripts/80123.js')[/code][/spoiler]"),
    Sah4: ("[spoiler=Şahmerdan/Mancınık Scripti (4'lü)][code]javascript:Kont='" + Koor4.join(" ") + "';$.getScript('https://media.innogamescdn.com/com_DS_TR/Scripts/80123.js')[/code][/spoiler]"),
    Miz: ("[spoiler=Mızrakçı/Baltacı Scripti][code]javascript:Kont='" + Koor.join(" ") + "';$.getScript('https://media.innogamescdn.com/com_DS_TR/Scripts/90123.js')[/code][/spoiler]"),
    Miz4: ("[spoiler=Mızrakçı/Baltacı Scripti (4'lü)][code]javascript:Kont='" + Koor4.join(" ") + "';$.getScript('https://media.innogamescdn.com/com_DS_TR/Scripts/90123.js')[/code][/spoiler]"),
};

for (i = 0; i < Sayi; i++) {
    $('#villages_list').html($('#villages_list').html().replace(Koor[i], "<input class='kont' id='i" + i + "' placeholder='Oyuncu ismi girin'/>"));
}
$("input[id^='i']").hide();

function kapa() {
    $('#div').remove();
    location.reload();
}

function opmesaj() {
    if (document.getElementById('opmes').checked == false) {
        document.getElementById('mes').style.display = 'none';
    } else if (document.getElementById('opmes').checked == true) {
        document.getElementById('mes').style.display = 'inline';
    }
}

function koyler() {
    if (document.getElementById('koy').checked == true) {
        document.getElementById('alin').disabled = false;
        if (document.getElementById('alin').checked == true) {
            document.getElementById('alsil').disabled = false;
            $("input[id^='i']").show();
        } else if (document.getElementById('alin').checked == false) {
            document.getElementById('alsil').checked = false;
            document.getElementById('alsil').disabled = true;
            $("input[id^='i']").hide();
        }
    } else if (document.getElementById('koy').checked == false) {
        document.getElementById('alin').checked = false;
        document.getElementById('alin').disabled = true;
        document.getElementById('alsil').checked = false;
        document.getElementById('alsil').disabled = true;
        $("input[id^='i']").hide();
    }
}

function scr() {
    if (document.getElementById('scr').checked == true) {
        document.getElementById('scr1').disabled = false;
        document.getElementById('scr1').checked = true;
        document.getElementById('scr2').disabled = false;
        document.getElementById('scr2').checked = true;
        document.getElementById('scr3').disabled = false;
        document.getElementById('scr3').checked = true;
        document.getElementById('scr4').disabled = false;
        document.getElementById('scr4').checked = true;
    } else if (document.getElementById('scr').checked == false) {
        document.getElementById('scr1').disabled = true;
        document.getElementById('scr1').checked = false;
        document.getElementById('scr2').disabled = true;
        document.getElementById('scr2').checked = false;
        document.getElementById('scr3').disabled = true;
        document.getElementById('scr3').checked = false;
        document.getElementById('scr4').disabled = true;
        document.getElementById('scr4').checked = false;
    }
}

function zaman() {
    if (document.getElementById('zaman').checked == true) {
        document.getElementById('gun').disabled = false;
        document.getElementById('ay').disabled = false;
        document.getElementById('st').disabled = false;
        document.getElementById('dk').disabled = false;
    }
    if (document.getElementById('zaman').checked == false) {
        document.getElementById('gun').getElementsByTagName('option')[0].selected = 'selected';
        document.getElementById('ay').getElementsByTagName('option')[0].selected = 'selected';
        document.getElementById('st').getElementsByTagName('option')[0].selected = 'selected';
        document.getElementById('dk').getElementsByTagName('option')[0].selected = 'selected';
        document.getElementById('gun').disabled = true;
        document.getElementById('ay').disabled = true;
        document.getElementById('st').disabled = true;
        document.getElementById('dk').disabled = true;
    }
}

function Konsantre() {
    Alacaklar = [];
    for (i = 0; i < Sayi; i++) {
        var al = $('.kont').eq(i).val().trim();
        if (al.length > 0) {
            Alacaklar.push(al);
        } else if (al.length == 0) {
            Alacaklar.push('');
        }
    }
    var pp = document.getElementById('plan');
    var mesaj = document.getElementById('mes').value;
    var sk = $("input[id^='scr']:checked").length;
    var gk = $("input:checked").length;
    var kk = $("input[id^='al']:checked").length;

    pp.innerHTML = "[size=12][u][player]" + Oyuncu + "[/player][/u][/size]&#13;&#10;";

    if (document.getElementById('zaman').checked == true) {
        var gun = document.getElementById('gun').value;
        var ay = document.getElementById('ay').value;
        var st = document.getElementById('st').value;
        var dk = document.getElementById('dk').value;
        if (gun != 'x' && ay != 'x' && st != 'x' && dk != 'x') {
            pp.innerHTML += "[b][color=#742e74]Operasyon Zamanı:[/color] " + gun + " " + ay + "[/b] saat [b][color=#ae0e0e]" + st + ":" + dk + ":00[/color][/b]&#13;&#10;";
        }
    }

    if (document.getElementById('opmes').checked == true && mesaj.length > 0) {
        pp.innerHTML += "&#13;&#10;[color=#0000ff][i]" + mesaj + "[/i][/color]&#13;&#10;";
    }

    if (document.getElementById('gra').checked == true) {
        pp.innerHTML += "&#13;&#10;[b][color=#742e74]Oyuncuya ait grafikler:[/color][/b]&#13;&#10;&#13;&#10;";
        pp.innerHTML += "[table][*][b](Puan Grafiği)[/b]&#13;&#10;";
        pp.innerHTML += Gra.Puan;
        pp.innerHTML += "&#13;&#10;[|][b](Köy Grafiği)[/b]&#13;&#10;";
        pp.innerHTML += Gra.Koy;
        pp.innerHTML += "&#13;&#10;[*][b](Saldırı Puanı Grafiği)[/b]&#13;&#10;";
        pp.innerHTML += Gra.Oda;
        pp.innerHTML += "&#13;&#10;[|][b](Savunma Puanı Grafiği)[/b]&#13;&#10;";
        pp.innerHTML += Gra.Odd;
        pp.innerHTML += "&#13;&#10;[/table]";
    }

    if (document.getElementById('koy').checked == true) {
        pp.innerHTML += "&#13;&#10;[b][color=#742e74]Oyuncuya ait köyler:[/color][/b]&#13;&#10;&#13;&#10;";
        if (document.getElementById('alin').checked == false) {
            pp.innerHTML += Koor.join('\n') + "&#13;&#10;&#13;&#10;";
        }
        if (document.getElementById('alin').checked == true) {
            pp.innerHTML += "[table][**]Hedef Köy[||]Alacak Oyuncu[/**]&#13;&#10";
            if (kk == 1) {
                for (i = 0; i < Sayi; i++) {
                    k1 = Koor[i];
                    a1 = Alacaklar[i];
                    pp.innerHTML += "[*] " + k1 + " [|][player]" + a1 + "[/player]&#13;&#10";
                }
            }
            if (kk == 2) {
                for (i = 0; i < Sayi; i++) {
                    k1 = Koor[i];
                    a1 = Alacaklar[i];
                    if (a1.length > 0) {
                        pp.innerHTML += "[*] " + k1 + " [|][player]" + a1 + "[/player]&#13;&#10";
                    }
                }
            }
            pp.innerHTML += "[/table]";
        }
    }

    if (document.getElementById('scr').checked == true) {
        if (sk > 1) {
            pp.innerHTML += "&#13;&#10;[b][color=#742e74]Oyuncuya ait fake scriptler:[/color][/b]&#13;&#10;&#13;&#10;";
        }
        if (document.getElementById('scr1').checked == true) {
            pp.innerHTML += Script.Sah;
        }
        if (document.getElementById('scr2').checked == true) {
            pp.innerHTML += Script.Sah4;
        }
        if (document.getElementById('scr3').checked == true) {
            pp.innerHTML += Script.Miz;
        }
        if (document.getElementById('scr4').checked == true) {
            pp.innerHTML += Script.Miz4;
        }
    }

    pp.innerHTML += "[size=6]Bu planlama KNS Operasyon Planlayıcısı tarafından yapılmıştır. Scriptler ve daha fazlası için [url=https://forum.klanlar.org/index.php]FORUM[/url]'u ziyaret edebilirsiniz.[/size]";

    if (gk > 0) {
        pp.style.display = 'inline';
    }
    if (gk == 0) {
        pp.style.display = 'none';
    }
}

$('#inner-border').append("<div id='div' style='width:300px;height:auto;left:60%;top:30%;position:fixed;overflow-y:hidden;background-color:#FFccAA;border-radius:20px;border:3px solid brown'><table width='100%'><tr><th width='90%'><center><b id='isim' style='color:purple'>KNS Operasyon Planlayıcısı<sup>v1.0</sup></b></center></th><th width='10%'><button id='kapa' onclick='kapa()'><b>X</b></button></th></tr></table><hr style='border-color:brown'><center><font color='black'><b>[player]" + Oyuncu + "[/player]</b></font></center><hr style='border-color:brown'><font color='black'><b>Oyuncuya ait köy sayısı: " + Sayi + "</b></font><hr style='border-color:brown'><input type='checkbox' id='zaman' onclick='zaman()'><b>Operasyon zamanı belirle</b> " + z1 + " " + z2 + "<br>" + z3 + " " + z4 + "<hr style='border-color:brown'><input type='checkbox' id='opmes' onclick='opmesaj()'><b>Operasyon mesajı ekle</b><br><textarea id='mes' rows='2' cols='35'></textarea><hr style='border-color:brown'><input type='checkbox' id='koy' onclick='koyler()'><b>Köyler eklensin</b><br><input type='checkbox' id='alin' disabled><b>Alınacak köyler</b> (örn: 1. köy -> o1, 2. köy -> o2)<br>");
for (i = 0; i < Sayi; i++) {
    $('#div').append("<input type='checkbox' id='al" + i + "'><font color='black'> " + Koor[i] + "</font><br>");
}
$('#div').append("<hr style='border-color:brown'><input type='checkbox' id='scr' onclick='scr()'><b>Fake scriptler eklensin</b><br>");
$('#div').append("<input type='checkbox' id='scr1' disabled><font color='black'> " + Script.Sah + "</font><br>");
$('#div').append("<input type='checkbox' id='scr2' disabled><font color='black'> " + Script.Sah4 + "</font><br>");
$('#div').append("<input type='checkbox' id='scr3' disabled><font color='black'> " + Script.Miz + "</font><br>");
$('#div').append("<input type='checkbox' id='scr4' disabled><font color='black'> " + Script.Miz4 + "</font><br>");
$('#div').append("<hr style='border-color:brown'><center><button id='cikar' onclick='Konsantre()'><b>Oyuncuya ait operasyon planını oluştur</b></button></center><hr style='border-color:brown'></div>");
$('#div').append("<hr style='border-color:brown'><textarea id='plan' rows='10' cols='35'></textarea><hr style='border-color:brown'></div>");

function kapa() {
    $('#div').remove();
    location.reload();
}

function opmesaj() {
    if (document.getElementById('opmes').checked == false) {
        document.getElementById('mes').style.display = 'none';
    } else if (document.getElementById('opmes').checked == true) {
        document.getElementById('mes').style.display = 'inline';
    }
}

function koyler() {
    if (document.getElementById('koy').checked == true) {
        document.getElementById('alin').disabled = false;
        if (document.getElementById('alin').checked == true) {
            $("input[id^='al']").removeAttr('disabled');
        } else if (document.getElementById('alin').checked == false) {
            $("input[id^='al']").attr('disabled', 'disabled');
        }
    } else if (document.getElementById('koy').checked == false) {
        document.getElementById('alin').checked = false;
        document.getElementById('alin').disabled = true;
        $("input[id^='al']").attr('disabled', 'disabled');
    }
}

function scr() {
    if (document.getElementById('scr').checked == true) {
        $("input[id^='scr']").removeAttr('disabled');
    } else if (document.getElementById('scr').checked == false) {
        $("input[id^='scr']").attr('disabled', 'disabled');
    }
}

function zaman() {
    if (document.getElementById('zaman').checked == true) {
        document.getElementById('gun').disabled = false;
        document.getElementById('ay').disabled = false;
        document.getElementById('st').disabled = false;
        document.getElementById('dk').disabled = false;
    } else if (document.getElementById('zaman').checked == false) {
        document.getElementById('gun').value = 'x';
        document.getElementById('ay').value = 'x';
        document.getElementById('st').value = 'x';
        document.getElementById('dk').value = 'x';
        document.getElementById('gun').disabled = true;
        document.getElementById('ay').disabled = true;
        document.getElementById('st').disabled = true;
        document.getElementById('dk').disabled = true;
    }
}

$('#gun').on('change', function () {
    Konsantre();
});
$('#ay').on('change', function () {
    Konsantre();
});
$('#st').on('change', function () {
    Konsantre();
});
$('#dk').on('change', function () {
    Konsantre();
});

function Konsantre() {
    // Kodun geri kalanını buraya ekleyin
}

// Orijinal kodun sonuna dönüp kodu burada tamamlayabilirsiniz.
