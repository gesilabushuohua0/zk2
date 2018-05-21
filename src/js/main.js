require.config({
    baseUrl: "/js/",
    paths: {
        //库 
        "jquery": "./libs/jquery-2.1.1.min",
        "bscroll": "./libs/bscroll",
        "handle": "./libs/handlebars",
        // common
        "render": "./common/render",
        //  app
        "index": "./app/index"
    }
})
require(["index"])