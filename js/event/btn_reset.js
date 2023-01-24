// requires /js/gamesystem/score.js
// requires /js/event/show_score.js

function reset() {
  resetScore();

  //gamesystem/score内に記述したローカル変数を利用する
  showScore(my_score);

  //ゲームを隠す
  ELM_area_game.style.display = "none";
  ELM_area_my_score.style.display = "none";
  ELM_area_ranking.style.display = "none";
  ELM_img_cp.style.display =  "none";
  ELM_img_me.style.display = "none";
  ELM_btn_reset.style.display = "none";

  //スタート画面を表示する
  ELM_area_start.style.display = "block";
  ELM_area_ranking.style.display = "block";
  ELM_img_main.style.display = "block";
  ELM_img_main.src = "./img/jyanken_start.jpg";
  ELM_btn_start.style.display = "block";
  showHighScore(high_scores);
}
