
export default () => {
  // User Agent Check
  const ua = navigator.userAgent;
  var playableInlineVideo = false;

  //Androidの判定
  if (/Android/.test(ua)) {
      //標準ブラウザかどうか判定
      if ((/Android/.test(ua) && /Linux; U;/.test(ua) && !/Chrome/.test(ua)) || (/Android/.test(ua) && /Chrome/.test(ua) && /Version/.test(ua)) || (/Android/.test(ua) && /Chrome/.test(ua) && /SamsungBrowser/.test(ua))) {
          playableInlineVideo = false;
      } else {
          //Chrome for Androidのバージョン取得
          var chromever = ua.match(/Chrome\/([\d]+)/).slice(1);
          //53以上か判定
          if(chromever >= 53){
              playableInlineVideo = true;
          }
      }
  //iPhone-iPad-iPodの判定
  } else if (/iP(hone|od|ad)/.test(ua)) {
      //iOSバージョンの取得
      var iOSver = ua.match(/iP(hone|od|ad) OS ([\d]+)/).slice(2);
      //iOS10以上か判定
      if(iOSver >= 10){
          playableInlineVideo = true;
      }
  //いずれにも該当しない場合
  } else {
      playableInlineVideo = false;
  }
  // console.log(ua);
};
