// Fungsi untuk menampilkan section yang dipilih
function showSection(section) {
    document.getElementById("square").style.display = section === "square" ? "block" : "none";
    document.getElementById("rectangle").style.display = section === "rectangle" ? "block" : "none";

    // Ganti gambar sesuai bangun datar yang dipilih
    document.getElementById("gambar-bangun").src = section === "square" ? "img/persegi.png" : "img/persegi_panjang.png";
}

// Fungsi untuk menampilkan sub-section perhitungan
function showCalculation(calc) {
    document.querySelectorAll(".calculation").forEach(el => el.style.display = "none");
    document.getElementById(calc).style.display = "block";
}

// Fungsi Hitung dan Reset untuk masing-masing perhitungan
function hitungLuasPersegi() {
    const sisi = document.getElementById("sisiLuas").value;
    document.getElementById("hasilLuasPersegi").innerText = sisi ? `Luas: ${sisi * sisi}` : "Masukkan nilai!";
}

function resetLuasPersegi() {
    document.getElementById("sisiLuas").value = "";
    document.getElementById("hasilLuasPersegi").innerText = "";
}

function hitungKelilingPersegi() {
    const sisi = document.getElementById("sisiKeliling").value;
    document.getElementById("hasilKelilingPersegi").innerText = sisi ? `Keliling: ${4 * sisi}` : "Masukkan nilai!";
}

function resetKelilingPersegi() {
    document.getElementById("sisiKeliling").value = "";
    document.getElementById("hasilKelilingPersegi").innerText = "";
}

function hitungLuasRectangle() {
    const p = document.getElementById("panjangLuas").value;
    const l = document.getElementById("lebarLuas").value;
    document.getElementById("hasilLuasRectangle").innerText = p && l ? `Luas: ${p * l}` : "Masukkan nilai!";
}

function resetLuasRectangle() {
    document.getElementById("panjangLuas").value = "";
    document.getElementById("lebarLuas").value = "";
    document.getElementById("hasilLuasRectangle").innerText = "";
}

function hitungKelilingRectangle() {
    const p = document.getElementById("panjangKeliling").value;
    const l = document.getElementById("lebarKeliling").value;
    document.getElementById("hasilKelilingRectangle").innerText = p && l ? `Keliling: ${2 * (p + l)}` : "Masukkan nilai!";
}

function resetKelilingRectangle() {
    document.getElementById("panjangKeliling").value = "";
    document.getElementById("lebarKeliling").value = "";
    document.getElementById("hasilKelilingRectangle").innerText = "";
}
