import React from 'react';

class HouseMarker extends React.Component {
  static get propTypes() {
    return {
      width: React.PropTypes.number,
      height: React.PropTypes.number,
      is_hover: React.PropTypes.boolean
    };
  }
  render() {
    const style = require('./HouseMarker.scss');
    const houseMarkerCustomStyle = {
      width: this.props.width,
      height: this.props.height,
      lineHeight: this.props.height
    };
    const markerClass = this.props.is_hover ? style.houseMarkerOuter + " " + style.houseMarkerHover : style.houseMarkerOuter
    console.log("hey:"+ this.props.is_hover)
    return (
      <div className={style.mainZone}>
        <span style={{width: houseMarkerCustomStyle.width+"px",
                     height: houseMarkerCustomStyle.height+"px"}} className={markerClass}>
          <span style={{width: (houseMarkerCustomStyle.width - 8) + "px",
                        height: (houseMarkerCustomStyle.height - 8) + "px",
                        lineHeight: houseMarkerCustomStyle.lineHeight}} className={style.houseMarkerInner}></span>
        </span>
      </div>
    );
  }
}

export default HouseMarker;
