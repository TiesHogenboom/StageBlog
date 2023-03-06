import DashboardMiddle from "../DashboardMiddle/DashbordMiddle";
import Head from "../Head/Head"
import "./Dashboard.css";

const Dashboard = () => {
    return(
    <article className="dashboard"><Head/><DashboardMiddle/></article>
        );
}

export default Dashboard;