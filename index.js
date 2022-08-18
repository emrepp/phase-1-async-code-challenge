
let showArray = [];
const list = document.getElementById("list");
const queue = document.getElementById("queued");

const searchBar = document.getElementById("search")
searchBar.addEventListener('keyup', (e)=>{
    list.innerHTML='';
    const searchString = e.target.value.toLowerCase();

   const filteredTitle= showArray.filter((title) => {
    return(
        title.toLowerCase().includes(searchString) 


    );
    });
    console.log(filteredTitle)
    filteredTitle.forEach((item) => {
        let liList = document.createElement("li");
        liList.innerText = item;
        list.appendChild(liList);

    })
});



function getShows(){
   // 

   

fetch("http://localhost:3000/shows")
  .then(res => res.json())
  .then(data => {

 showArray = data.map(a => a.title);

 
  
  
  showArray.forEach((item)=>{
    let liList = document.createElement("li");
    liList.innerText = item;
    list.appendChild(liList);

   
  })})




// store name elements in array-like object

  
   
}

  document.addEventListener('DOMContentLoaded', function() {
    getShows(); 
  
     
  
     
  
  })

 
 




 

//const li = list.querySelectorAll("li");

list.addEventListener("click", (ev) => {
    const EL_LI = ev.target.closest("li");
    queue.append(EL_LI);
  });

  queue.addEventListener("click", (ev) => {
    const EL_LI = ev.target.closest("li");
    list.append(EL_LI);
  });




