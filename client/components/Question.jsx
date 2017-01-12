import React from 'react'

export default React.createClass({
    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-md-12">
                        <h2 className='text-center'>What's the
                            <span className="dropdown">
                                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">_________
                                    <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li>Food</li>
                                    <li>Weather</li>
                                    <li>Currency</li>
                                    <li>Language</li>
                                </ul>
                            </span>
                            like?</h2>
                    </div>
                </div>
            </div>
        )
    }
})
