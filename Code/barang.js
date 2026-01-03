const params = new URLSearchParams(window.location.search);
const id = params.get("id");

let qty = 1;

function tambah() {
  qty++;
  document.getElementById("qty").innerText = qty;
}

function kurang() {
  if (qty > 1) {
    qty--;
    document.getElementById("qty").innerText = qty;
  }
}

if (id == 1) {
  document.getElementById("nama").innerText = "Kemeja Flanel";
  document.getElementById("harga").innerText = "Rp 120.000";
  document.getElementById("gambar").src = "kemeja.jpeg";
  document.getElementById("deskripsi").innerText =
    "Kemeja flanel premium berbahan lembut, nyaman dipakai, cocok untuk kegiatan santai maupun semi-formal.";
} else {
  document.body.innerHTML = "<h2>Produk tidak ditemukan</h2>";
}
