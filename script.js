(function (window) {
    var names = ["Yaakov", "Badr", "Ismail", "Adil", "Khouloud", "Ahmed", "Anas", "Ali", "Soulaiman", "Jim"];
  
    for (var i in names) {
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
  })(window);
  