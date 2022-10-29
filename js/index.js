// start nav
$("#lineTow").click(function () {
  $("#lineone").removeClass("d-none");
  $("#lineTow").addClass("d-none");
  // $("li ").slideUp(9000);

  if ($("nav").css("left") === "0px") {
    $("nav").animate({ left: `-250px` }, 1000);
    $(".first").animate({ left: `0px` }, 1000);
  } else {
    $("nav").animate({ left: `0px` }, 1000);
    $(".first").animate({ left: `250px` }, 1000);
  }
});
$("#lineone").click(function () {
  $("#lineTow").removeClass("d-none");
  $("#lineone").addClass("d-none");
  if ($("nav").css("left") === "0px") {
    $("nav").animate({ left: `-250px` }, 1000);
    $(".first").animate({ left: `0px` }, 1000);
  } else {
    $("nav").animate({ left: `0px` }, 1000);
    $(".first").animate({ left: `250px` }, 1000);
  }
});
$("#navSearch").click(function () {
  $("#lineTow").removeClass("d-none");
  $("#lineone").addClass("d-none");
  if ($("nav").css("left") === "0px") {
    $("nav").animate({ left: `-250px` }, 1000);
    $(".first").animate({ left: `0px` }, 1000);
  } else {
    $("nav").animate({ left: `0px` }, 1000);
    $(".first").animate({ left: `250px` }, 1000);
  }
});
$("#navCategories").click(function () {
  $("#lineTow").removeClass("d-none");
  $("#lineone").addClass("d-none");
  if ($("nav").css("left") === "0px") {
    $("nav").animate({ left: `-250px` }, 1000);
    $(".first").animate({ left: `0px` }, 1000);
  } else {
    $("nav").animate({ left: `0px` }, 1000);
    $(".first").animate({ left: `250px` }, 1000);
  }
});
$("#navArea").click(function () {
  $("#lineTow").removeClass("d-none");
  $("#lineone").addClass("d-none");
  if ($("nav").css("left") === "0px") {
    $("nav").animate({ left: `-250px` }, 1000);
    $(".first").animate({ left: `0px` }, 1000);
  } else {
    $("nav").animate({ left: `0px` }, 1000);
    $(".first").animate({ left: `250px` }, 1000);
  }
});
$("#navIngredients").click(function () {
  $("#lineTow").removeClass("d-none");
  $("#lineone").addClass("d-none");
  if ($("nav").css("left") === "0px") {
    $("nav").animate({ left: `-250px` }, 1000);
    $(".first").animate({ left: `0px` }, 1000);
  } else {
    $("nav").animate({ left: `0px` }, 1000);
    $(".first").animate({ left: `250px` }, 1000);
  }
});
$("#navContact").click(function () {
  $("#lineTow").removeClass("d-none");
  $("#lineone").addClass("d-none");
  if ($("nav").css("left") === "0px") {
    $("nav").animate({ left: `-250px` }, 1000);
    $(".first").animate({ left: `0px` }, 1000);
  } else {
    $("nav").animate({ left: `0px` }, 1000);
    $(".first").animate({ left: `250px` }, 1000);
  }
});
let container = [];
// end nav
// start Home
let row = document.getElementById("rowData");
search("");
async function search(M) {
  let meals = await fetch(
    `https:www.themealdb.com/api/json/v1/1/search.php?s=${M}`
  );
  meals = await meals.json();
  displayMeals(meals.meals);
  return meals;
}
function displayArea() {
  let e = ``;
  for (let i = 0; i < Array.length; i++) {
    e = `
    <div class="col-md-6 col-lg-3 text-white my-3 myM  yArea">
        <div class="movie yArea rounded position-relative">
            <div onclick=(filterByArea('${array[i].strArea}')) class="post ">
                <i class="fa-solid fa-city fa-3x"></i>
                <h2 class="text-white">${array[i].strArea}</h2>
            </div>
        </div>
    </div>`;
  }
  row.innerHTML = e;
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    200
  );
}

function displayMeals(array) {
  let meals = "";
  for (let i = 0; i < array.length; i++) {
    meals += `
        <div class="col-md-6 col-lg-3 my-3 myM  shadow">
                <div  class="post item">
                    <img src='${array[i].strMealThumb}' class="w-100 rounded-2" />
                    <div class="layer d-flex align-items-center ">
                        <div class="caotion rounded-2">
                            <h2 class="ms-2">${array[i].strMeal}</h2>
                        </div>
                    </div>
                </div>
        </div>`;
  }
  row.innerHTML = meals;
}

$("#rowData").click(function (e) {
  let allImg = $(e.target).text();
  let result = allImg.trim();
  $("#rowData").addClass("d-none");
  $("#Instructions").removeClass("d-none");
  console.log(this);

  async function Instruc(meal) {
    let apiIns = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
    );
    let final = await apiIns.json();
    let allItem = final.meals;

    let int = ``;

    for (let i = 0; i < allItem.length; i++) {
      int = `
   <div class="row intro  mt-5 text-white">
            <div class="col-md-4 text-center">

                <img class="w-100" src="${allItem[i].strMealThumb}" alt="">
                <h2>${allItem[i].strMeal}</h2>
            </div>
            <div class="col-md-8">
                <h2>Instructions</h2>
                <p>${allItem[i].strInstructions}</p>
                <p class=" fw-bolder">Area :<span>${allItem[i].strArea}</span></p>
                <p class="fw-bolder">Category :<span>${allItem[i].strCategory}</span></p>
                <h3 class="fw-bolder">Recipes : </h3>
                <ul class="d-flex flex-wrap " id="recipes">
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure1} ${allItem[i].strIngredient1}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure2}${allItem[i].strMeasure1}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure3}${allItem[i].strIngredient3}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure4}${allItem[i].strIngredient4}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure5}${allItem[i].strIngredient5}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure6}${allItem[i].strIngredient6}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure7}${allItem[i].strIngredient7}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure8}${allItem[i].strIngredient8}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure9}${allItem[i].strIngredient9}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure10}${allItem[i].strIngredient10}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure11}${allItem[i].strIngredient11}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure12}${allItem[i].strIngredient12}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure13}${allItem[i].strIngredient13}</li>
                </ul>
                <h3 class="fw-bolder">Tags : </h3>
                <ul class="d-flex " id="tags">
                    <li class="my-3 mx-1 p-1 alert-danger rounded">Soup</li>
                </ul>
                <a class="btn mb-3 btn-success text-white" target="_blank" href="${allItem[i].strSource}">Source</a>
                <a class="btn mb-3 btn-danger  youtube text-white" target="_blank" href="${allItem[i].strYoutube}">Youtub</a>

            </div>
        </div>

  `;
    }

    Instructions.innerHTML = int;
  }
  Instruc(result);
});

// end Home

// start seach
let addSearch = document.getElementById("addSearch");
let userName = document.getElementById("Name");

$("#navSearch").click(function () {
  $("#secSearch").removeClass("d-none");
  $("#Home , #Categories , #Area , #Ingredients ,#contact ").addClass("d-none");

  //   // start Searsh words

  let addSearchs = document.getElementById("addSearch");
  async function searchWords(M) {
    let meals = await fetch(
      `https:www.themealdb.com/api/json/v1/1/search.php?s=${M}`
    );
    meals = await meals.json();
    displayMeals(meals.meals);
    return meals;
  }
  function displayArea() {
    let e = ``;
    for (let i = 0; i < Array.length; i++) {
      e = `
    <div class="col-md-6 col-lg-3 text-white my-3 myM  yArea">
        <div class="movie yArea rounded position-relative">
            <div onclick=(filterByArea('${array[i].strArea}')) class="post ">
                <i class="fa-solid fa-city fa-3x"></i>
                <h2 class="text-white">${array[i].strArea}</h2>
            </div>
        </div>
    </div>`;
    }
    addSearchs.innerHTML = e;
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      200
    );
  }

  function displayMeals(array) {
    let meals = "";
    for (let i = 0; i < array.length; i++) {
      meals += `
        <div class="col-md-6 col-lg-3 my-3 myM  shadow">
                <div class="post item">
                    <img src='${array[i].strMealThumb}' class="w-100 rounded-2" />
                    <div class="layer d-flex align-items-center ">
                        <div class="caotion rounded-2">
                            <h2 class="ms-2">${array[i].strMeal}</h2>
                        </div>
                    </div>
                </div>
        </div>`;
    }
    addSearchs.innerHTML = meals;
  }
  let usersearch = document.getElementById("search");

  usersearch.addEventListener("input", function () {
    searchWords(usersearch.value);
  });

  //   // end Searsh words

  //   // start Searsh litter

  let useraddSearchs = document.getElementById("addSearch");
  async function searchLitter(M) {
    let meals = await fetch(
      `https:www.themealdb.com/api/json/v1/1/search.php?s=${M}`
    );
    meals = await meals.json();
    displayMeals(meals.meals);
    return meals;
  }
  function displayArea() {
    let e = ``;
    for (let i = 0; i < Array.length; i++) {
      e = `
    <div class="col-md-6 col-lg-3 text-white my-3 myM  yArea">
        <div class="movie yArea rounded position-relative">
            <div onclick=(filterByArea('${array[i].strArea}')) class="post ">
                <i class="fa-solid fa-city fa-3x"></i>
                <h2 class="text-white">${array[i].strArea}</h2>
            </div>
        </div>
    </div>`;
    }
    useraddSearchs.innerHTML = e;
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      200
    );
  }

  function displayMeals(array) {
    let meals = "";
    for (let i = 0; i < array.length; i++) {
      meals += `
        <div class="col-md-6 col-lg-3 my-3 myM  shadow">
                <div class="post item">
                    <img src='${array[i].strMealThumb}' class="w-100 rounded-2" />
                    <div class="layer d-flex align-items-center ">
                        <div class="caotion rounded-2">
                            <h2 class="ms-2">${array[i].strMeal}</h2>
                        </div>
                    </div>
                </div>
        </div>`;
    }
    useraddSearchs.innerHTML = meals;
  }
  let letter = document.getElementById("letter");

  letter.addEventListener("keyup", function () {
    console.log("fed");
    console.log(letter.value);
    searchLitter(letter.value);
  });

  //   // end Searsh litter

  $("#addSearch").click(function (e) {
    let allImg = $(e.target).text();
    let result = allImg.trim();
    $("#secSearch").addClass("d-none");
    $("#SearchChang").removeClass("d-none");
    console.log("this");

    async function Instruc(meal) {
      let apiIns = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
      );
      let final = await apiIns.json();
      let allItem = final.meals;

      let int = ` `;

      for (let i = 0; i < allItem.length; i++) {
        int = `
   <div class="row intro  mt-5 text-white">
            <div class="col-md-4 text-center">

                <img class="w-100" src="${allItem[i].strMealThumb}" alt="">
                <h2>${allItem[i].strMeal}</h2>
            </div>
            <div class="col-md-8">
                <h2>Instructions</h2>
                <p>${allItem[i].strInstructions}</p>
                <p class=" fw-bolder">Area :<span>${allItem[i].strArea}</span></p>
                <p class="fw-bolder">Category :<span>${allItem[i].strCategory}</span></p>
                <h3 class="fw-bolder">Recipes : </h3>
                <ul class="d-flex flex-wrap " id="recipes">
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure1} ${allItem[i].strIngredient1}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure2}${allItem[i].strMeasure1}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure3}${allItem[i].strIngredient3}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure4}${allItem[i].strIngredient4}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure5}${allItem[i].strIngredient5}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure6}${allItem[i].strIngredient6}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure7}${allItem[i].strIngredient7}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure8}${allItem[i].strIngredient8}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure9}${allItem[i].strIngredient9}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure10}${allItem[i].strIngredient10}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure11}${allItem[i].strIngredient11}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure12}${allItem[i].strIngredient12}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure13}${allItem[i].strIngredient13}</li>
                </ul>
                <h3 class="fw-bolder">Tags : </h3>
                <ul class="d-flex " id="tags">
                    <li class="my-3 mx-1 p-1 alert-danger rounded">Soup</li>
                </ul>
                <a class="btn mb-3 btn-success text-white" target="_blank" href="${allItem[i].strSource}">Source</a>
                <a class="btn mb-3 btn-danger  youtube text-white" target="_blank" href="${allItem[i].strYoutube}">Youtub</a>

            </div>
        </div>
      `;
      }

      document.querySelector("#SearchChang").innerHTML = int;
    }
    Instruc(result);
  });
});
// End seach

let contaCategry = [];
$("#navCategories").click(function () {
  $("#Categories").removeClass("d-none");
  $("#Home  , #Area , #Ingredients ,#contact , #secSearch  ").addClass(
    "d-none"
  );

  async function searchCategories() {
    let apiRsopns = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php?fbclid`
    );
    let result = await apiRsopns.json();
    let allMeals = result.categories;
    console.log(allMeals[0]);
    let cartoona = ``;
    for (let i = 0; i < 14; i++) {
      cartoona += `<div class="col-lg-3  col-md-6 ">
                 <div class="item text-center   rounded-2 Catshado   mt-5">
                     <img class="w-75 py-3  rounded-2" src="${
                       allMeals[i].strCategoryThumb
                     }" alt="">
                     <div class="caotion rounded-2 ">
                         <h1 class=" m-0 mt-4 text-black">${
                           allMeals[i].strCategory
                         } </h1>
                         <p class="text-black m-0 fa-1x ">${allMeals[
                           i
                         ].strCategoryDescription
                           .split(" ")
                           .splice(0, 9)
                           .join(" ")}</p>
                         </div>
                 </div>
            
                </div> `;
    }
    catgshow.innerHTML = cartoona;
  }
  searchCategories();

$("#catgshow").click(function (e) {
  let allImg = $(e.target).text();
  let results = allImg.trim();
  $("#catgshow").addClass("d-none");
  $("#CategorieschChang").removeClass("d-none");
console.log(results);
let allItem;
  async function Instruc(meal) {
    let apiIns = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`
    );
    let final = await apiIns.json();
    let allItem = final.meals;
    console.log(allItem);
    let int = ` `;
    for (let i = 0; i < allItem.length; i++) {
      int += `
        <div class="col-md-6 col-lg-3 my-3 myM  shadow">
                <div class="post item">
                    <img src='${allItem[i].strMealThumb}' class="w-100 rounded-2" />
                    <div class="layer d-flex align-items-center ">
                        <div class="caotion rounded-2">
                            <h2 class="ms-2">${allItem[i].strMeal}</h2>
                        </div>
                    </div>
                </div>
        </div>`;
    }
    document.querySelector("#CategorieschChang").innerHTML = int;
  }
  if (allItem != null) {
    Instruc(results);
  } else {
        Instruc('Beef');

  }
  
});

$("#CategorieschChang").click(function (e) {
  let allImg = $(e.target).text();
  let result = allImg.trim();
  $("#CategorieschChang").addClass("d-none");
  $("#CategorieschChangOne").removeClass("d-none");
  console.log("this");

  async function Instruc(meal) {
    let apiIns = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
    );
    let final = await apiIns.json();
    let allItem = final.meals;

    let int = ` `;

    for (let i = 0; i < allItem.length; i++) {
      int = `
    <div class="row intro  mt-5 text-white">
             <div class="col-md-4 text-center">

                 <img class="w-100" src="${allItem[i].strMealThumb}" alt="">
                 <h2>${allItem[i].strMeal}</h2>
             </div>
             <div class="col-md-8">
                 <h2>Instructions</h2>
                 <p>${allItem[i].strInstructions}</p>
                 <p class=" fw-bolder">Area :<span>${allItem[i].strArea}</span></p>
                 <p class="fw-bolder">Category :<span>${allItem[i].strCategory}</span></p>
                 <h3 class="fw-bolder">Recipes : </h3>
                 <ul class="d-flex flex-wrap " id="recipes">
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure1} ${allItem[i].strIngredient1}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure2}${allItem[i].strMeasure1}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure3}${allItem[i].strIngredient3}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure4}${allItem[i].strIngredient4}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure5}${allItem[i].strIngredient5}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure6}${allItem[i].strIngredient6}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure7}${allItem[i].strIngredient7}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure8}${allItem[i].strIngredient8}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure9}${allItem[i].strIngredient9}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure10}${allItem[i].strIngredient10}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure11}${allItem[i].strIngredient11}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure12}${allItem[i].strIngredient12}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure13}${allItem[i].strIngredient13}</li>
                 </ul>
                 <h3 class="fw-bolder">Tags : </h3>
                 <ul class="d-flex " id="tags">
                     <li class="my-3 mx-1 p-1 alert-danger rounded">Soup</li>
                 </ul>
                 <a class="btn mb-3 btn-success text-white" target="_blank" href="${allItem[i].strSource}">Source</a>
                 <a class="btn mb-3 btn-danger  youtube text-white" target="_blank" href="${allItem[i].strYoutube}">Youtub</a>

             </div>
         </div>
       `;
    }

    document.querySelector("#CategorieschChangOne").innerHTML = int;
  }
  Instruc(result);
});

});

// end catgrey
// strat Area

$("#navArea").click(function () {
  $("#area").removeClass("d-none");
  $("#Home  , #Categories , #Ingredients ,#contact , #secSearch  ").addClass(
    "d-none"
  );

  async function Area() {
    let apiRsopns = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
    );
    let result = await apiRsopns.json();
    let allMeals = result.meals;
    console.log(allMeals);
    let cartoona = ``;
    for (let i = 0; i < allMeals.length; i++) {
      cartoona += `

 <div class="col-lg-3 col-md-6">
             <div class="item text-center rounded-2 bg-o  mt-5">
                 <i class="fa-solid text-danger fa-city fa-3x mt-3"></i>
                 <h2 class="text-white">${allMeals[i].strArea}</h2>
             </div>
        
             </div>


    `;
    }
    document.getElementById("AreaDisplay").innerHTML = cartoona;
  }

  Area();
let allItem;  
$("#AreaDisplay").click(function (e) {
  let allImg = $(e.target).text();
  let results = allImg.trim();
  $("#AreaDisplay").addClass("d-none");
  $("#areaChang").removeClass("d-none");
  console.log(allImg);

  async function Instruc(meal) {
    let apiIns = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${meal}`
    );
    let final = await apiIns.json();
    let allItem = final.meals;
    console.log(allItem);
    let int = ` `;
    for (let i = 0; i < allItem.length; i++) {
      int += `
        <div class="col-md-6 col-lg-3 my-3 myM  shadow">
                <div class="post item">
                    <img src='${allItem[i].strMealThumb}' class="w-100 rounded-2" />
                    <div class="layer d-flex align-items-center ">
                        <div class="caotion rounded-2">
                            <h2 class="ms-2">${allItem[i].strMeal}</h2>
                        </div>
                    </div>
                </div>
        </div>`;
    }
    document.querySelector("#areaChang").innerHTML = int;
  }


  if (allItem != null) {
    Instruc(results);
  } else {
    Instruc("American");
  }

 
});

$("#areaChang").click(function (e) {
  let allImg = $(this).text();
  let result = allImg.trim();
  $("#areaChang").addClass("d-none");
  $("#areaChangOne").removeClass("d-none");
  console.log("this");

  async function Instruc(meal) {
    let apiIns = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
    );
    let final = await apiIns.json();
    let allItem = final.meals;

    let int = ` `;

    for (let i = 0; i < allItem.length; i++) {
      int = `
    <div class="row intro  mt-5 text-white">
             <div class="col-md-4 text-center">

                 <img class="w-100" src="${allItem[i].strMealThumb}" alt="">
                 <h2>${allItem[i].strMeal}</h2>
             </div>
             <div class="col-md-8">
                 <h2>Instructions</h2>
                 <p>${allItem[i].strInstructions}</p>
                 <p class=" fw-bolder">Area :<span>${allItem[i].strArea}</span></p>
                 <p class="fw-bolder">Category :<span>${allItem[i].strCategory}</span></p>
                 <h3 class="fw-bolder">Recipes : </h3>
                 <ul class="d-flex flex-wrap " id="recipes">
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure1} ${allItem[i].strIngredient1}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure2}${allItem[i].strMeasure1}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure3}${allItem[i].strIngredient3}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure4}${allItem[i].strIngredient4}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure5}${allItem[i].strIngredient5}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure6}${allItem[i].strIngredient6}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure7}${allItem[i].strIngredient7}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure8}${allItem[i].strIngredient8}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure9}${allItem[i].strIngredient9}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure10}${allItem[i].strIngredient10}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure11}${allItem[i].strIngredient11}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure12}${allItem[i].strIngredient12}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure13}${allItem[i].strIngredient13}</li>
                 </ul>
                 <h3 class="fw-bolder">Tags : </h3>
                 <ul class="d-flex " id="tags">
                     <li class="my-3 mx-1 p-1 alert-danger rounded">Soup</li>
                 </ul>
                 <a class="btn mb-3 btn-success text-white" target="_blank" href="${allItem[i].strSource}">Source</a>
                 <a class="btn mb-3 btn-danger  youtube text-white" target="_blank" href="${allItem[i].strYoutube}">Youtub</a>

             </div>
         </div>
       `;
    }

    document.querySelector("#areaChangOne").innerHTML = int;
  }
  Instruc(result);
});


});

// End Area
// strat Ingredients
let cotact = [];

$("#navIngredients").click(function () {
  $("#Ingredients").removeClass("d-none");
  $("#Home  , #Categories ,  #contact, #Area, #secSearch  ").addClass("d-none");

  async function Ingredients() {
    let apiRsopns = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
    );
    let result = await apiRsopns.json();
    let allMeals = result.meals;
    console.log(allMeals);
    let cartoona = ``;
    for (let i = 0; i < 20; i++) {
      cartoona += `

<div class="col-lg-3 col-md-6">
            <div class="item text-center rounded-2 bg-o  mt-5">
                <i class="fa-solid icons fa-bowl-food fa-3x"></i>
                <h2 class="text-white">${allMeals[i].strIngredient}</h2>
                <p class="text-white"> ${allMeals[i].strDescription
                  .split(" ")
                  .splice(0, 20)
                  .join(" ")}</p>
            </div>
        
        </div>


    `;
    }
    document.getElementById("IngredientsDisplay").innerHTML = cartoona;
  }

  Ingredients();

$("#IngredientsDisplay").click(function (e) {
  let allImg = $(e.target).text();
  let results = allImg.trim();
  $("#IngredientsDisplay").addClass("d-none");
  $("#IngredChang").removeClass("d-none");
  async function Instruc(meal) {
    let apiIns = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`
    );
    let final = await apiIns.json();
    let allItem = final.meals;
    console.log(allItem);

    let int = ` `;
    for (let i = 0; i < allItem.length; i++) {
      int += `
        <div class="col-md-6 col-lg-3 my-3 myM  shadow">
                <div class="post item">
                    <img src='${allItem[i].strMealThumb}' class="w-100 rounded-2" />
                    <div class="layer d-flex align-items-center ">
                        <div class="caotion rounded-2">
                            <h2 class="ms-2">${allItem[i].strMeal}</h2>
                        </div>
                    </div>
                </div>
        </div>`;
    }
    document.querySelector("#IngredChang").innerHTML = int;
  }
    Instruc('Beef');

  // if (results !=null) {
  // } else {
  //   Instruc("Beef");
  //   //Dessert
  // }
});

$("#IngredChang").click(function (e) {
  let allImg = $(e.target).text();
  let result = allImg.trim();
  $("#IngredChang").addClass("d-none");
  $("#IngredChangOne").removeClass("d-none");
  console.log("this");

  async function Instruc(meal) {
    let apiIns = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
    );
    let final = await apiIns.json();
    let allItem = final.meals;

    let int = ` `;

    for (let i = 0; i < allItem.length; i++) {
      int = `
    <div class="row intro  mt-5 text-white">
             <div class="col-md-4 text-center">

                 <img class="w-100" src="${allItem[i].strMealThumb}" alt="">
                 <h2>${allItem[i].strMeal}</h2>
             </div>
             <div class="col-md-8">
                 <h2>Instructions</h2>
                 <p>${allItem[i].strInstructions}</p>
                 <p class=" fw-bolder">Area :<span>${allItem[i].strArea}</span></p>
                 <p class="fw-bolder">Category :<span>${allItem[i].strCategory}</span></p>
                 <h3 class="fw-bolder">Recipes : </h3>
                 <ul class="d-flex flex-wrap " id="recipes">
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure1} ${allItem[i].strIngredient1}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure2}${allItem[i].strMeasure1}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure3}${allItem[i].strIngredient3}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure4}${allItem[i].strIngredient4}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure5}${allItem[i].strIngredient5}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure6}${allItem[i].strIngredient6}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure7}${allItem[i].strIngredient7}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure8}${allItem[i].strIngredient8}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure9}${allItem[i].strIngredient9}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure10}${allItem[i].strIngredient10}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure11}${allItem[i].strIngredient11}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure12}${allItem[i].strIngredient12}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure13}${allItem[i].strIngredient13}</li>
                 </ul>
                 <h3 class="fw-bolder">Tags : </h3>
                 <ul class="d-flex " id="tags">
                     <li class="my-3 mx-1 p-1 alert-danger rounded">Soup</li>
                 </ul>
                 <a class="btn mb-3 btn-success text-white" target="_blank" href="${allItem[i].strSource}">Source</a>
                 <a class="btn mb-3 btn-danger  youtube text-white" target="_blank" href="${allItem[i].strYoutube}">Youtub</a>

             </div>
         </div>
       `;
    }

    document.querySelector("#IngredChangOne").innerHTML = int;
  }
  Instruc(result);
});

});
// End Ingredients
// strat contact

$("#navContact").click(function () {
  $(".Contact").removeClass("d-none");
  $("#Home  , #Categories , #Ingredients , #Area, #secSearch  ").addClass(
    "d-none"
  );

  let username = document.getElementById("name");
  let useremail = document.getElementById("email");
  let phonealert = document.getElementById("phone");
  let agealert = document.getElementById("age");
  let password = document.getElementById("password");
  let rePassword = document.getElementById("rePassword");

  // start Name
  function validataName() {
    let regex = /^[A-Z][a-z]*$/;
    if (regex.test(username.value) == true) {
      return true;
    } else {
      return false;
    }
  }
  username.addEventListener("keyup", function () {
    console.log();
    if (validataName() == true) {
      $(".checkOne").removeClass("d-none");
      $(".xmarkOne").addClass("d-none");
      $(".userOne").css("border-bottom", "1px solid #28a745");
      $("#namealert").addClass("d-none");
    } else if (validataName() == false) {
      $(".xmarkOne").removeClass("d-none");
      $(".checkOne").addClass("d-none");
      $(".userOne").css("border-bottom", "1px solid #dc3545");
      $("#namealert").removeClass("d-none");
    } else {
      $(".xmarkOne").addClass("d-none");
      $(".userOne").css("border-bottom", "1px solid #dc3545");
    }
  });
  // End Name
  // start email
  function validatEmail() {
    let regex = /^[a-z]{3,7}@(gmail|yahoo)\.com$/;
    if (regex.test(useremail.value) == true) {
      return true;
    } else {
      return false;
    }
  }
  useremail.addEventListener("keyup", function () {
    if (validatEmail() == true) {
      $(".checkTwo").removeClass("d-none");
      $(".xmarkTwo").addClass("d-none");
      $(".userTow").css("border-bottom", "1px solid #28a745");
      $("#emailalert").addClass("d-none");
    } else if (validatEmail() == false) {
      $(".xmarkTwo").removeClass("d-none");
      $(".checkTwo").addClass("d-none");
      $(".userTow").css("border-bottom", "1px solid #dc3545");
      $("#emailalert").removeClass("d-none");
    } else {
      $(".xmarkTwo").addClass("d-none");
      $(".userTow").css("border-bottom", "1px solid #dc3545");
    }
  });
  // End email
  // start phone
  function validataPhone() {
    let regex = /^(002)?01[0-1-2-5][0-9]{8}$/;
    if (regex.test(phonealert.value) == true) {
      return true;
    } else {
      return false;
    }
  }
  phonealert.addEventListener("keyup", function () {
    if (validataPhone() == true) {
      $(".checkthree").removeClass("d-none");
      $(".xmarkthree").addClass("d-none");
      $(".userthree").css("border-bottom", "1px solid #28a745");
      $("#phonealert").addClass("d-none");
    } else if (validataPhone() == false) {
      $(".xmarkthree").removeClass("d-none");
      $(".checkthree").addClass("d-none");
      $(".userthree").css("border-bottom", "1px solid #dc3545");
      $("#phonealert").removeClass("d-none");
    } else {
      $(".xmarkthree").addClass("d-none");
      $(".userthree").css("border-bottom", "1px solid #28a745");
    }
  });
  // End phone
  // start Age
  function validataAge() {
    let regex = /^([1-9][0-9]?|100)$/;
    if (regex.test(agealert.value) == true) {
      return true;
    } else {
      return false;
    }
  }
  agealert.addEventListener("keyup", function () {
    if (validataAge() == true) {
      $(".checkfour").removeClass("d-none");
      $(".xmarkfour").addClass("d-none");
      $(".userfour").css("border-bottom", "1px solid #28a745");
      $("#agealert").addClass("d-none");
    } else if (validataAge() == false) {
      $(".xmarkfour").removeClass("d-none");
      $(".checkfour").addClass("d-none");
      $(".userfour").css("border-bottom", "1px solid #dc3545");
      $("#agealert").removeClass("d-none");
    } else {
      $(".xmarkfour").addClass("d-none");
      $(".userfour").css("border-bottom", "1px solid #28a745");
    }
  });
  // End Age
  // start pass
  function validatapass() {
    let regex = /^([A-Z]|[a-z]){1,9}[0-9]{7,9}$/;
    if (regex.test(password.value) == true) {
      return true;
    } else {
      return false;
    }
  }
  password.addEventListener("input", function () {
    if (validatapass() == true) {
      $(".checkfive").removeClass("d-none");
      $(".xmarkfive").addClass("d-none");
      $(".userFive").css("border-bottom", "1px solid #28a745");
      $("#passwordalert").addClass("d-none");
    } else if (validatapass() == false) {
      $(".xmarkfive").removeClass("d-none");
      $(".checkfive").addClass("d-none");
      $(".userFive").css("border-bottom", "1px solid #dc3545");
      $("#passwordalert").removeClass("d-none");
    } else {
      $(".xmarkfive").addClass("d-none");
      $(".userFive").css("border-bottom", "1px solid #28a745");
    }
  });
  // End REpass
  // start pass
  function validataRepass() {
    // let regex=/^([A-Z]|[a-z]){1,9}[0-9]{7,9}$/
    if (rePassword.value == password.value) {
      return true;
    } else {
      return false;
    }
  }
  rePassword.addEventListener("input", function () {
    if (validataRepass() == true) {
      $(".checksix").removeClass("d-none");
      $(".xmarksix").addClass("d-none");
      $(".usersix").css("border-bottom", "1px solid #28a745");
      $("#repasswordalert").addClass("d-none");
    } else if (validataRepass() == false) {
      $(".xmarksix").removeClass("d-none");
      $(".checksix").addClass("d-none");
      $(".usersix").css("border-bottom", "1px solid #dc3545");
      $("#repasswordalert").removeClass("d-none");
    } else {
      $(".xmarksix").addClass("d-none");
      $(".usersix").css("border-bottom", "1px solid #28a745");
    }
  });
  // End REpass
});
// End contact

$(document).ready(function () {
  $("#loding").fadeOut(2000, function () {
    $("#loding").remove();
    $("body").css("overflow", "auto");
  });
});
