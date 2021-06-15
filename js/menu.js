let foods = [
    {
        name : "BBQ Beef",
        price : "Rp. 50.000",
        image : "food/food1.jpg"
    },
    {
        name : "Chicken Katsu",
        price : "Rp. 45.000",
        image : "food/food2.jpg"
    },
    {
        name : "Dolsot Bibimbap",
        price : "Rp. 40.000",
        image : "food/food3.jpeg"
    },
    {
        name : "Jajangmyeon",
        price : "Rp. 35.000",
        image : "food/food4.jpg"
    },
    {
        name : "Cheesy Chicken",
        price : "Rp. 40.000",
        image : "food/food5.jpg"
    },
    {
        name : "Beef Bulgogi",
        price : "Rp. 40.000",
        image : "food/food6.jpg"
    },
    {
        name : "Cheese Dakgalbi",
        price : "Rp. 50.000",
        image : "food/food7.jpg"
    },
    {
        name : "Naengmyeon",
        price : "Rp. 35.000",
        image : "food/food8.jpg"
    }
]

let drinks = [
    {
        name : "Soju",
        price : "Rp. 30.000",
        image : "drink/drink1.jpg"
    },
    {
        name : "Milkshake",
        price : "Rp. 20.000",
        image : "drink/drink2.jpg"
    },
    {
        name : "Dalgona Coffee",
        price : "Rp. 35.000",
        image : "drink/drink3.jpg"
    },
    {
        name : "Boba Milk Tea",
        price : "Rp. 20.000",
        image : "drink/drink4.jpg"
    }
]

let desserts = [
    {
        name : "Kimchi",
        price : "Rp. 20.000",
        image : "dessert/dessert1.jpg"
    },
    {
        name : "Tteokbokki",
        price : "Rp. 25.000",
        image : "dessert/dessert2.jpg"
    },
    {
        name : "Macaron",
        price : "Rp. 30.000",
        image : "dessert/dessert3.jpg"
    },
    {
        name : "Ice Cream",
        price : "Rp. 20.000",
        image : "dessert/dessert4.jpg"
    }
]

$(() => {
    renderSlides();
    renderMenu(getParams());
})

const renderSlides = () => {
    const slides = $("#slideshow .wrapper");

    let index = 0;

    const slideShow = () => {
        index <= slides.length ? index++ : index = 0
        changeSlide(index)
    }

    let slideInterval = setInterval(slideShow, 3000);

    const changeSlide = i => {
        $(".control button").each((_, item) => {
            $(item).removeClass('current')
        });

        index = i;
        $(".control").children().eq(index).addClass('current');
        
        slides.css('transform', 'translateX(-'+ (index*100) +'%)')

        clearInterval(slideInterval)
        slideInterval = setInterval(slideShow, 3000);
    }

    $(".control button").each((i, item) => {
        $(item).on("click", () => {
            changeSlide(i);
        })
    })
}

const renderMenu = (category) => {
    console.log(category);
    let menus;

    switch(category){
        case "food":
            menus = foods;
            $("#menu .title").html("Foods");
            break;
        case "drink":
            menus = drinks;
            $("#menu .title").html("Drinks");
            break;
        case "dessert":
            menus = desserts;
            $("#menu .title").html("Desserts");
            break;
        default:
            menus = foods;
            $("#menu .title").html("Foods");
            break;
    }

    $("#menu .content").empty();

    $(menus).each((i, item) => {
        let element = `
            <div class="item">
                <img width="400" height="400" src="../images/menu/${item.image}" alt="">
                <div class="text">
                    <p class="menu-name">${item.name}</p>
                    <p class="menu-price">${item.price}</p>
                    <button class="order-btn">Order</button>
                </div>
            </div>
        `
        $("#menu .content").append(element);
    })
}

const getParams = () => {
    let url = new URLSearchParams(window.location.search);
    console.log(url.get('category'));
    return url.get('category');
}

$("#categories .item").each((i, item) => {
    $(item).on("click", () => {
        renderMenu($(item).data("category"));
    })
})