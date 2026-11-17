'use client';
import { useEffect } from 'react';

// Menu, image fallback, form validation + submission. Runs once after hydration.
export default function ClientBehavior() {
  useEffect(() => {
    if (document.body.dataset.init) return;
    document.body.dataset.init = '1';
  const burger = document.querySelector('.burger'), menu = document.getElementById('menu');
  const setMenu = (o) => { menu.classList.toggle('open', o); burger.setAttribute('aria-expanded', o); burger.setAttribute('aria-label', o ? 'Close menu' : 'Open menu'); };
  burger.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  menu.addEventListener('click', (e) => e.target.closest('a') && setMenu(false));
  document.addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false));
  document.getElementById('yr').textContent = new Date().getFullYear();
  // Hide broken images so the navy placeholder shows until real photos are added
  document.querySelectorAll('img').forEach((img) => {
    const hide = () => { img.hidden = true; };
    img.addEventListener('error', hide);
    if (img.complete && !img.naturalWidth) hide();
  });

  const PHONE = /^\+?[0-9][0-9\s().-]{6,19}$/, EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const validDate = (v) => {
    const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(v); if (!m) return false;
    const d = new Date(+m[3], m[2] - 1, +m[1]); return d.getDate() === +m[1] && d.getMonth() === m[2] - 1;
  };
  const rules = {
    fullName: (v) => v.length >= 2 || 'Enter your full name',
    agencyName: (v) => v.length >= 2 || 'Enter your agency name',
    email: (v) => EMAIL.test(v) || 'Enter a valid email address',
    phone: (v) => PHONE.test(v) || 'Enter a valid UK or international phone number',
    location: (v) => v.length >= 2 || 'This field is required',
    moveInDate: (v) => !v || validDate(v) || 'Use the format DD/MM/YYYY',
    budget: (v) => !v || (+v >= 0 && +v <= 100000) || 'Enter a realistic monthly budget',
    consentPrivacy: (v, el) => el.checked || 'You must accept the Privacy Policy',
  };
  const setErr = (el, msg) => {
    const f = el.closest('.f'); f.classList.toggle('invalid', !!msg);
    let e = f.querySelector('.err');
    if (msg) { if (!e) { e = document.createElement('p'); e.className = 'err'; e.id = el.id + '-err'; f.append(e); } e.textContent = msg; el.setAttribute('aria-invalid', 'true'); el.setAttribute('aria-describedby', e.id); }
    else { e && e.remove(); el.removeAttribute('aria-invalid'); el.removeAttribute('aria-describedby'); }
  };
  const check = (el) => { const r = rules[el.name]; if (!r) return true; const res = r(el.value.trim(), el); setErr(el, res === true ? '' : res); return res === true; };

  document.querySelectorAll('form.form').forEach((form) => {
    const started = Date.now(), btn = form.querySelector('button'), status = form.querySelector('.status'), label = btn.textContent;
    form.addEventListener('focusout', (e) => e.target.name && check(e.target));
    form.addEventListener('submit', async (e) => {
      e.preventDefault(); status.textContent = '';
      const bad = [...form.elements].filter((el) => el.name && !check(el));
      if (bad.length) { bad[0].focus(); return; }
      const data = {};
      new FormData(form).forEach((v, k) => { data[k] = typeof v === 'string' ? v.trim() : v; });
      data.consentPrivacy = form.elements.consentPrivacy.checked;
      data.consentMarketing = form.elements.consentMarketing.checked;
      data.startedAt = started;
      btn.disabled = true; btn.textContent = 'Sending…';
      try {
        const res = await fetch(form.dataset.endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
        const json = await res.json().catch(() => ({}));
        if (res.ok) { form.hidden = true; const ok = form.parentElement.querySelector('.ok'); ok.hidden = false; ok.focus(); return; }
        if (json.errors) Object.entries(json.errors).forEach(([k, m]) => form.elements[k] && setErr(form.elements[k], m));
        status.textContent = json.message || 'Something went wrong. Please try again.';
      } catch { status.textContent = 'Could not reach the server. Check your connection and try again.'; }
      btn.disabled = false; btn.textContent = label;
    });
  });
  }, []);
  return null;
}
