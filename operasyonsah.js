if (document.URL.indexOf('screen=place') == -1) {
    alert('İçtima meydanına git hacı burada Trafik var (:');
}

var Koordinatlar = "your_space_delimited_coords_here"; // Replace with your actual coordinates

var coords = Koordinatlar.split(" ");
var index = 0;

var farmcookie = document.cookie.match('( ^|;) ?farm=([^;]*)(;|$)');
if (farmcookie != null) {
    index = parseInt(farmcookie[2]);
}

if (index >= coords.length) {
    index = 0;
}

coords = coords[index];
coords = coords.split("|");
index = index + 1;

var cookie_date = new Date(2029, 11, 11);
document.cookie = "farm=" + index + ";expires=" + cookie_date.toGMTString();

document.forms[0].x.value = coords[0];
document.forms[0].y.value = coords[1];

// Inserting units
insertUnit(document.forms[0].spear, "Mızrakçı");
insertUnit(document.forms[0].sword, "Kılıç_Ustası");
insertUnit(document.forms[0].archer, "Okçu");
insertUnit(document.forms[0].axe, "Baltacı");
insertUnit(document.forms[0].spy, "Casus");
insertUnit(document.forms[0].light, "Hafif_Atlı");
insertUnit(document.forms[0].marcher, "Atlı_Okçu");
insertUnit(document.forms[0].heavy, "Ağır_Atlı");
insertUnit(document.forms[0].ram, "Şahmerdan");
insertUnit(document.forms[0].catapult, "Mancınık");
insertUnit(document.forms[0].knight, "Şövalye");
insertUnit(document.forms[0].snob, "Misyoner");

end();
