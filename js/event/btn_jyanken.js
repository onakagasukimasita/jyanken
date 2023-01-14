// requires js/gamesystem/jyanken.js
// requires js/gamesystem/score.js
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
    if (result === r_win) {
        showing_result =  "勝ち!";
    } else if (result === r_lose) {
        showing_result = "負け!";
    } else if (result === r_even) {
        showing_result = "あいこ!";
    } else {
        throw 'Parameter is not a hand!';
    }

    showResult(showing_result, cp_hand);
    
    //ichihachiの場合はaddScoreIchiHachi
            console.log(result);
    switch (result){
        case r_win:
            console.log("win"+result);
            addScore();
            break;
        case r_lose:
            console.log("lose"+result);
            lostScore();
            break;
        case r_even:
            console.log("even"+result);
            //do nothing;
    }
    showScore();
}



function showResult(res, cp_hand) {
    ELM_CP_RESULT = document.getElementById("cp_result");
    ELM_CP_RESULT.innerText = HAND[cp_hand];
    ELM_KEKKA.innerText = res;
}

function resetResult() {
    ELM_KEKKA.innerText = RESULT_DEFAULT;
}
