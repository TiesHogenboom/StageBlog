import LeftPane from "../LeftPane/LeftPane";
import RightPane from "../RightPane/RightPane";
import "./DashboardMiddle.css"

const DashboardMiddle = () => {
    return(
    <article className="dashboardMiddle"><LeftPane/><RightPane/></article>
        );
}

export default DashboardMiddle;