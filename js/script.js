$(() => {
    $(document).scroll(function () {
        $("nav").toggleClass('scrolled', $(this).scrollTop() > 0);
    });

    $("nav").hover(() => {
        if($(this).scrollTop() == 0){
            $("nav").toggleClass('scrolled');
        }
    })

    $(".dropdown-btn").hover(() => {
        $(".dropdown").toggleClass('drop');
    })

    $(".hamburger").click((e) => {
        $(".links").toggleClass("show");
        $(".hamburger span").toggleClass("white");
        e.preventDefault();
    });
});