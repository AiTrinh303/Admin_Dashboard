import'./topBox.scss'
import { topDealUsers } from '../../data.ts'

const TopBox = () => {
  return (
    <div className='topBox'>
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map (user => (
            <div className="listItem" key={user.id}>
                <div className="user">

                </div>
                <span className="amount">$</span>
            </div>
            )}
      </div>
    </div>
  )
}

export default TopBox
