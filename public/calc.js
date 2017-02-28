$(document).ready(function() {
    console.log("ready");

var $table = $('<table>');
$('body').append($table);

var $trow = $('<tr>');
$('table').append($trow);

var $display = $('<td>');
$display.attr('id', 'display');
$display.attr('class', 'other');
$display.attr('value', '');
$display.attr('colspan', 4);
$display.text('');
$trow.append($display);

var $trow2 = $('<tr>');
$('table').append($trow2);

var $ctd = $('<td>');
$ctd.attr('id', 'clear');
$ctd.attr('class', 'other');
$ctd.attr('value', 'clear');
$ctd.text('C');
$trow2.append($ctd);

var $pm = $('<td>');
$pm.attr('id', 'fake1');
$pm.attr('class', 'fake');
$pm.attr('value', '+/-');
$pm.text('+/-');
$trow2.append($pm);

var $p = $('<td>');
$p.attr('id', 'fake2');
$p.attr('class', 'fake');
$p.attr('value', 'percentage');
$p.text('%');
$trow2.append($p);

var $d = $('<td>');
$d.attr('id', 'd');
$d.attr('class', 'operator');
$d.attr('value', '/');
$d.text('/');
$trow2.append($d);

var $trow3 = $('<tr>');
$('table').append($trow3);

var $7 = $('<td>');
$7.attr('id', 7);
$7.attr('class', 'number');
$7.attr('value', 7);
$7.text('7');
$trow3.append($7);

var $8 = $('<td>');
$8.attr('id', 8);
$8.attr('class', 'number');
$8.attr('value', 8);
$8.text('8');
$trow3.append($8);

var $9 = $('<td>');
$9.attr('id', 9);
$9.attr('class', 'number');
$9.attr('value', 9);
$9.text('9');
$trow3.append($9);

var $m = $('<td>');
$m.attr('id', 'm');
$m.attr('class', 'operator');
$m.attr('value', '*');
$m.text('X');
$trow3.append($m);

var $trow4 = $('<tr>');
$('table').append($trow4);

var $4 = $('<td>');
$4.attr('id', 4);
$4.attr('class', 'number');
$4.attr('value', 4);
$4.text('4');
$trow4.append($4);

var $5 = $('<td>');
$5.attr('id', 5);
$5.attr('class', 'number');
$5.attr('value', 5);
$5.text('5');
$trow4.append($5);

var $6 = $('<td>');
$6.attr('id', 6);
$6.attr('class', 'number');
$6.attr('value', 6);
$6.text('6');
$trow4.append($6);

var $minus = $('<td>');
$minus.attr('id', 'minus');
$minus.attr('class', 'operator');
$minus.attr('value', '-');
$minus.text('-');
$trow4.append($minus);

var $trow5 = $('<tr>');
$('table').append($trow5);

var $1 = $('<td>');
$1.attr('id', 1);
$1.attr('class', 'number');
$1.attr('value', 1);
$1.text('1');
$trow5.append($1);

var $2 = $('<td>');
$2.attr('id', 2);
$2.attr('class', 'number');
$2.attr('value', 2);
$2.text('2');
$trow5.append($2);

var $3 = $('<td>');
$3.attr('id', 3);
$3.attr('class', 'number');
$3.attr('value', 3);
$3.text('3');
$trow5.append($3);

var $plus = $('<td>');
$plus.attr('id', 'plus');
$plus.attr('class', 'operator');
$plus.attr('value', '+');
$plus.text('+');
$trow5.append($plus);

var $trow6 = $('<tr>');
$('table').append($trow6);

var $blank = $('<td>');
$blank.attr('id', "fake3");
$blank.attr('class', 'fake');
$blank.attr('value', "fake");
$blank.text('');
$trow6.append($blank);

var $0 = $('<td>');
$0.attr('id', 0);
$0.attr('class', 'number');
$0.attr('value', 0);
$0.text('0');
$trow6.append($0);

var $dec = $('<td>');
$dec.attr('id', "dec");
$dec.attr('class', 'other');
$dec.attr('value', ".");
$dec.text('.');
$trow6.append($dec);

var $sum = $('<td>');
$sum.attr('id', 'sum');
$sum.attr('class', 'other');
$sum.attr('value', '=');
$sum.text('=');
$trow6.append($sum);


$('#1').click(function(e) {
    $('#display').text($('#display').text() + 1);
  });

  $('#2').click(function(e) {
    $('#display').text($('#display').text() + 2);
  });

  $('#3').click(function(e) {
    $('#display').text($('#display').text() + 3);
  });

  $('#4').click(function(e) {
    $('#display').text($('#display').text() + 4);
  });

  $('#5').click(function(e) {
    $('#display').text($('#display').text() + 5);
  });

  $('#6').click(function(e) {
    $('#display').text($('#display').text() + 6);
  });

  $('#7').click(function(e) {
    $('#display').text($('#display').text() + 7);
  });

  $('#8').click(function(e) {
    $('#display').text($('#display').text() + 8);
  });

  $('#9').click(function(e) {
    $('#display').text($('#display').text() + 9);
  });

  $('#0').click(function(e) {
    $('#display').text($('#display').text() + 0);
  });

  $('#clear').click(function(e) {
    $('#display').text("");
  });

  $('#plus').click(function(e) {
    $('#display').text($('#display').text() + " + ");
  });

  $('#minus').click(function(e) {
    $('#display').text($('#display').text() + " - ");
  });

  $('#m').click(function(e) {
    $('#display').text($('#display').text() + " * ");
  });

  $('#d').click(function(e) {
    $('#display').text($('#display').text() + " / ");
  });

  $('#d').click(function(e) {
    $('#display').text($('#display').text() + " / ");
  });

  $('#sum').click(function(e) {
    var dis = $('#display').text();

    var equation = dis.split(" ");
    var result;

    var num1 = parseFloat(equation[0]);
    var num2 = parseFloat(equation[2]);

    switch (equation[1]) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        default:
            result = "error";
            break;
    }
    $('#display').text(result);
  });

});
