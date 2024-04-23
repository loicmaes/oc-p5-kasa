import './style.sass'

type Props = {
  tags: string[]
}

export default function TagList ({ tags }: Props) {
  return <ul className="tags">
    {tags.length && tags.map((tag: string) => <li className="tags--item">{tag}</li>)}
  </ul>
}
