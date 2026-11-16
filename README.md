<div align="center">
  
# 🎵 Lahn (لحن) - Ultimate Music Player
  
**A comprehensive Progressive Web App (PWA) for music, Quran, radio, and podcasts.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)]()
[![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)]()

</div>

## 📖 About the Project

**Lahn** is a feature-rich, web-based music player that works offline. It is designed to be your all-in-one media hub, combining local music playback with online streaming, audio processing, and a sleek, modern interface.

## ✨ Features

- **🎧 Local Library:** Play local audio files (MP3, FLAC, WAV, M4A) with ID3 tag reading and cover art extraction.
- **🕌 Holy Quran:** Listen to the Quran with famous reciters (via Mp3Quran API).
- **📻 Live Radio:** Stream thousands of live radio stations worldwide (via Radio Browser API).
- **🎵 Online Music & Podcasts:** Search and stream independent music (via Audius) and podcasts (via iTunes).
- **🎛️ Pro Audio Processing:**
  - 10-Band Equalizer.
  - 8D Audio (Spatial audio).
  - 3D Audio Pad (Interactive spatial sound control).
  - Nightcore & Slowed + Reverb effects.
  - Karaoke Mode (Vocal Remover).
  - Crossfade (Customizable duration).
- **📝 Lyrics:** Supports LRC (synced lyrics) with auto-fetching, and a full-screen lyrics mode.
- **📴 Offline Mode:** Powered by IndexedDB and Service Workers.
- **☁️ Cloud Sync:** Backup and restore your library, playlists, and settings using KVDB.
- **🌍 Multi-Language:** Supports 8 languages (Arabic, English, French, Spanish, Turkish, German, Indonesian, Urdu).
- **🎨 Customization:** Over 20 themes (Skins), visualizers, and a classic mode.
- **⌨️ Keyboard Shortcuts:** Full control via keyboard (Space, N, P, etc.).

## 🛠️ Tech Stack & APIs

- **Core:** Vanilla JavaScript, HTML5, CSS3.
- **Audio Engine:** Web Audio API.
- **Storage:** IndexedDB (for audio blobs & thumbnails), LocalStorage (for settings).
- **APIs Used:** Mp3Quran, Radio Browser, Audius, iTunes, Deezer, LRCLIB, KVDB.

## 🚀 How to Run Locally

Because the app relies on `fetch` to retrieve data from the internet (Quran, Radio, etc.), opening the file directly via `file://` will block requests due to CORS policies. You must run it through a local server:

1. Clone this repository.
2. Open the folder in **Visual Studio Code**.
3. Install the **Live Server** extension.
4. Right-click on `index.html` and select **Open with Live Server**.

## 📸 Screenshots

*(Add your screenshots here)*

---

<div align="center">
  <h1>🎵 لحن (Lahn) - مشغل الموسيقى الشامل</h1>
  <p><b>تطبيق ويب تقدمي (PWA) متكامل للموسيقى، القرآن الكريم، الراديو، والبودكاست.</b></p>
</div>

## 📖 عن المشروع

**لحن** هو مشغل موسيقى احترافي يعمل على المتصفح ويتميز بدعم العمل بدون إنترنت. تم تصميمه ليكون مركزك الشامل للترفيه، حيث يجمع بين تشغيل الملفات المحلية، البث المباشر، والمعالجة الصوتية المتقدمة، بواجهة عصرية وسريعة.

## ✨ المميزات

- **🎧 مكتبتك المحلية:** تشغيل ملفات الصوت (MP3, FLAC, WAV, M4A) مع قراءة معلومات الأغنية وصورة الغلاف تلقائياً.
- **🕌 القرآن الكريم:** الاستماع للقرآن الكريم بصوت أشهر الشيوخ (عبر Mp3Quran API).
- **📻 راديو مباشر:** بث آلاف محطات الراديو من جميع أنحاء العالم (عبر Radio Browser).
- **🎵 أغاني وبودكاست أونلاين:** البحث عن أغاني مستقلة (عبر Audius) وحلقات بودكاست (عبر iTunes).
- **🎛️ معالجة صوتية احترافية:**
  - معادل صوتي (Equalizer) بـ 10 شرائط.
  - صوت محيطي (8D Audio).
  - لوحة الصوت 3D (تحكم تفاعلي في مكان الصوت).
  - مؤثرات Nightcore و Slowed + Reverb.
  - مود الكاريوكي (إزالة الغناء).
  - مزج الأغاني (Crossfade) بمدة قابلة للتخصيص.
- **📝 الكلمات (Lyrics):** دعم كلمات LRC المتزامنة، مع جلب تلقائي، وشاشة عرض كاملة.
- **📴 العمل بدون إنترنت:** يعتمد على IndexedDB و Service Workers.
- **☁️ المزامنة السحابية:** نسخ احتياطي واستعادة للمكتبة والقوائم والإعدادات (عبر KVDB).
- **🌍 دعم متعدد اللغات:** يدعم 8 لغات (العربية، الإنجليزية، الفرنسية، الإسبانية، التركية، الألمانية، الإندونيسية، الأردية).
- **🎨 تخصيص كامل:** أكثر من 20 ثيم (Skin)، أشكال متعددة للفيجوالايزر، ووضع كلاسيكي.
- **⌨️ اختصارات الكيبورد:** تحكم كامل عبر الكيبورد (Space, N, P, إلخ).

## 🛠️ التقنيات وواجهات برمجة التطبيقات (APIs)

- **الأساسيات:** Vanilla JavaScript, HTML5, CSS3.
- **محرك الصوت:** Web Audio API.
- **التخزين:** IndexedDB (للملفات والصور المصغرة)، LocalStorage (للإعدادات).
- **واجهات برمجة التطبيقات (APIs):** Mp3Quran, Radio Browser, Audius, iTunes, Deezer, LRCLIB, KVDB.

## 🚀 كيفية التشغيل محلياً

بما أن التطبيق يعتمد على جلب البيانات من الإنترنت (القرآن، الراديو، إلخ)، لا يمكن فتح الملف مباشرة (`file://`) لأن المتصفح سيمنع الاتصال (CORS). يجب تشغيله عبر سيرفر محلي:

1. قم بعمل Clone للمستودع.
2. افتح المجلد في برنامج **Visual Studio Code**.
3. قم بتثبيت إضافة **Live Server**.
4. اضغط كليك يمين على ملف `index.html` واختر **Open with Live Server**.

## 📸 لقطات الشاشة

*(يمكنك إضافة صور للتطبيق هنا)*

---

## 📄 License / الحقوق
© 2024 Lahn App. All rights reserved.
صنع بحب 💜
