interface Props{
    cartItemCount : number
}

const Navbar = ({cartItemCount}:Props) => {
  return (
    <div>Navbar: {cartItemCount}</div>
  )
}

export default Navbar