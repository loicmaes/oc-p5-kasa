import HomeBanner from "./homeBanner";
import LocationGrid from "./locationGrid";
import './style.sass'

export default function Home () {
  return <main className="page home">
    <HomeBanner />
    <LocationGrid />
  </main>
}
