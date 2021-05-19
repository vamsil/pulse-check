import { Link, withRouter } from "react-router-dom";

import './styles.scss';

function NavItem(props: any) {
  return (
    <div className="dashboard-side-nav-item">
      <Link to={props.to} className={props.active ? "active": ""}>
        {props.children}  
      </Link>
    </div>
  )
}

export default withRouter(NavItem);
