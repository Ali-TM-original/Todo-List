function what_time(){
    let time_label = document.getElementById("main_clock");
    let current_time = new Date().toLocaleTimeString();
    time_label.innerHTML = current_time

}

setInterval(what_time, 1000);