$(function () {
    $(document).scroll(function () {
        $("nav").toggleClass('scrolled', $(this).scrollTop() > 0);
    });

    $(".hamburger").click((e) => {
        $(".links").toggleClass("dropdown");
        e.preventDefault();
    });
});