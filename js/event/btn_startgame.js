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
  ELM_game_area.style.display = "block";
  ELM_start_button.style.display = "none";
  ELM_rank_area.style.display = "none";
  ELM_area_my_socre.style.display = "block";
  ELM_img_main.style.display = "none";
  ELM_img_cp.style.display =  "inline-block";
  ELM_img_cp.style.src =  "./cp01.jpg";
  ELM_img_me.style.display =  "inline-block";
  ELM_img_me.style.src = "./me01.jpg";
  ELM_area_set.innerHTML ="";
  
}
