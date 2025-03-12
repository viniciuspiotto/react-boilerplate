import { Outlet } from "react-router";

function DefaultLayout() {
  return (
    <div>
      Header
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
