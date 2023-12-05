let slides=document.getElementsByClassName("images");
let startStopbtn=document.getElementById("mainbutton")
let imgindex = 1;
let changingTime;
let running = false;

display(imgindex);

function nextbutton(num) {
  stopShow();
  display(imgindex=imgindex+1);
}

function mainbutton() {
  if (running) {
    stopShow();
   startStopbtn.innerText= "Start";
  } else {
    startShow();
    startStopbtn.innerText = "Stop";
  }
}

function startShow() {
  running = true;
  changingTime = setInterval(function () {
    display(imgindex =imgindex+ 1);
  }, 1000);
}

function stopShow() {
  running=false;
  clearInterval(changingTime);
}
function display(num) {
  let i;
  if(num>slides.length)
   {
       imgindex = 1
   }
  if(num < 1)
   {
       imgindex=slides.length
   }

  for(i=0;i<slides.length;i++)
  {
    slides[i].style.display="none";
  }

  slides[imgindex-1].style.display="block";
}