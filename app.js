'use strict';
const tr = text => window.cardText ? window.cardText(text) : text;
const $ = id => document.getElementById(id);
const modal = $('qr-modal');
let toastTimer;
function toast(message) {
  $('toast').textContent = message;
  $('toast').classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $('toast').classList.remove('show'), 3500);
}
// Use the actual published address; never invent a public destination.
function publicUrl() {
  const url = new URL(location.href);
  if (!['https:', 'http:'].includes(url.protocol) || ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname)) return null;
  url.hash = '';
  return url.href;
}
const localMessage = () => tr('تتوفر مشاركة الرابط ورمز QR بعد نشر البطاقة على رابط عام.');
$('save-contact').addEventListener('click', () => {
  const lines = ['BEGIN:VCARD','VERSION:3.0','N:;AutoLand;;;','FN:AutoLand','ORG:AutoLand','TITLE:'+tr('أكسسوارات السيارات وبرمجة المفاتيح'),'TEL;TYPE=WORK,VOICE:+213557179006','TEL;TYPE=CELL,VOICE:+213781554897','ADR;TYPE=WORK:;;Alger Plage;Bordj El Bahri;Algiers;;Algeria','URL:https://maps.app.goo.gl/ddfyv2guRrU4KPHA8','END:VCARD',''];
  const url = URL.createObjectURL(new Blob([lines.join('\r\n')], {type:'text/vcard;charset=utf-8'}));
  const anchor = document.createElement('a');
  anchor.href = url; anchor.download = 'AutoLand-Contact.vcf';
  document.body.append(anchor); anchor.click(); anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  toast(tr('تم تجهيز ملف جهة الاتصال للحفظ.'));
});
async function copyLink() {
  const url = publicUrl();
  if (!url) { toast(localMessage()); return; }
  try {
    await navigator.clipboard.writeText(url);
    toast(tr('تم نسخ رابط البطاقة.'));
  } catch {
    // A selectable prompt provides a manual fallback when clipboard permission is unavailable.
    window.prompt(tr('انسخ رابط البطاقة:'), url);
  }
}
$('share-card').addEventListener('click', async () => {
  const url = publicUrl();
  if (!url) { toast(localMessage()); return; }
  if (navigator.share) {
    try { await navigator.share({title:tr('AutoLand | اوتو لاند — بطاقة التواصل'),text:tr('أكسسوارات السيارات وبرمجة المفاتيح — الجزائر الشاطئ، برج البحري'),url}); return; }
    catch (error) { if (error.name === 'AbortError') return; }
  }
  await copyLink();
});
$('show-qr').addEventListener('click', () => {
  $('qrcode-container').replaceChildren();
  $('qr-error').hidden = true;
  const url = publicUrl();
  $('copy-link').hidden = !url;
  $('qr-description').hidden = !url;
  modal.showModal();
  document.body.style.overflow = 'hidden';
  try {
    if (!url) throw new Error(localMessage());
    if (typeof QRCode === 'undefined') throw new Error(tr('تعذّر تحميل مولّد QR. تحقق من الإنترنت أو انسخ رابط البطاقة.'));
    new QRCode($('qrcode-container'), {text:url,width:208,height:208,colorDark:'#101111',colorLight:'#ffffff',correctLevel:QRCode.CorrectLevel.H});
    const qrImage = $('qrcode-container').querySelector('img');
    if (qrImage) qrImage.alt = tr('رمز QR لرابط بطاقة AutoLand');
  } catch (error) {
    $('qrcode-container').replaceChildren();
    $('qr-error').textContent = error.message;
    $('qr-error').hidden = false;
  }
});
$('close-qr').addEventListener('click', () => modal.close());
modal.addEventListener('click', event => { if (event.target === modal) { const rect = modal.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) modal.close(); } });
modal.addEventListener('close', () => { document.body.style.overflow = ''; $('show-qr').focus(); });
$('copy-link').addEventListener('click', copyLink);

const contactDock = $('contact-dock');
contactDock.addEventListener('keydown', event => {
  if (event.key === 'Escape') { contactDock.open = false; contactDock.querySelector('summary').focus(); }
});
contactDock.querySelector('.dock-links').addEventListener('click', event => {
  if (event.target.closest('a')) contactDock.open = false;
});
