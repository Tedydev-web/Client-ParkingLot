import React, { Component } from 'react';
import { EnvironmentFilled } from '@ant-design/icons';

// class Marker extends Component {

//   render() {
//     let marker = null;
//     if (this.props.type === 'around') {
//       if (this.props.place.id !== this.props.place_select?.id) {
//         marker = <EnvironmentFilled
//           style={{ fontSize: this.props.size || 28, color: '#33CC33', cursor: 'pointer' }}
//           id={this.props.id}
//         />
//       } else {
//         marker = <EnvironmentFilled
//           style={{ fontSize: this.props.size || 28, color: '#1890ff', cursor: 'pointer' }}
//           id={this.props.id}
//         />
//       }
//     } else if (this.props.type === 'center') {
//       marker = <EnvironmentFilled
//         style={{ fontSize: this.props.size || 28, color: '#CF1322', cursor: 'pointer' }}
//         id={this.props.id}
//       >
//       </EnvironmentFilled>
//     } else {
//       marker = <EnvironmentFilled
//         style={{ fontSize: this.props.size || 28, color: '#CF1322' }}
//         id={this.props.id}
//       />
//     }
//     // const return_marker = <>
//     //   {this.state.popupVisible && typeMarkerHasTooltip.indexOf(this.props.type) >= 0 && <Popup
//     //     latitude={this.props.latitude}
//     //     longitude={this.props.longitude}
//     //     closeButton={false}
//     //     closeOnClick={false}
//     //     captureClick={true}
//     //     anchor="bottom"
//     //     offsetLeft={0}
//     //     offsetTop={-38}
//     //     className="tooltip-marker"
//     //   >
//     //     <div className="ant-tooltip-inner">
//     //       {this.props.name}
//     //     </div>
//     //   </Popup>
//     //   }
//     //   {marker}
//     // </>
//     return marker;
//   }
// }

// export default Marker

// -------------------------------------------------------------------------------------------------------







// -------------------------------------------------------------------------------------------------------





const Marker = (props) => {
  let marker = null;

  if (props.type === 'around') {
    if (props.place.id !== props.place_select?.id) {
      marker = (
        <EnvironmentFilled
          style={{ fontSize: props.size || 28, color: '#33CC33', cursor: 'pointer' }}
          id={props.id}
        />
      );
    } else {
      marker = (
        <EnvironmentFilled
          style={{ fontSize: props.size || 28, color: '#1890ff', cursor: 'pointer' }}
          id={props.id}
        />
      );
    }
  } else if (props.type === 'center') {
    marker = (
      <EnvironmentFilled
        style={{ fontSize: props.size || 28, color: '#CF1322', cursor: 'pointer' }}
        id={props.id}
      />
    );
  } else {
    marker = (
      <EnvironmentFilled
        style={{ fontSize: props.size || 28, color: '#CF1322' }}
        id={props.id}
      />
    );
  }

  return marker;
};

export default Marker;