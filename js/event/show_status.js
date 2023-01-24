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

  turnsOl = document.createElement("ol");
  turnsOl.setAttribute('id', 'turns');
  games.forEach(function (result) {
    let li = document.createElement("li");
    li.innerText = resultExchanger(result, "〇", "×", "△");
    turnsOl.append(li);
  });

  tmldiv = document.createElement("div");
  tmldiv.append(turnsOl);

  ELM_area_set.innerHTML = tmldiv.innerHTML;
}
