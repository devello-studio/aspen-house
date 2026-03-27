import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Programs } from "./components/pages/Programs";
import { GetInvolved } from "./components/pages/GetInvolved";
import { Contact } from "./components/pages/Contact";
import { UtahStatistics } from "./components/pages/UtahStatistics";
import { OurBoard } from "./components/pages/OurBoard";
import { ThistleFarms } from "./components/pages/ThistleFarms";
import { SpecialEvents } from "./components/pages/SpecialEvents";
import { Survivors } from "./components/pages/Survivors";
import { NotFound } from "./components/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "utah-statistics", Component: UtahStatistics },
      { path: "our-board", Component: OurBoard },
      { path: "survivors", Component: Survivors },
      { path: "thistle-farms", Component: ThistleFarms },
      { path: "special-events", Component: SpecialEvents },
      { path: "programs", Component: Programs },
      { path: "get-involved", Component: GetInvolved },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);