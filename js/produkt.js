$(document).ready(function(){

    (function checkjs(){
         $('.nojs').removeClass('nojs');
     })();
    (function setswitcher(){
        var anchor = window.location.hash;
        contentswitch(anchor);
    })();
    function contentswitch(id){    

        //setTimeout($('.active').addClass('.out'), 1200);
        $('.active').hide();
        $('.active').removeClass('active');
        if (id !== "") {
            $(id+"container").addClass('active'); 
            $(id+"container").show();
        }
        else {
            $('#homecontainer').addClass('active');
            $('#homecontainer').show();
        }
    }
    $(document).on('click', '.box', function(){
        $this = $(this);
        var id = $this.attr('id');
        contentswitch('#'+id); //appending # for future selector use
    });
});
