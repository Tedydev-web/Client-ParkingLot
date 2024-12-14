// import React from 'react';

// class MenuRightClick extends React.Component {

//   returnMenu = () => {
//     switch (this.props.type_popup) {
//       case "popupFromPlace":
//       case "popupToPlace":
//         return <>
//           <span className="popup-content delete-location" >Xoá địa điểm này</span>
//           <span className="popup-content what-is-navigation">Đây là đâu ?</span>
//         </>
//       case "around":
//         return <span className="popup-content to-around-place">Đường đi tới đây</span>
//       case "popupCurrentPlace":
//         return <>
//           <span className="popup-content from-here">Dẫn đường từ đây</span>
//           <span className="popup-content to-here">Dẫn đường tới đây</span>
//           <span className="popup-content search-around">Tìm kiếm xung quanh</span>
//         </>
//       default:
//         return <>
//           <span className="popup-content what-is-this">Đây là đâu ?</span>
//           <span className="popup-content from-here">Dẫn đường từ đây</span>
//           <span className="popup-content to-here">Dẫn đường tới đây</span>
//           <span className="popup-content search-around">Tìm kiếm xung quanh</span>
//         </>
//     }
//   }

//   render() {
//     return <div className="ant-popover-inner" role="tooltip" style={{ minWidth: 196, zIndex: 9999 }}>
//       <div className="ant-popover-title">
//         <span className="popup-title">Thao tác trên địa điểm</span>
//       </div>
//       <div className="ant-popover-inner-content menu-right-click" style={{ minWidth: 196, zIndex: 9999 }}>
//         {this.returnMenu()}
//       </div>
//     </div>
//   }
// }

// export default (MenuRightClick)




// ------------------------------------------------------------------------------------



import React from 'react';

const MenuRightClick = (props) => {
  const returnMenu = () => {
    switch (props.type_popup) {
      case "popupFromPlace":
      case "popupToPlace":
        return (
          <>
            <span className="popup-content delete-location">Xoá địa điểm này</span>
            <span className="popup-content what-is-navigation">Đây là đâu ?</span>
          </>
        );
      case "around":
        return <span className="popup-content to-around-place">Đường đi tới đây</span>;
      case "popupCurrentPlace":
        return (
          <>
            <span className="popup-content from-here">Dẫn đường từ đây</span>
            <span className="popup-content to-here">Dẫn đường tới đây</span>
            <span className="popup-content search-around">Tìm kiếm xung quanh</span>
          </>
        );
      default:
        return (
          <>
            <span className="popup-content what-is-this">Đây là đâu ?</span>
            <span className="popup-content from-here">Dẫn đường từ đây</span>
            <span className="popup-content to-here">Dẫn đường tới đây</span>
            <span className="popup-content search-around">Tìm kiếm xung quanh</span>
          </>
        );
    }
  };

  return <div>{returnMenu()}</div>;
};

export default MenuRightClick;