/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const form = document.getElementById("form");
form.addEventListener("submit", submitForm);

function submitForm(event) {
  const formData = new FormData(this);
  weightConverter(formData.get("search"));
  event.preventDefault();
}

function weightConverter(valNum) {
  document.getElementById("outputpounds").innerHTML = valNum * 2.2046;
  document.getElementById("outputgrams").innerHTML = valNum * 1000;
  document.getElementById("outputuncia").innerHTML = valNum * 35.274;
}
