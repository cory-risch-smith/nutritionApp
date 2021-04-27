// Credentials for Nutrition API
const appId = '5a47e854';
const appKey = '6b6c120ce26df3dbc1914dd1c6c03b58';

const submitBtn = document.getElementById('submitBtn');
const addBtn = document.getElementById('addBtn');

const userIngredient = document.getElementById('userData');

// var finalUserData;

addBtn.addEventListener('click', function (e) {
  e.preventDefault();
  let increment = 0;
  let cloneID = userData + increment;

  let clone = userIngredient.cloneNode(true);
  document.getElementById('userInput').appendChild(clone);
});

// Change submit button to add data into array **************$$$$$$$$$$$$$$$

submitBtn.addEventListener('submit', function (e) {
  e.preventDefault();
  let userData = $(this).serialize();
  //Data returns as string

  //Removes userDATA= from string
  let redo = userData.slice(9);
  // console.log(redo);

  let splitted = redo.split('+');
  // console.log(splitted);

  var reconstructed = '';

  for (i = 0; i < splitted.length; i++) {
    // console.log(splitted[i]);
    reconstructed += splitted[i];
    reconstructed += '%20';
  }

  finalUserData = reconstructed.slice(0, -3);
  // console.log(finalUserData);

  //*************--- Passing Data through to API ---************//

  const mainElement = document.querySelector('main');

  let nutritionData;

  let title = document.getElementById('title');

  let ingredients = [];

  var data = { title: `${title}`, ingr: `${ingredients}` };
  // ************** FIX ME ******************

  async function getNutrition() {
    const response = await fetch(
      `https://api.edamam.com/api/nutrition-details?app_id=${appId}&app_key=${appKey}`,
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)({
          title: `${nutrition}`,
          ingr: `${nutrition}`,
        }),
      }
    );
  }

  const nutrition = response.json();
  console.log(nutrition);
  // console.log(nutrition.totalNutrients.CHOCDF);

  const carbs = nutrition.totalNutrients.CHOCDF;
  const fat = nutrition.totalNutrients.FAT;
  const protein = nutrition.totalNutrients.PROCNT;

  console.log(Math.floor(carbs.quantity) + 'g');
  console.log(Math.floor(fat.quantity) + 'g');
  console.log(Math.floor(protein.quantity) + 'g');

  // setSort(nutrition);
  // addCards(nutrition);
  nutritionData = nutrition;

  getNutrition();
});

// *** --- PING API AND PROCESS DATA --- *** //

// Sorting array ******* Possibly Use for Nutrition Data*****

// function setSort(array) {
//   const sortOrder = document.getElementById('sortorder').value;
//   switch (sortOrder) {
//     case 'title':
//       array.sort((a, b) => (a.title > b.title ? 1 : -1));
//       break;
//     case 'release_date':
//       array.sort((a, b) => (a.release_date > b.release_date ? 1 : -1));
//       break;
//     case 'rt_score':
//       array.sort((a, b) =>
//         parseInt(a.rt_score) > parseInt(b.rt_score) ? -1 : 1
//       );
//       break;
//   }
// }

// ********** --- FIX CARDS --- **********//

// function addCards(data) {
//   data.forEach((eachFilm) => {
//     createCard(eachFilm);
//   });
// }

// // Change to take Nutrition API Data

// function createCard(data) {
//   const card = document.createElement('article');

//   // Movie Title
//   const movieTitle = document.createElement('h2');
//   const movieTitleTxt = document.createTextNode(data.title);
//   movieTitle.appendChild(movieTitleTxt);

//   //Year

//   const year = document.createElement('p');
//   const yearTxt = document.createTextNode(`Year: ${data.release_date}`);
//   year.appendChild(yearTxt);

//   //Description

//   const description = document.createElement('p');
//   const descriptionTxt = document.createTextNode(
//     `Description: ${data.description}`
//   );
//   description.appendChild(descriptionTxt);

//   card.appendChild(movieTitle);
//   card.appendChild(year);
//   card.appendChild(description);

//   mainElement.appendChild(card);
// }
