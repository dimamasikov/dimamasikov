function move_ebullets()
{
    //var bul_del = 0;
    for (var i=ebuls.length-1;i>=0;i--)
    {
        ebuls[i].y+=7;
        if (cls_you_ebul(i) == 1) 
            return 1;   
        
        //if (bul_del==0)
        if (ebuls[i].y>550)
            ebuls.splice(i,1);
    }
}

function move_you(e)
{
    if (endgame == 1) return;
    if (e.keyCode==37)
        {youmovex = -1; youmovey = 0;}//youx -=youstepx;
    if (e.keyCode==39)
        {youmovex = 1; youmovey = 0;}//youx +=youstepx;
        
    if (e.keyCode==38)
        {youmovex = 0; youmovey = -1;}//youy -=youstepy;
    if (e.keyCode==40)
        {youmovex = 0; youmovey = 1;}//youy +=youstepy;
    if (e.keyCode==32)
        new_bullet();
        
    
}

function timer()
{
if (endgame == 1) return;
tcount++;

if (youx >= 800-5-imgx[1])
    { youmovex = -1; youmovey = 0; }
if (youx <= 0+5)
    { youmovex = 1; youmovey = 0; }
if (youy >= 600-5-imgy[1])
    { youmovey = -1; youmovex = 0; }
if (youy <= 200+5)
    { youmovey = 1; youmovex = 0; }

youx += youmovex*youstepx;
youy += youmovey*youstepy;

if (tcount % 50 == 0)
{
    for (var i=0;i<enemies.length;i++)
    {
        if (Math.random()<0.2+Math.min(0.1,0.001*(tcount % 100) ) )
            new_ebullet(i);
    }
}

move_bullets();
if (move_ebullets() == 1) return;
new_enemies();
document.onkeydown = move_you;
draw();
window.setTimeout("timer();", 20);
}

function ImagesInit()
{
  for (var i=0;i<=4;i++)
  {
    var tmp = new Image();
    tmp.src = imgstr[i];//i+".png";
    imgs.push(tmp);
  }
  
}

function draw()
{
    ImagesInit();
    var cnv = document.getElementById("canvas");
    var ctx = cnv.getContext("2d");
    
    ctx.drawImage(imgs[0],0,0);
    ctx.drawImage(imgs[1],youx,youy);
    
    for (var i=0;i<buls.length;i++)
    {
        ctx.drawImage(imgs[2],buls[i].x,buls[i].y);
    }
    
    for (var i=0;i<enemies.length;i++)
    {
        ctx.drawImage(imgs[3],enemies[i].x,enemies[i].y);
    }
    
    for (var i=0;i<ebuls.length;i++)
    {
        ctx.drawImage(imgs[4],ebuls[i].x,ebuls[i].y);
    }   
    ctx.fillStyle = "#FFFF00";
    ctx.font = "bold 30pt Arial";
    ctx.fillText(score+'',50,50);
    ctx.fillText(youx+' '+youy,550,50);
}

window.addEventListener("load",draw,true);
