'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// テスト実行用の関数定義
function test(actual, expected) {
    if (_.isEqual(actual, expected)) {
      console.log("Yay! Test PASSED.");
    } else {
      console.error("Test FAILED. Keep trying!");
      console.log("    actual: ", actual);
      console.log("  expected: ", expected);
      console.trace();
    }
  }

/////Day-8 Loop ナイトメア/////////////

console.log("ナイトメア Day8 loop")
/**
 * @param {Array<number>} arrNight - 数字からなる配列
 * @returns {Array<number>} 与えられた配列の数字が昇順に並び替えられた配列
 */

 function sort(arrNight) {
  const rank = []; //最終的に出力したい配列
  let lower = []; //一時的に使う、末尾から最大値を取り出す
  let kari = arrNight; //最大値を取り出すためのループ用仮配列
  let champ = arrNight.shift(); //初回のチャンプ,参照ではなく切り取る（初戦が[0],[0]にならないよう）
  
  for(let step = 0; step < arrNight.length; step++){
      
      kari.forEach(function (i){ //for...ofだと回らなかったのでforEach
         if(champ >= i){
             lower.unshift(i);
          } else if(champ < i){
              lower.push(champ);
              champ = i ;
          }
      }) //このループで最大値以外の配列ができる
      lower.push(champ); //最大値を末尾につける
      rank.unshift(lower.pop()); //最大値を先頭にランクインさせる
              
      kari = lower; //最大値を取り除いた配列をforEachに返す
      lower = []; //次のforEach用に初期化する
      champ = kari.shift(); //次のforEachで回す初代チャンプ
  }
  rank.unshift(champ); //最後まで残った最小値を先頭にランクインさせる
  return rank
}

////.filterとMath.max使ってリファクタリングする

function sortDay18(arrNight) {
    const rank = [];
    arrNight = arrNight.filter(element => typeof element === "number")
    let loop = arrNight.length;

    for(let i = 0; i < loop; i++){
        let champ = Math.min(...arrNight);
        rank.push(champ);
        arrNight.splice(arrNight.indexOf(champ),1)
    }
    return rank;
}
  
  ///////テストケース/////////////
  
  console.log("~素直な配列のケース~");
  let arrayToSort = [5, 4, 3, 2, 1];
  test((sortDay18(arrayToSort)),[1,2,3,4,5])
  
  console.log("~ややランダムのケース~");
  arrayToSort = [5, 4, 3, 2, 1, 6, 7, 2, 4, 2.3, 5, 32, 35, 27, 39];
  test((sortDay18(arrayToSort)),[1,2,2,2.3,3,4,4,5,5,6,7,27,32,35,39])
  
  console.log("~負数の混ざったケース~");
  arrayToSort = [-1,-12,8,6,8,5,4,3,2,1,6,7,2,4,2.3,5,32,35,27,39];
  test((sortDay18(arrayToSort)),[-12,-1,1,2,2,2.3,3,4,4,5,5,6,6,7,8,8,27,32,35,39])
  
  console.log("~文字列の混ざったケース~");
  arrayToSort = [-1,-12,8,6,"Dummy",5,4,3,2,1,6,7,2,4,2.3,5,32,35,27,39];
  test((sortDay18(arrayToSort)),[-12,-1,1,2,2,2.3,3,4,4,5,5,6,6,7,8,27,32,35,39])
