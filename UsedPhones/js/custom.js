let pageNum = 0;
$(document).ready(function(){
    $(function(){
        $("#head").load("meta.html");
        $("#header").load("header.html");
        $("#footer").load("footer.html");
    });

    if($(this).scrollTop() > 150){
        $("#header").addClass('scrolledHeader');
    } else {
        $("#header").removeClass('scrolledHeader');
    }

    $('#buttonL').click(function(){
        pageNum--;
        pageNumCheck();
        pageChange();
    })
    $('#buttonR').click(function(){
        pageNum++;
        pageNumCheck();
        pageChange();
    })

    $('#buttonL_after').click(function(){
        pageNum--;
        pageNumCheck();
        pageChange();
    })
    $('#buttonR_after').click(function(){
        pageNum++;
        pageNumCheck();
        pageChange();
    })

    $('.colorNav label input').on('change', function() {
        var title = $(this).attr('title')
        $('.productColorImgField div img').each(function () {
            var alt = $(this).attr('alt')
            if(alt.includes(title)){
                $(this).parent().addClass('active')
            } else {
                $(this).parent().removeClass('active')
            }
        })
    })

    function pageNumCheck(){
        if(pageNum <= 0){
            pageNum = 0;
        } else if(pageNum >= 2){
            pageNum = 2;
        }
    }
    function pageChange(){
        if(pageNum === 0){
            $('#pageField').css('left', 0 + '%')
            console.log(pageNum);
        } else if(pageNum === 1){
            $('#pageField').css('left', -100 + '%')
            console.log(pageNum);
        } else if(pageNum === 2){
            $('#pageField').css('left', -200 + '%')
            console.log(pageNum);
        }
    }


});