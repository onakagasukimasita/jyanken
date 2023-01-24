//自分の手を決めるボタンを押した際に 相手の手がルーレット状態になる
//勝ったときに勝利のアニメーション
//負けたとき

function rouletteAnimation() {
    return new Promise(resolve => {
        //e.preventDefault();
        var count = 10;
        var id = setInterval(function () {
            count--;
            ELM_kekka.innerHTML = "じゃ～んけ～ん...";
            let hands = Object.values(HAND);
            ELM_cp_result.innerHTML = hands[Math.floor(Math.random() * hands.length)];
            if (count <= 0) {
                clearInterval(id);
                resolve();
            }
        }, 300);
    });
}


function disableBtns(my_hand) {
    console.log("ELM_btns_myhand:" + ELM_btns_myhand.length);
    let btns = Array.from(ELM_btns_myhand);
    btns.forEach(function (btn) {
        btn.style.pointerEvents= "none";
        btn.style.color = "White";
        btn.style.backgroundColor = "gray";
        btn.style.boxShadow = "none";
        btn.addEventListener('mouseover', function () {
            btn.style.boxShadow = "none";
            btn.style.transform = "translateY(0px)";
        });

        btn.addEventListener('mouseleave', function () {
            btn.style.boxShadow = "none";
            btn.style.transform = "translateY(0px)";
        });
    });

    //自分の手がグーのとき
    if (my_hand === HAND_GUU) {
        ELM_btns_myhand_gu.style.backgroundColor = "#e3364a";
    } else if (my_hand === HAND_CHYOKI) {
        //自分の手がチョキのとき
        ELM_btns_myhand_ch.style.backgroundColor = "#e3364a";
    } else if (my_hand === HAND_PAA) {
        //自分の手がパーのとき
        ELM_btns_myhand_pa.style.backgroundColor = "#e3364a";
    } else {
        throw 'Parameter is not a hand!';
    }

}

function ableBtns() {
    let btns = Array.from(ELM_btns_myhand);
    btns.forEach(function (btn) {
        btn.style.pointerEvents= "auto";
        btn.style.color = "black";
        btn.disabled = null;
        btn.style.backgroundColor = "#e3364a";
        btn.style.boxShadow = "0 5px 0 #ca1c30";

        btn.addEventListener('mouseover', function () {
            btn.style.boxShadow = "none";
            btn.style.transform = "translateY(5px)";
        });

        btn.addEventListener('mouseleave', function () {
            btn.style.boxShadow = "0 5px 0 #ca1c30";
            btn.style.transform = "translateY(0px)";
        });
    });
}
