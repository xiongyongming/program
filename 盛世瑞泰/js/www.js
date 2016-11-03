window.onload=function(){
    $(function(){
        $.fn.extend({
            ss:function(){
                var _this=$(this);
                _this.find(".li1_top_more").toggle(function(){
                    _this.find(".li1_btm_hdn").stop(true,true).slideDown("slow");
                },function(){
                    _this.find(".li1_btm_hdn").stop(true,true).slideUp("fast");
                })
            }
        });
        $(function(){
            $(".wenzilist_ul1 li").eq(0).ss();
            $(".wenzilist_ul1 li").eq(1).ss();
            $(".wenzilist_ul1 li").eq(3).ss();
            $(".wenzilist_ul2 li").eq(3).ss();
        })
    })
}
