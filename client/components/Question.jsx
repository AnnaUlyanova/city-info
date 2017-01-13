import React from 'react'


export default React.createClass({


    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-md-12 question">
                        <h2 className='text-center select'>What's the

                            <div className="select">
                                <select onChange={this.props.changeOption}>
                                    <option value="food">Food</option>
                                    <option value="weather">Weather</option>
                                    <option value="currency">Currency</option>
                                    <option value="hello">Language</option>
                                </select>
                              </div>

                            like?</h2>


                    </div>
                </div>
            </div>
        )
    }

})
