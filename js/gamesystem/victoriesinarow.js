//連勝を計算する

let victories = 0;

function victories_in_a_row(result){
  //勝利ごとに連勝記録を1追加する
  victories = resultExchanger(result,victories+1,0,victories);
  return victories;
}
