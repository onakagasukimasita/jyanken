// requires /js/gamesystem/score.js
// requires /js/event/show_score.js

function reset(){
  resetScore();
  //gamesystem/score内に記述したローカル変数を利用する
  showScore(my_score);
}
