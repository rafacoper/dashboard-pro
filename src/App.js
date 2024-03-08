import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import MySidebar from "./scenes/global/Sidebar";
import { useState } from "react";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <MySidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setSidebar={setSidebar} />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
