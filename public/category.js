// Dummy business database
const businesses = [
{ name: "Expert Electricals", category: "Electrician", city: "Hajipur", phone: "6200152506" },
{ name: "Expert Electricals", category: "Plumber", city: "Hajipur", phone: "6200152506" },
{ name: "Expert Electricals", category: "Electrician", city: Hajipur, phone: "6200152506" },
{ name: "Expert Electricals", category: "Electrician", city: Hajipur, phone: "6200152506" },
{ name: "Expert Electricals", category: "Electrician", city: Hajipur, phone: "6200152506" },
{ name: "Expert Electricals", category: "Electrician", city: Hajipur, phone: "6200152506" },
{ name: "Expert Electricals", category: "Electrician", city: Hajipur, phone: "6200152506" },
{ name: "Expert Electricals", category: "Electrician", city: Hajipur, phone: "6200152506" },
];

// URL se category lena
const Params = new URLSearchParams(window.location.search);
const Category = params.get("category");

// Title set
document.getElementById(categoryTitle").innerText =
category + " Services";

fetch("/api/businesses?category=" + category)
.then(res => res.json())
.then(data => {

const list = document.getElementById("businessList");

if (data.length === 0) {
list.innerHTML = "<p>No Businesses Found</p>";
return;
}

data.forEach(b => {
list.innerHTML += '
<div class="business-card">
<h3>${b.name}</h3>
<p>City: ${b.city}</p>
<p>Phone: ${b.phone}</p>
</div>
';
});
});