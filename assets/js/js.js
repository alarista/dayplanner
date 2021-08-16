var today = moment();
var hour = moment().format('HH');
$("#today").text(today.format('dddd[,] MMMM Do'));

var main = $('#main')

for (var c = 9; c <= 17; c++) {
    var row = $('<div>');
    row.attr('id', 'hour-' + c);
    row.addClass('row time-space');

    if (c < hour) {
        row.addClass('before')
    } else if (c > hour) {
        row.addClass('after')
    } else {
        row.addClass('now')
    }

    main.append(row);
    var textHour = $('<div>');
    textHour.text(moment(c, "H HH").format("hA"));
    textHour.addClass(' col-1 hour ');
    row.append(textHour);

    var textEl = $('<textarea>');
    textEl.addClass('col-md-10 description');
    var key = JSON.parse(localStorage.getItem('hour-' + c));
    if (key == null) {
        textEl.val("");
    } else {
        textEl.val(key.task);
    }
    row.append(textEl);

    row.append(textEl);
    var btnEl = $('<button>');
    btnEl.addClass('btn saveBtn col-md-1 far fa-save saveImg');
    btnEl.attr('id', 'btn-' + c);
    row.append(btnEl);
}

for (var c = 9; c < 18; c++) {
    $("#btn-" + c).click(function (event) {
        event.preventDefault();
        parentEl = $(this).parent().get(0).id
        var index = $(this).attr('id');
        var saveText = $("#" + parentEl).children("textarea").val();
        console.log(saveText);
        var hourChore = {
            hour: index,
            task: saveText
        }
        localStorage.setItem(parentEl, JSON.stringify(hourChore));

    });
}