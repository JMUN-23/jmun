let radiobtns = document.querySelectorAll("input[name='slider']");
var s1 = document.getElementById('s1');
var s2 = document.getElementById('s2');
var s3 = document.getElementById('s3');
var s4 = document.getElementById('s4');
var s5 = document.getElementById('s5');
var s6 = document.getElementById('s6');
var s7 = document.getElementById('s7');
var s8 = document.getElementById('s8');

let findSelected = () => {
    let selected = document.querySelector("input[name='slider']:checked").value;
    return selected
}

radiobtns.forEach(radiobtn => {
    radiobtn.addEventListener("change", findSelected);
});

function next() {
    var checked = findSelected();
    if (checked == "s1"){
        s1.checked = false;
        s2.checked = true;
    }
    if (checked == "s2"){
        s2.checked = false;
        s3.checked = true;
    }
    if (checked == "s3"){
        s3.checked = false;
        s4.checked = true;
    }
    if (checked == "s4"){
        s4.checked = false;
        s5.checked = true;
    }
    if (checked == "s5"){
        s5.checked = false;
        s6.checked = true;
    }
    if (checked == "s6"){
        s6.checked = false;
        s7.checked = true;
    }
    if (checked == "s7"){
        s7.checked = false;
        s8.checked = true;
    }
    if (checked == "s8"){
        s8.checked = false;
        s1.checked = true;
    }
}

function before() {
    var checked = findSelected();
    if (checked == "s1"){
        s1.checked = false;
        s8.checked = true;
    }
    if (checked == "s2"){
        s2.checked = false;
        s1.checked = true;
    }
    if (checked == "s3"){
        s3.checked = false;
        s2.checked = true;
    }
    if (checked == "s4"){
        s4.checked = false;
        s3.checked = true;
    }
    if (checked == "s5"){
        s5.checked = false;
        s4.checked = true;
    }
    if (checked == "s6"){
        s6.checked = false;
        s5.checked = true;
    }
    if (checked == "s7"){
        s7.checked = false;
        s6.checked = true;
    }
    if (checked == "s8"){
        s8.checked = false;
        s7.checked = true;
    }
}

