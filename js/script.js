function loading_ranking(){
        var req = new XMLHttpRequest();
        req.onreadystatechange = function () {

          //通信が正常に終了したらtrue
          if (req.readyState == 4 && req.status == 200) {
            var data = req.responseText;

            //JSON形式に整形して分解
            data = data.slice(9);
            data = data.slice(0, -1);
            data = JSON.parse(data);

            //ID = ranking の末尾に追加していく
            for (var rank of data) {
              // 着色部、緑まで実装
              var color = "user-gray";
              if(rank.rate >= 800) {
                color = "user-green";
              } else if(rank.rate >= 400) {
                color = "user-brown";
              }
              var prize = "";
              if(rank.id == 1) {
                prize = "rank-one";
              } else if(rank.id == 2) {
                prize = "rank-two";
              } else if(rank.id == 3) {
                prize = "rank-three";
              } else {
                prize = "rank-none";
              }

              // rank.idは１位２位とかのこと
              ranking.insertAdjacentHTML('beforeend', "<div class=\"" + color + "\"><p class=" + prize + ">"  + rank.id + "位: <a href=\"https://atcoder.jp/users/" + rank.name + "\"><span>" + rank.name + "</span></a><br>Rate: <span>" + rank.rate + "</span></p><br></div>");
            }
          }
        }
        req.open("GET", "https://script.googleusercontent.com/macros/echo?user_content_key=lBE4g0hiF8pDfP8gbZl1tDh3K6KlYRGiSwKp0F1hTgkZwFLnxLkskI9DOZV3m75Xz0SbyJVACkzYoznKLpCokMXVaHjAD0Xzm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnImwa1Ljh79acqiccorGlUWbajjEsXkHCqAy-VkcnHPegNifGoa4RSAhxke7gnniv5A9qcqyBKQ0&lib=MmJqW04Kw7Atw0OOQ1TKlpPhzGMXrOBqh", false);
        //今回はGETなので引数はnull
        req.send(null);
      }
      window.onload = loading_ranking;