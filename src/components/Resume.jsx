import { Fragment } from 'react'
import RichText from '../utils/richText.jsx'
import { CONTACT_ICONS, BADGE_ICONS } from './icons.jsx'
import './Resume.css'

function ContactRow({ item }) {
  const Icon = CONTACT_ICONS[item.icon]
  const isBadge = BADGE_ICONS.has(item.icon)
  const content = (
    <>
      <span className={isBadge ? 'contact-icon contact-icon--badge' : 'contact-icon'}>
        {Icon && <Icon />}
      </span>
      <span className="contact-text">{item.text}</span>
    </>
  )
  return (
    <li className="contact-row">
      {item.href ? (
        <a href={item.href} target="_blank" rel="noreferrer">
          {content}
        </a>
      ) : (
        <span className="contact-row__static">{content}</span>
      )}
    </li>
  )
}

function ExperienceEntry({ item }) {
  return (
    <article className="entry">
      <span className="entry__marker" aria-hidden="true" />
      <div className="entry__head">
        <h3 className="entry__title">{item.role}</h3>
        <div className="entry__company">{item.company}</div>
        {(item.date || item.location) && (
          <div className="entry__meta">
            {item.date && <span>{item.date}</span>}
            {item.date && item.location && <span className="entry__meta-sep">|</span>}
            {item.location && <span>{item.location}</span>}
          </div>
        )}
      </div>
      {item.bulletsHeading && <h4 className="entry__sub-heading">{item.bulletsHeading}</h4>}
      {item.bullets?.length > 0 && (
        <ul className="entry__bullets">
          {item.bullets.map((b, i) => (
            <li key={i}>
              <RichText text={b} />
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

function EducationEntry({ item }) {
  return (
    <article className="entry">
      <span className="entry__marker" aria-hidden="true" />
      <div className="entry__head">
        <h3 className="entry__title">{item.degree}</h3>
        <div className="entry__company">{item.school}</div>
        {(item.date || item.location) && (
          <div className="entry__meta">
            {item.date && <span>{item.date}</span>}
            {item.date && item.location && <span className="entry__meta-sep">|</span>}
            {item.location && <span>{item.location}</span>}
          </div>
        )}
      </div>
    </article>
  )
}

function ProjectEntry({ item }) {
  return (
    <article className="entry entry--project">
      <h3 className="entry__title">{item.name}</h3>
      {item.role && <div className="entry__role">{item.role}</div>}
      {item.bulletsHeading && <h4 className="entry__sub-heading">{item.bulletsHeading}</h4>}
      {item.bullets?.length > 0 && (
        <ul className="entry__bullets">
          {item.bullets.map((b, i) => (
            <li key={i}>
              <RichText text={b} />
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

export default function Resume({ data }) {
  const {
    name,
    title,
    photo,
    summary,
    contact = [],
    experience = [],
    education = [],
    skills = [],
    projects = [],
    languages = [],
    interests = [],
  } = data

  return (
    <div className="resume-page">
      <header className="resume-header">
        <span className="header-tab" aria-hidden="true" />

        <div className="header-intro">
          <h1 className="header-name">{name}</h1>
          <p className="header-title">{title}</p>
          {summary && (
            <p className="header-summary">
              <RichText text={summary} />
            </p>
          )}
        </div>

        {photo && (
          <div className="header-photo">
            <img src={photo} alt={name} />
          </div>
        )}

        {contact.length > 0 && (
          <ul className="header-contact">
            {contact.map((item, i) => (
              <ContactRow key={i} item={item} />
            ))}
          </ul>
        )}
      </header>

      <hr className="header-divider" />

      <main className="resume-body">
        <div className="resume-col resume-col--left">
          {experience.length > 0 && (
            <section className="section">
              <h2 className="section__heading">Work Experience</h2>
              {experience.map((item, i) => (
                <Fragment key={i}>
                  {item.pageBreakBefore && (
                    <>
                      <div className="force-page-break" />
                      <h2 className="section__heading section__heading--continued">
                        Work Experience
                      </h2>
                    </>
                  )}
                  <ExperienceEntry item={item} />
                </Fragment>
              ))}
            </section>
          )}

          {education.length > 0 && (
            <section className="section">
              <h2 className="section__heading">Education</h2>
              {education.map((item, i) => (
                <EducationEntry key={i} item={item} />
              ))}
            </section>
          )}
        </div>

        <div className="resume-col resume-col--right">
          {skills.length > 0 && (
            <section className="section">
              <h2 className="section__heading">Skills</h2>
              <div className="skill-tags">
                {skills.map((skill, i) => (
                  <span className="skill-tag" key={i}>
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {projects.length > 0 && (
            <section className="section">
              <h2 className="section__heading">Projects</h2>
              {projects.map((item, i) => (
                <Fragment key={i}>
                  {item.pageBreakBefore && (
                    <>
                      <div className="force-page-break" />
                      <h2 className="section__heading section__heading--continued">
                        Projects
                      </h2>
                    </>
                  )}
                  <ProjectEntry item={item} />
                </Fragment>
              ))}
            </section>
          )}

          {languages.length > 0 && (
            <section className="section">
              <h2 className="section__heading">Languages</h2>
              <div className="languages-grid">
                {languages.map((lang, i) => (
                  <div className="language-item" key={i}>
                    <div className="language-item__name">{lang.name}</div>
                    <div className="language-item__level">{lang.level}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {interests.length > 0 && (
            <section className="section">
              <h2 className="section__heading">Interests</h2>
              <div className="interest-tags">
                {interests.map((interest, i) => (
                  <span className="interest-tag" key={i}>
                    {interest}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  )
}
