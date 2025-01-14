# Aplikasi Catatan Pribadi

## Deskripsi Proyek
Aplikasi Catatan Pribadi adalah aplikasi berbasis web yang dibuat menggunakan React. Aplikasi ini memungkinkan pengguna untuk:

1. Menampilkan daftar catatan.
2. Menambahkan catatan baru.
3. Menghapus catatan yang ada.
4. Mencari catatan berdasarkan kata kunci (opsional).
5. Membatasi jumlah karakter pada judul catatan (opsional).
6. Mengarsipkan atau memindahkan catatan ke daftar arsip (opsional).

## Fitur Utama

### **1. Menampilkan Daftar Catatan**
- Aplikasi dapat menampilkan daftar catatan yang diambil dari data awal (initial data).
- Menggunakan state React untuk menyimpan data catatan.
- Memanfaatkan fungsi `map` untuk merender daftar catatan.

### **2. Menambahkan Catatan Baru**
- Pengguna dapat menambahkan catatan baru melalui form input.
- Data catatan yang ditambahkan memiliki struktur:

```json
{
  id: number | string,
  title: string,
  body: string,
  archived: boolean,
  createdAt: string
}
```

- Contoh data catatan:

```json
{
  id: 1,
  title: "Babel",
  body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
  archived: false,
  createdAt: "2022-04-14T04:27:34.572Z"
}
```

- ID catatan dibuat unik dengan memanfaatkan nilai timestamp: `+new Date()`.

### **3. Menghapus Catatan**
- Terdapat tombol untuk menghapus catatan.
- Jika tidak ada catatan yang tersedia, aplikasi akan menampilkan pesan "Tidak ada catatan" atau pesan serupa menggunakan conditional rendering.

## Fitur Opsional

### **1. Fitur Pencarian Catatan**
- Pengguna dapat mencari catatan berdasarkan kata kunci yang dimasukkan di kolom pencarian.
- Jika kolom pencarian tidak kosong, hanya catatan dengan judul yang mengandung kata kunci akan ditampilkan.
- Jika kolom pencarian kosong, semua catatan akan ditampilkan.

### **2. Limit Karakter pada Judul Catatan**
- Judul catatan dibatasi hingga 50 karakter.
- Menggunakan state untuk membatasi jumlah karakter, bukan atribut `maxlength`.
- Menampilkan jumlah karakter tersisa yang dapat digunakan oleh pengguna.

### **3. Fitur Arsip Catatan**
- Pengguna dapat mengarsipkan catatan dengan tombol "arsipkan".
- Catatan yang diarsipkan akan dipindahkan ke daftar arsip terpisah dari daftar catatan biasa.
- Pengguna dapat memindahkan catatan kembali dari arsip ke daftar utama.

## Struktur Proyek
Berikut struktur direktori proyek:

```
/src
├── components
│   ├── NoteList.js      // Komponen untuk menampilkan daftar catatan
│   ├── NoteForm.js      // Komponen untuk form penambahan catatan
│   ├── NoteItem.js      // Komponen untuk menampilkan item catatan
│   └── SearchBar.js     // Komponen untuk fitur pencarian (opsional)
├── App.js               // Komponen utama aplikasi
├── index.js             // Entry point aplikasi
└── data.js              // Data awal catatan
```

## Cara Menjalankan Proyek
1. **Clone repository ini**:
   ```bash
   git clone https://github.com/username/personal-notes-app.git
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Jalankan aplikasi**:
   ```bash
   npm start
   ```

4. Buka aplikasi di browser pada URL: [http://localhost:3000](http://localhost:3000).

## Teknologi yang Digunakan
- React.js
- JavaScript (ES6+)
- HTML5 & CSS3

## Lisensi
Proyek ini dilisensikan di bawah [MIT License](LICENSE).

---

Nikmati penggunaan aplikasi catatan Anda! 😊
