var year = new Date().getFullYear();
var $spanYear = $('span#year');

$spanYear.text(function () {
    return year.toString();
});