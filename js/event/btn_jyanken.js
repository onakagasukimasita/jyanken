// requires js/gamesystem/jyanken.js
// requires js/gamesystem/score.js
let ELM_CP_RESULT;
let ELM_KEKKA;
const hand = { gu: "✊", ch: "✌️", pa: "✋" };

//1. ユーザーが、自分の手を決めるボタンを押した際、の処理
async function jyanken(my_hand) {
    ELM_KEKKA = document.getElementById("game_result");
    ELM_KEKKA.innerHTML = "じゃ～んけ～ん...";
    //0. PCの手を確定する
    let cp_hand = getCpHand();
    //1. 結果を取得する
    let result = getKekka(cp_hand, my_hand);
    showResult(result, cp_hand);
    
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
    showScore();
}

function showResult(res, cp_hand) {
    ELM_CP_RESULT = document.getElementById("cp_result");
    ELM_CP_RESULT.innerText = hand[cp_hand];
    ELM_KEKKA.innerText = res;
}
