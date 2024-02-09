// wwwroot/js/calculator.js

$(document).ready(function () {
    //when the button is clicked get the hours and than make sure its not negative.
    //alert that it isnt valid if negative
    $('#calculate-btn').click(function () {
        var hours = parseInt($('#hours').val());
        if (isNaN(hours) || hours <= 0) {
            alert('Please enter a valid number of hours.');
            return;
        }

        var hourlyRate = 475; // define hourly rate and then do the calculation that will be passed
        var total = hours * hourlyRate;
        $('#total').val('$' + total.toFixed(2));
    });
});// wwwroot/js/calculator.js


