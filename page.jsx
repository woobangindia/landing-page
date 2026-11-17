import ClientBehavior from '@/components/ClientBehavior';

export default function Home() {
  return (
    <>
<a className="skip" href="#main">Skip to content</a>
<header className="nav" id="top">
  <div className="wrap nav-in">
    <a className="logo" href="#top" aria-label="Harbourline home"><svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true"><path d="M4 28V14L16 4l12 10v14" fill="none" stroke="#C5A46D" strokeWidth="2.4"/><path d="M12 28v-9h8v9" fill="none" stroke="currentColor" strokeWidth="2.4"/></svg><span>Harbourline</span></a>
    <button className="burger" aria-expanded="false" aria-controls="menu" aria-label="Open menu"><span></span><span></span><span></span></button>
    <nav id="menu" className="menu" aria-label="Main">
      <a href="#top">Home</a><a href="#about">About</a><a href="#tenants">For Tenants</a><a href="#agents">For Agents</a><a href="#contact">Contact</a>
      <a className="btn btn-gold" href="#tenant-form">Get in Touch</a>
    </nav>
  </div>
</header>

<main id="main">
<section className="hero">
  <img className="bg" src="/images/hero-1600.jpg" srcSet="/images/hero-800.jpg 800w, /images/hero-1600.jpg 1600w" sizes="100vw" width="1600" height="1000" alt="Modern British terraced homes in warm evening light" fetchPriority="high" />
  <div className="wrap hero-in">
    <h1>Connecting People With Better Property Opportunities.</h1>
    <p className="lead">Whether you're searching for your next home or looking to expand your property network, we're here to make the process simpler.</p>
    <div className="actions">
      <a className="btn btn-gold" href="#tenant-form">I'm Looking for a Property</a>
      <a className="btn btn-ghost" href="#agent-form">I'm a Property Agent</a>
    </div>
    <p className="tag">Property connections, made simpler across the UK.</p>
  </div>
</section>

<section className="section" id="tenants">
  <div className="wrap split">
    <div className="copy">
      <h2>Your Next Home Starts With the Right Connection.</h2>
      <p>Tell us what you're looking for and let us help connect you with the right property opportunities.</p>
      <a className="btn btn-navy" href="#tenant-form">Register Your Interest</a>
    </div>
    <figure className="img"><img loading="lazy" src="/images/tenants-1600.jpg" srcSet="/images/tenants-800.jpg 800w, /images/tenants-1600.jpg 1600w" sizes="(min-width:900px) 50vw, 100vw" width="1200" height="900" alt="Bright modern apartment living room" /></figure>
  </div>
</section>

<section className="section alt" id="agents">
  <div className="wrap split flip">
    <div className="copy">
      <h2>Let's Build Better Property Connections.</h2>
      <p>Are you an estate agent or property professional? Get in touch to explore opportunities to work together.</p>
      <a className="btn btn-navy" href="#agent-form">Partner With Us</a>
    </div>
    <figure className="img"><img loading="lazy" src="/images/agents-1600.jpg" srcSet="/images/agents-800.jpg 800w, /images/agents-1600.jpg 1600w" sizes="(min-width:900px) 50vw, 100vw" width="1200" height="900" alt="Property professionals meeting in a modern office" /></figure>
  </div>
</section>

<section className="section why" aria-labelledby="why-h">
  <div className="wrap">
    <h2 id="why-h">Why Choose Us?</h2>
    <ul className="feats">
      <li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg><h3>UK-Focused Approach</h3><p>Built around the UK rental market and how it works.</p></li>
      <li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12l4 4 10-10"/></svg><h3>Simple Enquiry Process</h3><p>One short form. No accounts, no complicated steps.</p></li>
      <li><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="8" cy="9" r="3"/><circle cx="17" cy="10" r="2.5"/><path d="M2 20c0-3.5 3-5.5 6-5.5s6 2 6 5.5M15 15c3 0 6 1.5 6 5"/></svg><h3>Professional Connections</h3><p>Working alongside estate and letting professionals.</p></li>
      <li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z"/></svg><h3>Dedicated Assistance</h3><p>A real person from our team will review your enquiry.</p></li>
    </ul>
  </div>
</section>

<section className="section alt" id="tenant-form">
  <div className="wrap narrow">
    <h2>Tell Us What You're Looking For.</h2>
    <p className="sub">Share your property requirements and our team will get in touch.</p>
    <form className="form" data-endpoint="/api/enquiries/tenant" noValidate>
      <div className="grid">
        <div className="f"><label htmlFor="t-name">Full Name <b>*</b></label><input id="t-name" name="fullName" autoComplete="name" required /></div>
        <div className="f"><label htmlFor="t-email">Email Address <b>*</b></label><input id="t-email" name="email" type="email" autoComplete="email" required /></div>
        <div className="f"><label htmlFor="t-phone">Phone Number <b>*</b></label><input id="t-phone" name="phone" type="tel" autoComplete="tel" placeholder="07123 456789 or +44…" required /></div>
        <div className="f"><label htmlFor="t-loc">Preferred Location <b>*</b></label><input id="t-loc" name="location" placeholder="Town, area or postcode e.g. M1 1AE" required /></div>
        <div className="f"><label htmlFor="t-type">Property Type</label><select id="t-type" name="propertyType"><option value="">Select…</option><option>Apartment</option><option>Flat</option><option>House</option><option>Studio</option><option>Other</option></select></div>
        <div className="f"><label htmlFor="t-bed">Number of Bedrooms</label><select id="t-bed" name="bedrooms"><option value="">Select…</option><option>Studio</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option></select></div>
        <div className="f"><label htmlFor="t-budget">Monthly Budget (£)</label><input id="t-budget" name="budget" type="number" inputMode="numeric" min="0" step="10" placeholder="e.g. 1200" /></div>
        <div className="f"><label htmlFor="t-date">Preferred Move-in Date</label><input id="t-date" name="moveInDate" inputMode="numeric" placeholder="DD/MM/YYYY" maxLength="10" /></div>
      </div>
      <div className="f"><label htmlFor="t-req">Additional Requirements</label><textarea id="t-req" name="requirements" rows="4" maxLength="1500"></textarea></div>
      <div className="hp" aria-hidden="true"><label>Leave blank<input name="company_url" tabIndex="-1" autoComplete="off" /></label></div>
      <div className="f check"><input id="t-priv" type="checkbox" name="consentPrivacy" required /><label htmlFor="t-priv">I have read and agree to the <a href="#privacy">Privacy Policy</a>, and consent to Harbourline using my details to respond to this enquiry. <b>*</b></label></div>
      <div className="f check"><input id="t-mkt" type="checkbox" name="consentMarketing" /><label htmlFor="t-mkt">(Optional) I'd like to receive occasional updates about property opportunities. I can unsubscribe at any time.</label></div>
      <p className="status" role="alert" aria-live="polite"></p>
      <button className="btn btn-navy" type="submit">Submit Enquiry</button>
    </form>
    <div className="ok" hidden tabIndex="-1"><h3>Thank you, your enquiry has been received.</h3><p>Our team will review your requirements and get in touch using the details you provided.</p></div>
  </div>
</section>

<section className="section" id="agent-form">
  <div className="wrap narrow">
    <h2>Interested in Working Together?</h2>
    <p className="sub">Introduce yourself and your agency. Let's explore potential opportunities.</p>
    <form className="form" data-endpoint="/api/enquiries/agent" noValidate>
      <div className="grid">
        <div className="f"><label htmlFor="a-name">Full Name <b>*</b></label><input id="a-name" name="fullName" autoComplete="name" required /></div>
        <div className="f"><label htmlFor="a-agency">Agency Name <b>*</b></label><input id="a-agency" name="agencyName" autoComplete="organization" required /></div>
        <div className="f"><label htmlFor="a-email">Business Email <b>*</b></label><input id="a-email" name="email" type="email" autoComplete="email" required /></div>
        <div className="f"><label htmlFor="a-phone">Contact Number <b>*</b></label><input id="a-phone" name="phone" type="tel" autoComplete="tel" required /></div>
        <div className="f"><label htmlFor="a-web">Agency Website</label><input id="a-web" name="website" inputMode="url" placeholder="www.youragency.co.uk" /></div>
        <div className="f"><label htmlFor="a-loc">Business Location <b>*</b></label><input id="a-loc" name="location" placeholder="Town or postcode" required /></div>
        <div className="f"><label htmlFor="a-type">Agent Type</label><select id="a-type" name="agentType"><option value="">Select…</option><option>Estate Agent</option><option>Letting Agent</option><option>Property Manager</option><option>Developer</option><option>Other</option></select></div>
        <div className="f"><label htmlFor="a-areas">Areas Covered</label><input id="a-areas" name="areasCovered" placeholder="e.g. Greater Manchester, Cheshire" /></div>
      </div>
      <div className="f"><label htmlFor="a-info">Additional Information</label><textarea id="a-info" name="info" rows="4" maxLength="1500"></textarea></div>
      <div className="hp" aria-hidden="true"><label>Leave blank<input name="company_url" tabIndex="-1" autoComplete="off" /></label></div>
      <div className="f check"><input id="a-priv" type="checkbox" name="consentPrivacy" required /><label htmlFor="a-priv">I have read and agree to the <a href="#privacy">Privacy Policy</a>, and consent to Harbourline using my details to respond to this enquiry. <b>*</b></label></div>
      <div className="f check"><input id="a-mkt" type="checkbox" name="consentMarketing" /><label htmlFor="a-mkt">(Optional) I'd like to receive occasional updates about partnership opportunities. I can unsubscribe at any time.</label></div>
      <p className="status" role="alert" aria-live="polite"></p>
      <button className="btn btn-navy" type="submit">Send Partnership Enquiry</button>
    </form>
    <div className="ok" hidden tabIndex="-1"><h3>Thank you, we've received your partnership enquiry.</h3><p>A member of our team will review your details and be in touch to discuss next steps.</p></div>
  </div>
</section>

<section className="section alt" id="about">
  <div className="wrap split">
    <figure className="img"><img loading="lazy" src="/images/about-1600.jpg" srcSet="/images/about-800.jpg 800w, /images/about-1600.jpg 1600w" sizes="(min-width:900px) 50vw, 100vw" width="1200" height="900" alt="Georgian townhouse street in a UK city" /></figure>
    <div className="copy">
      <h2>Making Property Connections Better.</h2>
      <p>[Editable placeholder] Harbourline connects people looking to rent with the property professionals who can help them. Replace this paragraph with your company introduction.</p>
      <p>[Editable placeholder] Our vision is a rental experience that feels clear and straightforward for tenants and agents alike. Replace with your company vision.</p>
      <p>[Editable placeholder] We listen first, then connect. Describe your approach and values here.</p>
    </div>
  </div>
</section>

<section className="section" id="faq">
  <div className="wrap narrow">
    <h2>Frequently Asked Questions</h2>
    <div className="faq">
      <details><summary>How do I register as a tenant?</summary><p>Complete the tenant enquiry form on this page with your requirements. It only takes a few minutes.</p></details>
      <details><summary>Does submitting an enquiry guarantee a property?</summary><p>No. Submitting an enquiry lets our team understand what you need. We cannot guarantee availability or outcomes.</p></details>
      <details><summary>How can estate agents collaborate with us?</summary><p>Send us a partnership enquiry using the agent form. We'll review it and get in touch to explore whether working together makes sense.</p></details>
      <details><summary>Which locations in the UK do you cover?</summary><p>[Editable placeholder] Tell us where you're looking or operating and we'll let you know whether we can help.</p></details>
      <details><summary>How will your team contact me?</summary><p>We'll use the email address or phone number you provide in your enquiry.</p></details>
      <details><summary>Is there a fee for submitting an enquiry?</summary><p>[Editable placeholder] Confirm your fee policy here before launch.</p></details>
    </div>
  </div>
</section>

<section className="cta" id="contact">
  <div className="wrap">
    <h2>Let's Start a Better Property Connection.</h2>
    <p>Whether you're looking for a place to call home or exploring professional opportunities, we'd love to hear from you.</p>
    <div className="actions"><a className="btn btn-gold" href="#tenant-form">Tenant Enquiry</a><a className="btn btn-ghost" href="#agent-form">Agent Enquiry</a></div>
  </div>
</section>
</main>

<footer className="foot">
  <div className="wrap foot-in">
    <div><a className="logo" href="#top"><svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true"><path d="M4 28V14L16 4l12 10v14" fill="none" stroke="#C5A46D" strokeWidth="2.4"/><path d="M12 28v-9h8v9" fill="none" stroke="currentColor" strokeWidth="2.4"/></svg><span>Harbourline</span></a>
      <p>[Placeholder] Connecting tenants and property professionals across the UK.</p></div>
    <nav aria-label="Footer"><a href="#top">Home</a><a href="#about">About</a><a href="#tenant-form">Tenant enquiry</a><a href="#agent-form">Agent enquiry</a><a href="#faq">FAQ</a></nav>
    <address>[Address line, City, Postcode]<br /><a href="tel:+440000000000">+44 (0)000 000 0000</a><br /><a href="mailto:hello@example.co.uk">hello@example.co.uk</a></address>
  </div>
  <div className="wrap legal"><span>&copy; <span id="yr">2026</span> Harbourline. All rights reserved. [Company no. / registered office]</span>
    <span><a id="privacy" href="/privacy">Privacy Policy</a><a href="/terms">Terms &amp; Conditions</a><a href="/cookies">Cookie Policy</a></span></div>
</footer>
      <ClientBehavior />
    </>
  );
}
