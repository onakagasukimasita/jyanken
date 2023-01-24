


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

function startpageAnimation() {
    ELM_area_anime_d.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', ANM_IMG_D + "01.png");
    ELM_area_anime_c.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', ANM_IMG_C + "01.png");
    ELM_area_anime_b.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', ANM_IMG_B + "01.png");
    return new Promise(resolve => {
        //e.preventDefault();
        var count = 0;
        var id = setInterval(function () {
            count++;

            ELM_area_anime_a.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href',  ANIME_img_a[count % (ANIME_img_a.length)]);

            ELM_area_anime_b.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', ANIME_img_b[count % (ANIME_img_b.length)]);

            ELM_area_anime_c.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', ANIME_img_c[count % (ANIME_img_c.length)]);

            if (count >= 44) {
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
        btn.style.pointerEvents = "none";
        btn.style.color = "White";
        btn.style.backgroundColor = "gray";
        btn.style.boxShadow = "none";
        btn.style.transform = "translateY(5px)";
        btn.addEventListener('mouseover', function () {
            btn.style.boxShadow = "none";
            btn.style.transform = "translateY(5px)";
        });

        btn.addEventListener('mouseleave', function () {
            btn.style.boxShadow = "none";
            btn.style.transform = "translateY(5px)";
        });
    });

    //自分の手がグーのとき
    if (my_hand === HAND_GUU) {
        ELM_btns_myhand_gu.style.backgroundColor = "#d77f89";
    } else if (my_hand === HAND_CHYOKI) {
        //自分の手がチョキのとき
        ELM_btns_myhand_ch.style.backgroundColor = "#d77f89";
    } else if (my_hand === HAND_PAA) {
        //自分の手がパーのとき
        ELM_btns_myhand_pa.style.backgroundColor = "#d77f89";
    } else {
        throw 'Parameter is not a hand!';
    }
}

function ableBtns() {
    let btns = Array.from(ELM_btns_myhand);
    btns.forEach(function (btn) {
        btn.style.pointerEvents = "auto";
        btn.style.color = "black";
        btn.disabled = null;
        btn.style.backgroundColor = "#d77f89";
        btn.style.boxShadow = "0 5px 0 #ca1c30";
        btn.style.transform = "translateY(0px)";

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

function showPlayerWin() {
  ELM_img_cp.src = "./img/cp02.jpg";
  ELM_img_me.src = "./img/me03.png";
}

function showPlayerLose() {
  ELM_img_cp.src = "./img/cp03.jpg";
  ELM_img_me.src = "./img/me02.png";
}

function showPlayerEven() {
  ELM_img_cp.src = "./img/cp01.jpg";
  ELM_img_me.src = "./img/me01.png";
}

