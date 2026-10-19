# Dil Uygulaması

Kelime kartları (flashcard) ile dil öğrenme uygulaması. React + TypeScript + Vite ile hazırlandı.

## Kurulum

```bash
cd dil-uygulamasi
npm install
npm run dev      # geliştirme sunucusu (http://localhost:5173)
npm run build    # üretim derlemesi (dist/)
npm run lint     # ESLint
```

## Klasör Yapısı

```
src/
  components/   # Arayüz bileşenleri (Flashcard vb.)
  data/         # Ders ve kelime verileri
  types/        # Ortak TypeScript tipleri
  App.tsx       # Ana uygulama
  main.tsx      # Giriş noktası
```

## Yeni ders eklemek

`src/data/lessons.ts` dosyasındaki `lessons` dizisine `Lesson` tipinde yeni bir nesne ekleyin.

## Sonraki adımlar

- Quiz / çoktan seçmeli test modu
- İlerleme takibi (localStorage veya backend)
- Sesli telaffuz (Web Speech API)
- Çoklu dil desteği ve ders seçimi
