import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './components/dashboard'

export default function Routes() {
  return (
    <Switch>
      <Route path="/dashboard"><Dashboard /></Route>
      <Route exact path="/"><Redirect to="/dashboard"/></Route>
    </Switch>
  )
}
