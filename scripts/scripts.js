$(document).ready(function() {
    var list = $('#cardList');
    var heroes = [];
    var monsters = [];

    $.getJSON( "data.json", function( data ) {
        $.each( data, function( index, value ) {
            if(value.type === "Monster") { // seperate monsters
                monsters.push(value);
            }
            else {
                heroes.push(value); // seperate hero cards
            }
        });

        generateMonsters(monsters);
        generateHeroCards(heroes);
    });

    $("#btnRefresh").on("click", function() {
        list.html("");
        generateMonsters(monsters);
        generateHeroCards(heroes);
    }); 

    function generateMonsters(monsters) {
        var i = Math.floor(Math.random()*monsters.length); 

        list.html("<li class='monster'><strong>" + monsters[i].card + "</strong></li>");

        jQuery("body").removeClass();
        jQuery("body").addClass(monsters[i].card);
    };

    function generateHeroCards(heroes) {
        var heroHtml = [];
        var heroList = heroes.slice();

        while( heroList.length > 8) {
            heroList.splice(Math.floor(Math.random()*heroList.length), 1);
        }

        $.each( heroList, function( index, value ) {
            heroHtml.push("<li><b>" + value.type + "</b>: " + value.card + "</li>");
        });

        heroHtml = heroHtml.join("")
        list.append(heroHtml);
    };
})