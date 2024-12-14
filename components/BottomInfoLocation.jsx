// import React, { Component } from 'react';
// import { getDetailByLatLngAction, getDetailAroundPlace } from '../redux/actions/place';
// import { setBoxVisibleAction, setPopupRightClick, setRedMarkerAction } from "../redux/actions/boxVisble"
// import { Card, Tooltip } from 'antd';
// import { connect } from 'react-redux';
// import { CloseCircleFilled } from '@ant-design/icons';
// import { clearSearchAroundAction } from '../redux/actions/search';

// class BottomInfoLocation extends Component {
//   onClick = () => {
//     if (!this.props.isMarkerAround) {
//       const latLng = {
//         latitude: this.props.lat,
//         longitude: this.props.lng
//       }
//       this.props.dispatch(getDetailByLatLngAction(latLng));
//     } else {
//       this.props.dispatch(getDetailAroundPlace(this.props.place_id))
//     }
//     this.props.changeVisibleBottomInfo(false);
//     this.props.dispatch(setBoxVisibleAction('info'));
//     this.props.dispatch(clearSearchAroundAction());
//     this.props.dispatch(setPopupRightClick(false));
//     this.props.removeMarker();
//   }

//   onClose = (e) => {
//     e.stopPropagation();
//     this.props.changeVisibleBottomInfo(false);
//     this.props.dispatch(clearSearchAroundAction());
//     this.props.removeMarker();
//   }

//   render() {
//     const { name, lat, lng, address } = this.props;
//     const title = <Tooltip title={<span onClick={(e) => e.stopPropagation()}>{name}</span>}>
//       <span>{name}</span>
//     </Tooltip>

//     return (
//       <div className='bottom-info-location-div'>
//         <Card title={title}
//           className="bottom-info-location"
//           onClick={() => this.onClick()}
//           headStyle={{ padding: '5px 16px', margin: 0, color: '#000000' }}
//           bodyStyle={{ padding: '12px 16px', margin: 0, color: '#595959' }}
//           extra={<CloseCircleFilled
//             style={{ color: '#000000', fontSize: 21, zIndex: 9999 }}
//             onClick={this.onClose}
//           />}
//         >
//           <Tooltip placement="bottom" title={<span onClick={(e) => e.stopPropagation()}>{address}</span>}>
//             <p className="address-mini-info">{address}</p>
//           </Tooltip>
//           <p
//             className="coord-mini-info"
//             onClick={(e) => e.stopPropagation()}
//             style={{ cursor: "text" }}
//           >
//             {`${lat.toFixed(5)},${lng.toFixed(5)}`}
//           </p>
//         </Card>
//       </div>
//     )
//   }
// }

// export default connect(null)(BottomInfoLocation);





// ---------------------------------------------------------------//
import React from "react";
import { connect } from "react-redux";
import { Card, Tooltip } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";
import {
  getDetailByLatLngAction,
  getDetailAroundPlace,
} from "../redux/actions/place";
import {
  setBoxVisibleAction,
  setPopupRightClick,
  setRedMarkerAction,
} from "../redux/actions/boxVisble";
import { clearSearchAroundAction } from "../redux/actions/search";

const BottomInfoLocation = (props) => {
  const onClick = () => {
    const {
      dispatch,
      isMarkerAround,
      lat,
      lng,
      place_id,
      changeVisibleBottomInfo,
      removeMarker,
    } = props;

    if (!isMarkerAround) {
      const latLng = {
        latitude: lat,
        longitude: lng,
      };
      dispatch(getDetailByLatLngAction(latLng));
    } else {
      dispatch(getDetailAroundPlace(place_id));
    }
    changeVisibleBottomInfo(false);
    dispatch(setBoxVisibleAction("info"));
    dispatch(clearSearchAroundAction());
    dispatch(setPopupRightClick(false));
    removeMarker();
  };

  const onClose = (e) => {
    e.stopPropagation();
    const { changeVisibleBottomInfo, dispatch, removeMarker } = props;
    changeVisibleBottomInfo(false);
    dispatch(clearSearchAroundAction());
    removeMarker();
  };

  const { title, address, lat, lng } = props;

  return (
    <div className="bottom-info-location-div">
      <Card
        title={title}
        className="bottom-info-location"
        onClick={onClick}
        headStyle={{ padding: "5px 16px", margin: 0, color: "#000000" }}
        bodyStyle={{ padding: "12px 16px", margin: 0, color: "#595959" }}
        extra={
          <CloseCircleFilled
            style={{ color: "#000000", fontSize: 21, zIndex: 9999 }}
            onClick={onClose}
          />
        }
      >
        <Tooltip
          placement="bottom"
          title={<span onClick={(e) => e.stopPropagation()}>{address}</span>}
        >
          <p className="address-mini-info">{address}</p>
        </Tooltip>
        <p
          className="coord-mini-info"
          onClick={(e) => e.stopPropagation()}
          style={{ cursor: "text" }}
        >
          {`${lat.toFixed(5)},${lng.toFixed(5)}`}
        </p>
      </Card>
    </div>
  );
};

export default connect(null)(BottomInfoLocation);
