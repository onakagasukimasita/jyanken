
const RESULT_DEFAULT = "ジャンケンしようぜ";
const HAND = { gu: "✊", ch: "✌", pa: "✋" };

const HAND_GUU = "gu";
const HAND_CHYOKI = "ch";
const HAND_PAA = "pa";

const R_EVEN = "even";
const R_WIN = "win";
const R_LOSE = "lose";

const AREA_START = "start_page";
const AREA_GAME = "game";
const AREA_IMG_MAIN = "main_img";
const AREA_IMG_CP = "cp_img";
const AREA_IMG_ME = "me_img";
const AREA_RANKING = "ranking";
const AREA_MY_SOCORE = "area_my_score";
const AREA_VIR = "victories_in_a_row";
const AREA_SET = "set_num";

const BTN_START = "start_button";
const BTN_RESET = "reset_button";
const BTN_MY_HAND = "my_hand";
const BTN_MY_HAND_GUU = "my_hand-gu";
const BTN_MY_HAND_CHYOKI = "my_hand-ch";
const BTN_MY_HAND_PAA = "my_hand-pa";
const ANM_IMG_D = "./img/jyankend_";
const ANM_IMG_C = "./img/jyankenc_";
const ANM_IMG_B = "./img/jyankenb_";
const ANM_IMG_A = "./img/jyankena_";
const AREA_ANM_IMG_D = "anime_imgd";
const AREA_ANM_IMG_C = "anime_imgc";
const AREA_ANM_IMG_B = "anime_imgb";
const AREA_ANM_IMG_A = "anime_imga";

const MY_SOCORE = "my_score";

const CP_RESULT = "cp_result";
const GAME_RESULT = "game_result";

const WINNING_POINT = 30;
const LOSING_POINT = 30;
const GAMES_IN_A_SET=10;

let ELM_cp_result;
let ELM_kekka;

let ELM_btn_start;
let ELM_btn_reset;
let ELM_btns_myhand;
let ELM_btns_myhand_gu;
let ELM_btns_myhand_ch;
let ELM_btns_myhand_pa;

let ELM_img_main;
let ELM_img_cp;
let ELM_img_me;

let ELM_area_rank;
let ELM_area_game;
let ELM_area_my_socre;
let ELM_area_ranking;
let ELM_area_vir;
let ELM_area_set;
let ELM_area_anime_a;
let ELM_area_anime_b;
let ELM_area_anime_c;
let ELM_area_anime_d;


const ANIME_img_a = [ANM_IMG_A + "01.png", ANM_IMG_A + "02.png", ANM_IMG_A + "03.png", ANM_IMG_A + "04.png"];
const ANIME_img_b = [ANM_IMG_B + "01.png", ANM_IMG_B + "02.png", ANM_IMG_B + "03.png", ANM_IMG_B + "04.png", ANM_IMG_B + "05.png", ANM_IMG_B + "06.png", ANM_IMG_B + "07.png", ANM_IMG_B + "08.png", ANM_IMG_B + "09.png", ANM_IMG_B + "10.png"];
const ANIME_img_c = [ANM_IMG_C + "01.png", ANM_IMG_C + "02.png", ANM_IMG_C + "03.png", ANM_IMG_C + "04.png", ANM_IMG_C + "05.png", ANM_IMG_C + "06.png", ANM_IMG_C + "07.png", ANM_IMG_C + "08.png", ANM_IMG_C + "09.png", ANM_IMG_C + "10.png",
ANM_IMG_C + "11.png", ANM_IMG_C + "12.png", ANM_IMG_C + "13.png", ANM_IMG_C + "14.png", ANM_IMG_C + "15.png", ANM_IMG_C + "16.png", ANM_IMG_C + "17.png", ANM_IMG_C + "18.png", ANM_IMG_C + "19.png", ANM_IMG_C + "20.png",
ANM_IMG_C + "21.png", ANM_IMG_C + "22.png", ANM_IMG_C + "23.png", ANM_IMG_C + "24.png", ANM_IMG_C + "25.png", ANM_IMG_C + "26.png", ANM_IMG_C + "27.png", ANM_IMG_C + "28.png", ANM_IMG_C + "29.png", ANM_IMG_C + "30.png",
ANM_IMG_C + "31.png", ANM_IMG_C + "32.png", ANM_IMG_C + "33.png", ANM_IMG_C + "34.png", ANM_IMG_C + "35.png", ANM_IMG_C + "36.png", ANM_IMG_C + "37.png", ANM_IMG_C + "38.png", ANM_IMG_C + "39.png", ANM_IMG_C + "40.png"];

