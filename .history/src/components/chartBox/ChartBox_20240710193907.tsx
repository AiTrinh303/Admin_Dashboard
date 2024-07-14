import "./chartBox.scss";

const ChartBox = () => {
  return (
    <div className="chartBox">
        <div className="boxInfo">
            <div className="title">
                <img src="/user.svg" alt="" />  
                <span>Total Users</span>
            </div>
            <h1>11</h1>
        </div>
        <div className="chartInfo"></div>
    </div>
  )
}

export default ChartBox
