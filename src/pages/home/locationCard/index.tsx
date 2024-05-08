import './style.sass'
import {Rent} from "../../../assets/mocks/rent.ts";
import {NavLink} from "react-router-dom";

type Props = {
  rent: Rent | undefined
}

export default function LocationCard ({ rent }: Props) {
  return <article className="card" style={{
    backgroundImage: `url('${rent?.cover}')`,
  }}>
    {rent?.id && <NavLink to={`/rent/${rent.id}`} className="card--link"></NavLink>}

    <div className="card--overlay">
      <h2 className="card--title">{rent?.title ?? 'Titre de la location'}</h2>
    </div>
  </article>
}
