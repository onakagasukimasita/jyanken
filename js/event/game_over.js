
function gameOver(){
      
  //ボタンを押したときの音を出力する
  
  //画面移動する前にアニメーションを表示する
  
  //BGMを開始する
//   //audioオブジェクトを生成する
//   bgmSet("./sound/bgm01.mp3");
  
//   //ファイルを作ってその場所とファイル名を書く
//   bgmPlay();

  //ゲームを表示する
  ELM_game_area.style.display = "none";
  ELM_start_button.style.display = "block";

//   //ゲームオーバー画像を表示する
//   gameover_area = document.getElementById("gameover");
//   gameover_area.style.display = "block";

  //ランキングを表示する
  ELM_rank_area.style.display = "block";
  showHighScore(high_scores);
  
  ELM_img_main.src="./img/gameover.jpg";
  ELM_img_main.style.display = "block";

  ELM_img_cp.src="./img/cp01.jpg";
  ELM_img_me.src="./img/me01.jpg";
}
