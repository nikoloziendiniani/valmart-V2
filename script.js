
for (let i = 0; i < 6; i++) {
  const logo = document.createElement("div");

  logo.style.backgroundColor = `yellow`;
  logo.style.width = `4px`;
  logo.style.height = `13px`;
  logo.style.borderRadius = `10px`
  const rotation = i * (360 / 6);

  // logo.style.setProperty(`--rotation`, `${rotation}deg`);
  logo.style.position = `absolute`;
  logo.style.transform = `rotate(-${rotation}deg) translateY(-15px)`;


  const logoContainer = document.querySelector(".logo");
  logoContainer.appendChild(logo);
}
const cards = document.createElement("div");
cards.classList.add("cards");
for (let i = 0; i < 4; i++) {
  const card = document.createElement("div");
  const imageFor = document.createElement("div");
  const img = document.createElement("img");
  const a = this.document.createElement("a")
  const titleFor = document.createElement("div");
  const textFor = document.createElement("div");
  const buttonFor = document.createElement("div");
  const textsFor = document.createElement("div");

  let imgContent = [
    "https://i5.walmartimages.com/dfw/4ff9c6c9-f474/k2-_e38424dc-ea20-4287-b643-7aae1d3ecf32.v1.jpg?odnHeight=512&odnWidth=288&odnBg=FFFFFF",
    "https://i5.walmartimages.com/dfw/4ff9c6c9-2f37/k2-_0937ba14-1241-4e5c-a46b-2ba1bf5a0d7b.v1.jpg?odnHeight=512&odnWidth=288&odnBg=FFFFFF",
    "https://i5.walmartimages.com/dfw/4ff9c6c9-dc54/k2-_09cf12ed-241e-4aa9-a4b3-66ea231f090f.v1.jpg?odnHeight=512&odnWidth=288&odnBg=FFFFFF",
    "https://i5.walmartimages.com/dfw/4ff9c6c9-5c01/k2-_67f17938-4f4d-4d9d-b9be-788bdd12dc5f.v1.jpg?odnHeight=512&odnWidth=288&odnBg=FFFFFF",
  ]
  let titleContent = [
    "For her",
    "For him",
    "For girls",
    "For boys",
  ]
  let textContent = [
    "Break a sweat & look good doing it",
    "Gear up for some serious gains.",
    "Bold looks for unstoppable play.",
    "Go-tos that play as hard as he does.",
  ]

  img.src = imgContent[i];
  titleFor.textContent = titleContent[i];
  textFor.textContent = textContent[i];
  buttonFor.textContent = "Shop now";
  a.href = `#`

  card.classList.add("card");
  titleFor.classList.add("under-title");
  textsFor.classList.add("texts")
  textFor.classList.add("text");
  buttonFor.classList.add("button");
  imageFor.classList.add("image");

  cards.appendChild(card);
  card.appendChild(imageFor);
  imageFor.appendChild(img);
  card.appendChild(textsFor);
  textsFor.appendChild(titleFor);
  textsFor.appendChild(textFor);
  textsFor.appendChild(a);
  a.appendChild(buttonFor)
}
const sectionFor = document.querySelector(".for")
sectionFor.appendChild(cards)

document.getElementById("link").addEventListener("click", function () {
  const container = document.getElementById("container");

  // Check if texts already exist in the container
  if (container.children.length > 0) {
    // Remove all existing texts
    container.innerHTML = "";
  } else {
    const titleContent = [
      "Clothing, Shoes, and Accessories",
      "Women's clothing",
      "Men's clothing",
      "Clothes for kids",
      "Shoes",
      "Jewelry and watches",
      "Handbags and accessories",
    ];

    const textContent = [
      `Welcome to Walmart Fashion, where you will find women's clothing, men's clothing, kid's clothing, shoes, 
      jewelry and watches, handbags, and accessories. You'll find the latest women's trends, like bell sleeves, 
      bare-shoulder tops, one-shoulder tops, floral prints, skirts and tights, athleisure, tote bags, block heels, 
      striped tees, embroidered denim, destructed denim, statement necklaces, chandelier earrings, layered necklaces, 
      and casual watches. You'll also find the latest men's trends, like polos, graphic tees, denim, casual sneakers, 
      slip-on sneakers, and watches. And you'll find the latest kid's trends like graphic tees, character-themed clothing,
      outfit sets, and more.`,

      `The Women's Clothing department has several sections and shops to choose from, including swimwear, cold weather gear, 
      sleepwear, gym clothes, work outfits, tees and tank tops, jeans, suits, dresses, and underwear and socks. You can pick
      out your size range or the type of clothing you need to buy in order to focus in on the clothes you need. Special
      subcategories in the Women's Clothing department make it easier for women with particular clothing needs to find
      what they want. The Maternity section has specially designed and sized bottoms, tops, dresses, nursing clothes,
      activewear, and leggings made especially for expectant mothers. Click into this section if you're expecting a 
      little bundle of joy and need to update your wardrobe accordingly. Our Women's Plus section is suitable for women 
      who prefer their clothes with a curvier cut in larger sizes, while the Women's Petite section is suitable for those
      ladies who find standard sizes too roomy or too long in the sleeve and leg.`,

      `Men have a few options to narrow down their clothing choices. The Men's Clothing department includes a full range of 
      clothes for any occasion, time of day, or season, and those men who find standard clothing sizes comfortable can find 
      what they need in the main department sections, including bottoms, tops, and underwear and socks. Men who are larger or
      taller than average can focus on the Men's Big & Tall section to find extended sizes in all of the same wardrobe essentials 
      and extra elements found in the main Men's Clothing department.`,

      `You'll find everything you need to outfit your little ones, including activewear, outfit sets, shorts, swimsuits, and underwear. 
      It's easiest to shop for kids' clothes by focusing on the specific section that caters to their age or size range. 
      The Baby & Toddler, Boys, and Girls sections are further subdivided into categories for infants, toddlers, little boys, 
      and girls. The main children's clothing sections cater to boys and girls who are usually in elementary and middle school, 
      though each kid may size out of these ranges at different points in their lives. We also have a Junior's section for girls 
      who have outgrown the clothes in the girls' section but aren't yet ready for grown-up women's fashions. Young men in the same 
      situation can find smaller sizes in the Men's Clothing department. Don't forget to shop fun finds in the Character Shop, 
      Newborn Shop, Organic Shop, Uniform Shop, and Essentials Shop.`,

      `You can find shoes for every occasion and every member of your family including sandals, athletic sneakers, casual shoes, flats,
      oxfords, dress shoes, school or work shoes, slippers, pumps, and cold-weather boots. We also carry occupational footwear for 
      nursing, restaurant service, and construction.`,

      `Shop a huge selection of fine jewelry, diamond jewelry, fashion jewelry, pre-owned luxury watches, watches, and men's jewelry. 
      Whatever the need, gift, or occasion, we've got you covered.`,

      `If you're looking for bags and other wearable accessories like belts and hats, you can take a look at the categories in our 
      Bags & Accessories department, which is also accessible through the main Clothing department page. Find casual, everyday, or 
      athletic bags for kids and adults in the Backpacks section, or look for suitcases, handbags, and briefcases in the Bags & Luggage 
      section. You'll find all the additional accessories you need to finalize a formal or casual outfit in our Hats & Accessories section. 
      From bowties and cummerbunds to baseball caps and casual scarves, you can find exactly what you need to complete your outfit. And 
      don't forget all your travel gear: we have a large selection of carry-on luggage, luggage sets, and hard case luggage to get you 
      where you need to go in style.`,
    ];

    for (let i = 0; i < 7; i++) {
      const textsAbout = document.createElement("div");
      const titleAbout = document.createElement("div");
      const textAbout = document.createElement("div");

      titleAbout.textContent = titleContent[i];
      textAbout.textContent = textContent[i];

      textsAbout.classList.add("texts");
      titleAbout.classList.add("title");
      textAbout.classList.add("text");

      container.appendChild(textsAbout);
      textsAbout.appendChild(titleAbout);
      textsAbout.appendChild(textAbout);
    }
  }
});
const arrow1 = document.getElementById("arrow-icon1");
const arrow2 = document.getElementById("arrow-icon2");
const arrow3 = document.getElementById("arrow-icon3");

const bottom1 = document.getElementById("bottom1");
const bottom2 = document.getElementById("bottom2");
const bottom3 = document.getElementById("bottom3");

// bottom1.style.transition = "1s"
// bottom2.style.transition = "1s"
// bottom3.style.transition = "1s"


// Initially hide all content sections
// bottom1.style.display = "none";
// bottom2.style.display = "none";
// bottom3.style.display = "none";

arrow1.addEventListener("click", function () {
  if(bottom1.style.display === "none"){
    bottom1.style.display = "block"
    bottom1.style.height = "fit-content"
    bottom1.style.animation = "zerotohund 1s ease-in-out"
  } else{
    bottom1.style.display = "none"
    bottom1.style.height = "fit-content"
    bottom1.style.animation = "hundtozero 1s ease-in-out"
  }
});

arrow2.addEventListener("click", function () {
  if(bottom2.style.display === "none"){
    bottom2.style.display = "block"
    bottom2.style.height = "fit-content"
    bottom2.style.animation = "zerotohund 1s ease-in-out"
  } else{
    bottom2.style.display = "none"
    bottom2.style.height = "fit-content"
    bottom2.style.animation = "hundtozero 1s ease-in-out"
  }
});

arrow3.addEventListener("click", function () {
  if(bottom3.style.display === "none"){
    bottom3.style.display = "block"
    bottom3.style.height = "fit-content"
    bottom3.style.animation = "zerotohund 1s ease-in-out"
  } else{
    bottom3.style.display = "none"
    bottom3.style.height = "fit-content"
    bottom3.style.animation = "hundtozero 1s ease-in-out"
  }
});
