$("document").ready(function() {
    $("#game1").hide();
    $("#game2").hide();
    $("#game3").hide();

$(".voltar").click(function(){
    $("#selecao_games").show();
    $("#game1").hide();
    $("#game2").hide();
    $("#game3").hide();   
});

    /*Jogo 1*/
$("#btJogo1").click(function(){
    $("#selecao_games").hide();
    $("#game1").show();
    $("#game2").hide();
    $("#game3").hide();

});

$("#flw1").click(function(){
    $("#msg").text("Voce beberá COCA COLA hoje!")
});
$("#flw2").click(function(){
    $("#msg").text("Voce beberá PEPSI hoje!")
});
$("#flw3").click(function(){
    $("#msg").text("Voce beberá GUARANA hoje!")
});
$("#flw4").click(function(){
    $("#msg").text("Voce beberá FANTA hoje!")
});








});

