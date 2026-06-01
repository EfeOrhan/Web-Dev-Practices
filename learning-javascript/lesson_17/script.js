const input = document.getElementById("text");

// function onKeyPress() {
//     console.log("keypress");
// }
// function onKeyUp() {
//     console.log("keyup");
// }

// input.addEventListener("keypress", onKeyPress);
// input.addEventListener("keyup", onKeyUp);

function onKeyDown(e) {

    // console.log(e);
    // console.log(e.key);
    // document.querySelector("h2").innerText += e.key;

    // if(e.key == 'Enter'){
    //     alert("Enter Tıklandı");
    // }

    // if(e.keyCode == 13){
    //     alert("Enter Tıklandı");
    // }

    // if(e.repeat) {
    //     alert(`${e.key} tuşuna basılı kaldı`)
    // }

    // if(e.ctrlKey && e.key === 'a'){
    //     alert("ctrl + a tuşuna basıldı")
    // }
}


input.addEventListener("keydown", onKeyDown);
