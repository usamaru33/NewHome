window.onload = function() {
  console.log("script.js has been loaded successfully");

  // ボタンのサイズを設定する関数
  function setButtonWidth() {
    // 画面の幅を取得
    var screenWidth = window.innerWidth;
    // 画面の幅を4等分したサイズを計算
    var buttonWidth = screenWidth / 4;

    // ボタンを取得
    var buttons = document.getElementsByClassName("btn");
    
    // ボタンの幅を設定
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].style.width = buttonWidth + "px";
    }
  }

  // 最初に1回実行してボタンの初期サイズを設定
  setButtonWidth();

  // 画面サイズが変更されるたびにボタンのサイズを再設定
  window.addEventListener('resize', setButtonWidth);
}