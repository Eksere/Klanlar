var KNS = "your_space_delimited_values_here"; // Replace with your actual space-delimited values
var Kons = KNS.split(' ');
var i = 0;

if ($.cookie('Konsantre') != null) {
    i = parseInt($.cookie('Konsantre'));
}

if (i >= Kons.length) {
    i = 0;
}

var Koor = Kons[i].split('|');
i++;

document.forms[0].x.value = Koor[0];
document.forms[0].y.value = Koor[1];

var date = new Date();
date.setTime(date.getTime() + (10 * 60 * 1000));
$.cookie('Konsantre', i.toString(), { expires: date });

var ram = $('#unit_input_ram').next().html();
var catapult = $('#unit_input_catapult').next().html();

if (parseInt(ram.match(/\d+/g)) > 0) {
    $('#unit_input_ram').val('1');
} else if (parseInt(catapult.match(/\d+/g)) > 0) {
    $('#unit_input_catapult').val('1');
}

var coords = Koordinatlar.split(" ");
index = 0;
farmcookie = document.cookie.match('( ^|;) ?farm=([^;]*)(;|$)');
if (farmcookie != null) index = parseInt(farmcookie[2]);
if (index >= coords.length) index = 0;
coords = coords[index];
coords = coords.split("|");
index = index + 1;
cookie_date = new Date(2029, 11, 11);
document.cookie = "farm=" + index + ";expires=" + cookie_date.toGMTString();
document.forms[0].x.value = coords[0];
document.forms[0].y.value = coords[1];
insertUnit(document.forms[0].spear, Mızrakçı);
insertUnit(document.forms[0].sword, Kılıç_Ustası);
insertUnit(document.forms[0].archer, Okçu);
insertUnit(document.forms[0].axe, Baltacı);
insertUnit(document.forms[0].spy, Casus);
insertUnit(document.forms[0].light, Hafif_Atlı);
insertUnit(document.forms[0].marcher, Atlı_Okçu);
insertUnit(document.forms[0].heavy, Ağır_Atlı);
insertUnit(document.forms[0].ram, Şahmerdan);
insertUnit(document.forms[0].catapult, Mancınık);
insertUnit(document.forms[0].knight, Şövalye);
insertUnit(document.forms[0].snob, Misyoner);
end();
