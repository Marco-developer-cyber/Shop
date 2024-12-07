let bascet_section = document.querySelector(".bascet_section");
let basket_json = {
    1: {
        'img': 'ice-cream/01.png',
        'name': 'Zolotoy',
        'price': 15000,
        'count': 3,
        'total_price': 45000
    },
    2: {
        'img': 'chocolate/04.png',
        'name': 'Kit Kat',
        'price': 12000,
        'count': 1,
        'total_price': 12000
    },
    3: {
        'img': 'drink/03.png',
        'name': 'coca-cola',
        'price': 14000,
        'count': 3,
        'total_price': 42000
    },
    4: {
        'img': 'chocolate/13.png',
        'name': 'Alpen Gold',
        'price': 13000,
        'count': 3,
        'total_price': 39000
    },
};

// Создаем элементы на странице
for (let i = 1; i <= 4; i++) {
    let div = document.createElement("div");
    div.classList.add("product_bascet");
    div.innerHTML = `
    <div class="check" data-index="${i}">
        <h1 class="h1">Sahifa bo'sh 🙄</h1>
        <img src="../media/${basket_json[i]['img']}" alt="" class="bas_img">
        <span class="name">Name: ${basket_json[i]['name']}</span>
        <span class="price">Price: ${basket_json[i]['price']}</span>
        <span class="count">Count: ${basket_json[i]['count']}</span>
        <span class="total_price">Total price: ${basket_json[i]['total_price']}</span>
        <div class="buttons_score">
            <button class="minus_but">--</button>
            <button class="del_but">Delete</button>
        </div>
    </div>
    `;
    bascet_section.appendChild(div);
}
let h1 = document.querySelector(".h1")
document.querySelectorAll(".check").forEach((check, index) => {
    let basketIndex = index + 1;
    let minusButton = check.querySelector(".minus_but");
    let deleteButton = check.querySelector(".del_but");

    minusButton.addEventListener("click", () => {
        if (basket_json[basketIndex]['count'] > 0) {
            basket_json[basketIndex]['count'] -= 1;
            basket_json[basketIndex]['total_price'] -= basket_json[basketIndex]['price'];

            check.querySelector(".count").textContent = `Count: ${basket_json[basketIndex]['count']}`;
            check.querySelector(".total_price").textContent = `Total price: ${basket_json[basketIndex]['total_price']}`;
        }
        else {
            check.style.display = 'none'
            h1.style.display = 'flex'
        }
    });

    deleteButton.addEventListener("click", () => {
        check.remove();
        delete basket_json[basketIndex];
    });
});
