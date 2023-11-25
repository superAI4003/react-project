import "./App.css";
import { Button } from "react-bootstrap";
import Entry from "./page/entry/Entry.page";
import DefaultLayout from "./layout/DefaultLayout";
import Dashboard from "./page/dashboard/Dashboard.page";
import AddTicket from "./page/new-ticket/AddTicket.page";
import TicketLists from "./page/ticket-listing/TicketLists.page";
import Ticket from "./page/ticket/Ticket.page";
import PrivateRoute from "./components/private-route/PrivateRoute.comp";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  LinkContainer,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Entry />} />
        </Routes>
        <DefaultLayout>
          <Routes>
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/add-ticket"
              element={
                <PrivateRoute>
                  <AddTicket />
                </PrivateRoute>
              }
            />
            <Route
              path="tickets"
              element={
                <PrivateRoute>
                  <TicketLists />
                </PrivateRoute>
              }
            />
            <Route
              path="ticket/:tId"
              element={
                <PrivateRoute>
                  <Ticket />
                </PrivateRoute>
              }
            />
          </Routes>
        </DefaultLayout>
      </Router>
    </div>
  );
}

export default App;
