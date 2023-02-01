let my_score;
let high_scores = [300,200,100,50,10];
//let cp_score;
//初期状態
function resetScore(){
  my_score = 0;
  //cp_score = 0;
}

//変更
function addScore(){
  if(victories>0){
    my_score = my_score + WINNING_POINT*victories;
  }else{
    my_score = my_score + WINNING_POINT;
  }
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
  if(0<my_score) my_score = my_score - LOSING_POINT;
}

function setHighScore(){
  //配列から最小値を取得
  let min = Math.min(...high_scores);
  console.log("min_scores:"+min);
  //スコアが配列内の最小値より大きいときだけ入れ替え
  if(min<my_score){
    //最小値を削除
    high_scores = high_scores.filter(item => item !== min);
    //新しい値を追加
    high_scores.push(my_score);
    //ソート
    high_scores.sort( function compareFunc(a, b) {return b - a;}
  );
  }
}
