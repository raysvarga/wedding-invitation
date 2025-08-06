# Undangan Pernikahan Digital 🎉💍

Ini adalah proyek **Undangan Pernikahan Digital** interaktif yang dibangun menggunakan **React + Tailwind CSS + Vite**. Desainnya elegan, minimalis, dan modern — cocok untuk dibagikan ke tamu undangan via tautan online.

## ✨ Fitur Utama

- 🎨 Desain estetis dengan palet warna **sage / earthy tone**
- 💍 Halaman Beranda (Home) yang menawan
- 📅 Jadwal acara pernikahan (akad & resepsi)
- 📍 Lokasi dengan integrasi **Google Maps**
- 🖼️ Galeri Foto kenangan
- 📖 Kisah cinta (opsional)
- 💬 Konfirmasi Kehadiran (RSVP)
- 📱 Responsif untuk semua perangkat

## 🛠️ Teknologi

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- HTML5, CSS3, dan sedikit animasi

## 📁 Struktur Folder

```
weeding-invitation/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── EventCard.jsx
│   │   ├── GalleryGrid.jsx
│   │   └── ...
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Events.jsx
│   │   ├── Gallery.jsx
│   │   ├── Location.jsx
│   │   └── ...
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
└── package.json
```

## 🚀 Cara Menjalankan

1. **Clone repo ini**  
   ```bash
   git clone https://github.com/username/weeding-invitation.git
   cd weeding-invitation
   ```

2. **Install dependency**  
   ```bash
   npm install
   ```

3. **Jalankan lokal**  
   ```bash
   npm run dev
   ```

4. Buka di browser:  
   `http://localhost:5173`

## 🌐 Deploy ke GitHub Pages

1. Install `gh-pages`:  
   ```bash
   npm install gh-pages --save-dev
   ```

2. Tambahkan ke `package.json`:
   ```json
   "homepage": "https://username.github.io/weeding-invitation",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Jalankan:
   ```bash
   npm run deploy
   ```

## 📌 Credits

Dibuat dengan ❤️ oleh [Namamu] untuk hari bahagia.  
Inspirasi desain dari berbagai template undangan digital.
