$(document).ready(function(){
    function clock (){
        var d = new Date (),
            h = d.getHours(),
            m = d.getMinutes(),
            s = d.getSeconds();
        if(h < 10){ h = '0' + h; }
        if(m < 10){ m = '0' + m; }
        if(s < 10){ s = '0' + s; }
        $('.hour').text(h);
        $('.min').text(m);
        $('.sec').text(s);

        setTimeout(clock,1000);
    }
    clock();
});