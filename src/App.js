import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Sidebar } from './components/Sidebar';
import { Topbar } from './components/Topbar';
import { ColorModeContent, useMode } from './theme';
import { Team } from './pages/Team';
import { Contacts } from './pages/Contacts';
import { Invocies } from './pages/Invoices';
import { Form } from './pages/Form';
import { Calendar } from './pages/Calendar';
import { Faq } from './pages/Faq';
import { Bar } from './pages/Bar';
import { Line } from './pages/Line';
import { Pie } from './pages/Pie';
import { Geography } from './pages/Geography';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContent.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invocies />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContent.Provider>
  );
}

export default App;
