import Display from "@/app/entities/Display";
import useClientBounding from "../../hooks/clientBounding";
import useMenuToggling from "@/app/hooks/menuToggling";

interface NavLink {
  label: string;
  value: string;
}

const nav_links: NavLink[] = [
  { label: "home", value: "Home" },
  { label: "about-me", value: "About Me" },
  { label: "project", value: "Project" },
  { label: "certification", value: "Certification" },
  { label: "contact", value: "Contact" },
];

const ListItems = ({ setDisplay }: Display) => {
  const { setCurrentBoundingClient, currentBoundingClient } =
    useClientBounding();
  const { setOpen } = useMenuToggling();

  return nav_links.map((navLink) => (
    <li
      className={clientBoundingStyle(currentBoundingClient, navLink)}
      onClick={() => {
        setDisplay("hidden");
        setOpen(false);
        const element = document.getElementById(navLink.label);
        element?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        setTimeout(() => {
          setCurrentBoundingClient(navLink.label);
        }, 1000);
      }}
    >
      {navLink.value}
    </li>
  ));
};

const clientBoundingStyle = (currentBoundingClient: string, navLink: NavLink) =>
  `font-bold text-center pb-1 px-4 md:py-2 md:my-2 ${
    currentBoundingClient === navLink.label
      ? "border-b-2 border-b-accentColor"
      : ""
  }`;

export default ListItems;
