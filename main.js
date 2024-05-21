
var countries=
[{img:'https://th.bing.com/th/id/R.18b8231709d6d24115a10aad2e707ec3?rik=P%2bMM2v%2bmvqIxKQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-j2gDZLhKbdM%2fU5NSTzqGSFI%2fAAAAAAAAANg%2fweivueZYMLA%2fs1600%2fbrazilian-flag.jpg&ehk=BaBqOzeJpCZFTvJXntFZfaPc8%2bZpCoq%2b5y5a1O4vOB4%3d&risl=&pid=ImgRaw&r=0',
options:['Brazil','Russia','Turkey'],
Answer:'Brazil'},

{img:'https://pixelz.cc/wp-content/uploads/2018/11/palestine-flag-uhd-4k-wallpaper.jpg',
options:['Taiwan','Palestine','Tunisia'],
Answer:'Palestine'
},

{img:'https://th.bing.com/th/id/R.669f59b153cbc56e8b6a34867487bec7?rik=zagyFg0cDqDGyQ&riu=http%3a%2f%2fstatic4.wikia.nocookie.net%2f__cb20130504133947%2fcso%2fimages%2f3%2f33%2fThailand_flag.png&ehk=at3%2fdlez9kbx%2fdopvGqOawpuKhxK9f5ykTas0BzuPQI%3d&risl=&pid=ImgRaw&r=0',
options:['Thailand','Frensh','Ghana'],
Answer:'Thailand'

},
{img:'https://th.bing.com/th/id/R.b5d74e6e660be41bf30e69f97e9423cc?rik=S8BuaHG6ipgRHQ&pid=ImgRaw&r=0',
options:['Japan','Russia','Morocco '],
Answer:'Russia'
},
{img:'https://th.bing.com/th?id=OIP.1ePFWcLvb34xfLm--tEcXAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
options:['Serbia','Polanda','Mali'],
Answer:'Serbia'
},
{img:'https://piggotts.co.uk/wp-content/uploads/2018/01/2000px-Flag_of_the_Republic_of_China.svg_.png',
options:['Taiwan','sudan','Tanzania '],
Answer:'Taiwan'

},
{
img:'https://clipartnepal.com/wp-content/uploads/2023/09/Flag-of-USA-Flag-of-United-States-Of-America.jpg',
options:['USA','Panama','Philippines'],
Answer:'USA'

}]

    function randInt(n) {
        return Math.floor(Math.random() * n );
      }

var currentCountry=0
var Myanswer=0
var counter=0
function initializeGame(){
    var country=countries[randInt(countries.length)]
    currentCountry=country
    Myanswer=0
    $('#btns').empty() //remove content of the div element
   $('#flag').attr('src',currentCountry.img)
   for(var i=0;i<currentCountry.options.length;i++){
    var btn=document.createElement('button')
    btn.className='btns'
    btn.innerText=currentCountry.options[i]
    btn.addEventListener('click',chooseAnswer)
    $('#btns').append(btn)
   }
}

$("#move").click(function () {
    if (currentCountry.Answer === Myanswer) {
        counter++;
        $("#game").html(`<h3>You Win</h3><br><button class='StartAgain' onClick='resetGame()'>Continue (${counter})</button>`);
    } else {
        $("#game").html("<h3>You Lose</h3><br><button class='StartAgain' onClick='resetGame()'>Start Again</button>");
    }
    
})
function chooseAnswer(event) {
    Myanswer = event.target.innerText;
}

function resetGame(){
    window.location.reload()
  }



$(document).ready(initializeGame)

 
