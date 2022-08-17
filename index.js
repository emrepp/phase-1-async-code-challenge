


function getShows(){
   // const ul = document.getElementById('list')

fetch("http://localhost:3000/shows")
  .then(res => res.json())
  .then(data => {

  const showArray = data.map(a => a.title);

  
  let list = document.getElementById("list");
  
  showArray.forEach((item)=>{
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  })

   
  }) }

 


document.addEventListener('DOMContentLoaded', function() {
   getShows(); 

   

})




    // data is an array of object, 
    // iterate over it and create an in-memory CSV
    // or verify if Plotly.d3 can be fed directly this array


// code here

