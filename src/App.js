import "./App.css";
import { Button } from "react-bootstrap";
import Entry from "./page/entry/Entry.page";
import DefaultLayout from "./layout/DefaultLayout";
import Dashboard from "./page/dashboard/Dashboard.page";
import AddTicket from "./page/new-ticket/AddTicket.page";
function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        <AddTicket />
      </DefaultLayout>
    </div>
  );
}

export default App;
