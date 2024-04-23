import './style.sass'
import LocationCard from "../locationCard";
import {Rent, rents} from '../../../assets/mocks/rent.ts'

export default function LocationGrid () {
  return <section className="grid">
    {rents.length && rents.map((rent: Rent | undefined) => <LocationCard rent={rent} />)}
  </section>
}
