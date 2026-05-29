/* =========================
PLAGES
========================= */

const beaches = [

{
name:"Boucan Canot",
image:"https://i.ibb.co/Fb308Mr6/plage-boucan-canot.jpg",
lat:-21.031,
lng:55.227,
desc:"Spot emblématique de baignade et surf.",
safety:"🟢 Zone surveillée",
surf:"🌊 Surf : Excellent",
water:"🌡 Eau : 27°C",
restaurant:"🍴 Restaurants : Oui",
gps:"https://www.google.com/maps/search/?api=1&query=Plage+de+Boucan+Canot"
},

{
name:"Roches Noires",
image:"https://i.ibb.co/gbv5sgbL/plage-roche-noire.jpg",
lat:-21.052,
lng:55.224,
desc:"Plage urbaine populaire de Saint-Gilles.",
safety:"🟢 Zone surveillée",
surf:"🌊 Surf : Bon",
water:"🌡 Eau : 27°C",
restaurant:"🍴 Restaurants : Oui",
gps:"https://www.google.com/maps/search/?api=1&query=Plage+des+Roches+Noires+La+Reunion"
},

{
name:"L'Hermitage",
image:"https://i.ibb.co/vxnR98ZT/plage-hermiatge.jpg",
lat:-21.084,
lng:55.227,
desc:"Lagon turquoise protégé par la barrière de corail.",
safety:"🟢 Lagon sécurisé",
surf:"🌊 Surf : Faible",
water:"🌡 Eau : 28°C",
restaurant:"🍴 Restaurants : Oui",
gps:"https://www.google.com/maps/search/?api=1&query=Plage+de+l+Hermitage+La+Reunion"
},

{
name:"Trou d’Eau",
image:"https://i.ibb.co/NdVn4rnP/plage-trou-d-eau.jpg",
lat:-21.099,
lng:55.244,
desc:"Plage familiale idéale pour snorkeling.",
safety:"🟢 Zone surveillée",
surf:"🌊 Surf : Moyen",
water:"🌡 Eau : 28°C",
restaurant:"🍴 Restaurants : Oui",
gps:"https://www.google.com/maps/search/?api=1&query=Trou+d+Eau+La+Reunion"
},

{
name:"Les Brisants",
image:"https://i.ibb.co/gZzR3GmR/plage-les-brisants.jpg",
lat:-21.055,
lng:55.221,
desc:"Spot très apprécié pour surf et sunset.",
safety:"🟠 Vigilance requin",
surf:"🌊 Surf : Excellent",
water:"🌡 Eau : 27°C",
restaurant:"🍴 Restaurants : Oui",
gps:"https://www.google.com/maps/search/?api=1&query=Plage+des+Brisants+La+Reunion"
},

{
name:"Saint-Leu",
image:"https://i.ibb.co/TqD2BCqZ/plage-de-saint-leu.jpg",
lat:-21.170,
lng:55.287,
desc:"Spot mythique de surf à La Réunion.",
safety:"🟠 Vigilance requin",
surf:"🌊 Surf : Excellent",
water:"🌡 Eau : 27°C",
restaurant:"🍴 Restaurants : Oui",
gps:"https://www.google.com/maps/search/?api=1&query=Plage+de+Saint+Leu"
},

{
name:"Pointe au Sel",
image:"https://i.ibb.co/zWqKtz2Y/plage-pointe-au-sel.jpg",
lat:-21.196,
lng:55.274,
desc:"Falaises volcaniques et panorama exceptionnel.",
safety:"🔴 Baignade déconseillée",
surf:"🌊 Surf : Bon",
water:"🌡 Eau : 26°C",
restaurant:"🍴 Restaurants : Non",
gps:"https://www.google.com/maps/search/?api=1&query=Pointe+au+Sel+La+Reunion"
},

{
name:"Étang-Salé",
image:"https://i.ibb.co/67T71ZLh/plage-etang-sale.jpg",
lat:-21.259,
lng:55.332,
desc:"Plage volcanique de sable noir.",
safety:"🟠 Vigilance requin",
surf:"🌊 Surf : Bon",
water:"🌡 Eau : 26°C",
restaurant:"🍴 Restaurants : Oui",
gps:"https://www.google.com/maps/search/?api=1&query=Plage+de+l+Etang+Sale"
},

{
name:"Trois Bassins",
image:"https://i.ibb.co/zzv6vwK/plage-trois-bassin.jpg",
lat:-21.113,
lng:55.262,
desc:"Petite plage calme et sauvage.",
safety:"🟢 Zone surveillée",
surf:"🌊 Surf : Moyen",
water:"🌡 Eau : 27°C",
restaurant:"🍴 Restaurants : Peu",
gps:"https://www.google.com/maps/search/?api=1&query=Trois+Bassins+La+Reunion"
},

{
name:"Souris Chaude",
image:"https://i.ibb.co/0yRWbQ47/plage-souris-chaude.jpg",
lat:-21.091,
lng:55.238,
desc:"Zone sauvage très appréciée localement.",
safety:"🟠 Vigilance requin",
surf:"🌊 Surf : Moyen",
water:"🌡 Eau : 27°C",
restaurant:"🍴 Restaurants : Peu",
gps:"https://www.google.com/maps/search/?api=1&query=Souris+Chaude+La+Reunion"
},

{
name:"Souris Blanche",
image:"https://i.ibb.co/DqY8FK7/plage-souris-blanche.jpg",
lat:-21.097,
lng:55.239,
desc:"Petit coin lagon calme et reposant.",
safety:"🟢 Zone lagon",
surf:"🌊 Surf : Faible",
water:"🌡 Eau : 28°C",
restaurant:"🍴 Restaurants : Peu",
gps:"https://www.google.com/maps/search/?api=1&query=Souris+Blanche+La+Reunion"
},

{
name:"Ti Sable",
image:"https://i.ibb.co/0V8RFcZQ/plage-ti-sable.jpg",
lat:-21.377,
lng:55.616,
desc:"Plage sauvage située à Saint-Joseph.",
safety:"🔴 Baignade dangereuse",
surf:"🌊 Surf : Fort",
water:"🌡 Eau : 26°C",
restaurant:"🍴 Restaurants : Non",
gps:"https://www.google.com/maps/search/?api=1&query=Ti+Sable+Saint+Joseph+La+Reunion"
},

{
name:"Saint-Pierre",
image:"https://i.ibb.co/qM8kMTsG/plage-saint-pierre.jpg",
lat:-21.339,
lng:55.478,
desc:"Grande plage urbaine animée.",
safety:"🟢 Zone surveillée",
surf:"🌊 Surf : Moyen",
water:"🌡 Eau : 27°C",
restaurant:"🍴 Restaurants : Oui",
gps:"https://www.google.com/maps/search/?api=1&query=Plage+de+Saint+Pierre+La+Reunion"
},

{
name:"Grand Anse",
image:"https://i.ibb.co/7dxL8TDL/plage-grand-anse.jpg",
lat:-21.365,
lng:55.561,
desc:"L’une des plus belles plages sauvages du sud.",
safety:"🟠 Vigilance requin",
surf:"🌊 Surf : Fort",
water:"🌡 Eau : 26°C",
restaurant:"🍴 Restaurants : Oui",
gps:"https://www.google.com/maps/search/?api=1&query=Grand+Anse+La+Reunion"
},

{
name:"Manapany",
image:"https://i.ibb.co/PkmkjyR/plage-manapany.jpg",
lat:-21.372,
lng:55.571,
desc:"Bassin naturel volcanique célèbre.",
safety:"🟢 Bassin protégé",
surf:"🌊 Surf : Faible",
water:"🌡 Eau : 26°C",
restaurant:"🍴 Restaurants : Peu",
gps:"https://www.google.com/maps/search/?api=1&query=Manapany+La+Reunion"
}

];

/* =========================
CARTE
========================= */

const map = L.map('map').setView([-21.15,55.5],10);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
attribution:'© OpenStreetMap'
}
).addTo(map);

/* =========================
MARKERS
========================= */

beaches.forEach(beach=>{

L.marker([beach.lat,beach.lng])

.addTo(map)

.bindPopup(`

<div style="width:240px">

<img
src="${beach.image}"
style="
width:100%;
height:140px;
object-fit:cover;
border-radius:12px;
margin-bottom:10px;
"
>

<h3 style="margin-bottom:8px;color:#0f766e">
${beach.name}
</h3>

<p style="font-size:14px;margin-bottom:10px">
${beach.desc}
</p>

<div style="margin-bottom:8px">
${beach.safety}
</div>

<a
href="${beach.gps}"
target="_blank"
style="
text-decoration:none;
font-weight:700;
color:#0f766e;
"
>
📍 Itinéraire GPS précis
</a>

</div>

`);

});

/* =========================
CARDS
========================= */

const cards =
document.getElementById("cards");

function displayBeaches(list){

cards.innerHTML="";

list.forEach(beach=>{

cards.innerHTML += `

<div class="card">

<img src="${beach.image}">

<div class="content">

<h3>${beach.name}</h3>

<p>${beach.desc}</p>

<div class="tags">

<div class="tag">
${beach.safety}
</div>

<div class="tag">
${beach.surf}
</div>

<div class="tag">
${beach.water}
</div>

</div>

<div class="info">

<div>
${beach.restaurant}
</div>

<div>

<a
href="${beach.gps}"
target="_blank"
>

📍 Ouvrir l’itinéraire GPS

</a>

</div>

</div>

</div>

</div>

`;

});

}

displayBeaches(beaches);

/* =========================
RECHERCHE
========================= */

document
.getElementById("search")
.addEventListener("input",e=>{

const value =
e.target.value.toLowerCase();

const filtered =
beaches.filter(beach=>

beach.name
.toLowerCase()
.includes(value)

);

displayBeaches(filtered);

});

/* =========================
METEO EN DIRECT
========================= */

const weatherGrid =
document.getElementById("weatherGrid");

async function loadWeather(){

if(!weatherGrid) return;

weatherGrid.innerHTML =
"<p>Chargement météo...</p>";

try{

const response = await fetch(

"https://api.open-meteo.com/v1/forecast?latitude=-21.1151&longitude=55.5364&daily=temperature_2m_max,temperature_2m_min,uv_index_max,sunrise,sunset&timezone=auto"

);

const data = await response.json();

weatherGrid.innerHTML = "";

for(let i = 0; i < 7; i++){

const formattedDate =
new Date(data.daily.time[i])
.toLocaleDateString("fr-FR");

const sunrise =
new Date(data.daily.sunrise[i])
.toLocaleTimeString(
"fr-FR",
{
hour:"2-digit",
minute:"2-digit"
}
);

const sunset =
new Date(data.daily.sunset[i])
.toLocaleTimeString(
"fr-FR",
{
hour:"2-digit",
minute:"2-digit"
}
);

weatherGrid.innerHTML += `

<div class="weather-card">

<h3>${formattedDate}</h3>

<p>
🌡 Max :
${data.daily.temperature_2m_max[i]}°C
</p>

<p>
🌙 Min :
${data.daily.temperature_2m_min[i]}°C
</p>

<p>
☀️ UV :
${data.daily.uv_index_max[i]}
</p>

<p>
🌅 Lever soleil :
${sunrise}
</p>

<p>
🌇 Coucher soleil :
${sunset}
</p>

<p>
🌊 Température eau estimée :
27°C
</p>

</div>

`;

}

}catch(error){

console.error(error);

weatherGrid.innerHTML =

`

<div class="weather-card">

<p>

Impossible de charger
la météo en direct.

</p>

</div>

`;

}

}

loadWeather();

/* =========================
AVIS UTILISATEURS
========================= */

const reviewsList =
document.getElementById("reviewsList");

let reviews =
JSON.parse(
localStorage.getItem("kotmerReviews")
) || [];

function displayReviews(){

reviewsList.innerHTML = "";

reviews.forEach(review=>{

reviewsList.innerHTML += `

<div
class="review-card"
data-rating="${review.rating}"
>

<h3>
${review.username}
</h3>

<p>
${"★".repeat(review.rating)}
</p>

<p>
${review.comment}
</p>

</div>

`;

});

}

function addReview(){

const username =
document.getElementById("username").value;

const rating =
document.getElementById("rating").value;

const comment =
document.getElementById("comment").value;

if(
username === ""
||
comment === ""
){
return;
}

const newReview = {
username,
rating,
comment
};

reviews.push(newReview);

localStorage.setItem(
"kotmerReviews",
JSON.stringify(reviews)
);

displayReviews();

document.getElementById("username").value="";
document.getElementById("comment").value="";

}

document
.getElementById("filterReviews")
.addEventListener("change",e=>{

const selected =
e.target.value;

const cards =
document.querySelectorAll(".review-card");

cards.forEach(card=>{

const stars =
card.dataset.rating;

if(
selected==="all"
||
stars===selected
){
card.style.display="block";
}else{
card.style.display="none";
}

});

});

window.onload = () => {

displayReviews();

};
