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
                            <h5>This is Info Block</h5>
                              <p>{this.state.cities[0].info}</p>
                            <button type="button" className="btn btn-primary btn-block my-btn">Learn more..</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
})
