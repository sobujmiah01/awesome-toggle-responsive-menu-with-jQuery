$(".fa-times").hide();
$(".fa-bars").click(function(){
    $(this).hide(function(){
        $(".nav-menu").show(400, function(){
            $(".fa-times").show(function(){
                $(".fa-times").click(function(){
                    $(".fa-times").hide(4, function(){
                        $(".fa-bars").show(4, function(){
                            $(".nav-menu").hide(400);
                        })
                    })
                })
            });
        });
    });
    
    
});