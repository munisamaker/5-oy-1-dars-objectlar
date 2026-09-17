
const iphone = {
    Title: "iPhone 17",
    fulltitle: "Apple iPhone 17 (2025)",
    release_year: 2025,
    storage: "256GB | 512GB",
    Categories: "Smartphone|Technology|Apple",
    summary: "The iPhone 17 is a premium smartphone from Apple...",
    ImageURL: "https://radius.uz/_next/image?url=https%3A%2F%2Fnew.api.radius.uz%2Fmedia%2Fimages%2Fproduct%2F39637fbebe2f4ac9966c84b876326d2a.webp&w=1024&q=75",
    brand: "Apple",
    model: "iPhone 17",
    display: "6.3-inch Super Retina XDR OLED",
    processor: "Apple A19",
    camera: "48MP Main|48MP Ultra Wide",
    front_camera: "24MP",
    battery: "All-day battery Life",
    operating_system: "iOS 26",
    colors: "Black|White|Blue|Green|Purple",
    price: 799,
    currency: "USD"
};
const wrapper = document.querySelector (".wrapper");


const card = document.createElement("div");
card.className = "card";

const cardImg = document.createElement("img");
cardImg.className = "card__img";
cardImg.alt = iphone.Title;
cardImg.width = 400;
cardImg.height = 400;
cardImg.src = iphone.ImageURL;

const cardBody = document.createElement("div");
cardBody.className = "card-body";

const cardTitle = document.createElement("h3");
cardTitle.textContent = iphone.Title;

const cardStorage = document.createElement("p");
cardStorage.textContent = iphone.storage;

const cardYear = document.createElement("p");
cardYear.textContent = iphone.release_year;

const cardPrice = document.createElement("p");
cardPrice.textContent = iphone.price;

const cardCurrency = document.createElement("p");
cardCurrency.textContent = iphone.currency;

cardBody.append(cardTitle);
cardBody.append(cardStorage);
cardBody.append(cardYear);
cardBody.append(cardPrice);
cardBody.append(cardCurrency);

card.append(cardImg);
card.append(cardBody);

wrapper.append(card);