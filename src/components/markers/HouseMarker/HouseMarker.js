import React from 'react';
import './HouseMarker.css';

class HouseMarker extends React.Component {
  static get propTypes() {
    return {
      width: React.PropTypes.number,
      height: React.PropTypes.number,
      is_hover: React.PropTypes.bool
    };
  }
  render() {
    const houseMarkerCustomStyle = {
      width: this.props.width,
      height: this.props.height,
      lineHeight: this.props.height
    };
    const markerClass = this.props.is_hover ? 'HouseMarker-houseMarkerOuter HouseMarker-houseMarkerHover' : 'HouseMarker-houseMarkerOuter'

    return (
      <div className={'HouseMarker-mainZone'}>
        <span style={{width: houseMarkerCustomStyle.width+"px",
                     height: houseMarkerCustomStyle.height+"px"}} className={markerClass}>
          <span style={{width: (houseMarkerCustomStyle.width - 8) + "px",
                        height: (houseMarkerCustomStyle.height - 8) + "px",
                        lineHeight: houseMarkerCustomStyle.lineHeight}} className={'HouseMarker-houseMarkerInner'}></span>
        </span>
      </div>
    );
  }
}

export default HouseMarker;
