import logo from "../../../assets/images/logo.png";
import Button from "../Button";
import avatar from "../../../assets/images/avatar.png";
export default function NavBar() {
  const handleBecomeBetaButton = () => {
    console.log("My progile");
  };
  return (
    <div className="">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">
                gomonji
              </span>
              <img
                className="h-10 w-auto"
                src={logo}
                alt="logo"
              />
            </a>
          </div>
          <Button
            onClick={handleBecomeBetaButton}
            label="Usha"
            variant={"white"}
            avatar={avatar}
            borderRadius="2rem"
          />
        </nav>
        <div className="fixed inset-0 z-50" />
      </header>
    </div>
  );
}
