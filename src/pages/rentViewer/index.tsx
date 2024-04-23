import {useParams} from "react-router-dom";
import './style.sass'
import {Rent, rents} from "../../assets/mocks/rent.ts";
import StarIcon from "./starIcon";
import TagList from "./tagList";
import Accordion from "../../components/accordion";

export default function RentViewer () {
  const {id} = useParams()
  const rent = rents.find((rent: Rent | undefined) => rent?.id === id)

  return (rent && <main className="page viewer">
    <img src={`/images/rent/${rent.thumbnail}`} alt="" className="viewer--thumbnail" />

    <div className="viewer__info">
      <h1 className="viewer__info--title">{rent.title}</h1>
      <p className="viewer__info--location">{rent.location}</p>
      <TagList tags={rent.tags} />
    </div>

    <aside className="viewer__credits">
      <header className="viewer__credits__author">
        <p className="viewer__credits__author--name">{rent.owner.firstName}<br/>{rent.owner.lastName}</p>
        <img src={`/images/owners/${rent.owner.avatar ?? 'default.png'}`} alt={`Avatar de ${rent.owner.firstName} ${rent.owner.lastName}`} className="viewer__credits__author--avatar"/>
      </header>

      <ul className="viewer__credits__mark">
        {[1, 2, 3, 4, 5].map((i: number) => <li className={`viewer__credits__mark--star ${rent.mark >= i ? 'active' : ''}`}><StarIcon /></li>)}
      </ul>
    </aside>

    <Accordion title="Description" description="Description à venir" />
    <Accordion title="Équipement" description={
`- Climatisation
- Wi-Fi
- Cuisine
- Espace de travail
- Fer à repasser
- Sèche-cheveux
- Cintres`
    } />
  </main>)
}
