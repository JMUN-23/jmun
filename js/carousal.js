// let radiobtns = document.querySelectorAll("input[name='slider']");
// var s1 = document.getElementById('s1');
// var s2 = document.getElementById('s2');
// var s3 = document.getElementById('s3');
// var s4 = document.getElementById('s4');
// var s5 = document.getElementById('s5');
// var s6 = document.getElementById('s6');
// var s7 = document.getElementById('s7');
// var s8 = document.getElementById('s8');

// let findSelected = () => {
//     let selected = document.querySelector("input[name='slider']:checked").value;
//     return selected
// }

// radiobtns.forEach(radiobtn => {
//     radiobtn.addEventListener("change", findSelected);
// });

// function next() {
//     var checked = findSelected();
//     if (checked == "s1"){
//         s1.checked = false;
//         s2.checked = true;
//     }
//     if (checked == "s2"){
//         s2.checked = false;
//         s3.checked = true;
//     }
//     if (checked == "s3"){
//         s3.checked = false;
//         s4.checked = true;
//     }
//     if (checked == "s4"){
//         s4.checked = false;
//         s5.checked = true;
//     }
//     if (checked == "s5"){
//         s5.checked = false;
//         s6.checked = true;
//     }
//     if (checked == "s6"){
//         s6.checked = false;
//         s7.checked = true;
//     }
//     if (checked == "s7"){
//         s7.checked = false;
//         s8.checked = true;
//     }
//     if (checked == "s8"){
//         s8.checked = false;
//         s1.checked = true;
//     }
// }

// function before() {
//     var checked = findSelected();
//     if (checked == "s1"){
//         s1.checked = false;
//         s8.checked = true;
//     }
//     if (checked == "s2"){
//         s2.checked = false;
//         s1.checked = true;
//     }
//     if (checked == "s3"){
//         s3.checked = false;
//         s2.checked = true;
//     }
//     if (checked == "s4"){
//         s4.checked = false;
//         s3.checked = true;
//     }
//     if (checked == "s5"){
//         s5.checked = false;
//         s4.checked = true;
//     }
//     if (checked == "s6"){
//         s6.checked = false;
//         s5.checked = true;
//     }
//     if (checked == "s7"){
//         s7.checked = false;
//         s6.checked = true;
//     }
//     if (checked == "s8"){
//         s8.checked = false;
//         s7.checked = true;
//     }
// }

const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth/1.5 ;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 2400, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1000, fill: "forwards" });
  }
}

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);

