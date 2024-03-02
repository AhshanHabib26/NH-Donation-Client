import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import {
  Database,
  Home,
  LayoutDashboard,
  Menu,
  SquarePen,
} from "lucide-react";
import { useAppSelector } from "../../redux/hooks";
import { useCureentUser } from "../../redux/features/auth/authSlice";
import { NavLink } from "react-router-dom";

interface IUser {
  name?: string;
}

export default function DashboardMobileMenu() {
  const [opened, { open, close }] = useDisclosure(false);
  const user = useAppSelector(useCureentUser);

  return (
    <div className=" bg-[#191F2D] py-3 text-white px-8 lg:hidden md:block sm:block ">
      <Drawer
        size="xs"
        opened={opened}
        onClose={close}
        withCloseButton={false}
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        transitionProps={{
          transition: "rotate-left",
          duration: 150,
          timingFunction: "linear",
        }}
      >
        <nav className="bg-[#191F2D] h-screen rounded-lg p-4">
          <div
            className={`flex items-center p-2  shadow text-white  rounded-lg`}
          >
            <LayoutDashboard size={18} />
            <NavLink className="text-md  ml-1" to="/dashboard">
              Dashboard
            </NavLink>
          </div>
          <div
            className={`flex items-center p-2  shadow text-white   rounded-lg mt-3`}
          >
            <Database size={18} />
            <NavLink className="text-md ml-1" to="/dashboard/winter-clothes">
              Winter Clothes
            </NavLink>
          </div>
          <div
            className={`flex items-center p-2  shadow text-white   rounded-lg mt-3`}
          >
            <SquarePen size={18} />
            <NavLink
              className="text-md ml-1"
              to="/dashboard/create-winter-clothes"
            >
              Create Clothes
            </NavLink>
          </div>

          <div
            className={`flex items-center p-2  shadow text-white   rounded-lg mt-3`}
          >
            <Home size={18} />
            <NavLink className="text-md ml-1" to="/">
              Back To Home
            </NavLink>
          </div>
        </nav>
      </Drawer>

      <div className=" flex items-center justify-between">
        <div>
          <Button onClick={open}>
            <Menu />
          </Button>
        </div>
        <div>
          <h1>Hello, {(user as IUser)?.name ?? "Guest"}!</h1>
        </div>
      </div>
    </div>
  );
}
