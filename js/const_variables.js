
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
