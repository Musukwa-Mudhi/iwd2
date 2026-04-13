// Mudhi Musukwa Portfolio — script.js

document.addEventListener('DOMContentLoaded', function () {

  // ── 1. FORM VALIDATION ──
  var form    = document.getElementById('hire-form');
  var formOk  = document.getElementById('form-ok');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;

      // Name
      var name = document.getElementById('f-name');
      var errName = document.getElementById('err-name');
      if (name.value.trim().length < 2) {
        name.classList.add('err');
        errName.classList.add('show');
        valid = false;
      } else {
        name.classList.remove('err');
        errName.classList.remove('show');
      }

      // Email
      var email = document.getElementById('f-email');
      var errEmail = document.getElementById('err-email');
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
      if (!emailOk) {
        email.classList.add('err');
        errEmail.classList.add('show');
        valid = false;
      } else {
        email.classList.remove('err');
        errEmail.classList.remove('show');
      }

      // Service
      var service = document.getElementById('f-service');
      var errService = document.getElementById('err-service');
      if (!service.value) {
        service.classList.add('err');
        errService.classList.add('show');
        valid = false;
      } else {
        service.classList.remove('err');
        errService.classList.remove('show');
      }

      // Message
      var msg = document.getElementById('f-message');
      var errMsg = document.getElementById('err-message');
      if (msg.value.trim().length < 10) {
        msg.classList.add('err');
        errMsg.classList.add('show');
        valid = false;
      } else {
        msg.classList.remove('err');
        errMsg.classList.remove('show');
      }

      // Success
      if (valid) {
        form.reset();
        formOk.style.display = 'block';
        setTimeout(function () {
          formOk.style.display = 'none';
        }, 6000);
      }
    });

    // Clear error styling when user starts typing
    var fields = form.querySelectorAll('input, select, textarea');
    fields.forEach(function (field) {
      field.addEventListener('input', function () {
        field.classList.remove('err');
      });
    });
  }

  // ── 2. HIGHLIGHT ACTIVE NAV LINK ON SCROLL ──
  var navLinks = document.querySelectorAll('nav ul a');
  var sectionEls = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', function () {
    var scrollPos = window.scrollY + 100;
    var current = '';

    sectionEls.forEach(function (sec) {
      if (sec.offsetTop <= scrollPos) {
        current = sec.id;
      }
    });

    navLinks.forEach(function (link) {
      link.style.fontWeight = '';
      link.style.color = '';
      if (link.getAttribute('href') === '#' + current) {
        link.style.fontWeight = 'bold';
        link.style.color = '#1a1a1a';
      }
    });
  });

});
