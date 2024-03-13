document.addEventListener("DOMContentLoaded", function () {
  function change_text() {
    let hovered_text = "hello i am chip speaking. ̷̸̬̹̱͈̮͙̔̀̿̾͐̔͗́̑̄0̸̛̩̭̭̼̫̬͓̐͂̐͆͜ͅ_̧̛͍̪̜̇̔̋̔̾̊̕q̴̢̢̞̥̘̯̣̗̯̋̉̃ͅį̵̛̣̫̰ʜ̶̪̫̭̻̺̦͆ɔ̸̢̗͚̱̪͓̓̾̏͌ ̴̴͔͎͖̖̗̔̃͂͝0̶͈͎͔͈̯̭͔̓͒_̶̯̤̣̠̖͖̹͆q̵̣̟̭̘̪̘̙̉͗͝i̵̹̽͛̏̉ʜ̷̩̳̥̇̋͑͆̎ɔ̷̨͓̼͕͍̫̘͆̋̔ ̴̶̛̱͕̟͓̩͕̦̼̙̋͋͂͋̎̊̓͌͋͛̏͘0̵̗̏̓̋̍_̴̙͇̩̩̿̃̔̎̇͠q̢͓̠̱̮͍̃͛̈́̕ͅͅi̶̧̟̮̮̎͌̽̕͘̚͠ʜ̵̛̺̽̐͛̓̃̅ɔ"
    let unhovered_text = "index"
    let chip_01_talk = document.getElementById("chip_01_talk");

    if (chip_01_talk.innerHTML == hovered_text) {
      chip_01_talk.innerHTML = unhovered_text
    } else {
      chip_01_talk.innerHTML = hovered_text
    }
  }

  let chip_01 = document.getElementById("chip_01");
  chip_01.addEventListener("mouseenter", change_text);
  chip_01.addEventListener("mouseleave", change_text);
});


