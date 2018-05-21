require(["jquery", "bscroll", "handle", "render"], function($, bscroll, handle, render) {
    document.documentElement.style.fontSize = window.innerWidth / 750 * 100 + 'px'
        // var ball = document.querySelector(".ball");
    $(".ball").mousedown(function(ev) {
        var disX = ev.clientX - ev.offsetX;
        $("html").mousemove(function(ev) {
            var misX = ev.clientX - disX;
            if (misX > 522) {
                misX = 522
            } else if (misX < 0) {
                misX = 0
            }
            $(".ball").left(misX + "px")
            console.log(misX)
                // ball.style.left = misX + "px";
            $("html").mouseup(function(ev) {
                $(".ball").mousedown = null;
                $("html").mousemove = null;
            })
        })
    })
})