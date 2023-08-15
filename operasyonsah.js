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

var ram = $('#unit_input_ram').next().html();
var catapult = $('#unit_input_catapult').next().html();

if (ram.match(/\d+/g) > 0) {
    $('#unit_input_ram').val('1');
} else if (catapult.match(/\d+/g) > 0) {
    $('#unit_input_catapult').val('1');
}
end();
