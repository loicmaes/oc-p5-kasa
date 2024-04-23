import './style.sass'
import LocationCard from "../locationCard";

export default function LocationGrid () {
  return <section className="grid">
    <LocationCard/>
    <LocationCard/>
    <LocationCard/>
    <LocationCard/>
    <LocationCard/>
    <LocationCard/>
  </section>
}
