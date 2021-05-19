import { withRouter } from "react-router-dom"
import Routes from "../../routes";

import './styles.scss';

function DashboardBody(props: any) {
  console.log(props);
  
  return (
    <div className="dashboard__body">
      <Routes />
    </div>
  )
} 

export default withRouter(DashboardBody);
