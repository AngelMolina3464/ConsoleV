import FilledBox from "./components/filledBox";
import SubNavegation from "./components/subNavegation";

export default function NotFound() {
  return (
    <div>
      <p>
        <FilledBox titleSep={"Error 404 ❌"} classColor={"redMetalic"} />
      </p>
      <strong>Sin Respuesta en el Servidor</strong>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        quis tempora vitae molestiae culpa rem corporis nulla earum fugit?
        Perspiciatis id ipsum laborum necessitatibus et maiores harum tenetur
        excepturi quae?
      </p>
    </div>
  );
}
