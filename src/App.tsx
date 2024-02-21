import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { Toaster } from "react-hot-toast";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import "sweetalert2/dist/sweetalert2.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function App() {
  return (
    <>
      <MantineProvider>
        <RouterProvider router={router} />
        <Toaster position="top-center" reverseOrder={false} />
      </MantineProvider>
    </>
  );
}

export default App;
