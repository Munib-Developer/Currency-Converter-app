// 
const base_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"

// const base_URL = "https://latest.currency-api.pages.dev/v1/currencies"


// "https:cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd/php.json"

const dropdown = document.querySelectorAll(".drop-down select");
const btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const ToCurr = document.querySelector(".to select");

// // for(code in countryList){
// //  console.log(code,countryList[code]);
// // }

for(let select of dropdown){
  for(currcode in countryList){
  let newOption = document.createElement("option"); 
  newOption.innerText = currcode;
  newOption.value = currcode;
  if(select.name==="from"  && currcode==="USD") {
    newOption.selected = "selected";
  }else if(select.name==="To"  && currcode==="PKR") {
    newOption.selected = "selected";
  }
  select.append(newOption);
}

select.addEventListener("change", (evt)=>{
updateflg(evt.target);
});

}


const updateflg = (element)=>{
// console.log(element);
let currcode = element.value;
let cuntrycode = countryList[currcode];     //currency code sa country code ly kr ana ha. //PK.
let newsrc = `https://flagsapi.com/${cuntrycode}/flat/64.png`
let img = element.parentElement.querySelector("img"); 
img.src = newsrc;

}

btn.addEventListener("click" ,async(evt)=>{
  evt.preventDefault();                               //is ka atlab hain jab form submit btn click ho to page refresh no ho.
  let amount = document.querySelector(".amount input");
  let amtvalue = amount.value;
  if(amtvalue ==="" || amtvalue< 1){
    amtvalue = 1;
    amount.value = "1";
  }
// console.log(fromCurr.value , ToCurr.value);
const URL = `${base_URL}/${fromCurr.value.toLowerCase()}/${ToCurr.value.toLowerCase()}.json`;
let response  = await fetch(URL);
let data = await response.json();
console.log(data);

})

