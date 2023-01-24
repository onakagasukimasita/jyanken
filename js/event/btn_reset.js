// requires /js/gamesystem/score.js
// requires /js/event/show_score.js

function reset() {
  resetScore();

  //gamesystem/score内に記述したローカル変数を利用する
  showScore(my_score);
  showGamesOfASet(GAMES_IN_A_SET+"/"+GAMES_IN_A_SET);

  //ゲームを隠す
  ELM_game_area.style.display = "none";
  ELM_start_button.style.display = "block";
  ELM_area_my_score.style.display = "none";
  ELM_img_main.src = "./img/jyanken_start.jpg";
  ELM_img_main.style.display = "block";
  ELM_rank_area.style.display = "block";
  ELM_img_cp.style.display =  "none";
  ELM_img_me.style.display = "none";
}
