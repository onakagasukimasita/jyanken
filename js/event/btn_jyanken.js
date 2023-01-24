// requires js/gamesystem/jyanken.js
// requires js/gamesystem/score.js
// requires js/gamesystem/victories_in_a_row.js
// requires js/event/show_status.js

//1. ユーザーが、自分の手を決めるボタンを押した際、の処理
async function jyanken(my_hand) {
    ELM_kekka.innerHTML = "じゃ～んけ～ん...";
    //0. PCの手を確定する
    let cp_hand = getCpHand();
    //1. 結果を取得する
    let result = getKekka(cp_hand, my_hand);
    let showing_result;
    
    //勝ち・負け
    showing_result = resultExchanger(result,"勝ち!","負け!","あいこ!");
    showResult(showing_result, cp_hand);
    
    showVIR(victories_in_a_row(result));
    
    //ichihachiの場合はaddScoreIchiHachi
    switch (result){
        case R_WIN:
            addScore();
            showPlayerWin();
            break;
        case R_LOSE:
            lostScore();
            showPlayerLose();
            break;
        case R_EVEN:
            showPlayerEven();
            //do nothing;
    }
    showScore(my_score);
    setResult(result);
    showGamesOfASet(resultEachGames);
    setCount();
    if(remaining_games<1) {
        setHighScore();
        gameOver();
    }
}

function showResult(res, cp_hand) {
    ELM_cp_result.innerText = HAND[cp_hand];
    ELM_kekka.innerText = res;
}

function resetResult() {
    ELM_kekka.innerText = RESULT_DEFAULT;
}