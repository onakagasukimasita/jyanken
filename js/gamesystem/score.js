let my_score;
let high_scores = [0,0,0,0,0];
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

function setHighScore(score){
  //配列から最小値を取得
  let min = Math.min(...high_scores);
  //スコアが配列内の最小値より大きいときだけ入れ替え
  if(min<score){
    //最小値を削除
    high_scores = high_scores.filter(item => item !== min);
    //新しい値を追加
    high_scores.push(score);
    //ソート
    high_scores.sort(compareFunc(a, b) {return b - a});
  }
}
