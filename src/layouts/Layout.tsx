import {Outlet} from "react-router-dom";
import TopNavigation from "../components/navigation/topNavigation/TopNavigation.tsx";
import BottomCard from "../components/navigation/bottomCard/BottomCard.tsx";

export default function Layout () {
  return <>
    <TopNavigation />
    <Outlet />
    <BottomCard />
  </>
}
