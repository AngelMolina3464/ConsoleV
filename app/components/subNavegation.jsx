import Link from "next/link";
import FilledBox from "./filledBox";

export default function SubNavegation({
  root,
  arrayModules,
  titleSep,
  classColor,
}) {
  const pathRouting = root;

  const capitaliceString = (strLabel) => {
    return strLabel
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <>
      <nav className="navContainer">
        <FilledBox titleSep={titleSep} classColor={classColor} />
        {arrayModules.map((element) => (
          <>
            <Link href={pathRouting + `/${element}`}>
              {capitaliceString(element)}
            </Link>
          </>
        ))}
      </nav>
      <hr />
    </>
  );
}
