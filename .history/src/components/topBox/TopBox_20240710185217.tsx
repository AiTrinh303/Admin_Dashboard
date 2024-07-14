import'./topBox.scss'
import { topDealUsers } from '../../data.ts'

const TopBox = () => {
  return (
    <div className='topBox'>
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map }
      </div>
    </div>
  )
}

export default TopBox
