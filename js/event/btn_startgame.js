//import ./js/uiux/sound.js
function startgame(){
  
  //ボタンを押したときの音を出力する
  
  //画面移動する前にアニメーションを表示する
  
  // //BGMを開始する

  // //audioオブジェクトを生成する
  // bgmSet("./sound/bgm01.mp3");
  
  // //ファイルを作ってその場所とファイル名を書く
  // bgmPlay();

  //点数をリセットする
  resetScore();

  //ゲーム数をリセットする
  resetTurns();
  
  //ゲームを表示する
  ELM_img_cp.style.display =  "inline-block";
  ELM_img_me.style.display =  "inline-block";
  ELM_img_cp.style.src =  "./cp01.jpg";
  ELM_img_me.style.src = "./me01.jpg";

  ELM_btn_reset.style.display = "inline-block";

  ELM_area_game.style.display = "block";
  ELM_area_my_score.style.display = "block";
  ELM_area_set.innerHTML ="";
  ELM_cp_result.innerText = "？";

  ELM_area_start.style.display = "none";
  ELM_area_ranking.style.display = "none";
  ELM_img_main.style.display = "none";
  ELM_btn_start.style.display = "none";

  
}
