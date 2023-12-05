let timer
let show=document.getElementById('show')

function start()
{
    let totalSeconds=Number(document.getElementById('hours').value)*3600+
    Number(document.getElementById('minutes').value)*60+
    Number(document.getElementById('seconds').value)

timer=setInterval(function()
 {
    if(totalSeconds<=0)
    {
        alert("Time is up!")
        clearInterval(timer)
    }
    else
    {
        let hrs=Math.floor(totalSeconds/3600)
        let min=Math.floor((totalSeconds%3600)/60)
        let sec=Math.floor(totalSeconds%60)
        show.textContent=`${formatTime(hrs)}:${formatTime(min)}:${formatTime(sec)}`
        totalSeconds--;
    }
}, 1000);
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
function formatTime(timer)
{
    return timer<10? `0${timer}`:timer;
}