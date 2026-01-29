let products = JSON.parse(localStorage.getItem("products")) || [];
const list = document.getElementById("list");

function addProduct() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const stock = document.getElementById("stock").value;

  if (!name || !price || !stock) {
    alert("Fill all fields");
    return;
  }

  products.push({ name, price, stock });
  localStorage.setItem("products", JSON.stringify(products));
  showProducts();
}

function showProducts() {
  list.innerHTML = "";
  products.forEach(p => {
    list.innerHTML += `<li>${p.name} | ₹${p.price} | Stock: ${p.stock}</li>`;
  });
}

showProducts();
