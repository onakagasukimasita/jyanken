let BGM;

//"./sound/bgm01.mp3"
function bgmSet(filepath){
    //audioオブジェクトを生成する
    //ファイルを作ってその場所とファイル名を書く
    BGM = new Audio(filepath);
  
    //audioオブジェクトの設定をする
    BGM.loop = true;
}
  
//1. ゲーム中ずっとBGMが流れる
function bgmPlay(){
    
    //audioオブジェクトのファンクションを呼び出す
    BGM.play();
}

function bgmPause(){
    BGM.pause();
}

function bgmOnOff(){
    if(BGM.muted){
       BGM.muted = false;
    }else{
       BGM.muted = true;
    }
        
}

//2. ボタンを押したら効果音
//3. CPの手が決まるまでの間BGM
//4. CPの手が決まった瞬間の効果音

