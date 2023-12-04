var timer;
active.onclick = function(){
    if(inputInMail.value == "BlackChurka" || inputInMail.value == "GreenTochka" ||
    inputInMail.value == "VkusniDima" || inputInMail.value == "BlackChurka " || 
    inputInMail.value == "GreenTochka " || inputInMail.value == "VkusniDima " || 
    inputInMail.value == ""){
        if(inputInMail.value == "BlackChurka" || inputInMail.value == "BlackChurka "){
            document.getElementById("cats1").style.position = "inherit";
            document.getElementById("cats2").style.position = "inherit";
            document.getElementById("cats3").style.position = "inherit";
            document.getElementById("cats4").style.position = "inherit";
            document.getElementById("cats5").style.position = "inherit";
        }
        else{
            
            document.getElementById("cats1").style.position = "fixed";
            document.getElementById("cats2").style.position = "fixed";
            document.getElementById("cats3").style.position = "fixed";
            document.getElementById("cats4").style.position = "fixed";
            document.getElementById("cats5").style.position = "fixed";
        }
        if(inputInMail.value == "GreenTochka" || inputInMail.value == "GreenTochka "){
            let background = 0;
            timer = setInterval(function() {
                if(background == 0){
                    body.style.background = "#EDFFBA";
                    document.querySelector(".header").style.background = "#EDFFBA";
                    document.querySelector(".user").style.background = "#97BA37";
                    document.querySelector(".userlogo").style.background = "#97BA37";
                    document.querySelector(".sectionMail").style.background = "#97BA37";
                    background++;
                }
                else if(background == 1){
                    body.style.background = "#FFEABA";
                    document.querySelector(".header").style.background = "#FFEABA";
                    document.querySelector(".user").style.background = "#FFD36B";
                    document.querySelector(".userlogo").style.background = "#FFD36B";
                    document.querySelector(".sectionMail").style.background = "#FFD36B";
                    background++;
                }
                else if(background == 2){
                    body.style.background = "#F97083";
                    document.querySelector(".header").style.background = "#F97083";
                    document.querySelector(".user").style.background = "#F93E58";
                    document.querySelector(".userlogo").style.background = "#F93E58";
                    document.querySelector(".sectionMail").style.background = "#F93E58";
                    background++;
                }
                else if(background == 3){
                    body.style.background = "#AD66D5";
                    document.querySelector(".header").style.background = "#AD66D5";
                    document.querySelector(".user").style.background = "#9F3ED5";
                    document.querySelector(".userlogo").style.background = "#9F3ED5";
                    document.querySelector(".sectionMail").style.background = "#9F3ED5";
                    background++;
                }
                else if(background == 4){
                    body.style.background = "#7573D9";
                    document.querySelector(".header").style.background = "#7573D9";
                    document.querySelector(".user").style.background = "#514ED9";
                    document.querySelector(".userlogo").style.background = "#514ED9";
                    document.querySelector(".sectionMail").style.background = "#514ED9";
                    background++;
                }
                else{
                    body.style.background = "#EDFFBA";
                    document.querySelector(".header").style.background = "#EDFFBA";
                    document.querySelector(".user").style.background = "#97BA37";
                    document.querySelector(".userlogo").style.background = "#97BA37";
                    document.querySelector(".sectionMail").style.background = "#97BA37";
                    background = 1;
                }
            }, 2000);
        }

        if(inputInMail.value == "VkusniDima" || inputInMail.value == "VkusniDima "){

        }
    }
    else{alert("Промокода либо никогда не существовало, либо он устарел.\nПроверься у доктора, чурка!!((");}
    inputInMail.value = "";
}