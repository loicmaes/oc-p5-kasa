import './style.sass'
import Accordion from "../../../components/accordion";

const services = [
  {
    title: 'Fiabilité',
    description: 'Fiabilité à venir',
  },
  {
    title: 'Respect',
    description: 'Respect à venir',
  },
  {
    title: 'Service',
    description: 'Service à venir',
  },
  {
    title: 'Sécurité',
    description: 'Sécurité à venir',
  }
]
export default function FAQ () {
  return <section className="faq">
    {services.map(({ title, description }) =>
        <Accordion title={title} description={description} />)}
  </section>
}
