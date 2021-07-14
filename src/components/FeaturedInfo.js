import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React from 'react'

const FeaturedInfo = ({title,amount,rate}) => {
    return (
        
            <div className="featuredItem">
                <span className="featuredTitle">{title}</span>
                <div className="moneyContainer">
                    <div className="money">{parseInt(amount).toLocaleString()} RWF</div>
                    <div className="rate">
                        {parseInt(rate).toLocaleString()} RWF {parseInt(rate) > 0 ? <ArrowUpward className="featuredIcon" /> : <ArrowDownward className="featuredIcon negative"/> } 
                     </div>
                </div>
                <span className="featuredSub">Compared to last Month</span>
            </div>
        
    )
}

export default FeaturedInfo
