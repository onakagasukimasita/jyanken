let my_score;
//let cp_score;
const winning_point = 1;
const losing_point = 1;

//初期状態
function resetScore(){
  my_score = 0;
  //cp_score = 0;
}

//変更
function addScore(){
  my_score = my_score + winning_point;
}

function addScoreIchiHachi(my_hand){
  if(my_hand === "✌"){
    my_score = my_score + 2;
  }
  if(my_hand === "✋"){
    my_score = my_score + 5;
  }
}

function lostScore(){
  my_score = my_score - losing_point;
}

 
