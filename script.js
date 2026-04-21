// DARK MODE
document.getElementById("toggleMode").onclick = () => {
  document.body.classList.toggle("dark");
};

// MENU FILTER
function filterMenu(type) {
  let items = document.querySelectorAll(".card");

  items.forEach(item => {
    if (type === "all") {
      item.style.display = "block";
    } else if (item.classList.contains(type)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// REVIEWS SYSTEM
window.onload = function () {
  loadReviews();
};

function addReview() {
  let rating = document.getElementById("rating").value;
  let text = document.getElementById("reviewText").value;

  if (text === "") {
    alert("Please enter feedback");
    return;
  }

  let review = { rating, text };

  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.push(review);

  localStorage.setItem("reviews", JSON.stringify(reviews));

  document.getElementById("reviewText").value = "";
  loadReviews();
}

function loadReviews() {
  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  let list = document.getElementById("reviewList");

  list.innerHTML = "";

  reviews.forEach(r => {
    let div = document.createElement("div");
    div.className = "review-item";
    div.innerHTML = "⭐ " + r.rating + "<br>" + r.text;
    list.appendChild(div);
  });
}