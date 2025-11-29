# 3 Years Anniversary Website 💜

Website anniversary yang profesional dan modern untuk merayakan 3 tahun kebersamaan.

## ✨ Fitur Utama

### 🎨 Design & UI
- **Glassmorphism Effect** - Navbar transparan dengan blur effect modern
- **Gradient Animations** - Animasi gradient yang smooth pada teks dan elemen
- **Floating Shapes** - Bentuk-bentuk yang mengambang di background
- **Custom Cursor** - Kursor interaktif yang mengikuti mouse
- **Particle System** - Partikel animasi di background untuk efek visual
- **Responsive Design** - Tampil sempurna di semua ukuran layar

### 🎭 Animasi & Interaksi
- **Smooth Scrolling** - Perpindahan halaman yang mulus
- **Parallax Scrolling** - Efek kedalaman saat scroll
- **Hover Effects** - Efek interaktif pada kartu dan foto
- **Countdown Timer** - Penghitung mundur dengan animasi
- **Confetti Effect** - Efek confetti saat menjawab quiz dengan benar
- **Scroll-triggered Animations** - Animasi muncul saat scroll ke section

### 🎵 Fitur Premium
- **Music Player** - Kontrol musik di pojok kanan bawah
- **Interactive Quiz** - Kuis tentang kenangan bersama
- **Photo Gallery** - Galeri foto dengan filter dan lightbox
- **Draggable Polaroids** - Foto polaroid yang bisa digeser-geser
- **Love Letter** - Surat cinta yang bisa dibuka
- **Memory Timeline** - Timeline perjalanan cinta

### 🚀 Performance & SEO
- **Lazy Loading** - Gambar dimuat secara bertahap
- **Optimized CSS** - CSS variables dan modern properties
- **Meta Tags** - SEO-friendly dengan Open Graph tags
- **Smooth Performance** - RequestAnimationFrame untuk animasi
- **Error Handling** - Penanganan error yang baik
- **Accessibility** - Support untuk reduced motion

## 📱 Responsive Breakpoints

- **Desktop**: > 768px - Full experience dengan semua animasi
- **Tablet**: 481px - 768px - Layout yang disesuaikan
- **Mobile**: ≤ 480px - Versi mobile-optimized

## 🎨 Color Palette

```css
Primary: #8B5CF6 (Purple)
Secondary: #A78BFA (Light Purple)
Accent: #C4B5FD (Lavender)
Pink: #F472B6 (Hot Pink)
Cream: #FDFBF7 (Background)
```

## 🛠️ Teknologi yang Digunakan

- **HTML5** - Struktur semantik modern
- **CSS3** - Custom properties, Grid, Flexbox, Animations
- **Vanilla JavaScript** - No framework, pure performance
- **Font Awesome** - Icons
- **Google Fonts** - Dancing Script, Montserrat, Patrick Hand, Playfair Display

## 📂 Struktur File

```
wew/
├── index.html      # Struktur HTML utama
├── style.css       # Semua styling dan animasi
├── script.js       # Logika JavaScript dan interaksi
└── README.md       # Dokumentasi ini
```

## 🎯 Fitur JavaScript

### Countdown Timer
- Real-time countdown ke anniversary date
- Animasi number flip saat berubah
- Confetti celebration saat anniversary tiba

### Particle System
- 50 partikel yang bergerak smooth
- Canvas-based untuk performa optimal
- Warna gradient purple/pink

### Custom Cursor
- Smooth follow animation
- Scale effect pada hover
- Interactive dengan elemen clickable

### Parallax Effect
- Hero section dengan parallax
- Floating shapes dengan kecepatan berbeda
- Opacity fade saat scroll

### Gallery Filtering
- Filter foto berdasarkan kategori
- Smooth transition saat filter
- Lightbox untuk view full size

### Draggable Polaroids
- Drag and drop polaroid photos
- Touch support untuk mobile
- Z-index management

## 🎨 CSS Features

### Modern Properties
- CSS Variables untuk theming
- Backdrop-filter untuk glassmorphism
- CSS Grid & Flexbox untuk layout
- Custom scrollbar styling

### Animations
- Keyframe animations untuk loading
- Transition untuk semua interaksi
- Transform untuk 3D effects
- Gradient animations

## 📱 Mobile Optimizations

- Hamburger menu untuk navigasi
- Touch-friendly button sizes
- Optimized image sizes
- Reduced animations untuk performa

## ♿ Accessibility

- Semantic HTML5 tags
- ARIA labels pada interactive elements
- Focus states untuk keyboard navigation
- Reduced motion support
- Alt text pada semua gambar

## 🔧 Customization

### Mengubah Anniversary Date
Edit di `script.js`:
```javascript
const targetDate = new Date("November 29, 2025 00:00:00").getTime();
```

### Mengubah Foto
Ganti URL di `index.html` dengan foto Anda sendiri:
```html
<img src="URL_FOTO_ANDA" alt="Deskripsi">
```

### Mengubah Color Scheme
Edit CSS variables di `style.css`:
```css
:root {
    --primary: #8B5CF6;
    --secondary: #A78BFA;
    /* ... */
}
```

### Menambahkan Musik
Edit di `script.js`, uncomment dan tambahkan file musik:
```javascript
const audio = new Audio('your-music.mp3');
audio.play();
```

## 🌟 Tips Penggunaan

1. **Foto Berkualitas**: Gunakan foto high-resolution untuk hasil terbaik
2. **Optimize Images**: Compress foto sebelum upload untuk loading cepat
3. **Personal Touch**: Ganti semua placeholder text dengan cerita Anda
4. **Test Mobile**: Selalu test di mobile device
5. **Add Music**: Tambahkan lagu favorit untuk pengalaman lebih romantis

## 📝 To-Do / Improvements

- [ ] Add actual music file integration
- [ ] Add more photo categories
- [ ] Create photo upload system
- [ ] Add guest book feature
- [ ] Add share to social media
- [ ] Create print-friendly version
- [ ] Add multilanguage support

## 💝 Credits

Dibuat dengan ❤️ untuk anniversary special
Design & Development: Professional Web Developer

## 📄 License

Personal Use Only - Made with Love

---

**Happy Anniversary! 🎉💜**
