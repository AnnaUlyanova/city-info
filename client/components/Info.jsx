import React from 'react'

import cities from '../../data/city-info.js'

export default React.createClass({

getInitialState() {
  return cities

},

    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-md-12">
                        <div id="info">
                          <p>{this.state.cities[0].info}</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
})
