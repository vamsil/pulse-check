import { Switch, Route, Redirect } from 'react-router-dom'
import DatabaseDashboard from '../databaseDashboard'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/dashboard/session/session1"><div>Session 1</div></Route>
      <Route exact path="/dashboard/session/session2"><div>Session 2</div></Route>
      <Route exact path="/dashboard/session/session3"><div>Session 3</div></Route>
      <Route exact path="/dashboard/session"><Redirect to="/dashboard/session/session1"/></Route>
      <Route exact path="/dashboard/database/backup"><div>Backup</div></Route>
      <Route exact path="/dashboard/database/account"><div>Account Information</div></Route>
      <Route exact path="/dashboard/database/dashboard"><DatabaseDashboard /></Route>
      <Route exact path="/dashboard/database"><Redirect to="/dashboard/database/dashboard"/></Route>
      <Route exact path="/dashboard"><Redirect to="/dashboard/database/dashboard" /></Route>
    </Switch>
  )
}
