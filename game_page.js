player1_name = localStorage.getItem("name1");
player2_name = localStorage.getItem("name2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1").innerHTML = player1_name + " : ";
document.getElementById("player2").innerHTML = player2_name + " : ";

document.getElementById("score1").innerHTML = player1_score ;
document.getElementById("score2").innerHTML = player2_score ;

document.getElementById("question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("answer").innerHTML = "Answer Turn - " + player2_name;

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowercase = " + word);

    letter1 = word.charAt(1);
    console.log(letter1);

    divide = Math.floor(word.length/2);
    letter2 = word.charAt(divide);
    console.log(letter2);

    minus = word.length - 1;
    letter3 = word.charAt(minus);
    console.log(letter3);

    remove_1 = word.replace(letter1, "_");
    remove_2 = remove_1.replace(letter2, "_");
    remove_3 = remove_2.replace(letter3, "_");
    console.log(remove_3);

    question = "<h4 id= 'word_dis'> Q. "+remove_3+"</h4>";
    input_box = "<br>Answer : <input type-'text' id='input_check_box'>";
    button = "<br> <br> <button class = 'btn btn-info' onclick ='check()'>Check</button>";

    row = question + input_box + button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

}

question_turn = "player1";
answer_turn = "player2";

function check(){
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lower case - "+ answer);
    if(answer == word){
        if(answer_turn == "player1"){
            player1_score = player1_score +1;
            document.getElementById("score1").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score +1;
            document.getElementById("score2").innerHTML = player2_score;
        }
    }

    if(question_turn == "player1"){
        question_turn = "player2"
        document.getElementById("question").innerHTML = "Question turn - " + player2_name;
    }
    else{
        question_turn = "player1"
        document.getElementById("question").innerHTML = "Question Turn - " + player1_name;
    }

    if(answer_turn == "player1"){
        answer_turn = "player2"
        document.getElementById("answer").innerHTML = "Answer turn - " + player2_name;
    }
    else{
        answer_turn = "player1"
        document.getElementById("answer").innerHTML = "Answer Turn - " + player1_name;
    }

    document.getElementById("output").innerHTML = "";
}