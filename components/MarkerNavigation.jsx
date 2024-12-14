import React, { Component } from 'react';
import { Tooltip } from 'antd';
import images from '../utils/images';

// class MarkerNavigation extends Component {
//   render() {
//     return (
//       <Tooltip title={this.props.name}>
//         {
//           this.props.type === "start" ?
//             <div {...this.props} className='marker-start'
//             /> :
//             <div {...this.props} className='marker-end'
//             />
//         }
//       </Tooltip>
//     )
//   }
// }

// export default MarkerNavigation;



// -----------------------------------------------------------------------------------------


const MarkerNavigation = (props) => {
  return (
    <Tooltip title={props.name}>
      {/* <div {...props} className={props.type === "start" ? 'marker-start' : 'marker-end'} /> */}
      {props.type === "start" &&
        <div className='marker-start'>
          <img src={images.button} style={{ width: 12 }} alt="" />
        </div>
      }
      {props.type === "end" &&
        <div className='marker-end'>
          <div>
            <img src={images.marker} alt="" />
          </div>
        </div>
      }
      {props.type === "histories" &&
        <div className='marker-histories'>
          <div>
            <img src={images.marker} alt="" />
          </div>
        </div>
      }
      {props.type === "details" &&
        <div className='marker-details'>
        </div>
      }
    </Tooltip>
  );
};

export default MarkerNavigation;
