import { Input, AutoComplete, message, Divider } from 'antd';
import { SearchOutlined, AimOutlined } from '@ant-design/icons';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { connect } from 'react-redux';
import { swapAction, navigationAction, selectResultAction, clearResultAction, clearAction } from '../redux/actions/navigation';
import { searchClearAction } from '../redux/actions/search';
import { navigationFromAction, navigationToAction, setTypeInput } from '../redux/actions/navigation';
import { Card, Row, Col, Tooltip, List, Badge, Button } from 'antd';
import equal from 'fast-deep-equal/es6/react';
import { setMapViewportAction } from '../redux/actions/place';
import { setBoxVisibleAction, setPopupRightClick, setRedMarkerAction } from '../redux/actions/boxVisble';
import Router from 'next/router';
import { CloseOutlined } from '@ant-design/icons';
import { ArrowLeftOutlined } from '@ant-design/icons';
import DragAndDropContainer from './DragDropContainer';
import Request from '../utils/request';
import { isMobile } from 'react-device-detect';
import { useDispatch, useSelector } from 'react-redux';
import { ShareAltOutlined } from '@ant-design/icons';
import { getDetailIdService, getDetailLatLngService } from '../redux/sagas/placeSaga';
// import { Mile_Travel } from "../consts";
import Navi_option from './navigation_select/NaviOption';
import Navi_calculate from './navigation_select/NaviCalculate ';
import Navi_translation from './navigation_select/NaviTranslation';
import { BarsOutlined } from '@ant-design/icons';
import { EnvironmentOutlined } from '@ant-design/icons';
import { getRouteDetailsIcon } from '../config/route_details_icon';
import images from '../utils/images';
import ShareLocation from './ShareLocation';
import { useTranslation } from 'react-i18next';

const NavigationBox = (props) => {
	const { dispatch, my_location, typeInput } = props;

	const [selectedUnit, setSelectedUnit] = useState('');
	const [showContent, setShowContent] = useState(false);
	const [iconCarActive, setIconCarActive] = useState(true);
	const [iconMotorActive, setIconMotorActive] = useState(false);
	const [iconWalkActive, setIconWalkActive] = useState(false);
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);
	const [dataAutoComplete, setDataAutoComplete] = useState('');

	const [carResult, setCarResult] = useState('');
	const [bikeResult, setBikeResult] = useState('');
	const [walkResult, setWalkResult] = useState('');
	const [isOptionVisible, setIsOptionVisible] = useState(true);
	const [isShowActive, setIsShowActive] = useState(false);
	const [selectedIcon, setSelectedIcon] = useState('car');
	const [showPopup, setShowPopup] = useState(false);

	const [distance, setDistance] = useState('');
	const [duration, setDuration] = useState('');

	const { t } = useTranslation('common');

	const handleUnitChange = (event) => {
		setSelectedUnit(event.target.value);
		window.localStorage.setItem('unit', event.target.value);
	};

	const ResultBox = () => {
		const dispatch = useDispatch();
		const result = useSelector((state) => state.navigationReducer.result);
		const result_select = useSelector((state) => state.navigationReducer.result_select);

		const toggleLink = () => {
			setShowContent(!showContent);
		};
		const selectResult = (type) => {
			dispatch(selectResultAction(type));
		};

		const togglePopup = () => {
			setShowPopup(!showPopup);
		};

		let div_return = null;
		if (result) {
			const result_render = result[result_select];
			div_return = (
				<div className="div-result-bottom">
					<div
						className="pull--card--content--navi"
						onClick={handleStagesClick}>
						<div className="pull--card--title--navi"></div>
					</div>
					<Row onClick={handleStagesClick}>
						<Col
							span={19}
							style={{ marginLeft: '5px' }}>
							<h1>
								<span className="result--text--color--mobile">{result_render[0].legs[0].duration.text} ( </span>
								<span>{(result_render[0].legs[0].distance.value / 1000).toFixed(2)} km )</span>
							</h1>
							<p>{result_select === 'fastest' ? t('result_select_i18_fast') : t('result_select_i18_shortest')}</p>
						</Col>
					</Row>
					<Row id="row-col-17-icon-button">
						<Col
							span={17}
							id="Mobile-button-select">
							<div>
								<div className=" route-in--content ">
									<button
										className="route-in--button "
										type="primary"
										shape="round"
										onClick={() => selectResult(result_select === 'fastest' ? 'shortest' : 'fastest')}>
										<span className="route-small--content">
											<span>
												<i
													className="fas fa-directions"
													style={{ color: '#fff', paddingTop: '2px' }}></i>
											</span>
											<span class="route-content--text">{t('reuslt_button_directions_1')}</span>
										</span>
									</button>
								</div>
							</div>

							<div className=" route-in--content ">
								<button
									className="route-in--button "
									onClick={toggleLink}>
									<span
										className="route-small--content"
										id="borderbuttonicon">
										<span>
											<BarsOutlined id="mobilebars" />
										</span>
										<span
											className="route-content--text"
											style={{ color: '#1a73e8' }}>
											{t('reuslt_button_directions_2')}
										</span>
									</span>
								</button>
							</div>

							<div className=" route-in--content ">
								<button
									className="route-in--button "
									onClick={togglePopup}>
									<span
										className="route-small--content"
										id="borderbuttonicon">
										<span>
											<ShareAltOutlined id="mobile-share"></ShareAltOutlined>
										</span>
										<span
											class="route-content--text"
											style={{ color: '#1a73e8' }}>
											{t('reuslt_button_directions_3')}
										</span>
									</span>
								</button>
							</div>
							<div className=" route-in--content ">
								<button
									className="route-in--button "
									onClick={copyurl}>
									<span
										className="route-small--content"
										id="borderbuttonicon">
										<div className="route-empty--card"></div>
										<span>
											<i
												className="far fa-bookmark"
												id="Mobilebookmark"></i>
										</span>
										<span
											className="route-content--text"
											style={{ color: '#1a73e8' }}>
											{t('reuslt_button_directions_4')}
										</span>
									</span>
								</button>
							</div>
						</Col>
						<ShareLocation
							handleClose={togglePopup}
							show={showPopup}
							// place={current_place}
							fromPlace={props.from_place}
							toPlace={props.to_place}
						/>
					</Row>
				</div>
			);
		}
		return div_return;
	};

	useEffect(() => {
		const fastestLeg = props.result?.fastest?.[0]?.legs?.[0];
		if (fastestLeg) {
			setDuration(fastestLeg.duration.text);
			setDistance(fastestLeg.distance.text);
		}
	}, [props.result]);

	const handleStagesClick = () => {
		if (showContent) {
			setShowContent(false); // Ẩn nội dung chính
			// setShowAdditionalDiv(true); // Hiện thẻ <div>dsgdfgdfgdfgdfg</div>
		} else {
			setShowContent(true); // Hiện lại nội dung chính
			// setShowAdditionalDiv(false); // Ẩn thẻ <div>dsgdfgdfgdfgdfg</div>
		}
	};
	const handleButtonClick = useCallback((type) => {
		setVisibleButton(type);
		setShowContent(!showContent);
	}, []);
	const zoomStep = (location) => {
		const viewport = {
			longitude: location.lng,
			latitude: location.lat,
			zoom: 16,
		};
		props.dispatch(setMapViewportAction(viewport));
	};

	const handleClickClose = useCallback(() => {
		setIsOptionVisible((prev) => !prev);
	}, []);

	const [visibleButton, setVisibleButton] = useState('fastest');

	const copyurl = useCallback(() => {
		const url = window.location.href;
		navigator.clipboard
			.writeText(url)
			.then(() => {
				message.success(t('success_i18'));
			})
			.catch((err) => {
				message.error(t('success_i18_error'));
				console.error(err);
			});
	}, [t]);

	useEffect(() => {
		const { from_place, to_place } = props;
		if (from_place && to_place) {
			routing(from_place, to_place, 'car');
		}
		if (localStorage.getItem('search_history') != null) {
			setData(JSON.parse(localStorage.getItem('search_history')).reverse());
		}
		// setData(JSON.parse(localStorage.getItem("search_history")));
		const unit = window.localStorage.getItem('unit');
		setSelectedUnit(unit);
	}, []);

	const convertToHoursAndMinutes = useCallback((seconds) => {
		let h = Math.floor(seconds / 3600);
		let m = Math.floor((seconds % 3600) / 60);
		if (h >= 24) {
			m = 0;
		}
		const formattedDuration = `${h > 0 ? h + ' giờ ' : ''}${m > 0 ? m + ' p' : ''}`;
		return formattedDuration;
	}, []);

	useEffect(() => {
		setDataAutoComplete(props.places);
	}, [props.places]);

	const routing = (from_place, to_place, vehicle) => {
		setLoading(true);
		Router.push({
			pathname: `/`,
			query: {
				direction: `${from_place.geometry.location.lat},${from_place.geometry.location.lng}&${to_place.geometry.location.lat},${to_place.geometry.location.lng}`,
			},
		});
		dispatch(navigationAction(from_place, to_place, vehicle));
	};

	const selectIconCar = () => {
		setSelectedIcon('car');
		setActive('SecondCard');
		setIconCarActive(true);
		setIconMotorActive(false);
		setIconWalkActive(false);
		const { from_place, to_place } = props;
		if (from_place && to_place) {
			routing(from_place, to_place, 'car');
		}
	};

	const selectIconMotor = () => {
		setSelectedIcon('motorcycle');
		setActive('ThirdCard');
		setIconCarActive(false);
		setIconMotorActive(true);
		setIconWalkActive(false);
		const { from_place, to_place } = props;
		if (from_place && to_place) {
			routing(from_place, to_place, 'bike');
		}
	};

	const selectIconWalk = () => {
		setSelectedIcon('walk');
		setActive('FourthCard');
		setIconCarActive(false);
		setIconMotorActive(false);
		setIconWalkActive(true);
		const { from_place, to_place } = props;
		if (from_place && to_place) {
			routing(from_place, to_place, 'taxi');
		}
	};

	const closeBox = useCallback(() => {
		dispatch(clearAction());
		dispatch(searchClearAction());
		dispatch(clearResultAction());
		dispatch(setBoxVisibleAction('search'));
		dispatch(setPopupRightClick(false));
		dispatch(setRedMarkerAction(false));
	}, [dispatch]);

	useEffect(() => {
		const { from_place, to_place } = props;
		if (from_place && to_place && (!equal(props.prevFromPlace, from_place) || !equal(props.prevToPlace, to_place))) {
			if (from_place.place_id === to_place.place_id) {
				message.warning('Điểm bắt đầu & điểm kết thúc trùng nhau !');
				props.dispatch(clearResultAction());
				return;
			}
			getTime();
			let vehicle = 'car';
			if (iconMotorActive) vehicle = 'bike';
			if (iconWalkActive) vehicle = 'taxi';
			routing(from_place, to_place, vehicle);
		}
	}, [props.from_place, props.to_place]);

	// Hàm gọi api lấy ra thời gian 3 loại phương tiện
	const getTime = async () => {
		let paramsCar = {
			origin: {
				latitude: from_place.geometry.location.lat,
				longitude: from_place.geometry.location.lng,
			},
			destination: {
				latitude: to_place.geometry.location.lat,
				longitude: to_place.geometry.location.lng,
			},
			vehicle: 'car',
		};
		const car = await Request.direction(paramsCar);
		setCarResult(convertToHoursAndMinutes(car.data.routes[0].legs[0].duration.value));

		let paramsBike = {
			origin: {
				latitude: from_place.geometry.location.lat,
				longitude: from_place.geometry.location.lng,
			},
			destination: {
				latitude: to_place.geometry.location.lat,
				longitude: to_place.geometry.location.lng,
			},
			vehicle: 'bike',
		};
		const bike = await Request.direction(paramsBike);
		setBikeResult(convertToHoursAndMinutes(bike.data.routes[0].legs[0].duration.value));

		let paramsTaxi = {
			origin: {
				latitude: from_place.geometry.location.lat,
				longitude: from_place.geometry.location.lng,
			},
			destination: {
				latitude: to_place.geometry.location.lat,
				longitude: to_place.geometry.location.lng,
			},
			vehicle: 'taxi',
		};
		const taxi = await Request.direction(paramsTaxi);
		setWalkResult(convertToHoursAndMinutes(taxi.data.routes[0].legs[0].duration.value));
	};

	const { from_place, to_place, result, result_select, response_status } = props;

	const navigationMyLocation = useCallback(async () => {
		if (my_location) {
			try {
				const response = await Request.geocode(my_location);
				if (response.data.results.length > 0) {
					if (typeInput === true) {
						dispatch(
							navigationFromAction(
								{
									...response.data.results[0],
									name: response.data.results[0].address_components[0].long_name,
								},
								'Vị trí của bạn'
							)
						);
					} else {
						dispatch(
							navigationToAction(
								{
									...response.data.results[0],
									name: response.data.results[0].address_components[0].long_name,
								},
								'Vị trí của bạn'
							)
						);
					}
				} else {
					message.error('Không tìm thấy địa điểm từ tọa độ !');
				}
			} catch (error) {
				message.warning('Chúng tôi không thể lấy tọa độ của bạn !');
			}
		} else {
			message.warning('Chúng tôi không thể lấy tọa độ của bạn !');
		}
	}, [dispatch, my_location, typeInput]);

	const onOptionSelect = async (place) => {
		let check = true;
		let data = JSON.parse(localStorage.getItem('search_history')) || [];
		if (!place.location) {
			const dataHistory = await getDetailIdService(place.place_id);
			if (check) {
				if (place != null && data.length < 100) {
					place.location = dataHistory.data.result.geometry.location;

					data.push(place);
				} else if (place != null && data.length >= 100) {
					data.shift();
					data.push(place);
				}
			}
			window.localStorage.setItem('search_history', JSON.stringify(data));
			place.place_id = place.id || place.place_id;
		} else {
			const latLng = {
				latitude: place.location.lat,
				longitude: place.location.lng,
			};

			const response = (await getDetailLatLngService(latLng)).data.results;

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
		const selectedPlaceId = place.id || place.place_id;
		try {
			const response = await Request.place_detail(selectedPlaceId);
			const selectedPlace = response.data?.result;
			if (selectedPlace) {
				const viewport = {
					longitude: selectedPlace.geometry.location.lng,
					latitude: selectedPlace.geometry.location.lat,
					zoom: 14,
				};
				dispatch(searchClearAction());
				// if (props.type === "start_input") {
				if (typeInput === true) {
					dispatch(navigationFromAction(selectedPlace, `${selectedPlace.name} - ${selectedPlace.formatted_address}`));
					!props.to_place && dispatch(setMapViewportAction(viewport));
				} else {
					dispatch(navigationToAction(selectedPlace, `${selectedPlace.name} - ${selectedPlace.formatted_address}`));
					!props.from_place && dispatch(setMapViewportAction(viewport));
				}
			} else {
				message.error('Không tìm thấy vị trí của bạn!');
			}
		} catch (error) {
			message.error('Không tìm thấy vị trí của bạn!');
		}
	};

	const [active, setActive] = useState('FirstCard');
	// console.log("--------------------", dataAutoComplete);
	const [isRotated, setIsRotated] = useState(false);

	const handleClick = () => {
		setIsRotated(!isRotated);
		dispatch(swapAction());
		dispatch(setPopupRightClick(false));
	};
	const openDeltails = () => {
		dispatch(setBoxVisibleAction('details'));
	};

	const openRestaurant2 = () => {
		dispatch(setBoxVisibleAction('detailsrestaurant'));
	};

	return (
		<div>
			{!isMobile && (
				<div className="Container_left_web">
					<Card
						className="navigation-box"
						bodyStyle={{ padding: 0 }}
						id="navibox">
						<div className="div-navigation-input">
							<div className="list-vehicle">
								<Row id="Row-col-span-3-18">
									<Col span={3}></Col>
									<Col
										span={18}
										id="col-span-listmc">
										<div id="Listmc">
											<div className="List_menuicon">
												<div
													className="Utility"
													style={{ width: '408px' }}>
													<button>
														<div
															id="Arow"
															onClick={() => setActive('FirstCard')}
															style={{
																backgroundColor: active === 'FirstCard' ? '#e0ecfd' : '',
															}}>
															<a
																href="#"
																tooltip-position="bottom"
																data-c-tooltip={t('Tooltip_travel')}
																className="Best_travel">
																<i
																	className="fas fa-directions"
																	style={{
																		color: active === 'FirstCard' ? '#0084ff' : '#54585A',
																	}}></i>
															</a>
														</div>
														{result ? <div class="The_best">{t('best_icon_text')}</div> : null}
													</button>
													<button onClick={selectIconCar}>
														<div
															id="Carrow"
															onClick={() => setActive('SecondCard')}
															style={{
																backgroundColor: active === 'SecondCard' ? '#e0ecfd' : '',
															}}>
															<a
																href="#"
																tooltip-position="bottom"
																data-c-tooltip={t('Drive_web')}
																className="Drive">
																<i
																	className="fas fa-car icon-vehicle"
																	style={{
																		color: active === 'SecondCard' ? '#0084ff' : '#54585A',
																	}}
																/>
															</a>
														</div>
														{result ? <div class="Numberminutes_Drive">{carResult}</div> : null}
													</button>
													<button onClick={selectIconMotor}>
														<div
															id="Bikerow"
															onClick={() => setActive('ThirdCard')}
															style={{
																backgroundColor: active === 'ThirdCard' ? '#e0ecfd' : '',
															}}>
															<a
																href="#"
																tooltip-position="bottom"
																data-c-tooltip={t('transport')}
																className="Public_transport">
																{' '}
																<i
																	className="fas fa-motorcycle icon-vehicle"
																	style={{
																		color: active === 'ThirdCard' ? '#0084ff' : '#54585A',
																	}}
																/>{' '}
															</a>
														</div>
														{result ? <div class="Numberminutes_Bike">{bikeResult}</div> : null}
													</button>

													<button onClick={selectIconWalk}>
														<div
															id="Taxirow"
															onClick={() => setActive('FourthCard')}
															style={{
																backgroundColor: active === 'FourthCard' ? '#e0ecfd' : '',
															}}>
															<a
																href="#"
																tooltip-position="bottom"
																data-c-tooltip={t('Car_taxi')}
																className="Walk">
																<i
																	className="fas fa-taxi icon-vehicle"
																	style={{
																		color: active === 'FourthCard' ? '#0084ff' : '#54585A',
																	}}
																/>
															</a>
														</div>
														{result ? <div class="Numberminutes_Taxi">{walkResult}</div> : null}
													</button>
													{/* </Tooltip> */}
												</div>
											</div>
										</div>
									</Col>

									<Col span={3}>
										<div className="Road_closure">
											<div id="Close_Folder">
												<a
													href="#"
													tooltip-position="bottom"
													data-c-tooltip={t('Close_way')}
													className="Close_the_way">
													<CloseOutlined
														className="icon-close1"
														onClick={closeBox}
													/>
												</a>
											</div>
										</div>
									</Col>
								</Row>
							</div>

							<Row id="row-col-21-input">
								<Col span={21}>
									<div className="inputLocation">
										<div class="There_img_column">
											<div class="algincolum">
												<div class="Above2">
													<img
														src="static/images/start_location_grey800_18dp.png"
														id="round_left"
														alt="icon"
													/>
												</div>

												<img
													src="static/images/route_3dots_grey650_24dp.png"
													id="three_dots"
													alt="three dots"
												/>

												<div class="Below2">
													<img
														src={images.place_outline_red600_18dp}
														id="round_bot"
														alt="icon"
													/>
												</div>
											</div>
											<div class="between-cards"></div>
											<div className="Vecto">
												<img
													src={images.up_and_down}
													id="Updown"
													alt="updown"
													onClick={() => {
														props.dispatch(swapAction());
														props.dispatch(setPopupRightClick(false));
													}}
												/>

												<div className="UAD">{t('search_up_down')}</div>
											</div>
										</div>

										<DragAndDropContainer></DragAndDropContainer>
									</div>
								</Col>
							</Row>
						</div>
					</Card>

					<div className="Container_scrool">
						{!result && (
							<>
								<div
									className="Your_position"
									onClick={navigationMyLocation}>
									<div className="Location">
										<Tooltip title={t('tooltip_location')}>
											<AimOutlined id="Aim" />
										</Tooltip>
										<span className="Position">
											<p className="Determine_location"> {t('tooltip_location')}</p>
										</span>
									</div>
								</div>

								{dataAutoComplete && (
									<div>
										{dataAutoComplete.map((item, index) => (
											<div
												key={index}
												className="Searched_loca"
												onClick={() => onOptionSelect(item)}>
												<div className="Loca">
													<div className="Locaicon">
														<i className="fas fa-location-arrow"></i>
													</div>
													<span className="Address">
														<span className="Sites">{item.structured_formatting.main_text + ' '}</span>
														<span className="Street_name">{item.structured_formatting.secondary_text}</span>
													</span>
												</div>
											</div>
										))}
									</div>
								)}

								{data && (
									<div>
										{data.map((item, index) => (
											<div
												key={index}
												className="Searched_loca"
												onClick={() => onOptionSelect(item)}>
												<div className="Loca">
													<div className="Locaicon">
														<i className="fas fa-history"></i>
													</div>
													<span className="Address">
														<span className="Sites">{item.structured_formatting.main_text + ' '}</span>
														<span className="Street_name">{item.structured_formatting.secondary_text}</span>
													</span>
												</div>
											</div>
										))}
									</div>
								)}
							</>
						)}
						{props.result && (
							<Navi_option
								result={props.result}
								isOptionVisible={isOptionVisible}
								handleClickClose={handleClickClose}
								selectedUnit={selectedUnit}
								handleUnitChange={handleUnitChange}
								copyurl={copyurl}
							/>
						)}
						{result && (
							<>
								<Navi_calculate
									result={result}
									selectedUnit={selectedUnit}
									result_select={result_select}
									handleButtonClick={handleButtonClick}
									selectedIcon={selectedIcon}
									openDeltails={openDeltails}
									dispatch={props.dispatch}
									selectResultAction={selectResultAction}
								/>

								<Navi_translation
									to_place={to_place}
									openRestaurant2={openRestaurant2}
								/>
							</>
						)}
					</div>
				</div>
			)}

			{/* ------------------------------------------------------------------------------------------------------------------ */}
			{isMobile && (
				<div class="Mobi">
					<Card
						className="navigation-box"
						bodyStyle={{ padding: 0 }}>
						<div className="div-navigation-input">
							<Row id="library-mobi">
								<Col
									id="span-mobi-3"
									span={3}>
									<div className="Road_closure">
										<div id="Close_Folder">
											<a
												href="#"
												tooltip-position="bottom"
												data-c-tooltip="Đóng đường đi"
												className="Close_the_way">
												<ArrowLeftOutlined
													className="icon-close1"
													onClick={closeBox}
												/>
											</a>
										</div>
									</div>
								</Col>
								<Col
									span={3}
									id="library-colum">
									<div class="algincolum">
										<div class="Above2">
											<img
												src="static/images/start_location_grey800_18dp.png"
												id="round_left"
												alt="icon"
											/>
										</div>
										<div class="There_center">
											<img
												src="static/images/route_3dots_grey650_24dp.png"
												id="three_dots"
												alt="three dots"
											/>
										</div>
										<div class="Below2">
											<img
												src={images.place_outline_red600_18dp}
												id="round_bot"
												alt="icon"
											/>
										</div>
									</div>
								</Col>
								<Col span={14}>
									<DragAndDropContainer></DragAndDropContainer>
								</Col>

								<Col
									span={4}
									id="library-updown-4">
									<div className="Vecto">
										<button onClick={handleClick}>
											<img
												src={images.up_and_down}
												id="Updown"
												alt="updown"
												className={isRotated ? 'rotate' : ''}
											/>
										</button>
									</div>
								</Col>
							</Row>
							<div className="list-vehicle">
								<Row id="row-col-17-icon">
									<Col
										span={17}
										id="library-icon-17">
										<div class="Icon_Mobi">
											<button>
												<div
													id="Arow"
													onClick={() => setActive('FirstCard')}
													style={{
														backgroundColor: active === 'FirstCard' ? '#e0ecfd' : '',
													}}>
													<i
														className="fas fa-directions"
														s
														style={{
															color: active === 'FirstCard' ? '#0084ff' : '#54585A',
														}}></i>

													{result ? <div class="The_best">{t('best_icon_text')}</div> : null}
												</div>
											</button>
											<button onClick={selectIconCar}>
												<div
													id="Carrow"
													onClick={() => setActive('SecondCard')}
													style={{
														backgroundColor: active === 'SecondCard' ? '#e0ecfd' : '',
													}}>
													<i
														className="fas fa-car icon-vehicle"
														style={{
															color: active === 'SecondCard' ? '#0084ff' : '#54585A',
														}}
													/>
													{/* </a> */}
													{result ? <div class="Numberminutes_Drive">{carResult}</div> : null}
												</div>
											</button>
											<button onClick={selectIconMotor}>
												<div
													id="Bikerow"
													onClick={() => setActive('ThirdCard')}
													style={{
														backgroundColor: active === 'ThirdCard' ? '#e0ecfd' : '',
													}}>
													<i
														className="fas fa-motorcycle icon-vehicle"
														style={{
															color: active === 'ThirdCard' ? '#0084ff' : '#54585A',
														}}
													/>{' '}
													{/* </a> */}
													{result ? <div class="Numberminutes_Bike">{bikeResult}</div> : null}
												</div>
											</button>

											<button onClick={selectIconWalk}>
												<div
													id="Taxirow"
													onClick={() => setActive('FourthCard')}
													style={{
														backgroundColor: active === 'FourthCard' ? '#e0ecfd' : '',
													}}>
													<i
														className="fas fa-taxi icon-vehicle"
														style={{
															color: active === 'FourthCard' ? '#0084ff' : '#54585A',
														}}
													/>

													{result ? <div class="Numberminutes_Taxi">{walkResult}</div> : null}
												</div>
											</button>
										</div>
									</Col>
								</Row>
							</div>
						</div>
					</Card>
					<div className="Container_scrool">
						{!result && (
							<>
								<div class="Container_scrool--content">
									<div
										className="Your_position_Mobi"
										onClick={navigationMyLocation}>
										<div className="New_position">
											<div className="Location">
												<Tooltip title="Vị trí của bạn">
													<AimOutlined id="Aim" />
												</Tooltip>
												<span className="Position">
													<p className="Determine_location">{t('tooltip_location')}</p>
												</span>
											</div>
										</div>
									</div>

									{dataAutoComplete && (
										<div>
											{dataAutoComplete.map((item, index) => (
												<div
													key={index}
													className="Searched_loca"
													onClick={() => onOptionSelect(item)}>
													<div className="Loca">
														<div className="Locaicon">
															<i className="fas fa-location-arrow"></i>
														</div>
														<span className="Address">
															<span className="Sites">{item.structured_formatting.main_text + ' '}</span>
															<span className="Street_name">{item.structured_formatting.secondary_text}</span>
														</span>
													</div>
												</div>
											))}
										</div>
									)}

									{data && (
										<div>
											{data.map((item, index) => (
												<div
													key={index}
													className="Searched_loca"
													onClick={() => onOptionSelect(item)}>
													<div className="Loca">
														<div className="Locaicon">
															<i className="fas fa-history"></i>
														</div>
														<span className="Address">
															<h6 className="Sites">{item.structured_formatting.main_text + ' '}</h6>
															<span className="Street_name">{item.structured_formatting.secondary_text}</span>
														</span>
													</div>
												</div>
											))}
										</div>
									)}
								</div>
							</>
						)}
					</div>
					{/* -------------------------------------------------------------------------------------------------------------------------       */}
					<ResultBox />

					<div>
						{showContent && (
							<div className="stage">
								<Card
									className="navigation-box--show"
									bodyStyle={{ padding: 0 }}>
									<div className="div-navigation-input--content">
										<div className="list-vehicle--show">
											<Row
												id="mobile-route-details--title"
												onClick={handleStagesClick}>
												<Col
													span={21}
													style={{ margin: 'auto' }}>
													<div>
														<h1 className="time-and-km">
															<span>
																<span className="delay-medium">{duration}</span>
																<span>({distance})</span>
															</span>
														</h1>
														<div>
															<h1 className="travel-the--fastest">{result_select === 'fastest' ? t('roadWay_text_1') : t('roadWay_text_2')}</h1>
														</div>
													</div>
												</Col>
											</Row>
											<div className="phone-route--details--content-scrool">
												<Row style={{ height: '100%' }}>
													<Col
														span={21}
														style={{ margin: 'auto', marginTop: '15px' }}>
														<div>
															<h1 className="time-and-km">
																<span>
																	<span className="delay-medium-stages">{t('reuslt_button_directions_2')}</span>
																</span>
															</h1>
														</div>
													</Col>
												</Row>
												<Row id="mobile-route-details--title--content">
													<Col
														span={3}
														style={{ textAlign: 'right' }}>
														<EnvironmentOutlined id="mobieenviro" />
													</Col>
													<Col
														span={19}
														style={{ margin: 'auto' }}>
														<div className="medium-time">
															<h1 className="time-and-km">
																<span>
																	<span className="delay-medium-stages--address">{from_place?.formatted_address || t('route-siste_i18')}</span>
																</span>
															</h1>
														</div>
													</Col>
												</Row>
												{/* ----------------------------------------------------------------------------------------------------------------- */}
												<div>
													{result[result_select][0].legs[0].steps.map((item, index) => (
														<div key={index}>
															<Row
																id="mobile-route-details--title--footer"
																onClick={() => {
																	zoomStep(item.end_location);
																	handleStagesClick(); // Ẩn nội dung chính và hiển thị div mới khi click
																}}>
																<Col
																	span={3}
																	style={{ textAlign: 'right' }}>
																	<img
																		src={getRouteDetailsIcon(item.maneuver)}
																		id="turning-directions--mobile"
																		alt="Direction Icon"
																	/>
																</Col>
																<Col
																	span={19}
																	style={{ margin: 'auto' }}>
																	<div>
																		<h1 className="time-and-km">
																			<span>
																				<span
																					className="delay-medium-stages--mobile"
																					id="delay-medium-stages--text--mobile">
																					{item.html_instructions}
																				</span>
																			</span>
																		</h1>
																	</div>
																	<div className="Details-of-route--time--mobile">
																		<div className="directions-mode-distance-time--mobile">
																			{item.distance.text} <span>({item.duration.text})</span>
																		</div>
																		<div className="Details-of-route--border--mobile"></div>
																	</div>
																</Col>
															</Row>
														</div>
													))}
												</div>
												{/* ------------------------------------------------------------------------------------------------------------------- */}
												<Row id="mobile-route-details--title--footer">
													<Col
														span={3}
														style={{ textAlign: 'right' }}>
														<EnvironmentOutlined id="mobieenviro" />
													</Col>
													<Col
														span={19}
														style={{ margin: 'auto' }}>
														<div>
															<h1 className="time-and-km">
																<span>
																	<span className="delay-medium-stages--address">{to_place?.formatted_address || t('route-siste_i18')}</span>
																</span>
															</h1>
														</div>
													</Col>
												</Row>
											</div>
										</div>
									</div>
								</Card>
							</div>
						)}
						{/* Hiển thị thẻ div này khi showAdditionalDiv = true */}
						{/* {showAdditionalDiv && <div>dsgdfgdfgdfgdfg</div>} */}
					</div>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	from_place: state.navigationReducer.from,
	to_place: state.navigationReducer.to,
	result: state.navigationReducer.result,
	result_select: state.navigationReducer.result_select,
	response_status: state.navigationReducer.response_status,
	prevFromPlace: state.navigationReducer.prevFromPlace,
	prevToPlace: state.navigationReducer.prevToPlace,
	my_location: state.placeReducer.my_location,
	values: state.navigationReducer.values,
	searchValues: state.searchReducer.search_data,
	typeInput: state.navigationReducer.type_input,
	places: state.searchReducer.places,
});

export default connect(mapStateToProps)(NavigationBox);
