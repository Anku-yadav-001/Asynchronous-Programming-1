let input =document.getElementById('search');
let container=document.getElementById('container')
let time=null;
input.addEventListener('input',function(){
    clearInterval(time)
   time=setTimeout(() => {
        fetchRequestfromAPI(input.value)
   }, 1000);
})

async function fetchRequestfromAPI(query){
   try {
    let data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    data= await data.json();
    console.log(data.meals);
   displayData(data.meals)
   } catch (error) {
    console.log(error);
   }
}
function displayData(recepie){
    container.innerHTML="";
    if(recepie)
    {
        recepie.forEach(element=>{
            container.innerHTML+=`
            <div>
            <h3>${element.strMeal}</h3>
            <img src="${element.strMealThumb}"/>
            </div>
            `;
         })
    }
    else{
        container.innerHTML+=`<p>No recepies found</p>`
    }
}