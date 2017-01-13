import React from 'react'


export default React.createClass({

  render () {
    const { info, question } = this.props
    return (
      <div className="col-md-3">
        <h2 className="desc">{info[question]}</h2>
        <img src={this.props.info.cityImage} width="250px" height="200px"/>
        <h2>{this.props.info.id}</h2>
      </div>
    )
  }
})
