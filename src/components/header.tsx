type HeaderProps = {
  year: number
}

const Header = ({ year }: HeaderProps) => {
  return (
    <header className="flex justify-between items-center text-xl">
      <div className="text-stone-700 font-semibold"> ato.</div>
      <div className="text-stone-500">{year}</div>
    </header>
  )
}

export default Header
