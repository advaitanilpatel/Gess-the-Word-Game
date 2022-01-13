player_name1=localStorage.getItem("player_1");
player_name2=localStorage.getItem("player_2");
player_score1=0;
player_score2=0;
document.getElementById("player_1").innerHTML=player_name1+" : ";
document.getElementById("player_2").innerHTML= player_name2+" : ";
document.getElementById("player1Score").innerHTML=player_score1;
document.getElementById("player2Score").innerHTML=player_score2;
document.getElementById("player_Question").innerHTML="Question Turn - "+player_name1;
document.getElementById("player_Answer").innerHTML="Answer Turn - "+player_name2;

function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();

    c1=word.charAt(1);

    m=Math.floor(word.length/2);
    c2=word.charAt(m);

    l=word.length-1;
    c3=word.charAt(l);

    remove_c1=word.replace(c1,"_");
    remove_c2=remove_c1.replace(c2,"_");
    remove_c3=remove_c2.replace(c3,"_");
    
    quetion_word="<h4 id='Question_word'> Q."+remove_c3+"</h4> <br>";
    input_box="Answer: <input type='text' id='answerInput' placeholder='Type Your Answer'>";
    check_button="<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";
    var row= quetion_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}