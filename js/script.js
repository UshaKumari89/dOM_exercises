// Code here!
//1a. Byt namn på första hoodien från Ash till Potato.
const headingEl = document.querySelector(".art-1 > h3");
headingEl.innerHTML = 'potato Air';

//1b. Byt namn på second hoodien från Ash till Potato.
const heading2El = document.querySelector(".art-2 > h3");
heading2El.innerHTML = 'Hoodie 2 Ash';

//1c. Byt namn på tredje hoodien från Ash till Potato.
const heading3El = document.querySelector(".art-3 > h3");
heading3El.innerHTML = 'Hoodie 3 Water';

// 2. Byt namn på Home till Start.
// const nav = document.querySelector("nav").firstElementChild
const nav = document.querySelector("nav").children
nav[0].innerHTML = 'Start';
nav[0].classList.add("active");

nav[2].innerHTML = 'Mail Us';

//4.4. Byt ut informationen om Sinus Hoodie - Fire.
// const informationEl = document.querySelector(".art-2 :nth-child(4)");
const article = document.querySelector(".art-2").children
article[3].innerHTML = "This hoodie has a orange-red color"
// 6. Byt bakgrundsfärg på någon av produkterna
article[0].style.backgroundColor ="red";

// 5. Byt bakgrundsfärg och text på en knapp
 const btn = document.querySelector("button");
 btn.setAttribute("style", "background-color:red; color:black;");
 document.write(btn)
 
//7. Byt ut adressen på sidan.
const paragEl = document.querySelector("Footer > section> article> p");
paragEl.innerHTML = "This is the new Address <br>of the website ";

// 8 Byt färg på samtliga <p>.
// const paragColor = document.querySelectorAll("P")
const paragraphEl = document.querySelectorAll("p");
for(let i = 0; i < paragraphEl.length; i++){
  paragraphEl[i].style.color = "red";
}
// 9. Ändra text på samtliga knappar till add to cart.
const buttonEl = document.querySelectorAll("button");
for(let i = 0; i < buttonEl.length; i++) {
  buttonEl[i].innerHTML = "Add to cart"
 }


// 10. Lägg till classen active på menyalternativet home.(see nav)
// const homeClassEl = document.querySelector('nav').firstElementChild
// homeClassEl.classList.add("active");
// console.log(homeClassEl)

//. 11. Ta bort classen logo på logotypen.
const headerRemClass = document.querySelector('header').firstElementChild
headerRemClass.classList.remove("logo");

//12. Lägg till ett nytt menyalternativ.
const menuEle = document.querySelector("nav a")
let menu = "<a href='#'>Gallery</a>";
menuEle.insertAdjacentHTML("afterend", menu);

//13. Lägg till en ny produkt med följande info.
let main = document.querySelector("main")
let newProduct = document.createElement("article")
    newProduct.setAttribute('class', 'art-4')
    main.appendChild(newProduct)
    newProduct.insertAdjacentHTML("beforeend", '<figure><img src="img/hoodie-ocean.png" alt="hoodie"/></figure>')
    newProduct.insertAdjacentHTML("beforeend", ' <h2>Sinus Hoodie</h2>')
    newProduct.insertAdjacentHTML("beforeend", ' <h3>Hoodie Blue <h3>')
    newProduct.insertAdjacentHTML("beforeend", ' <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos saepe ratione possimus nobis?</p>')
    newProduct.insertAdjacentHTML("beforeend", ' <button>buy</button>')
    

  //NY PRODUCT USING doM
    let newProduct2 = document.createElement("article")
    newProduct2.setAttribute('class', 'art-4')
    main.appendChild(newProduct2)
    newProduct2.insertAdjacentHTML("beforeend", '<figure><img src="img/hoodie-FIRE.png" alt="hoodie"/></figure>')
    newProduct2.insertAdjacentHTML("beforeend", ' <h2>Sinus Hoodie</h2>')
    newProduct2.insertAdjacentHTML("beforeend", ' <h3>Hoodie RED <h3>')
    newProduct2.insertAdjacentHTML("beforeend", ' <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos saepe ratione possimus nobis?</p>')
    newProduct2.insertAdjacentHTML("beforeend", ' <button>buy</button>')




  
    //14.14. Lyssna efter ett klick på logotypen (.logo). 
    //När den registrerar ett klick skall du console.log:a "found you!";
  const logoTypenEl = document.querySelector("header img")
  logoTypenEl.addEventListener('click', ()=>{
    console.log('found you!');
  })

//15. Lyssna efter klick på samtliga produkter ( <article>). När den registrerar ett klick skall du console.log:a "Hi, Im article Fire / Ash / Water".
  let articles = document.querySelectorAll('main > article');
  articles.forEach(article => {
      let title = article.querySelector('h3'); 
      article.addEventListener('click', ()=> {
          console.log(`Hi, Im article ${title.innerText}`);
      });
  
  });