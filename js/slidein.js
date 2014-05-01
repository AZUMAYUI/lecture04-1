//クリック時に呼ばれるアニメーションの関数
var slideinFoxkeh = function(){
	//変数に画像を代入
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	//画像にクラスを追加（=>アニメーションする）
	foxkeh.setAttribute("class", "slidein");
};

//変数にボタンを代入
var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");
//ボタンにクリックイベントを追加
slideinFoxkehButton.addEventListener("click", slideinFoxkeh);
