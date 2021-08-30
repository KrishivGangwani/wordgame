function adduser(){
    player_1 = document.getElementById("player1input").value;

    player_2 = document.getElementById("player2input").value;
    
    localStorage.setItem("name1",player_1);
    localStorage.setItem("name2",player_2);

    window.location = "game_page.html";
}

