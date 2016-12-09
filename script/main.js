

function show(a) {
    var a = document.getElementById(a);
    a.style.display = "block";
}

function hide(a) {
    var a = document.getElementById(a);
    a.style.display = "none";
}


function relationadd(num) {
    var value = document.getElementById('re-text');
    num = parseInt(num);
    relation = parseInt(value.innerHTML);
    relationa = relation + num;
    value.innerHTML = relationa.toString();
    numadd = '+' + num;
    scoreAnim(numadd);
}

function relationsub(num) {
    var value = document.getElementById('re-text');
    num = parseInt(num);
    relation = parseInt(value.innerHTML);
    relationa = relation - num;
    value.innerHTML = relationa.toString();
    numadd = '-' + num;
    scoreAnim(numadd);
}

function scoreAnim(num) {
    var bg = document.getElementById('score-pop');
    var text = document.getElementById('re-text-add');
    text.innerHTML = num;
    bg.style.display = "block";
    setTimeout(function() { bg.style.display = "none"; }, 3000);
}

function Twosecond() {
    var pic = document.getElementById('day3-3-1pic');
    pic.style.display = "block";
    setTimeout(function() { pic.style.display = "none"; }, 2000);

}

var relationblock = document.getElementById('relation');
var hinttext = document.getElementById('hinttexte');
var stoneBreak = false;

function end() {
    relationblock.style.display = "none";
    hinttext.style.display = "none";
    var love = document.getElementById('day6-1');
    var nolove = document.getElementById('endnobreak-nolove');
    var value = document.getElementById('re-text');
    var finalvalue = document.getElementById('re-text-big');
    var relation = parseInt(value.innerHTML);
    if (relation >= 60) {
        love.style.display = "block";
    } else {
        nolove.style.display = "block";
        finalvalue.innerHTML = value.innerHTML;
    }
}

function endBreak() {
    relationblock.style.display = "none";
    hinttext.style.display = "none";
    var love = document.getElementById('day6-1');
    var nolove = document.getElementById('endbreak-nolove');
    var value = document.getElementById('re-text');
    var finalvalue = document.getElementById('re-text-big');
    var relation = parseInt(value.innerHTML);
    if (relation >= 60) {
        love.style.display = "block";
        stoneBreak = true;
    } else {
        nolove.style.display = "block";
        finalvalue.innerHTML = value.innerHTML;
    }
}

function final() {
    relationblock.style.display = "none";
    hinttext.style.display = "none";
    var endbreak = document.getElementById('endbreak-love');
    var nobreak = document.getElementById('endnobreak-love');
    var value = document.getElementById('re-text');
    var finalvalue = document.getElementById('re-text-big');
    var relation = parseInt(value.innerHTML);
    if (stoneBreak == true) {
        endbreak.style.display = "block";
        finalvalue.innerHTML = value.innerHTML;
    } else {
        nobreak.style.display = "block";
        finalvalue.innerHTML = value.innerHTML;
    }
}






//var click1 = document.getElementById('click1');
//click1.addEventListener("click",relationadd('5'), false);
//click1.removeEventListener('click',relationadd('5'), false);


(function() {
    var thingsToBrew = [];
    var cookbook = [{
        ingredient: ['snaketongue', 'rabbiteye', 'lava', 'octopusleg'],
        result: 'puffskein',
        fullName: 'Puffskein Elfin'
    }, {
        ingredient: ['batwing', 'coral', 'octopusleg'],
        result: 'elixir',
        fullName: 'One-day Elixir'
    }];

    $('.items').draggable({
        stop: function(event, ui) {
            $('#things-used-to-brew').removeClass('over');
            $(this).css('top', '');
            $(this).css('left', '');
        }
    });
    $('#things-used-to-brew').droppable({
        over: function(event, ui) {
            $(this).addClass('over');
        },
        out: function(event, ui) {
            $(this).removeClass('over');
        },
        drop: function(event, ui) {
            $('#brew-font').show();
            ui.draggable.hide();
            thingsToBrew.push(ui.draggable.attr('id'));
            console.log(thingsToBrew);
        }
    });
    $('#brew-font').click(function() {
        var cookSuccess = false;
        for (i = 0; i < cookbook.length; i++) {
            if (cookbook[i].ingredient.sort().toString() === thingsToBrew.sort().toString()) {
                $('#success').show();
                $('#thing-won').attr('src', './image/outcome/outcome-' + cookbook[i].result + '.png');
                $('#thing-won-text').attr('src', './image/outcome/' + cookbook[i].result + '-title.png');
                $('#sell-action').attr('thing-to-sell', cookbook[i].result);
                $('#full-name').html(cookbook[i].fullName);
                $('#empty').hide();
                cookSuccess = true;
                break;
            }
        }
        if (!cookSuccess) {
            $('#success').hide();
            $('#empty').show();
        }
        $('#outcome-container').show();
    });

    $('#cancel-icon-01').click(function() {
        $('#book-container').hide();
    });
    $('#witcherybook').click(function() {
        $('#book-container').show();
    });
    $('#howtomake-link').click(function() {
        $('#page-one').hide();
        $('#page-two').show();
    });
    $('#whatcanmake-link').click(function() {
        $('#page-two').hide();
        $('#page-one').show();
    });

    $('#sell-action').click(function() {
        sell($(this).attr('thing-to-sell'));
    });

    $('#retry-button').click(function() {
        $('.items').show();
        thingsToBrew = [];
        $('#outcome-container').hide();
    });

    function sell(thing) {
        if (thing === 'elixir') {
            hide('workshop');
            show('main');
            show('day1-4-1');
            show('day-elixir');
            show('day-elixir1');
            show('day1-4pic2');
        } else {
            hide('workshop');
            show('main');
            show('day1-4-1');
            show('day-puff');
            show('day-puff1');
            show('day1-4pic2a');
        }
    }
})();