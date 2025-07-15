function showOrHide() {//パスワードを表示するか隠すかを判断するプログラム
    let showpass = document.getElementById("pass");
    let check = document.getElementById("showpassword");
    if (check.checked) {
      showpass.type = "text";
    } else {
      showpass.type = "password";
    }
  }
  
  let userdata = [
    //必要に応じてここにログイン情報を追加する。
    //例:{name: "user4",age: 24, email: "user4@exam@;e.com" password: "user-4"}
    { name: "5276", age: 25, email: "tsuji@example.com", password: "0222" }
  ];
  
  function login() {
    var loginuser = ""
    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;
    console.log(username);
    console.log(password);
  
    var found = false;
    var i = 0;
  
    while (!found && i < userdata.length) {//foundがtrueを返すかuserdataのlengthがiより少なくなるまで以下の処理を実行
      var loginobj = userdata[i];
      var loginuser = loginobj.name;
      var loginpass = loginobj.password;
      if (loginobj.hasOwnProperty("name") && loginobj.hasOwnProperty("password")) {//データが破損していないかの確認（参考:chatgpt）
        if (loginuser == username) {
          if (loginpass == password) {
            found = true;
          }
        }
      }
      i++;
    }
  
    if (found) {/*foundがtrueの場合にcontainer2の要素(<p>)を上書きする。*/
      alert(`こんにちは。${username}さん。`);
      console.log(`logined is ${username}`);
    
      var url = "https://teruakitsuji.github.io/m-cup/";
	  window.location.href = url;
    } else {
      alert("ログインに失敗しました。入力している内容がデータと一致しませんでした。間違いがない場合は、ユーザーデータが破損している可能性があります。入力内容に誤りのない場合は、javascriptファイルのuserdata変数を確認してください。\nEnglish...Login failed. Data in the user data variable may be corrupted or entered incorrectly. If there are no typos in what you entered, please check the userdata variable in javascript.");
      console.log("Login failed. Data in the user data variable may be corrupted or entered incorrectly. If there are no typos in what you entered, please check the userdata variable in javascript.");
    }
  }