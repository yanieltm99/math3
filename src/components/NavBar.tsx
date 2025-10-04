import { Link } from "@tanstack/react-router";
import { ThemeSwitcher } from "./ThemeSwitcher";
import FontSizeAdjuster from "./FontSizeAdjuster";

export const Navbar = () => {
  // const location = useLocation();

  return (
    <nav className="fixed left-0 top-0 z-20 mx-auto flex h-[90px] w-full items-center bg-secondary-background/80 backdrop-blur-md px-5">
      <div className="mx-auto flex w-[1300px] text-foreground max-w-full items-center justify-between">
        <div className="flex items-center xl:gap-10 gap-10">
          <Link
            className="text-[22px] size-8 min-h-4 rounded-base flex bg-main text-main-foreground border-2 border-black items-center justify-center font-heading"
            to="/"
          >
            M
            {/* <img src={logo} alt="Logo" className="size-12 object-center" /> */}
          </Link>
          {/* <div className="items-center text-base font-base xl:gap-10 lg:flex gap-10 hidden"> */}
          {/*   <Link */}
          {/*     className={`relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:bg-main after:transition-transform after:duration-300 after:scale-x-0 after:bg-main hover:after:scale-x-100`} */}
          {/*     to="/" */}
          {/*     activeProps={{ */}
          {/*       className: "font-bold text-main after:scale-x-100", */}
          {/*     }} */}
          {/*     activeOptions={{ exact: true }} */}
          {/*   > */}
          {/*     Inicio */}
          {/*   </Link> */}
          {/**/}
          {/*   <Link */}
          {/*     className={`relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:bg-main after:transition-transform after:duration-300 after:scale-x-0 hover:after:scale-x-100   ${location.pathname.startsWith("/exercises") ? "font-bold text-main after:scale-x-100" : ""}`} */}
          {/*     to="/exercises" */}
          {/*     activeOptions={{ exact: true }} */}
          {/*   > */}
          {/*     Ejercicios */}
          {/*   </Link> */}
          {/* </div> */}
        </div>

        <div className="flex items-center gap-4">
          {/* <Search /> */}
          <div className="flex items-center justify-end gap-4">
            <FontSizeAdjuster />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};
