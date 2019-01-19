  function clickCounter() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = localStorage.clickcount + " points for Porter!";
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }

  function clickCounter3() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+2;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = localStorage.clickcount + " points for Porter!";
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }

  function clickCounter2() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount2) {
        localStorage.clickcount2 = Number(localStorage.clickcount2)+1;
      } else {
        localStorage.clickcount2 = 1;
      }
      document.getElementById("result2").innerHTML = localStorage.clickcount2 + " points for Tanner!";
    } else {
      document.getElementById("result2").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }

  function clickCounter4() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount2) {
        localStorage.clickcount2 = Number(localStorage.clickcount2)+2;
      } else {
        localStorage.clickcount2 = 1;
      }
      document.getElementById("result2").innerHTML = localStorage.clickcount2 + " points for Tanner!";
    } else {
      document.getElementById("result2").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }
