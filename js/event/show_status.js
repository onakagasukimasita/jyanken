//スコアや連勝、セット数などを表示する


//スコアを画面に表示する
function showScore(my_score) {
  ELM_my_socre.innerText = my_score;
  //area_cp_socre.innerText = cp_score;
}

function showHighScore(socreArray) {
  console.log("high_scores:" + socreArray);
  let tmphtml = "<h2>ハイスコア</h2><ol>";
  socreArray.forEach(function (score) {
    tmphtml = tmphtml + "<li>" + score + "</li>";
  });
  ELM_area_ranking.innerHTML = tmphtml;
}

// 連勝を表示する
function showVIR(vir) {
  ELM_area_vir.innerText = vir;
}

function showGamesOfASet(games) {

  turnsOl= document.createElement("ol");
  turnsOl.setAttribute('id', 'turns');
  games.forEach(function(result){
    let li = document.createElement("li");
    li.innerText = resultExchanger(result,"〇","×","△");
    turnsOl.append(li);
  });
  
  tmldiv= document.createElement("div");
  tmldiv.append(turnsOl);

  ELM_area_set.innerHTML = tmldiv.innerHTML;
}

function showPlayerWin(){
  ELM_img_cp.src ="./img/cp02.jpg";
  ELM_img_me.src ="./img/me03.jpg";
}
function showPlayerLose(){
  ELM_img_cp.src ="./img/cp03.jpg";
  ELM_img_me.src ="./img/me02.jpg";
}
function showPlayerEven(){
  ELM_img_cp.src ="./img/cp01.jpg";
  ELM_img_me.src ="./img/me01.jpg";
}
