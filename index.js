


function getShows(){
   // const ul = document.getElementById('list')

fetch("http://localhost:3000/shows")
  .then(res => res.json())
  .then(data => {

  const showArray = data.map(a => a.title);

 
  
  
  showArray.forEach((item)=>{
    let liList = document.createElement("li");
    liList.innerText = item;
    list.appendChild(liList);

   
  })

  

  
   
  }) }

 


document.addEventListener('DOMContentLoaded', function() {
   getShows(); 

   

   

})

 
const list = document.getElementById("list");
const queue = document.getElementById("queued");
const li = list.querySelectorAll("li");

list.addEventListener("click", (ev) => {
    const EL_LI = ev.target.closest("li");
    queue.append(EL_LI);
  });




    // data is an array of object, 
    // iterate over it and create an in-memory CSV
    // or verify if Plotly.d3 can be fed directly this array


// code here

