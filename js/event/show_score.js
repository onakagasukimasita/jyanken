// requires js/gamesystem/score.js
const area_my_score_id ="my_score";
const area_cp_score_id ="cp_score";

//画面に表示する
function showScore(){
  let area_my_socre = document.getElementById(area_my_score_id);
  let area_cp_socre = document.getElementById(area_cp_score_id);
  area_my_socre.innerText = my_score;
  area_cp_socre.innerText = cp_score;
}
