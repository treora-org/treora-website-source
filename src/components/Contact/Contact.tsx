import { useState, useRef } from 'react';
import styles from './Contact.module.css';

// ── EmailJS config ──────────────────────────────────────────────
// Replace these three values after setting up https://www.emailjs.com
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const CONTACT_EMAIL = 'hello@treora.dev';
// ───────────────────────────────────────────────────────────────

declare global {
  interface Window { emailjs: any; }
}

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [state, setState] = useState<FormState>('idle');
  const [validationErr, setValidationErr] = useState(false);
  const nameRef    = useRef<HTMLInputElement>(null);
  const emailRef   = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async () => {
    const name    = nameRef.current?.value.trim() ?? '';
    const email   = emailRef.current?.value.trim() ?? '';
    const message = messageRef.current?.value.trim() ?? '';

    if (!name || !email || !message) { setValidationErr(true); return; }
    setValidationErr(false);
    setState('loading');

    try {
      if (!window.emailjs) throw new Error('EmailJS not loaded');
      window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name:  name,
        from_email: email,
        message,
        reply_to:   email,
      });
      setState('success');
    } catch (err) {
      console.error('EmailJS error:', err);
      setState('error');
    }
  };

  return (
    <section className={styles.section} id="contact">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.left}>
            <span className={styles.sectionTag}>contact</span>
            <h2 className={styles.title}>Have something to build?</h2>
            <p className={styles.body}>
              Tell us what you're working on. No commitments. We'll let you know
              if it's a good fit and what we'd propose.
            </p>
            <div className={styles.meta}>
              {[
                ['Response time', 'Within 48 hours'],
                ['Availability',  'Open to projects'],
                ['Timezone',      'US (flexible)'],
              ].map(([label, value]) => (
                <div key={label} className={styles.metaRow}>
                  <span className={styles.metaLabel}>{label}</span>
                  <span className={styles.metaValue}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            {state === 'success' && (
              <div className={styles.stateBox}>
                <div className={styles.checkIcon}>✓</div>
                <p className={styles.stateTitle}>Message sent.</p>
                <p className={styles.stateBody}>We'll be in touch within 48 hours.</p>
              </div>
            )}

            {state === 'error' && (
              <div className={`${styles.stateBox} ${styles.errorBox}`}>
                <p className={styles.stateBody}>
                  Something went wrong. Please email us directly at{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`} className={styles.errorLink}>{CONTACT_EMAIL}</a>
                </p>
              </div>
            )}

            {(state === 'idle' || state === 'loading') && (
              <div className={styles.form}>
                <div className={styles.fieldRow}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="cf-name">Name</label>
                    <input ref={nameRef} id="cf-name" type="text" placeholder="Your name" autoComplete="name" />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="cf-email">Email</label>
                    <input ref={emailRef} id="cf-email" type="email" placeholder="you@company.com" autoComplete="email" />
                  </div>
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="cf-msg">Tell us about the project</label>
                  <textarea ref={messageRef} id="cf-msg" rows={5} placeholder="What are you building? What's the timeline? What does success look like?" />
                </div>
                {validationErr && <p className={styles.validationErr}>Please fill in all fields before sending.</p>}
                <button
                  className={`${styles.submitBtn} ${state === 'loading' ? styles.loading : ''}`}
                  onClick={handleSubmit}
                  disabled={state === 'loading'}
                >
                  {state === 'loading' ? (
                    <span className={styles.spinner} aria-label="Sending..." />
                  ) : 'Send message'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
