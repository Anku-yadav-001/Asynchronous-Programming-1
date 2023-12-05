
let show=document.getElementById('show')
let timer;
function start(){
  let totalsec= Number(document.getElementById('hours').value)*3600+
   Number(document.getElementById('minutes').value)*60+
   Number(document.getElementById('seconds').value)
 
  timer=setInterval(function()
  {
    if(totalsec<=0)
    {
        clearInterval(timer)
        alert("Time is up!")
    }
    else
    {
        let hrs=Math.floor(totalsec/3600)
        let min=Math.floor((totalsec%3600)/60)
        let sec=totalsec%60

        show.textContent=`${formatTime(hrs)}:${formatTime(min)}:${formatTime(sec)}`
        totalsec--
    }
  },1000)
}

function pause()
{
    clearInterval(timer)
}
function reset()
{
    clearInterval(timer)
        show.textContent="00:00:00"  
}
function formatTime(timer) {
    return timer < 10 ? `0${timer}` : timer;
}
