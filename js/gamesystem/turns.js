//じゃんけんをする回数（変数）
//じゃんけんを繰り返す
//じゃんけんの結果（複数）を記録する（表示する）
//最終結果を計算する（表示する）
//※BGM&アニメーション

let remaining_games = 10;
let resultEachGames;
let turnsOl;

function resetTurns() {
    remaining_games = GAMES_IN_A_SET;
    ELM_area_set.innerHTML = "";
    turnsOl = null;
    tmldiv = null;
    resultEachGames = [remaining_games];
}

function setCount() {
    remaining_games--;
}
function setResult(result) {
    resultEachGames[GAMES_IN_A_SET - remaining_games] = result;
}

function getGamesOfSetText() {
    return "" + remaining_games + "/" + GAMES_IN_A_SET;
}
