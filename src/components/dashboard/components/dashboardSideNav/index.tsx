import SideNav from "../../../common/sideNav";
import { Accordion, AccordionTab } from 'primereact/accordion';
import NavItem from "../navItem";

import './styles.scss';
import { withRouter } from "react-router-dom";

function DashboardSideNav(props: any) {
  return (
    <SideNav className="dashboard-side-nav">
      <Accordion>
        <AccordionTab header="Database Information" contentClassName="dashboard-side-nav-content">
          <NavItem to="/pulseCheck/database/dashboard" active={props.location.pathname === "/dashboard/database/dashboard"}>Dashboard</NavItem>
          <NavItem to="database/account" active={props.location.pathname === "/dashboard/database/account"}>Account Information</NavItem>
          <NavItem to="database/backup" active={props.location.pathname === "/dashboard/database/backup"}>Backup Utilization</NavItem>
        </AccordionTab>
        <AccordionTab header="Sessions" contentClassName="dashboard-side-nav-content">
          <NavItem to="/pulseCheck/dashboard/session/session1" active={props.location.pathname === "/dashboard/session/session1"}>Session 1</NavItem>
          <NavItem to="/dashboard/session/session2" active={props.location.pathname === "/dashboard/session/session2"}>Session 2</NavItem>
          <NavItem to="/dashboard/session/session3" active={props.location.pathname === "/dashboard/session/session3"}>Session 3</NavItem>
        </AccordionTab>

      </Accordion>
    </SideNav>
  )
}

export default withRouter(DashboardSideNav);
