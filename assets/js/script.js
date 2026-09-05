// Nurullah Değer — AGS & KPSS Danışmanlığı
// Küçük, bağımsız etkileşim betikleri: mobil menü, scroll reveal, sayaç animasyonu, iletişim formu.

document.addEventListener('DOMContentLoaded', function () {
  var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Yıl
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobil menü
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scroll reveal
  var revealEls = document.querySelectorAll('.reveal');
  if (prefersReducedMotion) {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  } else if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Sayaç animasyonu (istatistik şeridi)
  var statNums = document.querySelectorAll('.stat-num');
  var countersStarted = false;
  function animateCounters() {
    if (countersStarted) return;
    countersStarted = true;
    statNums.forEach(function (el) {
      var target = parseFloat(el.getAttribute('data-count')) || 0;
      var decimal = el.getAttribute('data-decimal');
      var suffix = el.getAttribute('data-suffix') || '';
      if (prefersReducedMotion) {
        el.textContent = target + (decimal ? ',' + decimal : '') + suffix;
        return;
      }
      var duration = 1400;
      var start = null;

      function step(timestamp) {
        if (!start) start = timestamp;
        var progress = Math.min((timestamp - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var value = target * eased;
        var display = Math.round(value);
        el.textContent = display + (decimal ? ',' + decimal : '') + suffix;
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          el.textContent = target + (decimal ? ',' + decimal : '') + suffix;
        }
      }
      window.requestAnimationFrame(step);
    });
  }

  var statsStrip = document.querySelector('.stats-strip');
  if (statsStrip && 'IntersectionObserver' in window) {
    var statsObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounters();
          statsObserver.disconnect();
        }
      });
    }, { threshold: 0.4 });
    statsObserver.observe(statsStrip);
  } else {
    animateCounters();
  }

  // Header shrink-on-scroll shadow
  var header = document.getElementById('siteHeader');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 12) {
        header.style.boxShadow = '0 8px 24px rgba(36,26,20,0.08)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }

  // İletişim formu -> mailto ile gönderim (backend bağlanana kadar geçici çözüm)
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = contactForm.name.value.trim();
      var email = contactForm.email.value.trim();
      var phone = contactForm.phone.value.trim();
      var goal = contactForm.goal.value;
      var message = contactForm.message.value.trim();

      // TODO: Gerçek e-posta adresinizi buraya girin ya da bu formu
      // Formspree / Google Forms gibi bir servise bağlayın.
      var recipient = 'ornek@eposta.com';
      var subject = encodeURIComponent('Ön Görüşme Talebi - ' + name);
      var body = encodeURIComponent(
        'Ad Soyad: ' + name + '\n' +
        'E-posta: ' + email + '\n' +
        'Telefon: ' + (phone || '-') + '\n' +
        'Hedef: ' + goal + '\n\n' +
        'Mesaj:\n' + message
      );

      window.location.href = 'mailto:' + recipient + '?subject=' + subject + '&body=' + body;

      var note = document.getElementById('formNote');
      if (note) note.textContent = 'E-posta uygulaman açıldı. Göndermeden önce mesajını kontrol edebilirsin.';
    });
  }
});
