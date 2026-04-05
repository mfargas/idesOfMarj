import * as React from 'react'
import emailjs from '@emailjs/browser'
import Layout from '../components/layout'
import Seo from '../components/seo'
import * as styles from '../styles/contact.module.css'

const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const NOTIFY_ID   = process.env.NEXT_PUBLIC_EMAILJS_NOTIFY_TEMPLATE_ID
const REPLY_ID    = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

const ContactPage = () => {
  const formRef = React.useRef(null)
  const [status, setStatus] = React.useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(SERVICE_ID, NOTIFY_ID, formRef.current, PUBLIC_KEY)

      // Auto-reply to sender
      const data = new FormData(formRef.current)
      await emailjs.send(
        SERVICE_ID,
        REPLY_ID,
        {
          from_name:  data.get('from_name'),
          reply_to:   data.get('reply_to'),
          subject:    data.get('subject'),
          message:    data.get('message'),
        },
        PUBLIC_KEY
      )

      setStatus('success')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <Layout>
      <Seo
        title="Contact"
        description="Open to frontend, design engineering, and creative tech roles. Say hello."
      />

      <div className={styles.page}>
        <div className={styles.intro}>
          <h1 className={styles.title}>Say Hello</h1>
          <p className={styles.lead}>
            I&apos;m looking for Frontend, Design Engineer, or Creative Technologist roles
            at companies where craft and curiosity are valued.
          </p>
          <p className={styles.sub}>
            Based in NYC &mdash; open to hybrid and remote.
            Whether it&apos;s a role, a collaboration, or just a hello &mdash; inbox is open.
          </p>

          <div className={styles.links}>
            <a href="mailto:marjoree.f@gmail.com" className={styles.link}>
              marjoree.f@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/marjoree"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/marjoreefargas"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              GitHub ↗
            </a>
            <a
              href="https://marjoree.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              marjoree.com ↗
            </a>
          </div>
        </div>

        <div className={styles.divider} />

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={styles.form}
          noValidate
        >
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="from_name" className={styles.label}>Name</label>
              <input
                id="from_name"
                name="from_name"
                type="text"
                required
                autoComplete="name"
                className={styles.input}
                placeholder="Your name"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="reply_to" className={styles.label}>Email</label>
              <input
                id="reply_to"
                name="reply_to"
                type="email"
                required
                autoComplete="email"
                className={styles.input}
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="subject" className={styles.label}>Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              className={styles.input}
              placeholder="What's this about?"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className={styles.textarea}
              placeholder="Say whatever you'd like…"
            />
          </div>

          {status === 'error' && (
            <p className={styles.errorMsg}>
              Something went wrong — try emailing directly at marjoree.f@gmail.com
            </p>
          )}

          <div className={styles.formFooter}>
            {status === 'success' ? (
              <p className={styles.successMsg}>Message sent — talk soon!</p>
            ) : (
              <button
                type="submit"
                className={styles.submit}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send Message →'}
              </button>
            )}
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default ContactPage
