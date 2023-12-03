document.getElementById("locate").style.display = "none";
OK.onclick = function(){
    document.getElementById("form").style.display = "none";
    document.getElementById("backgroundForm").style.display = "none";
    let txt = "Мы определили твой город как " + myCity.value +
    ". Если ты ошибся, то это уже не наши проблемы. Теперь ты живёшь в городе " + myCity.value +".";
    alert(txt);
    document.getElementById("locate").style.display = "block";
    MyCityTxt.innerHTML = myCity.value;
}