// Функция, которая будет вызываться при нажатии на кнопку
function performOperations() {
    // Получаем значения из полей ввода
    var fullName = document.getElementById("fullName").value;
    var birthdate = document.getElementById("birthdate").value;
    var hobbies = document.getElementById("hobbies").value;
  
    // Задание 1
    var greetingBlock = document.getElementById("greetingBlock");
    var greeting = getGreeting(fullName);
    greetingBlock.innerHTML = greeting;
  
    // Задание 2
    var daysLeftBlock = document.getElementById("daysLeftBlock");
    var daysLeft = getDaysLeft(birthdate);
    daysLeftBlock.innerHTML = "До вашего дня рождения осталось " + daysLeft + " дней.";
  
    // Задание 3
    var birthInfoBlock = document.getElementById("birthInfoBlock");
    var birthInfo = getBirthInfo(birthdate);
    birthInfoBlock.innerHTML = birthInfo;
  
    // Задание 4
    var seasonImageBlock = document.getElementById("seasonImageBlock");
    var season = getSeason(birthdate);
    seasonImageBlock.innerHTML = "<img src='" + season + ".jpg' alt='" + season + "'>";
  
    // Задание 5
    localStorage.setItem("greeting", greeting);
  
    // Задание 6
    var hobbiesBlock = document.getElementById("hobbiesBlock");
    var sortedHobbies = sortHobbies(hobbies);
    hobbiesBlock.innerHTML = "Ваши хобби (" + sortedHobbies.length + "): " + sortedHobbies.join(", ");
  }
  
  // Функция, которая будет вызываться при загрузке страницы
  function onPageLoad() {
    var storedGreeting = localStorage.getItem("greeting");
    if (storedGreeting) {
      var greetingBlock = document.getElementById("greetingBlock");
      greetingBlock.innerHTML = storedGreeting;
    }
  }
  
  // Задание 1
  function getGreeting(fullName) {
    var nameParts = fullName.split(" ");
    var firstName = nameParts[1];
    var lastName = nameParts[nameParts.length - 1];
    var time = new Date().getHours();
    var greeting = "";
    if (time < 12) {
      greeting = "Доброе утро, " + firstName + " " + lastName;
    } else if (time < 18) {
      greeting = "Добрый день, " + firstName + " " + lastName;
    } else {
      greeting = "Добрый вечер, " + firstName + " " + lastName;
    }
    return greeting;
  }
  
  // Задание 2
  function getDaysLeft(birthdate) {
    var today = new Date();
    var nextBirthday = new Date(birthdate);
    nextBirthday.setFullYear(today.getFullYear());
  
    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }
  
    var timeDiff = nextBirthday.getTime() - today.getTime();
    var daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysLeft;
  }
  
  // Задание 3
  function getBirthInfo(birthdate) {
    var daysOfWeek = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    var seasons = ["зимний", "весенний", "летний", "осенний"];
  
    var date = new Date(birthdate);
    var dayOfWeek = daysOfWeek[date.getDay()];
    var month = date.getMonth();
    var season = seasons[Math.floor((month % 12) / 3)];
  
    var birthInfo = "Вы родились в " + dayOfWeek + ", чудесный " + season + " день.";
    return birthInfo;
  }
  
  // Задание 4
  function getSeason(birthdate) {
    var date = new Date(birthdate);
    var month = date.getMonth();
    var season = "";
    if (month >= 2 && month <= 4) {
      season = "весна";
    } else if (month >= 5 && month <= 7) {
      season = "лето";
    } else if (month >= 8 && month <= 10) {
      season = "осень";
    } else {
      season = "зима";
    }
    return season;
  }
  
  // Задание 6
  function sortHobbies(hobbies) {
    var hobbiesArray = hobbies.split(",");
    hobbiesArray = hobbiesArray.map(function(hobby) {
      return hobby.trim();
    });
    hobbiesArray.sort(function(a, b) {
      return a.length - b.length;
    });
    return hobbiesArray;
  }
  
  // Вызываем функцию при загрузке страницы
  window.onload = onPageLoad;
  