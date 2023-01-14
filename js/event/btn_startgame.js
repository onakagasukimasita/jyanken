//import ./js/uiux/sound.js

function startgame(){
  
  //ボタンを押したときの音を出力する
  
  //画面移動する前にアニメーションを表示する
  
  //BGMを開始する

  //audioオブジェクトを生成する
  bgmSet("./sound/bgm01.mp3");
  
  //ファイルを作ってその場所とファイル名を書く
  bgmPlay();

  //点数をリセットする
  resetScore();
  
  //ゲームを表示する
　game_area = document.getElementById("game");
  game_area.style.display = "block";
  
　start_button = document.getElementById("start_button");
  start_button.style.display = "none";
  
}
