//スコアや連勝、セット数などを表示する

// requires js/gamesystem/score.js
const AREA_MY_SOCORE ="my_score";
//const area_cp_score_id ="cp_score";
const AREA_VIR ="victories_in_a_row";

//スコアを画面に表示する
function showScore(my_score){
  let area_my_socre = document.getElementById(AREA_MY_SOCORE);
  //let area_cp_socre = document.getElementById(area_cp_score_id);
  area_my_socre.innerText = my_score;
  //area_cp_socre.innerText = cp_score;
}

// 連勝を表示する
function showVIR(vir){
  let area_vir = document.getElementById(AREA_VIR);
  area_vir.innerText = vir;
}
