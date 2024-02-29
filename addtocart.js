const product = [
  {
    id: 0,
    image:
      "https://static.dormanproducts.com/images/product/icon_nw/600-102XD-007.JPG",
    title: "4WD Components",
    price: 370,
  },
  {
    id: 1,
    image:
      "https://static.dormanproducts.com/images/product/icon_nw/674-694XD-007.jpg",
    title: "Exhaust Manifolds",
    price: 320,
  },
  {
    id: 2,
    image:
      "https://static.dormanproducts.com/images/product/icon_nw/819-876-007.jpg",
    title: "Flexible Fuel Lines",
    price: 300,
  },
  {
    id: 3,
    image:
      "https://static.dormanproducts.com/images/product/icon_nw/949-099-007.JPG",
    title: "Active Suspension",
    price: 200,
  },
  {
    id: 4,
    image:
      "https://static.dormanproducts.com/images/product/icon_nw/603-645-007.JPG",
    title: "Fluid Reservoirs",
    price: 150,
  },
  {
    id: 5,
    image:
      "https://static.dormanproducts.com/images/product/icon_nw/599-211-007.JPG",
    title: "Climate Control",
    price: 120,
  },
];

const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
let i = 0;
document.getElementById("root").innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;
    return (
      `<div class='box'>
            <div class='img-box'>
                <img class='images' src='${image}'></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>$ ${price}.00</h2>` +
      "<button onclick='addtocart(" +
      i++ +
      ")' class='mybtn'>Add to Cart</button> " +
      `</div>
        </div>`
    );
  })
  .join("");

var cart = [];

function addtocart(a) {
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a,1);
    displaycart();
}


function displaycart(a) {
  let j = 0,total=0;
  document.getElementById('count').innerHTML=cart.length;
    if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Your Cart is Empty!!";
    document.getElementById('total').innerHTML = "$ "+0+".00";
  } else {
    document.getElementById("cartItem").innerHTML = cart.map((items) => {
      var { image, title, price } = items;
      total = total+price;
      document.getElementById('total').innerHTML = "$ "+total+".00";
      return (
        `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:15px;'>$ ${price}.00</h2>` +
        "<i class='fa-solid fa-trash' onclick='delElement(" +
        j++ +
        ")'></i></div>"
      );
    }).join('');
  }
}
