function addUser(){
player1=document.getElementById("player1Name").value;
player2=document.getElementById("player2Name").value;
localStorage.setItem("player_1", player1);
localStorage.setItem("player_2", player2);
window.location="game_page.html";
}