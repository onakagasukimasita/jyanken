//2. CPが、自分の手を決める処理
function getCpHand() {
    let saikoro = getRandomlyZeroToTwo();//ランダムで0～2の数字を作ります
    if (saikoro === 0) return HAND_GUU;
    if (saikoro === 1) return HAND_CHYOKI;
    if (saikoro === 2) return HAND_PAA;
    throw 'saikoro error!';
}

//3. CPが、結果を決める処理
function getKekka(cp_hand, my_hand) {
    let result;
    //自分の手がグーのとき
    if (my_hand === HAND_GUU) {
        if (cp_hand === HAND_GUU) {
            //CPの手がグー
            result = R_EVEN;
        } else if (cp_hand === HAND_CHYOKI) {
            //CPの手がチョキ
            result = R_WIN;
        } else if (cp_hand === HAND_PAA) {
            //CPの手がパー
            result = R_LOSE;
        } else {
            throw 'Parameter is not a hand!';
        }
    } else if (my_hand === HAND_CHYOKI) {
        //自分の手がチョキのとき
        if (cp_hand === HAND_GUU) {
            result = R_LOSE;
        } else if (cp_hand === HAND_CHYOKI) {
            result = R_EVEN;
        } else if (cp_hand === HAND_PAA) {
            result = R_WIN;
        } else {
            throw 'Parameter is not a hand!';
        }
    } else if (my_hand === HAND_PAA) {
        //自分の手がパーのとき
        if (cp_hand === HAND_GUU) {
            result = R_WIN;
        } else if (cp_hand === HAND_CHYOKI) {
            result = R_LOSE;
        } else if (cp_hand === HAND_PAA) {
            result = R_EVEN;
        } else {
            throw 'Parameter is not a hand!';
        }
    } else {
        throw 'Parameter is not a hand!';
    }
    return result;
}

function getRandomlyZeroToTwo() {
    return Math.floor(Math.random() * 3);
}

function resultExchanger(result,win,lose,even){
    //勝ち・負けに応じた結果を選ぶ
    if (result === R_WIN) {
        return win;
    } else if (result === R_LOSE) {
        return lose;
    } else if (result === R_EVEN) {
        return even;
    } else {
        throw 'Parameter is not a hand!';
    }   
}

