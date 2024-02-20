import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { Toaster } from "react-hot-toast";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

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
