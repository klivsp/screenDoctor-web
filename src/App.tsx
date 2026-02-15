import "./App.css";

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-brand">
            <span className="app-icon">📱</span>
            <span className="app-name">Screen Doctor</span>
          </div>
          <ul className="nav-menu">
            <li>
              <button onClick={() => scrollToSection("home")}>Home</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("privacy")}>
                Privacy Policy
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("terms")}>
                Terms of Service
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("support")}>
                Support
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")}>
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Screen Doctor for iPhone</h1>
            <p className="hero-subtitle">
              Professional screen diagnostics to detect dead pixels, burn-in,
              and touch issues
            </p>
            <div className="hero-badges">
              <div className="badge">
                <span className="badge-icon">🎨</span>
                <span>6 Test Modes</span>
              </div>
              <div className="badge">
                <span className="badge-icon">🌍</span>
                <span>7 Languages</span>
              </div>
              <div className="badge">
                <span className="badge-icon">🔒</span>
                <span>Privacy First</span>
              </div>
              <div className="badge">
                <span className="badge-icon">✓</span>
                <span>No Ads</span>
              </div>
            </div>
            {/* <a
              href="https://apps.apple.com/app/screen-tester"
              className="download-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download on App Store
            </a> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">🎨</span>
              <h3>Solid Color Tests</h3>
              <p>Display pure colors to detect stuck or dead pixels</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🌈</span>
              <h3>Gradient Test</h3>
              <p>Check for color banding and uneven transitions</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🔍</span>
              <h3>Dead Pixel Detection</h3>
              <p>High-contrast patterns make defects visible</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🔥</span>
              <h3>Burn-in Test</h3>
              <p>Detect OLED burn-in and image retention</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">⊞</span>
              <h3>Grid Pattern</h3>
              <p>Verify screen alignment and uniformity</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">✏️</span>
              <h3>Touch Test</h3>
              <p>Test touch responsiveness and accuracy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy" className="policy-section">
        <div className="container">
          <h2>Privacy Policy</h2>
          <p className="last-updated">Last Updated: February 15, 2026</p>

          <div className="policy-content">
            <h3>1. Introduction</h3>
            <p>
              Welcome to Screen Doctor. We are committed to protecting your
              privacy. This Privacy Policy explains how we handle information
              when you use our Screen Doctor mobile application .
            </p>

            <h3>2. Information We Collect</h3>
            <p>
              <strong>
                We do NOT collect, store, or transmit any personal information.
              </strong>
            </p>
            <p>Screen Doctor is designed with privacy as a core principle:</p>
            <ul>
              <li>✓ No personal data collection</li>
              <li>✓ No user accounts required</li>
              <li>✓ No analytics or tracking</li>
              <li>✓ No advertising networks</li>
              <li>✓ No third-party data sharing</li>
              <li>✓ Works completely offline</li>
            </ul>

            <h3>3. How the App Works</h3>
            <p>
              Screen Doctor operates entirely on your device. All screen tests
              run locally without sending any data to external servers. The app:
            </p>
            <ul>
              <li>Uses your device's display to show test patterns</li>
              <li>Accesses touch input to perform touch response tests</li>
              <li>Stores language preferences locally on your device</li>
              <li>
                Does not access your photos, contacts, location, or any other
                personal data
              </li>
            </ul>

            <h3>4. Permissions</h3>
            <p>The App requires minimal permissions:</p>
            <ul>
              <li>
                <strong>Display Access:</strong> To show full-screen test
                patterns
              </li>
              <li>
                <strong>Touch Input:</strong> To test touch responsiveness
              </li>
            </ul>
            <p>We do NOT request access to:</p>
            <ul>
              <li>✗ Camera or Photos</li>
              <li>✗ Microphone</li>
              <li>✗ Location</li>
              <li>✗ Contacts</li>
              <li>✗ Calendar</li>
              <li>✗ Health Data</li>
              <li>✗ Network connections (app works offline)</li>
            </ul>

            <h3>5. Data Storage</h3>
            <p>
              The only data stored on your device is your language preference
              setting. This is stored locally using iOS's standard UserDefaults
              system and is never transmitted anywhere.
            </p>

            <h3>6. Third-Party Services</h3>
            <p>
              Screen Doctor does not integrate with any third-party services,
              analytics platforms, advertising networks, or external APIs.
            </p>

            <h3>7. Children's Privacy</h3>
            <p>
              Our App is safe for all ages. Since we don't collect any personal
              information, there are no additional concerns for children under
              13 (or any other age group).
            </p>

            <h3>8. Changes to This Privacy Policy</h3>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last Updated" date.
            </p>

            <h3>9. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
              <br />
              Email:{" "}
              <a href="mailto:privacy@screentester.app">
                privacy@screentester.app
              </a>
            </p>

            <h3>10. Your Rights</h3>
            <p>
              Since we don't collect any personal data, there is no data to
              access, modify, or delete. You maintain complete control over your
              device and can uninstall the App at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Terms of Service Section */}
      <section id="terms" className="policy-section alt-bg">
        <div className="container">
          <h2>Terms of Service</h2>
          <p className="last-updated">Last Updated: February 15, 2026</p>

          <div className="policy-content">
            <h3>1. Acceptance of Terms</h3>
            <p>
              By downloading, installing, or using Screen Doctor , you agree to
              be bound by these Terms of Service . If you do not agree to these
              Terms, do not use the App.
            </p>

            <h3>2. License Grant</h3>
            <p>
              We grant you a limited, non-exclusive, non-transferable, revocable
              license to use Screen Doctor for personal or professional use in
              accordance with these Terms and Apple's App Store Terms of
              Service.
            </p>

            <h3>3. Permitted Use</h3>
            <p>You may use the App to:</p>
            <ul>
              <li>Test your iPhone or iPad display for defects</li>
              <li>Test touch screen responsiveness</li>
              <li>Check for dead pixels, burn-in, or other screen issues</li>
              <li>Use professionally for device testing and quality control</li>
            </ul>

            <h3>4. Prohibited Use</h3>
            <p>You may NOT:</p>
            <ul>
              <li>Reverse engineer, decompile, or disassemble the App</li>
              <li>Modify or create derivative works of the App</li>
              <li>Distribute, sell, or sublicense the App</li>
              <li>Use the App for any illegal purposes</li>
              <li>Remove or alter any copyright notices</li>
            </ul>

            <h3>5. Disclaimer of Warranties</h3>
            <p>
              THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES
              OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
              TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, OR NON-INFRINGEMENT.
            </p>
            <p>We do not warrant that:</p>
            <ul>
              <li>The App will meet your requirements</li>
              <li>The App will be uninterrupted or error-free</li>
              <li>Any defects will be corrected</li>
              <li>Test results will be 100% accurate</li>
            </ul>

            <h3>6. Limitation of Liability</h3>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR
              ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
              DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED
              DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR
              OTHER INTANGIBLE LOSSES.
            </p>

            <h3>7. Diagnostic Tool Disclaimer</h3>
            <p>
              Screen Doctor is a diagnostic tool designed to help identify
              potential screen issues. However:
            </p>
            <ul>
              <li>The App cannot repair any screen defects</li>
              <li>
                The App cannot definitively determine if a screen is original
                Apple hardware
              </li>
              <li>
                Test results should be used as indicators, not definitive
                diagnoses
              </li>
              <li>
                For repairs or warranty claims, consult Apple or authorized
                service providers
              </li>
              <li>
                We are not responsible for any actions taken based on test
                results
              </li>
            </ul>

            <h3>8. Intellectual Property</h3>
            <p>
              All content, features, and functionality of the App are owned by
              us and are protected by international copyright, trademark,
              patent, trade secret, and other intellectual property laws.
            </p>

            <h3>9. Updates and Modifications</h3>
            <p>
              We reserve the right to modify, suspend, or discontinue the App at
              any time without notice. We may also update these Terms from time
              to time. Continued use of the App after changes constitutes
              acceptance of the updated Terms.
            </p>

            <h3>10. Governing Law</h3>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the jurisdiction in which we operate, without regard
              to its conflict of law provisions.
            </p>

            <h3>11. Termination</h3>
            <p>
              These Terms are effective until terminated. Your rights under this
              license will terminate automatically if you fail to comply with
              any of its terms. Upon termination, you must cease all use of the
              App and delete it from your devices.
            </p>

            {/* <h3>12. Contact Information</h3>
            <p>
              For questions about these Terms, contact us at:
              <br />
              Email:{" "}
              <a href="mailto:legal@screentester.app">klivi1spahiu@gmail.com</a>
            </p> */}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="policy-section">
        <div className="container">
          <h2>Support & FAQ</h2>

          <div className="faq-content">
            <div className="faq-item">
              <h3>How do I use the app?</h3>
              <p>
                Simply open the app, select a test mode from the menu, and
                follow the on-screen instructions. For best results, test in a
                dark room with brightness set to 100%.
              </p>
            </div>

            <div className="faq-item">
              <h3>Which devices are supported?</h3>
              <p>
                Screen Doctor works on all iPhone models (iPhone SE to iPhone 15
                Pro Max) and all iPad models. It's optimized for both OLED and
                LCD displays.
              </p>
            </div>

            <div className="faq-item">
              <h3>Is the app free?</h3>
              <p>
                Yes! Screen Doctor is completely free to download and use. There
                are no ads, in-app purchases, or hidden costs.
              </p>
            </div>

            <div className="faq-item">
              <h3>Does the app collect my data?</h3>
              <p>
                No. Screen Doctor does not collect, store, or transmit any
                personal information. The app works entirely offline and
                respects your privacy.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can the app repair my screen?</h3>
              <p>
                No. Screen Doctor is a diagnostic tool that helps you identify
                screen issues. It cannot repair hardware defects. For repairs,
                visit an Apple Store or authorized service provider.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can it detect if my screen is original Apple?</h3>
              <p>
                The app cannot definitively verify if a screen is original Apple
                hardware due to iOS security restrictions. However, it provides
                a detailed guide on how to check manually through iOS Settings
                and visual inspection.
              </p>
            </div>

            <div className="faq-item">
              <h3>What languages are supported?</h3>
              <p>
                Screen Doctor supports 7 languages: English, Spanish, Italian,
                German, French, Chinese (Simplified), and Russian. The app
                automatically detects your device language.
              </p>
            </div>

            <div className="faq-item">
              <h3>I found a bug. How do I report it?</h3>
              <p>
                Please email us at{" "}
                <a href="mailto:klivi1spahiu@gmail.com">
                  support@screentester.app
                </a>{" "}
                with details about the issue, your device model, and iOS
                version.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can I request a new feature?</h3>
              <p>
                Absolutely! We love hearing from users. Send your suggestions to{" "}
                <a href="mailto:klivi1spahiu@gmail.com">
                  feedback@screentester.app
                </a>
                .
              </p>
            </div>

            <div className="faq-item">
              <h3>How accurate are the tests?</h3>
              <p>
                The tests are designed to help identify visible screen issues.
                While they're effective for detecting dead pixels, burn-in, and
                touch problems, they should be used as indicators rather than
                definitive diagnoses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section
      <section id="contact" className="policy-section alt-bg">
        <div className="container">
          <h2>Contact Us</h2>

          <div className="contact-content">
            <p>
              We'd love to hear from you! Whether you have questions, feedback,
              or need support, feel free to reach out.
            </p>

            <div className="contact-methods">
              <div className="contact-card">
                <span className="contact-icon">📧</span>
                <h3>General Inquiries</h3>
                <a href="mailto:hello@screentester.app">
                  hello@screentester.app
                </a>
              </div>

              <div className="contact-card">
                <span className="contact-icon">🛠️</span>
                <h3>Technical Support</h3>
                <a href="mailto:support@screentester.app">
                  support@screentester.app
                </a>
              </div>

              <div className="contact-card">
                <span className="contact-icon">🔒</span>
                <h3>Privacy Questions</h3>
                <a href="mailto:privacy@screentester.app">
                  privacy@screentester.app
                </a>
              </div>

              <div className="contact-card">
                <span className="contact-icon">⚖️</span>
                <h3>Legal</h3>
                <a href="mailto:legal@screentester.app">
                  legal@screentester.app
                </a>
              </div>

              <div className="contact-card">
                <span className="contact-icon">💡</span>
                <h3>Feature Requests</h3>
                <a href="mailto:feedback@screentester.app">
                  feedback@screentester.app
                </a>
              </div>

              <div className="contact-card">
                <span className="contact-icon">🐛</span>
                <h3>Bug Reports</h3>
                <a href="mailto:bugs@screentester.app">bugs@screentester.app</a>
              </div>
            </div>

            <div className="response-time">
              <p>
                <strong>Response Time:</strong> We typically respond within
                24-48 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Screen Tester</h4>
              <p>Professional screen diagnostics for iPhone & iPad</p>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <button onClick={() => scrollToSection("privacy")}>
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("terms")}>
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("support")}>
                    Support
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("contact")}>
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li>
                  <a href="mailto:support@screentester.app">
                    support@screentester.app
                  </a>
                </li>
                <li>
                  <a href="mailto:feedback@screentester.app">
                    feedback@screentester.app
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Download</h4>
              <a
                href="https://apps.apple.com/app/screen-tester"
                className="footer-badge"
                target="_blank"
                rel="noopener noreferrer"
              >
                📱 App Store
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Screen Tester. All rights reserved.</p>
            <p>Apple, iPhone, and iPad are trademarks of Apple Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
