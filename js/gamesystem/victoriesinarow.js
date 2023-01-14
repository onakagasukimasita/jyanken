//連勝を計算する

let victories = 0;

function victories_in_a_row(result){
  victories = resultExchanger(result,victories+victories,0,victories);
  return victories;
}
