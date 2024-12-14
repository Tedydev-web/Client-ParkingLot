import React, { useEffect, useMemo, useState } from 'react';
import SearchingBox from './SearchingBox';
import { useTranslation } from 'react-i18next';
import { InfoCircleOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import imgRoad1 from '../static/images/road_1.png';
import { connect } from 'react-redux';
import { getDetailIdService, getDetailLatLngService } from '../redux/sagas/placeSaga';
import { getDetailByIdAction } from '../redux/actions/place';
import { setBoxVisibleAction } from '../redux/actions/boxVisble';
import { getImageByType } from '../utils/image_type_location';
import images from '../utils/images';
import { setSearchLocalStorage } from '../redux/actions/search';
import { setRedMarkerAction } from '../redux/actions/boxVisble';
import ReactDOMServer from 'react-dom/server';
import MarkerNavigation from './MarkerNavigation';

const SearchHistories = (props) => {
	const { t } = useTranslation('common');
	const [searchHistory, setSearchHistory] = useState(JSON.parse(localStorage.getItem('search_history')).reverse());
	const [isCheckAll, setIsCheckAll] = useState(false);
	const [filteredHistory, setFilteredHistory] = useState(searchHistory);
	const [numberCheck, setNumberCheck] = useState('');
	// State để lưu trữ trạng thái của các checkbox, khởi tạo với tất cả là false
	const [checkedItems, setCheckedItems] = useState(() =>
		searchHistory.reduce((acc, item) => {
			acc[item.place_id] = false;
			return acc;
		}, {})
	);

	useEffect(() => {
		setFilteredHistory(searchHistory);
		props.dispatch(setSearchLocalStorage(JSON.parse(localStorage.getItem('search_history'))));
	}, [searchHistory]);
	useEffect(() => {
		if (Object.values(checkedItems).filter((value) => value === true).length === 0) {
			setIsCheckAll(false);
		} else {
			setIsCheckAll(true);
		}
		setNumberCheck(Object.values(checkedItems).filter((value) => value === true).length === 0 || Object.values(checkedItems).filter((value) => value === true).length === searchHistory.length ? '' : `(${Object.values(checkedItems).filter((value) => value === true).length})`);
	}, [checkedItems]);

	// Hàm để check tất cả các checkbox
	const checkAll = () => {
		const allChecked = searchHistory.reduce((acc, item) => {
			acc[item.place_id] = true;
			return acc;
		}, {});
		setCheckedItems(allChecked);
		setIsCheckAll(true);
	};

	// Hàm để uncheck tất cả các checkbox
	const unCheckAll = () => {
		const allChecked = searchHistory.reduce((acc, item) => {
			acc[item.place_id] = false;
			return acc;
		}, {});
		setCheckedItems(allChecked);
		setIsCheckAll(false);
	};

	// Hàm để toggle trạng thái của checkbox riêng lẻ
	const toggleCheckbox = (id) => {
		setCheckedItems((prev) => ({
			...prev,
			[id]: !prev[id],
		}));
	};

	// Hàm để xóa những item đã được check
	const deleteCheckedItems = () => {
		const checkedItemsList = filteredHistory.filter((item) => checkedItems[item.place_id]);
		for (let place of checkedItemsList) {
			deleteHistory(place);
		}
		setNumberCheck('');
		unCheckAll();
	};

	const deleteHistory = (place) => {
		let data = JSON.parse(localStorage.getItem('search_history'));
		for (let i = data.length - 1; i >= 0; i--) {
			if (data[i].place_id === place.place_id) {
				data.splice(i, 1);
				break;
			}
		}
		window.localStorage.setItem('search_history', JSON.stringify(data));
		// setSearchHistory(window.localStorage.setItem("search_history", JSON.stringify(data)))
		setSearchHistory(JSON.parse(localStorage.getItem('search_history')).reverse());
		props.dispatch(setSearchLocalStorage(data));
	};

	const onTitleSelect = async (place) => {
		let check = true;
		let data = JSON.parse(localStorage.getItem('search_history')) || [];
		if (!place.location) {
			const dataHistory = await getDetailIdService(place.place_id);
			if (check) {
				if (place != null && data.length < 100) {
					place.location = dataHistory.data.result.geometry.location;
					// place.place_id = "00000000000"
					data.push(place);
				} else if (place != null && data.length >= 100) {
					data.shift();
					data.push(place);
				}
			}
			window.localStorage.setItem('search_history', JSON.stringify(data));
			const pid = place.id || place.place_id;
			// console.log(pid)
			props.dispatch(getDetailByIdAction(pid));
			// setValue(`${place.structured_formatting.main_text} - ${place.structured_formatting.secondary_text}`);
			props.dispatch(setBoxVisibleAction('info'));
		} else {
			const latLng = {
				latitude: place.location.lat,
				longitude: place.location.lng,
			};

			const response = (await getDetailLatLngService(latLng)).data.results;
			// console.log("respone______", response)
			for (let i = response.length - 1; i >= 0; i--) {
				if (place.location.lat === response[i].geometry.location.lat && place.location.lng === response[i].geometry.location.lng && place.structured_formatting.main_text === response[i].name && place.place_id != response[i].place_id) {
					for (let i = data.length - 1; i >= 0; i--) {
						if (data[i].place_id === place.place_id) {
							data.splice(i, 1);
							break;
						}
					}
					place.place_id = response[i].place_id;
					data.push(place);
					break;
				}
			}
			for (let i = data.length - 1; i >= 0; i--) {
				// Nếu có rồi thì đảo lại place đó lên
				if (data[i].place_id === place.place_id) {
					// place.location = dataHistory.data.result.geometry.location
					data.splice(i, 1);
					data.push(place);
					// check = false
					break;
				}
			}
			window.localStorage.setItem('search_history', JSON.stringify(data));
			const pid = place.id || place.place_id;
			props.dispatch(getDetailByIdAction(pid));
			// setValue(`${place.structured_formatting.main_text} - ${place.structured_formatting.secondary_text}`);
			props.dispatch(setBoxVisibleAction('info'));
		}
	};

	return (
		<div className="search-histories">
			<div className="search-component">
				<SearchingBox></SearchingBox>
			</div>
			<div className="search-histories-body">
				<div className="search-histories-body-text">
					<span>{t('recently')}</span>

					<Tooltip
						placement="bottomLeft"
						trigger="click"
						color="#ffff"
						title={<span style={{ fontSize: 14, fontWeight: 'initial', color: 'black' }}>Nhật ký gần đây được tạo dựa trên những địa điểm mà bạn đã xem trên Parking Lot - Live Map.</span>}>
						<InfoCircleOutlined />
					</Tooltip>
				</div>
				<div className="search-histories-body-content">
					<div className="search-histories-body-content-hearder">
						<div className="search-histories-body-content-hearder-type">
							<CheckOutlined />
							<span>Tất cả</span>
						</div>
					</div>
					<div className="search-histories-body-content-list">
						{searchHistory &&
							searchHistory.map((item, index) => (
								<div className={`search-histories-body-content-item ${checkedItems[item.place_id] ? 'checked' : ''}`}>
									<div
										className="search-histories-body-content-item-info"
										onClick={() => onTitleSelect(item)}>
										<img
											src={getImageByType(item.types[0])}
											alt=""
										/>
										<div className="search-histories-body-content-item-info-name">
											<div className="search-histories-body-content-item-info-name-title">{item.structured_formatting.main_text}</div>
											<div className="search-histories-body-content-item-info-name-text">{item.structured_formatting.secondary_text}</div>
										</div>
									</div>
									<input
										type="checkbox"
										checked={checkedItems[item.place_id]}
										onChange={() => toggleCheckbox(item.place_id)}
									/>
									<div
										className="search-histories-body-content-item-close-item"
										onClick={(e) => {
											e.stopPropagation();
											deleteHistory(item);
										}}>
										<CloseOutlined />
									</div>
								</div>
							))}
					</div>
				</div>
				<div className="search-histories-body-footer">
					<div className="search-histories-body-footer-left">
						{!isCheckAll && (
							<div className="search-histories-body-footer-left-disable">
								<img
									src={images.bin}
									style={{ width: 18 }}
									alt=""
								/>
								<span className="search-histories-body-footer-left-delete-text">Xóa tất cả</span>
							</div>
						)}
						{isCheckAll && (
							<div className="search-histories-body-footer-left-active">
								<img
									src={images.bin_white}
									style={{ width: 18 }}
									alt=""
								/>
								<span
									className="search-histories-body-footer-left-delete-text"
									onClick={deleteCheckedItems}>
									Xóa tất cả
								</span>
							</div>
						)}
					</div>
					{!isCheckAll && (
						<div
							className="search-histories-body-footer-right"
							onClick={checkAll}>{`Chọn tất cả`}</div>
					)}
					{isCheckAll && (
						<div
							className="search-histories-body-footer-right"
							onClick={unCheckAll}>{`Bỏ chọn tất cả ${numberCheck}`}</div>
					)}
				</div>
			</div>
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		places: state.searchReducer.places,
		boxVisible: state.boxVisibleReducer.box_visible,
		info_box_collapsed: state.boxVisibleReducer.info_box_collapsed,
		latLngCenter: state.placeReducer.center,
		openHistory: state.searchReducer.search_history,
		searchData: state.searchReducer.search_data,
	};
};

export default connect(mapStateToProps)(SearchHistories);
