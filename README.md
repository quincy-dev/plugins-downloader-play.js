---

# 🎵 **YouTube Audio Downloader Bot** 🎶

Selamat datang di proyek **YouTube Audio Downloader Bot**! 🚀  
Bot ini memungkinkan Anda untuk mencari dan mengunduh audio dari video YouTube secara otomatis, dengan hanya menggunakan perintah tertentu di platform yang mendukung bot (misalnya WhatsApp, Telegram, dsb.). 🎧🎥

---

## 📌 **Fitur Utama**

- 🔍 **Pencarian Video YouTube**: Mencari video berdasarkan judul yang dimasukkan oleh pengguna.
- 🎶 **Download Audio MP3**: Mengunduh audio dalam format MP3 dari video YouTube.
- 📥 **Pengiriman Audio**: Mengirimkan file MP3 yang telah diunduh langsung ke pengguna.
- 📊 **Statistik Video**: Menampilkan statistik video seperti jumlah views dan like dari video YouTube.

---

## 🛠️ **Fitur dan Teknologi yang Digunakan**

- **Google API (YouTube Data API v3)**: Untuk melakukan pencarian video YouTube dan mendapatkan metadata.
- **Axios**: Untuk menangani HTTP request yang berkomunikasi dengan API eksternal untuk mengunduh audio.
- **Node.js**: Framework untuk menjalankan bot dan mengeksekusi kode backend.

---

## 🔑 **Persyaratan**

Sebelum Anda mulai, pastikan Anda telah menyiapkan hal-hal berikut:

1. **API Key Google**:
   - Daftar dan dapatkan API Key dari [Google Developer Console](https://console.developers.google.com/).
   - Gantilah `'YOUR_GOOGLE_API_KEY'` pada kode dengan API Key yang Anda dapatkan.

2. **Akses Platform Bot**:
   - Pastikan Anda memiliki platform yang mendukung bot seperti WhatsApp atau Telegram.
   - Anda perlu mengonfigurasi bot pada platform tersebut sesuai dengan petunjuk masing-masing.

---

## 📦 **Instalasi dan Pengaturan**

Ikuti langkah-langkah berikut untuk menjalankan bot di sistem Anda:

### 1. **Clone Repositori**

```bash
git clone https://github.com/quincy-dev/plugins-downloader-play.js.git
```

### 2. **Install Dependencies**

Masuk ke direktori proyek dan instal semua dependensi yang dibutuhkan:

```bash
cd plugins-downloader-play.js
npm install
```

### 3. **Konfigurasi API Key Google**

Buka file `downloader-play.js` dan cari bagian berikut:

```javascript
const youtube = google.youtube({
    version: 'v3',
    auth: 'YOUR_GOOGLE_API_KEY', // Gantilah dengan API Key Anda
});
```

Gantilah `'YOUR_GOOGLE_API_KEY'` dengan API Key yang Anda dapatkan di langkah pertama.

### 4. **Jalankan Bot**

Untuk menjalankan bot, cukup jalankan perintah berikut:

```bash
npm start
```

---

## 💬 **Cara Penggunaan**

Setelah bot berjalan, Anda bisa memanfaatkan bot untuk mencari dan mengunduh audio dari video YouTube.

### **Contoh Perintah**:
1. Untuk mencari dan mengunduh audio dari video YouTube, gunakan perintah seperti ini di platform bot Anda:

```
.play judul_lagu
```

### **Apa yang Terjadi?**
- Bot akan mencari video YouTube berdasarkan kata kunci yang Anda masukkan.
- Setelah menemukan video, bot akan mengunduh audio dalam format MP3.
- Bot kemudian mengirimkan file MP3 ke pengguna.

---

## ⚙️ **API yang Digunakan**

- **YouTube Data API v3**: Untuk mencari video berdasarkan kata kunci dan mendapatkan detail video (judul, URL, statistik).
- **API Eksternal untuk Mengunduh Audio**: Kami menggunakan API dari [SiputZX](https://www.siputzx.my.id) untuk mengonversi video YouTube ke format MP3.

---

## 🔒 **Lisensi**

Proyek ini dilisensikan di bawah **MIT License**.

```
MIT License

Copyright (c) 2025 QUINCY DEV

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👨‍💻 **Pembuat**

Proyek ini dibuat oleh **QUINCY DEV**. 🚀  
[Follow me on GitHub](https://github.com/quincy-dev)

---

## 🎉 **Terima Kasih!**

Terima kasih telah menggunakan dan mendukung proyek ini!  
Jika Anda menemukan masalah atau ingin berkontribusi, silakan buka *issue* atau *pull request*. Mari kita bersama-sama terus mengembangkan proyek ini! 💪✨

---

### 👀 **Screenshot dan Demo**  
https://i.supa.codes/E49c-

---

### 📢 **Kontribusi**  
Kontribusi sangat diterima! Jika Anda ingin membantu dalam mengembangkan bot ini, silakan buka *pull request* atau *issue*.

---
