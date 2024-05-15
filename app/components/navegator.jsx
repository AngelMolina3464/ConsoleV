import Link from "next/link"
import FilledBox from "./filledBox";

export default function Navegation() {
  return (
    <nav className="navContainer">
      <Link href={"/"}>Principal</Link>
      <Link href={"/interfaz"}>Interfaz</Link>
      <Link href={"/products"}>Productos</Link>
      <Link href={"/api"}>GetApi</Link>
    </nav>
  );
}
