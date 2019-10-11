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

var mscountDownDate;
mscountDownDate = new Date("1 1 1000")
var x = setInterval(function() {
    var msnow = new Date().getTime();
    console.log(mscountDownDate);
    var msdistance = msnow - mscountDownDate.getTime();
    var msyears = Math.floor(msdistance / (1000 * 60 * 60 * 24 * 365));
    var msdays = Math.floor(msdistance % (1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24));
    var mshours = Math.floor((msdistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var msminutes = Math.floor((msdistance % (1000 * 60 * 60)) / (1000 * 60));
    var msseconds = Math.floor((msdistance % (1000 * 60)) / 1000);
    var msmiliseconds = Math.floor((msdistance % 1000))
    document.getElementById("ms").innerHTML = (msyears + 2273) + " Years " + msdays + " Days " + mshours + " Hours " + msminutes + " Minutes " + msseconds + " Seconds " + msmiliseconds + " miliseconds";
}, 46);