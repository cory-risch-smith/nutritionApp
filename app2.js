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

  getNutrition();
});

async function getNutrition() {
  const response = await fetch(
    `https://api.edamam.com/api/nutrition-details?app_id=${appId}&app_key=${appKey}`,
    {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        title: `${title}`,
        ingr: [`${ingredients}`],
      }),
    }
  );

  const nutrition = response;
  console.log(nutrition);
}

// // console.log(nutrition.totalNutrients.CHOCDF);

// const carbs = nutrition.totalNutrients.CHOCDF;
// const fat = nutrition.totalNutrients.FAT;
// const protein = nutrition.totalNutrients.PROCNT;

// console.log(Math.floor(carbs.quantity) + 'g');
// console.log(Math.floor(fat.quantity) + 'g');
// console.log(Math.floor(protein.quantity) + 'g');

// // setSort(nutrition);
// // addCards(nutrition);
// nutritionData = nutrition;
