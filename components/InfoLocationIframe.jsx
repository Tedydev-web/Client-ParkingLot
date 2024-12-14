import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { message, Tooltip } from 'antd';
import imgArrow from '../static/images/arrow.png';
import { connect } from 'react-redux';
import images from '../utils/images';

const InfoLocationIframe = ({ place, fromPlace, toPlace }, props) => {
	const my_location = useSelector((state) => state.placeReducer.my_location);
	const openNewTab = () => {
		window.open(`${window.location.origin}${window.location.pathname}?location=${place ? place.geometry.location.lat : ''},${place ? place.geometry.location.lng : ''}`);
	};
	const openNewTab2 = () => {
		window.open(`${window.location.origin}${window.location.pathname}?direction=${my_location ? my_location.latitude : ''}%2C${my_location ? my_location.longitude : ''}%26${place ? place.geometry.location.lat : ''}%2C${place ? place.geometry.location.lng : ''}`);
	};
	return (
		<div>
			{place && (
				<div className="info-iframe">
					<div className="info-iframe-text">
						<div className="title">{place ? place.name : ''}</div>
						<div className="address">{place ? place.name + (place.formatted_address != '' ? ' - ' + place.formatted_address : '') : ''}</div>
						<div
							className="big-map"
							onClick={openNewTab}>
							Xem bản đồ lớn hơn
						</div>
					</div>
					<div
						className="iframe-navigation"
						onClick={openNewTab2}>
						<Tooltip
							color="#ffff"
							title={<span style={{ fontSize: 12, fontWeight: 'initial', color: 'black' }}>Nhận chỉ đường đến vị trí này trên Parking Lot - Live Map.</span>}>
							<img
								src={imgArrow}
								style={{ width: 45 }}
							/>
							<div style={{ color: '#1A73E8', fontSize: 12, marginTop: 5 }}>Chỉ đường</div>
						</Tooltip>
					</div>
				</div>
			)}
			{!place && (
				<div className="direction-iframe">
					<div className="direction-iframe-image">
						<img
							src={images.start_location_grey800_18dp}
							alt=""
						/>
						<img
							src={images.roaroute_3dots_grey650_24dpd_1}
							alt=""
						/>
						<img
							src={images.place_outline_red600_18dp}
							alt=""
						/>
					</div>
					<div className="direction-iframe-text">
						<span>{fromPlace ? fromPlace.name : ''}</span>
						<span>{toPlace ? toPlace.name : ''}</span>
						<span>Tùy chọn khác</span>
					</div>
				</div>
			)}
		</div>
	);
};
const mapStateToProps = (state) => ({
	my_location: state.placeReducer.my_location,
});

export default connect(mapStateToProps)(InfoLocationIframe);
// export default InfoLocationIframe;
