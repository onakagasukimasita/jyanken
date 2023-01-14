// requires js/gamesystem/jyanken.js
// requires js/gamesystem/score.js
// requires js/gamesystem/victories_in_a_row.js
// requires js/event/show_status.js
let ELM_CP_RESULT;
let ELM_KEKKA;
const RESULT_DEFAULT = "ジャンケンしようぜ";
const HAND = { gu: "✊", ch: "✌️", pa: "✋" };

//1. ユーザーが、自分の手を決めるボタンを押した際、の処理
async function jyanken(my_hand) {
    ELM_KEKKA = document.getElementById("game_result");
    ELM_KEKKA.innerHTML = "じゃ～んけ～ん...";
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
        case r_win:
            addScore();
            break;
        case r_lose:
            lostScore();
            break;
        case r_even:
            //do nothing;
    }
    showScore(my_score);
}

function showResult(res, cp_hand) {
    ELM_CP_RESULT = document.getElementById("cp_result");
    ELM_CP_RESULT.innerText = HAND[cp_hand];
    ELM_KEKKA.innerText = res;
}

function resetResult() {
    ELM_KEKKA.innerText = RESULT_DEFAULT;
}
