"use client";

import MyProject from "./project/MyProject";
import AboutMe from "./components/AboutMe";
import Cerificatition from "./components/Cerificatition";
import { HomeSection} from './components/'


export default function Page() {
    return (<>
    <HomeSection />
      <AboutMe />
      <MyProject />
      <Cerificatition />
      </>
  );
}
