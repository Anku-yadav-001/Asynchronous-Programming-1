let time
let second=0
let show=document.getElementById('show')

function start()
{
   
    time=setInterval(new_time,1000)
   
}
function pause()
{
    clearInterval(time)
      time=null
}
function reset()
{
    clearInterval(time)
    time=null
    second=0
    new_time();
    
}

function set_time(timeToseconds)
{
    let min=Math.floor(timeToseconds/60)
    let rem=timeToseconds%60
    let setminute=min>0?display(min)+':':'';
    let setsec=display(rem)
    return setminute+setsec
}
function new_time()
{
    second++;
    let settime=set_time(second)
    show.textContent=settime
}
function display(number) {
    if(number<10)
    {
        return '0'+number
    }
    else
    {
        return number
    }
   
}