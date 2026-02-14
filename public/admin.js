// SIMPLE ADMIN LOGIN (demo)
function loginAdmin(e) {
e.preventDefault();

const u = document.getElementById("username").value;
const p = document.getElementById("password").value;

if (u === "admin" && p === "12345") {
window.location.href = "admin-dashboard.html";
} else {
alert("Invalid login");
}
}

// Load pending businesses
if (window.location.pathname.includes("admin-dashboard")) {
fetch("/api/pending")
.then(res => res.json())
.then(data => {

const list = document.getElementById("pendingList");

if (data.length === 0) {
list.innerHTML = "<p>No pending businesses</p>;
return;
}

data.forEach(b -> {
list.innerHTML += '
<div class="business-card">
<h3>${b.name}</h3>
<p>${b.category} | ${b.city}</p>
<button onclick="approveBusiness(${b.id})">
Approve
</button>
</div>
';
});
});
}

// Aapprove business
function approveBusiness(id) {
fetch("/api/approve?id=" + id)
.then(() => {
alert("Business Approved");
location.reload();
});
}
