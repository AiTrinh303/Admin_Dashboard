
import './home.scss';
import TopBox from "../../components/topBox/TopBox";
import ChartBox from '../../components/chartBox/ChartBox';
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import BarChartBox from "../../components/barChartBox/BarChartBox";

import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";

const Home = () => {
  return (
    <div className='home'>
        <div className="box box1">
          <TopBox />
        </div>
        <div className="box box2"><ChartBox {...chartBoxUser} /></div>
        <div className="box box3"><ChartBox {...chartBoxProduct} /></div>
        <div className="box box4"><PieChartBox /></div>
        <div className="box box5"><ChartBox {...chartBoxConversion} /></div>
        <div className="box box6"><ChartBox {...chartBoxRevenue} /></div>
        <div className="box box7">Box7</div>
        <div className="box box8"><BarChartBox {...barChartBoxVisit} /></div>
        <div className="box box9">Box9</div>
    </div>
  )
}

export default Home
