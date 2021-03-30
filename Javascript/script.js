var counter = 1;
let b = document.getElementsByTagName("body");
function clicked() {
        if (counter==1) {
            b[0].style.background = "orange"
        };
        if (counter==2) {
            b[0].style.background = "yellow"
        };
        if (counter==3) {
            b[0].style.background = "green"
        };
        if (counter==4) {
            b[0].style.background = "blue"
        };
        if (counter==5) {
            b[0].style.background = "black"
        };
        if (counter==6) {
            b[0].style.background = "white"
        };
        if (counter==7) {
            b[0].style.background = "red"
        };
        if (counter==8) {
            counter=0;
            b[0].style.background = "cyan"

        };
        
    counter++;
    }

       
    






