$(() => {
    $(document).scroll(function () {
        $(".navbar").toggleClass('scrolled', $(this).scrollTop() > 0);
    });

    $(".navbar").hover(() => {
        if($(this).scrollTop() == 0){
            $(".navbar").toggleClass('scrolled');
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