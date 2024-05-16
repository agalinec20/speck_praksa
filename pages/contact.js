import Head from 'next/Head';
import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {

    return (
        <>
        <div style={{fontFamily: "'heywow', sans-serif", overflow:'hidden', margin: 0, padding: 0}}>
            <Head>
                <meta charSet="UTF-8"></meta>
                <meta name="viewport" content="width=device-width, inital-scale=1"></meta>
                <link rel="icon" href="/favicon.png"></link>
                <title>Contact Us | Speck</title>
            </Head>
            
            <header>
                <div className={styles.container}>
                <div className={styles.logo}>
                    <a href="#"><img src="/logo.png"alt="Logo"></img></a>
                </div>
                <div className={styles.nav}>
                    <a href="#">Services</a>
                    <a href="#">Our Work</a>
                    <a href="#">About Us</a>
                    <a href="#">Careers</a>
                    <a href="#">Blog</a>
                    <a href="#">Academy</a>
                    <a href="#">Contact</a>
                </div>
                </div>
            </header>
            <div>
                <h1 className={styles.h1}>Let's collaborate</h1>
                <div>
                    <h2 className={styles.h2}>Let's collaborate</h2>
                </div>
          </div>
          <div className={styles.contact}>
            <form>
              <div className={styles.area1}>
                <div className={styles.fieldgroup1}>
                  <div className={styles.inputContainer}>
                    <input required name="name" id="name" className={styles.inputInput}></input>
                    <label className={styles.inputLabel}>First Name*</label>
                  </div>
                  <div className={styles.inputContainer}>
                    <input required name="surname" id="surname" className={styles.inputInput}></input>
                    <label className={styles.inputLabel}>Last Name*</label>
                   </div>
                </div>
              </div>
              <div className={styles.fieldgroup2}>
              <div className={styles.inputContainer}>
                    <input required name="email" id="email" className={styles.inputInput}></input>
                    <label className={styles.inputLabel}>Email address*</label>
                  </div>
                  <div className={styles.inputContainer}>
                    <input required name="phone" id="phone" className={styles.inputInput}></input>
                    <label className={styles.inputLabel}>Phone number*</label>
                   </div>
              </div>
              <div className={styles.inputContainer}>
                <input required name="company" id="company" className={styles.inputInput}></input>
                <label className={styles.inputLabel}>Company*</label>
              </div>
              <div className={styles.inputSelect}>
                <select name="hear" id="hear" className={styles.selectSelect}>
                  <option value="" className={styles.inputSelect}></option>
                  <option value="social media" className={styles.inputSelect}>Social media (Facebook, Instagram)</option>
                  <option value="word of mouth" className={styles.inputSelect}>Word of mouth</option>
                  <option value="google" className={styles.inputSelect}>Google</option>
                  <option value="other" className={styles.inputSelect}>Other</option>
                </select>
                <label className={styles.selectLabel}>How did you hear about us?</label>
              </div>
              <div className={styles.inputSelect}>
                <select name="challenge" id="challenge" className={styles.selectSelect}>
                  <option value="" className={styles.inputSelect}></option>
                  <option value="creating a new digital product" className={styles.inputSelect}>Creating a new digital product</option>
                  <option value="scaling my business" className={styles.inputSelect}>Scaling my business</option>
                  <option value="stepping into digital transformation" className={styles.inputSelect}>Stepping into digital transformation</option>
                  <option value="auditing and optimizing my infrastructure/processes" className={styles.inputSelect}>Auditing and optimizing my infrastructure/processes</option>
                  <option value="building a team of experts" className={styles.inputSelect}>Building a team of experts</option>
                  <option value="other" className={styles.inputSelect}>Other</option>
                </select>
                <label className={styles.selectLabel}>What challenge are you trying to solve?</label>
              </div>
              <div>
                <p className={styles.budgetLabel}>What is your budget?*</p>
                <div className={styles.budgetOptions}>
                  <button className={styles.budgetButton} type="button">Up to 50.000 eur</button>
                  <button className={styles.budgetButton} type="button">50.000 eur - 100.000 eur</button>
                  <button className={styles.budgetButton} type="button">100.000 eur - 250.000 eur</button>
                  <button className={styles.budgetButton} type="button">Over 250.000 eur</button>
                  <button className={styles.budgetButton} type="button">Not sure yet</button>
                </div>
              </div>
              <div className={styles.inputContainer}>
                <textarea name="tellmore" id="tellmore" className={styles.inputInput}></textarea>
                <label className={styles.inputLabel}>Tell us more about your project and scope*</label>
              </div>
              <div className={styles.inputContainer}>
                <label className={styles.inputFileLabel}></label>
                <input name="exdocuments" id="exdocuments" className={styles.inputFile} type="file"></input>
                <div className={styles.fileContent}>
                  <img alt="attachment" src="../public/attachment.png" width="23" height="25" decoding="async" data-nimg="1" loading="lazy"></img>
                  <span className={styles.inputFileText}>Feel free to attach any additional documents!</span>
                </div>
              </div>

              <div className={`${styles.formGroup} ${styles.fullWidth} ${styles.checkboxGroup}`}>
                <label htmlFor="newsletter">
                    <input type="checkbox" name="newsletter" id="newsletter" />
                    <span className={styles.checkmark}></span>
                    <span>Stay up to date with the latest software development and design trends brought to you by Speck experts</span>
                </label>
              </div>
              <div className={`${styles.formGroup} ${styles.fullWidth} ${styles.checkboxGroup}`}>
                <label htmlFor="privacy_policy">
                    <input type="checkbox" name="privacy_policy" id="privacy_policy" required/>
                    <span className={styles.checkmark}></span>
                    <span>I agree to the <a href="#">Privacy policy</a></span>
                </label>
              </div>
              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <button type="submit" className={styles.submitButton}>Send</button>
             </div>
                </form>
            </div>

            <footer className={styles.footer}>
            <div className={styles.innerFooter}>
            <div className={styles.footerSection}>
                <h3>Our Office</h3>
                <div className={styles.office}>
                    <h4>Croatia</h4>
                    <p>Petračićeva 6<br />10000 Zagreb<br /><a href="tel:+385953587050">+385 95 3587 050</a></p>
                </div>
            </div>
            <div className={styles.footerSection}>
                <h3>Contact</h3>
                <div className={styles.socialIcons}>
                    <a href="#"><img src="/facebook.svg" alt="Facebook" width="30px" height="30px"/></a>
                    <a href="#"><img src="/instagram.svg" alt="Instagram" width="30px" height="30px"/></a>
                    <a href="#"><img src="/tik-tok.svg" alt="Tik tok" width="30px" height="30px"/></a>
                </div>
                    <p><a href="mailto:hello@speck.agency">hello@speck.agency</a></p>
                    <p><a href="mailto:career@speck.agency">career@speck.agency</a></p>
            </div>
            <div className={styles.footerSection}>
                <h3>Legal</h3>
                <div className={styles.footerSectionA}>
                    <p><a href="#">Privacy Policy</a></p>
                    <p><a href="#">Company</a></p>
                </div>
                <p>© 2024 Speck d.o.o.</p>
            </div>
            </div>
      </footer>

           

        </div>
    </>




)
}

export default Contact;