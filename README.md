<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
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

Dibuat dengan ❤️ oleh Rays untuk hari bahagia.  
Inspirasi desain dari berbagai template undangan digital.
>>>>>>> 4b4f350901d55055daf0568bdf02d096eb95ea8f
