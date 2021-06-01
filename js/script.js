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
        $(".dropdown").toggleClass('show');
    })

    $(".hamburger").click((e) => {
        $(".links").toggleClass("dropdown");
        $(".hamburger span").toggleClass("white");
        e.preventDefault();
    });
});