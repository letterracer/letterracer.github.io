$(document).ready(function(){
    preloaded = [];
    i = 0;

    $("[data-preload]").each(function(){
        if (preloaded.indexOf($(this).data("preload")) == -1) {
            img = new Image();
            $(img).attr('data-src', $(this).data("preload"));

            img.onload = function(){
                $("[data-preload*='"+ this.dataset.src +"']").each(function(){
                    $(this).attr("data-preloaded", "loaded");
                });
            }

            img.src = $(this).data("preload");

            preloaded[i++] = img.src;
        }
    });

});