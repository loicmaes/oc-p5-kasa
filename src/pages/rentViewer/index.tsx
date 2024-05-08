import {useParams} from "react-router-dom";
import './style.sass'
import {Rent, rents} from "../../assets/mocks/rent.ts";
import StarIcon from "./starIcon";
import TagList from "./tagList";
import Accordion from "../../components/accordion";
import Carousel from "../../components/carousel";

export default function RentViewer () {
  const {id} = useParams()
  const rent = rents.find((rent: Rent | undefined) => rent?.id === id)

  if (!rent)
    throw new Response('Not found', { status: 404 })

  return (rent && <main className="page viewer">
    <Carousel className="viewer--thumbnail" elements={rent.pictures} />

    <div className="viewer__info">
      <h1 className="viewer__info--title">{rent.title}</h1>
      <p className="viewer__info--location">{rent.location}</p>
      <TagList tags={rent.tags} />
    </div>

    <aside className="viewer__credits">
      <header className="viewer__credits__author">
        <p className="viewer__credits__author--name">{rent.host.name}</p>
        <img src={`/images/owners/${rent.host.picture ?? 'default.png'}`} alt={`Avatar de ${rent.host.name}`} className="viewer__credits__author--avatar"/>
      </header>

      <ul className="viewer__credits__mark">
        {[1, 2, 3, 4, 5].map((i: number) => <li className={`viewer__credits__mark--star ${rent.rating >= i ? 'active' : ''}`}><StarIcon /></li>)}
      </ul>
    </aside>

    <Accordion title="Description" description={rent.description} />
    <Accordion title="Équipement" description={rent.equipments.map(e => `- ${e}`).join('\n')} />
  </main>)
}
