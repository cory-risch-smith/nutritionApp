// Credentials for Nutrition API
const appId = '5a47e854';
const appKey = '55fc7136c74efba5fd05fe9f594da450';

const submitBtn = document.getElementById('submitBtn');
const addBtn = document.getElementById('addBtn');

var userIngredient = document.getElementById('userData');

var ingredients = [];
var ingredientsNum = 0;
var clone;

addBtn.addEventListener('click', function (e) {
  e.preventDefault();

  if (userIngredient == true) {
    ingredients.push(userIngredient);
  }

  ingredientsNum++;
  clone = userIngredient.cloneNode(true);
  clone.setAttribute('id', 'userData' + ingredientsNum);
  document.getElementById('userInput').appendChild(clone);
  ingredients.push(`${clone.value}`);
  console.log(ingredients);
});

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  //************* --- Passing Data through to API --- ************//

  ingredients.push(`${clone.value}`);

  const title = document.getElementById('title').value;
  console.log(title);

  // const recipe = { title: `${title}`, ingr: [ingredients] };
  // console.log(recipe);

  // Fetch Request //
  const url = `https://api.edamam.com/api/nutrition-details?app_id=${appId}&app_key=${appKey}`;

  // post body data
  const body = { title: `${title}`, ingr: [ingredients] };

  // create request object
  const request = new Request(url, {
    mode: 'no-cors',
    method: 'POST',
    body: JSON.stringify(body),
    headers: new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  });

  // send POST request

  fetch(request)
    .then((res) => res.json())
    .then((res) => console.log(res));
});
