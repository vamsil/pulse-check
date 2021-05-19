import DashboardSideNav from "./components/dashboardSideNav";
import DashboardBody from "./components/dashboardBody";

import './styles.scss';

export default function Dashboard(props: any) {
  return (
    <div className="dashboard">
      <DashboardSideNav />
      <DashboardBody />
    </div>
  )
}
