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

end();
