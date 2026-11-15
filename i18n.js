'use strict';
const translations = {
  "بطاقة التواصل الرقمية": {
    "ar": "بطاقة التواصل الرقمية",
    "fr": "Carte de contact numérique",
    "en": "Digital contact card"
  },
  "دقة في الخدمة. سهولة في التواصل.": {
    "ar": "دقة في الخدمة. سهولة في التواصل.",
    "fr": "Un service précis. Un contact facile.",
    "en": "Precise service. Easy contact."
  },
  "أكسسوارات السيارات": {
    "ar": "أكسسوارات السيارات",
    "fr": "Accessoires automobiles",
    "en": "Car accessories"
  },
  "وبرمجة المفاتيح": {
    "ar": "وبرمجة المفاتيح",
    "fr": "et programmation de clés",
    "en": "and key programming"
  },
  "الجزائر الشاطئ، برج البحري": {
    "ar": "الجزائر الشاطئ، برج البحري",
    "fr": "Alger Plage, Bordj El Bahri",
    "en": "Alger Plage, Bordj El Bahri"
  },
  "كل طرق التواصل،": {
    "ar": "كل طرق التواصل،",
    "fr": "Tous nos contacts,",
    "en": "Every way to reach us,"
  },
  "في مكان واحد.": {
    "ar": "في مكان واحد.",
    "fr": "au même endroit.",
    "en": "all in one place."
  },
  "تواصل معنا مباشرة أو احفظ بياناتنا لتجدنا وقت ما تحتاج.": {
    "ar": "تواصل معنا مباشرة أو احفظ بياناتنا لتجدنا وقت ما تحتاج.",
    "fr": "Contactez-nous directement ou enregistrez nos coordonnées pour nous retrouver facilement.",
    "en": "Contact us directly or save our details for whenever you need us."
  },
  "واتساب": {
    "ar": "واتساب",
    "fr": "WhatsApp",
    "en": "WhatsApp"
  },
  "الرئيسي": {
    "ar": "الرئيسي",
    "fr": "Principal",
    "en": "Primary"
  },
  "Viber · فايبر": {
    "ar": "Viber · فايبر",
    "fr": "Viber",
    "en": "Viber"
  },
  "اتصال هاتفي": {
    "ar": "اتصال هاتفي",
    "fr": "Appeler",
    "en": "Call us"
  },
  "تفضل بزيارتنا": {
    "ar": "تفضل بزيارتنا",
    "fr": "Nous rendre visite",
    "en": "Visit us"
  },
  "حفظ جهة الاتصال": {
    "ar": "حفظ جهة الاتصال",
    "fr": "Enregistrer le contact",
    "en": "Save contact"
  },
  "رمز QR": {
    "ar": "رمز QR",
    "fr": "Code QR",
    "en": "QR code"
  },
  "مشاركة البطاقة": {
    "ar": "مشاركة البطاقة",
    "fr": "Partager la carte",
    "en": "Share card"
  },
  "اوتو لاند · الجزائر الشاطئ": {
    "ar": "اوتو لاند · الجزائر الشاطئ",
    "fr": "AutoLand · Alger Plage",
    "en": "AutoLand · Alger Plage"
  },
  "تواصل معنا": {
    "ar": "تواصل معنا",
    "fr": "Contactez-nous",
    "en": "Contact us"
  },
  "الموقع الجغرافي": {
    "ar": "الموقع الجغرافي",
    "fr": "Itinéraire",
    "en": "Directions"
  },
  "بطاقتنا، معك دائمًا.": {
    "ar": "بطاقتنا، معك دائمًا.",
    "fr": "Notre carte, toujours avec vous.",
    "en": "Our card, always with you."
  },
  "امسح الرمز لفتح بطاقة AutoLand على هاتفك.": {
    "ar": "امسح الرمز لفتح بطاقة AutoLand على هاتفك.",
    "fr": "Scannez le code pour ouvrir la carte AutoLand sur votre téléphone.",
    "en": "Scan the code to open the AutoLand card on your phone."
  },
  "نسخ رابط البطاقة": {
    "ar": "نسخ رابط البطاقة",
    "fr": "Copier le lien",
    "en": "Copy card link"
  },
  "إغلاق": {
    "ar": "إغلاق",
    "fr": "Fermer",
    "en": "Close"
  },
  "التواصل السريع": {
    "ar": "التواصل السريع",
    "fr": "Contact rapide",
    "en": "Quick contact"
  },
  "AutoLand — بطاقة التواصل": {
    "ar": "AutoLand — بطاقة التواصل",
    "fr": "AutoLand — carte de contact",
    "en": "AutoLand — contact card"
  },
  "شعار اوتو لاند — AutoLand": {
    "ar": "شعار اوتو لاند — AutoLand",
    "fr": "Logo AutoLand",
    "en": "AutoLand logo"
  },
  "فتح Viber على الرقم 0557179006": {
    "ar": "فتح Viber على الرقم 0557179006",
    "fr": "Ouvrir Viber au 0557179006",
    "en": "Open Viber at 0557179006"
  },
  "تتوفر مشاركة الرابط ورمز QR بعد نشر البطاقة على رابط عام.": {
    "ar": "تتوفر مشاركة الرابط ورمز QR بعد نشر البطاقة على رابط عام.",
    "fr": "Le partage et le code QR seront disponibles après la publication de la carte à une adresse publique.",
    "en": "Link sharing and QR code will be available once the card is published at a public URL."
  },
  "تم تجهيز ملف جهة الاتصال للحفظ.": {
    "ar": "تم تجهيز ملف جهة الاتصال للحفظ.",
    "fr": "Le fichier du contact est prêt à être enregistré.",
    "en": "The contact file is ready to save."
  },
  "تم نسخ رابط البطاقة.": {
    "ar": "تم نسخ رابط البطاقة.",
    "fr": "Le lien de la carte a été copié.",
    "en": "Card link copied."
  },
  "انسخ رابط البطاقة:": {
    "ar": "انسخ رابط البطاقة:",
    "fr": "Copiez le lien de la carte :",
    "en": "Copy the card link:"
  },
  "تعذّر تحميل مولّد QR. تحقق من الإنترنت أو انسخ رابط البطاقة.": {
    "ar": "تعذّر تحميل مولّد QR. تحقق من الإنترنت أو انسخ رابط البطاقة.",
    "fr": "Impossible de charger le générateur QR. Vérifiez votre connexion ou copiez le lien.",
    "en": "Could not load the QR generator. Check your connection or copy the link."
  },
  "رمز QR لرابط بطاقة AutoLand": {
    "ar": "رمز QR لرابط بطاقة AutoLand",
    "fr": "Code QR de la carte AutoLand",
    "en": "QR code for the AutoLand card"
  },
  "أكسسوارات السيارات وبرمجة المفاتيح": {
    "ar": "أكسسوارات السيارات وبرمجة المفاتيح",
    "fr": "Accessoires automobiles et programmation de clés",
    "en": "Car accessories and key programming"
  },
  "أكسسوارات السيارات وبرمجة المفاتيح — الجزائر الشاطئ، برج البحري": {
    "ar": "أكسسوارات السيارات وبرمجة المفاتيح — الجزائر الشاطئ، برج البحري",
    "fr": "Accessoires automobiles et programmation de clés — Alger Plage, Bordj El Bahri",
    "en": "Car accessories and key programming — Alger Plage, Bordj El Bahri"
  },
  "AutoLand | اوتو لاند — بطاقة التواصل": {
    "ar": "AutoLand | اوتو لاند — بطاقة التواصل",
    "fr": "AutoLand | Carte de contact",
    "en": "AutoLand | Contact card"
  },
  "AUTO SERVICES & KEY PROGRAMMING": {
    "ar": "AUTO SERVICES & KEY PROGRAMMING",
    "fr": "ACCESSOIRES AUTO & CLÉS",
    "en": "CAR ACCESSORIES & KEYS"
  },
  "LET’S KEEP IN TOUCH": {
    "ar": "LET’S KEEP IN TOUCH",
    "fr": "RESTONS EN CONTACT",
    "en": "LET’S KEEP IN TOUCH"
  },
  "SCAN & CONNECT": {
    "ar": "SCAN & CONNECT",
    "fr": "SCANNEZ ET CONTACTEZ-NOUS",
    "en": "SCAN & CONNECT"
  }
};
let cardLanguage = 'ar';
window.cardText = text => translations[text]?.[cardLanguage] || text;
function setCardLanguage(language) {
 if (!['ar','fr','en'].includes(language)) language = 'ar';
 cardLanguage = language;
 document.documentElement.lang = language;
 document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
 document.querySelectorAll('[data-i18n]').forEach(node => { node.textContent = window.cardText(node.dataset.i18n); });
 for (const attr of ['aria-label','alt']) document.querySelectorAll('[data-i18n-'+attr+']').forEach(node => node.setAttribute(attr,window.cardText(node.getAttribute('data-i18n-'+attr))));
 document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.lang === language)));
 document.title = window.cardText('AutoLand | اوتو لاند — بطاقة التواصل');
 document.querySelector('meta[name="description"]').content = 'AutoLand — ' + window.cardText('أكسسوارات السيارات وبرمجة المفاتيح — الجزائر الشاطئ، برج البحري');
 try { localStorage.setItem('autoland-language',language); } catch {}
}
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click',()=>setCardLanguage(button.dataset.lang)));
let savedLanguage = 'ar';
try { savedLanguage = localStorage.getItem('autoland-language') || 'ar'; } catch {}
setCardLanguage(savedLanguage);
