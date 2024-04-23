import './style.sass'
import AboutBanner from "./aboutBanner";
import FAQ from "./faq";

export default function About () {
  return <main className="page about">
    <AboutBanner />
    <FAQ />
  </main>
}
