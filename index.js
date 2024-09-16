score=0
cross=true
audio=new Audio('music.mp3')
audiogo=new Audio('gameover.mp3')


document.onkeydown=function(e){
    console.log("key code is: ",e.keyCode)
    if(e.keyCode==38){
        dino=document.querySelector('.dino')
        dino.classList.add('animateDino')
        setTimeout(()=>{
            dino.classList.remove('animateDino')
        },700)
    }
    if(e.keyCode==39){
        dino=document.querySelector('.dino')
        dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
        dino.style.left=dinox+110+'px'
    }
    if(e.keyCode==37){
        dino=document.querySelector('.dino')
        dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
        dino.style.left=(dinox-110)+'px'
    }
    
   setTimeout(()=>{
    audio.play()
},50)
}


setInterval(()=>{
    dino=document.querySelector('.dino')
    gameOver=document.querySelector('.gameOver')
    obstical=document.querySelector('.obstical')

    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'))

    ox=parseInt(window.getComputedStyle(obstical,null).getPropertyValue('left'))
    oy=parseInt(window.getComputedStyle(obstical,null).getPropertyValue('top'))

    offsetX=Math.abs(dx-ox)
    offsetY=Math.abs(dy-oy)
    if(offsetX<93&&offsetY<52){
        gameOver.style.visibility='visible'
        obstical.classList.remove('dragon')
        cross=false
        if(score>0){
            score-=1
            updateScore(score)
        }
        else{
            updateScore(score)
           
        }
        audiogo.play()
            setTimeout(()=>{
                audiogo.pause()
                audio.pause()
            },1000)
    }
     else if(offsetX<145 &&cross){
        score+=1;
        updateScore(score)
        cross=false
        setTimeout(()=>{
            cross=true
        },1000)
    }

},100)

function updateScore(score){
    var count=document.querySelector('.count')
    count.innerHTML='Your Score: '+score
}

