let gulp = require("gulp");
let server = require("gulp-webserver");
gulp.task("server", function() {
    gulp.src("src")
        .pipe(server({
            port: 3434,
            open: true,
            livereload: true
                // middleware:function(req,res,next){

            // }
        }))
})
gulp.task("default", ["server"], function() {})