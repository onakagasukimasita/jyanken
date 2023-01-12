let my_score;
let cp_score;
const winning_point = "1";
const losing_point = "1";
const area_my_score_id ="my_score";
const area_cp_score_id ="cp_score";

//初期状態
function resetScore(){
  my_score = 0;
  cp_score = 0;
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

//画面に表示する
function showScore(){
  area_my_socre = document.getElementById(area_my_score_id);
  area_cp_socre = document.getElementById(area_cp_score_id);
  area_my_socre.innerText = my_score;
  area_pc_socre.innerText = pc_score;
}
 
