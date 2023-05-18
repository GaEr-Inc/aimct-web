import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { HeaderMenuColored } from "./components/Header";
import { HeaderLinks } from "./constans";
import { FooterLinks, FooterLinksData } from "./components/Footer";

function App() {

  return (
    <AppShell
      header={<HeaderMenuColored links={HeaderLinks} />}
      styles={{
        main: {
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          height: "100%",

        }
      }}
      footer={<FooterLinks data={FooterLinksData.data} />}
    >
      <Outlet />
    </AppShell>
  );
}

export default App;
