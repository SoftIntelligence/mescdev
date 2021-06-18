const manga_api_url 	= "https://pilotseat.si-crew.com/article/read.php"; 
const search			= "https://pilotseat.si-crew.com/article/search.php";


const queryString = window.location.search;
  console.log(queryString);
  // ?product=shirt&color=blue&newuser&size=m
  const urlParams = new URLSearchParams(queryString);
  const key = urlParams.get('search');
  if (key !== null) {getartapi(search+'?s='+key); document.getElementById("labl").innerHTML=key}else{getartapi(manga_api_url);}
  
  



async function getartapi(url) { 

  // Storing response 
  const response = await fetch("https://bing-news-search1.p.rapidapi.com/news?textFormat=Raw&safeSearch=Off", {
  "method": "GET",
  "headers": {
    "x-bingapis-sdk": "true",
    "x-rapidapi-key": "bd6a3aaddemsh7deb42ed29aeadep104bb5jsn03d4896c1127",
    "x-rapidapi-host": "bing-news-search1.p.rapidapi.com"
  }
}); 
  
  // Storing data in form of JSON 
  var data = await response.json(); 
 
  if (response) { 
     
  } 
  show3(data); 
  } 
 

 

// Function to hide the loader 
function hideloader() { 
  document.getElementById('loading').style.display = 'none'; 
} 
// Function to define innerHTML for HTML table 
function show3(data) { 
   console.log(data); 
  let article=``;
  
  
  // Loop to access all rows 
  var rt = data.value;
  for (var key in rt) { 
 
   article += `
 <div class="col-lg-8 mx-auto mb-5" onclick="location.href='${data.value[key].url}'">
        <article class="card rounded-0 border-0">
          <img src="${data.value[key].image.thumbnail.contentUrl}" >
          <div class="card-body px-0">
            <a  class="h4 d-block">${data.value[key].name}</a>
            
            <p>${data.value[key].description}</p>
            <a href="${data.value[key].url}" class="btn btn-sm btn-outline-primary">Read More</a>
          </div>
        </article>
      </div>
   
    

`; 

   
    

  } 

   document.getElementById("allarticle").innerHTML = article; 

} 