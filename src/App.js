import React, {useEffect} from "react";
import Sidebar from "./components/Sibar";
import "./App.scss"
import { Switch, Route, useHistory } from "react-router-dom";
import Deals from "./components/Deals";
import Contacts from "./components/Contacts";
import Employees from "./components/Employees";
import Branch from "./components/Employees";
import Analytics from "./components/Analytics";
import Settings from "./components/Settings";

const App = () => {
  let history = useHistory();

  useEffect(() => {
      history.push("/deals");
  }, [history]);

  return(
    <>
    <Sidebar />
    <Switch>
      <Route path="/deals" component={Deals} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/employees" component={Employees} />
      <Route path="/branch" component={Branch} />
      <Route path="/analytics" component={Analytics} />
      <Route path="/settings" component={Settings} />
    </Switch>
    </>
  )
}

export default App