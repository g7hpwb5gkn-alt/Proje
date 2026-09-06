# Nurullah Değer | AGS & KPSS Danışmanlığı — Landing Page

Psk. Dan. Nurullah Değer'in (Instagram: [@pd.nurullahdeger](https://www.instagram.com/pd.nurullahdeger/)) eğitim danışmanlığı hizmeti için hazırlanmış, tek sayfalık modern/premium tanıtım (landing page) sitesi.

## Dosya yapısı

```
index.html                          Sayfanın tamamı (bölümler: hero, hakkımda, yöntem, hizmetler, başarı, SSS, iletişim)
danisan-haftalik-takip-formu.html   Danışan haftalık takip formu (Plan Defteri yöntemine göre, yazdırılabilir)
assets/css/style.css                Tüm stiller
assets/js/script.js                 Mobil menü, scroll animasyonları, sayaç ve iletişim formu davranışı
```

## Danışan haftalık takip formu

`danisan-haftalik-takip-formu.html`, danışmanlık sürecinde her danışanla haftalık olarak doldurulacak, sitenin marka diliyle (renkler, tipografi, Plan Defteri metodolojisi) uyumlu bir formdur:

- Danışan bilgileri ve görüşme detayları
- Haftanın hedefleri ve gerçekleşme durumu
- Ders bazlı çözülen soru/net takibi
- 5 adımlı yanlış soru otopsisi kontrol listesi
- Motivasyon, sınav kaygısı, enerji ve ruh hali için 1-10 ölçekleri
- Danışan/danışman değerlendirmeleri ve gelecek hafta hedefleri
- İmza alanları

Form tarayıcıda doldurulup sağ üstteki **"Yazdır / PDF Kaydet"** butonuyla (veya `Ctrl/Cmd + P`) PDF olarak kaydedilebilir ya da yazdırılabilir; doldurulan veriler herhangi bir sunucuya gönderilmez, sadece o an açık olan sayfada tutulur.

## Yayına almadan önce yapılması gerekenler

1. **İletişim bilgileri** — `index.html` içinde `<!-- TODO -->` yorumlarıyla işaretlenmiş yer tutucu e-posta/telefon alanlarını gerçek bilgilerle değiştirin. Aynı e-posta adresini `assets/js/script.js` içindeki `recipient` değişkeninde de güncelleyin.
2. **İletişim formu** — Form şu an tarayıcının e-posta istemcisini açan basit bir `mailto:` bağlantısı kullanıyor. Kalıcı/otomatik bir çözüm için formu [Formspree](https://formspree.io), Google Forms veya kendi backend'inize bağlamanız önerilir.
3. **Fotoğraf** — Hero ve hakkımda bölümlerinde şu an baş harfleriyle (ND) oluşturulmuş bir monogram/rozet kullanılıyor. Gerçek bir profil fotoğrafı eklemek isterseniz `assets/img/` klasörüne görseli koyup `index.html` içindeki `.portrait-frame` bloğunu bir `<img>` etiketiyle değiştirin.
4. **Fiyatlandırma** — Hizmet kartlarında bilinçli olarak fiyat belirtilmedi; ücretlendirmeyi netleştirdiğinizde "Hizmetler" bölümüne ekleyebilirsiniz.
5. **İstatistikler** — Sayfadaki tüm rakamlar (MEB-AGS Türkiye 25.'liği, PDR ÖABT 46.'lığı, erişim/etkileşim sayıları) Instagram hesabında paylaşılan gerçek verilere dayanmaktadır; güncel sonuçlarla değiştirmeyi unutmayın.

## Yerelde önizleme

Herhangi bir statik sunucu ile açabilirsiniz, örneğin:

```bash
npx serve .
# veya
python3 -m http.server 8080
```

Ardından tarayıcıda `http://localhost:8080` adresini açın.

## Yayınlama

Bu proje herhangi bir statik hosting servisinde (Netlify, Vercel, GitHub Pages, Cloudflare Pages vb.) doğrudan yayınlanabilir; build adımı gerektirmez.
