Kons = KNS.split(' ');
i = 0;
if ($.cookie('Konsantre') != null) {
    i = $.cookie("Konsantre");
}
if (i >= Kons.length) {
    i = 0;
}
Koor = Kons[i];
Koor = Koor.split('|');
i++;

document.forms[0].x.value = Koor[0];
document.forms[0].y.value = Koor[1];
var date = new Date();
date.setTime(date.getTime() + (10 * 60 * 1000));
$.cookie("Konsantre", i, { expires: date });

var spear = $('#unit_input_spear').next().html();
var axe = $('#unit_input_axe').next().html();

if (spear.match(/\d+/g) > 0) {
    $('#unit_input_spear').val('1');
} else if (axe.match(/\d+/g) > 0) {
    $('#unit_input_axe').val('1');
}
end();
