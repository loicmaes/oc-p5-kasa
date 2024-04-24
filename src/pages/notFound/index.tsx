import TopNavigation from "../../components/navigation/topNavigation/TopNavigation.tsx";
import BottomCard from "../../components/navigation/bottomCard/BottomCard.tsx";
import {NavLink} from "react-router-dom";
import './style.sass'

export default function Index () {
  return <>
    <TopNavigation />

    <main className="page nf">
      <h1 className="nf--title">404</h1>
      <h2 className="nf--subtitle">Oups! La page que vous demandez n'existe pas.</h2>
      <NavLink to="/" className="nf--back">Retourner sur la page d’accueil</NavLink>
    </main>

    <BottomCard />
  </>
}
