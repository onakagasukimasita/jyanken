
//0. HTMLの特定の部分がロードされたら実行される
function onloadJyankenEvent() {


    ELM_cp_result = document.getElementById(CP_RESULT);
    ELM_kekka = document.getElementById(GAME_RESULT);
    ELM_img_main = document.getElementById(AREA_IMG_MAIN);
    ELM_img_cp = document.getElementById(AREA_IMG_CP);
    ELM_img_me = document.getElementById(AREA_IMG_ME);
    ELM_my_socre = document.getElementById(MY_SOCORE);

    ELM_btn_start = document.getElementById(BTN_START);
    ELM_btn_reset = document.getElementById(BTN_RESET);
    ELM_btns_myhand_gu = document.getElementById(BTN_MY_HAND_GUU);
    ELM_btns_myhand_ch = document.getElementById(BTN_MY_HAND_CHYOKI);
    ELM_btns_myhand_pa = document.getElementById(BTN_MY_HAND_PAA);
    ELM_btns_myhand = document.getElementsByClassName(BTN_MY_HAND);

    ELM_area_start = document.getElementById(AREA_START);
    ELM_area_game = document.getElementById(AREA_GAME);
    ELM_area_my_score = document.getElementById(AREA_MY_SOCORE);
    ELM_area_ranking = document.getElementById(AREA_RANKING);
    ELM_area_vir = document.getElementById(AREA_VIR);
    ELM_area_set = document.getElementById(AREA_SET);

}
