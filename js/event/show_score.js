const area_my_score_id ="my_score";
const area_cp_score_id ="cp_score";

//画面に表示する
function showScore(){
  area_my_socre = document.getElementById(area_my_score_id);
  area_cp_socre = document.getElementById(area_cp_score_id);
  area_my_socre.innerText = my_score;
  area_pc_socre.innerText = pc_score;
}
