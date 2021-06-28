(function ($) {
    "use strict"; 

    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };

    navbarCollapse();

    $(window).scroll(navbarCollapse);

    $(function(){
        $(".dropdown-menu-employee").on('click', 'li', function(){
            $(".dropdown-toggle-employee:first-child").text($(this).text());
            $(".dropdown-toggle-employee:first-child").val($(this).val());
        });
    });
    
    $(function(){
        $(".dropdown-menu-service").on('click', 'li', function(){
            $(".dropdown-toggle-service:first-child").text($(this).text());
            $(".dropdown-toggle-service:first-child").val($(this).val());
        });
    });

    var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"]

    const picker = document.getElementById('date');
    const emp = document.getElementById('specialist');

    picker.addEventListener('input', function(e){
        var day = new Date(this.value).getUTCDay();
        if([6,0].includes(day)){
            e.preventDefault();
            alert('Sorry, we are closed in weekends. Please, choose a weekday');
        }
    });

     picker.addEventListener('input', function(e){

        var employee = emp.value;
        
        if(!employee){
            alert('Select an employee before preceeding to choose a date.');
        }
        else {
            var day = new Date(this.value).getUTCDay();

            if(emp.value=="1" && [4,5].includes(day)){
                alert('Sorry, Dr Kim will not be available the day you selected');
            }
            else if(emp.value=="2" && [1,5].includes(day)){
                alert("Sorry, Dr Kevin will not be available the day you selected");
            }
            else if(emp.value=="3" && [1,2].includes(day)){
                alert('Sorry, Dr Kevin will not be available the day you selected');
            }
        }
    });

})(jQuery); 
