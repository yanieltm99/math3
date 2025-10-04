import { Navbar } from "@/components/NavBar";
import { Outlet, createRootRoute } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />

      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});
