value = document.getElementById("fill");
value1 = document.getElementById("container");
elm = document.getElementById("fill");
elm.innerHTML = Math.ceil((value.offsetWidth * 100)/value1.offsetWidth).toString()+"%";
