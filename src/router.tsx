import { createBrowserRouter } from "react-router-dom";
import { Root } from "./layouts/Root";
import { EditorPage } from "./pages/EditorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <EditorPage />,
      },
    ],
  },
]);
