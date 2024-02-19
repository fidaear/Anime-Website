const api_url="https://api.jikan.moe/v4";
const searchText =document.querySelector("#searchText");
const seachResults =document.querySelector("#seachResults");

searchText.addEventListener("keyup", function(){
    if(this.value.length >3){
        getAnimes(this.value);

    }
});
async function getAnimes(query){
const res=await fetch(`https://api.jikan.moe/v4/anime?q=${query}`);


const animes=await res.json();
console.log(animes)

if(animes.data.length>0){
    seachResults.style.display="block";
seachResults.innerHTML=``;

animes.data.map(anime =>{
    seachResults.innerHTML+=`
    <li class="singleAnime"  data-image="${anime.images.jpg.image_url}"><a href="${anime.url}" target="_blank">${anime.title}</a></li>
    `;
})
const singleAnimes= Array.from(document.querySelectorAll(".singleAnime"))
const displayImage=document.querySelector("#displayImage");
singleAnimes.map(singleAnime=>{
    singleAnime.addEventListener("mouseenter",function(){
        displayImage.style.display="block";
        displayImage.innerHTML=`<img src="${this.dataset.image}" >`;
    })
    singleAnime.addEventListener("mouseout",function(){
        displayImage.style.display="none";
        
    })
    singleAnime.addEventListener("click",function(){
        displayImage.style.display="none";
        
    })
})


}
}






const topTvanime=document.querySelector('#topTvanime')
async function getTopAnime(){
const res= await fetch(`${api_url}/top/anime`);
const topAnimes=await res.json();
console.log(topAnimes.data);

topAnimes.data.map(topAnime=>{
    topTvanime.innerHTML+=`
    <div class="col-lg-3 col-md-6">
          <div class="item">
            <div class="thumb">
              <a href="${topAnime.url}"><img src="${topAnime.images.jpg.image_url}" alt=""></a>
              <span class="price">${topAnime.score}</span>
            </div>
            <div class="down-content">
              <span class="category">${topAnime.source}</span>
              <h4>${topAnime.title}</h4>
             
            </div>
          </div>
        </div>
    
    
    
    `;


})
}
getTopAnime();

const upcommingSeries=document.querySelector('#upcommingSeries')
async function upcommingSerie(){
const res= await fetch(`${api_url}/top/anime`);
const upcommingSeries=await res.json();
console.log(upcommingSeries.data);

upcommingSeries.data.map(item=>{
    upcommingSeries.innerHTML+=`
    <div class="col-lg-3 col-md-6">
          <div class="item">
            <div class="thumb">
              <a href="${item.url}"><img src="${upcommingSerie.images.jpg.image_url}" alt=""></a>
              <span class="price">${upcommingSerie.score}</span>
            </div>
            <div class="down-content">
              <span class="category">${upcommingSerie.source}</span>
              <h4>${upcommingSerie.title}</h4>
             
            </div>
          </div>
        </div>
    
    
    
    `;


})
}
getTopAnime();





/* the most watched 

   <div class="col-lg-2 col-md-6 col-sm-6">
          <div class="item">
            <div class="thumb">
              <a href="product-details.html"><img src="assets/images/top-game-01.jpg" alt=""></a>
            </div>
            <div class="down-content">
                <span class="category">Adventure</span>
                <h4>Assasin Creed</h4>
                <a href="product-details.html">Explore</a>
            </div>
          </div>
        </div>


*/


