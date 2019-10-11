var hkcountDownDate;
hkcountDownDate = new Date("10 24 1601")
var x = setInterval(function() {
    var hknow = new Date().getTime();
    console.log(hkcountDownDate);
    var hkdistance = hknow - hkcountDownDate.getTime();
    var hkyears = Math.floor(hkdistance / (1000 * 60 * 60 * 24 * 365));
    var hkdays = Math.floor(hkdistance % (1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24));
    var hkhours = Math.floor((hkdistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var hkminutes = Math.floor((hkdistance % (1000 * 60 * 60)) / (1000 * 60));
    var hkseconds = Math.floor((hkdistance % (1000 * 60)) / 1000);
    var hkmiliseconds = Math.floor((hkdistance % 1000))
    document.getElementById("hk").innerHTML = hkyears + " Years " + hkdays + " Days " + hkhours + " Hours " + hkminutes + " Minutes " + hkseconds + " Seconds " + hkmiliseconds + " miliseconds";
}, 46);