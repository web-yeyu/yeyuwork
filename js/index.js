window.onload = function () {
    var open1 = document.getElementById("itemopen1");
    var open2 = document.getElementById("itemopen2");
    var open3 = document.getElementById("itemopen3");
    var open4 = document.getElementById("itemopen4");

    var openhid1 = document.getElementById("ohid1");
    var openhid2 = document.getElementById("ohid2");

    var openhid3 = document.getElementById("ohid3");

    var openhid4 = document.getElementById("ohid4");


    open1.onclick = function () {
        var oh1 = openhid1.style.display;
        if(oh1 == 'none'){
            openhid1.style.display = 'block';

        }
        else{
            openhid1.style.display = 'none';
        }
    }
    open2.onclick = function () {
        var oh2 = openhid2.style.display;
        if(oh2 == 'none'){
            openhid2.style.display = 'block';

        }
        else{
            openhid2.style.display = 'none';
        }
    }
    open3.onclick = function () {
        var oh3 = openhid3.style.display;
        if(oh3 == 'none'){
            openhid3.style.display = 'block';

        }
        else{
            openhid3.style.display = 'none';
        }
    }
    open4.onclick = function () {
        var oh4 = openhid4.style.display;
        if(oh4 == 'none'){
            openhid4.style.display = 'block';

        }
        else{
            openhid4.style.display = 'none';
        }
    }
}