import './style.sass'

type Props = {
  title?: string,
  banner?: string
}

export default function LocationCard ({ title, banner }: Props) {
  return <article className="card">
    {banner && <img src={banner} alt="" />}

    <div className="card--overlay">
      <h2 className="card--title">{title ?? 'Titre de la location'}</h2>
    </div>
  </article>
}
