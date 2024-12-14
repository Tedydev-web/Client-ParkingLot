import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Layout, Menu } from 'antd';
import { GlobalOutlined, CaretRightOutlined, CaretLeftOutlined } from '@ant-design/icons';

import SearchingBox from './SearchingBox';
import Map from './Map';
import InformationLocationBox from './InfoLocation';
import NavigationBox from './NavigationBox';
import { setCollapsedInfoBoxAction } from '../redux/actions/boxVisble';
import { clearAction } from '../redux/actions/navigation';
import { resetLocationAction } from '../redux/actions/place';
import Weather from './Weather/Weather1';
import request from '../utils/request';
import InfoLocationIframe from './InfoLocationIframe';
import RouteDetails from './RouteDetails';
import { I18nextProvider } from 'react-i18next';
import i18next from '../translations/i18n_config';
import SearchHistories from './SearchHistories';
import DetailsRestaurant from './DetailsRestaurant';
import { isMobile } from 'react-device-detect';
// const { Sider } = Layout;

const App = React.memo((props) => {
	const { boxVisible, info_box_collapsed, windowWidth, dispatch, current_place, from_place, to_place, info_restaurant } = props;
	const [temp, setTemp] = useState(null);
	const [icon, setIcon] = useState(null);
	const [city, setCity] = useState(null);
	const [title, setTitle] = useState('Parking Lot - Live Map');
	// console.log(from_place)
	useEffect(() => {
		if (current_place != null && boxVisible === 'info') {
			// document.title = `${current_place.formatted_address}`
			setTitle(current_place.formatted_address);
		} else if (from_place != null && to_place != null && boxVisible === 'navigation') {
			setTitle(`Từ ${from_place.name} đến ${to_place.name}`);
		} else {
			setTitle('Parking Lot - Live Map');
		}
	}, [current_place, boxVisible, from_place, to_place]);

	useEffect(() => {
		document.title = title;
	}, [title]);

	const toggle = (e) => {
		e.stopPropagation();
		dispatch(setCollapsedInfoBoxAction(!info_box_collapsed));
	};

	useEffect(() => {
		if (boxVisible === 'navigation') {
			dispatch(clearAction());
			dispatch(resetLocationAction());
		}
	}, [boxVisible, dispatch]);
	const isSmallScreen = windowWidth < 500;
	useEffect(() => {
		getCurrentLocation();
	}, [props.openHistory]);
	const getCurrentLocation = () => {
		const lat = props.latLngCenter.latitude;
		const lng = props.latLngCenter.longitude;
		fetchWeather(lat, lng);
	};

	const fetchWeather = async (lat, lng) => {
		try {
			const response = await request.get_weather(lat, lng);
			const fetchedTemp = Math.round(response.data.main.temp);
			const fetchedIcon = response.data.weather[0].icon;
			const fetchedCity = response.data.name;
			setTemp(fetchedTemp);
			setIcon(fetchedIcon);
			setCity(fetchedCity);
		} catch (error) {
			console.error('Error fetching weather data:', error);
			setError(error.message);
		}
	};

	const changeLanguage = (lang) => {
		i18next.changeLanguage(lang);
	};

	return (
		<React.Fragment>
			<I18nextProvider i18n={i18next}>
				<Layout>
					<Map isSmallScreen={isSmallScreen} />

					<Row
						className="row-app"
						style={{ overflow: 'hidden' }}>
						{boxVisible === 'history' && (
							<React.Fragment>
								<Col
									xl={7}
									lg={9}
									md={10}
									sm={11}
									className="col-span-app"
									style={{
										width: '100%',
										minWidth: '250px',
										maxWidth: '408px',
										flexBasis: 'auto',
										display: info_box_collapsed ? 'none' : '',
									}}>
									<SearchHistories />
								</Col>
								<Col
									xl={2}
									style={{
										position: info_box_collapsed ? 'absolute' : 'relative',
										left: info_box_collapsed ? 0 : null,
										display: 'flex',
										alignItems: 'center',
										transform: 'translateY(-50%)',
										top: '50%',
									}}>
									{React.createElement(info_box_collapsed ? CaretRightOutlined : CaretLeftOutlined, {
										className: 'trigger',
										onClick: toggle,
										style: {
											pointerEvents: 'auto',
											boxShadow: '1px 1px 8px 1px rgba(0, 0, 0, 0.18)',
										},
									})}
								</Col>
							</React.Fragment>
						)}

						{boxVisible === 'details' && (
							<React.Fragment>
								<Col
									xl={7}
									lg={9}
									md={10}
									sm={11}
									className="col-span-app"
									style={{
										width: '100%',
										minWidth: '50px',
										maxWidth: '408px',
										flexBasis: 'auto',
										display: info_box_collapsed ? 'none' : '',
									}}>
									<RouteDetails />
								</Col>
								<Col
									xl={2}
									style={{
										position: info_box_collapsed ? 'absolute' : 'relative',
										left: info_box_collapsed ? 0 : null,
										display: 'flex',
										alignItems: 'center',
										transform: 'translateY(-50%)',
										top: '50%',
									}}>
									{React.createElement(info_box_collapsed ? CaretRightOutlined : CaretLeftOutlined, {
										className: 'trigger',
										onClick: toggle,
										style: {
											pointerEvents: 'auto',
											boxShadow: '1px 1px 8px 1px rgba(0, 0, 0, 0.18)',
										},
									})}
								</Col>
							</React.Fragment>
						)}

						{boxVisible === 'detailsrestaurant' && (
							<React.Fragment>
								<Col
									xl={7}
									lg={9}
									md={10}
									sm={11}
									className="col-span-app"
									style={{
										width: '100%',
										minWidth: '250px',
										maxWidth: '408px',
										flexBasis: 'auto',
										display: info_box_collapsed ? 'none' : '',
									}}>
									<DetailsRestaurant />
								</Col>
								{info_restaurant && (
									<Col
										xl={7}
										lg={9}
										md={10}
										sm={11}
										className="col-span-app"
										style={{
											width: '100%',
											marginBottom: '48px',
											marginTop: '48px',
											paddingLeft: '24px',
											minWidth: '250px',
											maxWidth: '408px',
											flexBasis: 'auto',
											display: info_box_collapsed ? 'none' : '',
										}}>
										<InformationLocationBox />
									</Col>
								)}
								<Col
									xl={2}
									style={{
										position: info_box_collapsed ? 'absolute' : 'relative',
										left: info_box_collapsed ? 0 : null,
										display: 'flex',
										alignItems: 'center',
										transform: 'translateY(-50%)',
										top: '50%',
									}}>
									{React.createElement(info_box_collapsed ? CaretRightOutlined : CaretLeftOutlined, {
										className: 'trigger',
										onClick: toggle,
										style: {
											pointerEvents: 'auto',
											boxShadow: '1px 1px 8px 1px rgba(0, 0, 0, 0.18)',
										},
									})}
								</Col>
							</React.Fragment>
						)}

						{boxVisible === 'iframe' && (
							<Col
								style={{ width: 380, margin: 12 }}
								className="col-span-app">
								<InfoLocationIframe
									place={current_place}
									fromPlace={from_place}
									toPlace={to_place}></InfoLocationIframe>
							</Col>
						)}
						{/* -------------------------------------------------------------------------------------------------------             */}

						{boxVisible === 'search' && (
							<React.Fragment>
								{/* Giao diện cho màn hình Desktop */}
								{!isMobile && (
									<React.Fragment>
										<Col
											xl={7}
											lg={9}
											md={10}
											sm={11}
											className="col-span-app"
											style={{
												width: '100%',
												maxWidth: '408px',
												flexBasis: 'auto',
												padding: '12px',
											}}>
											<SearchingBox />
											{props.openHistory && (
												<Weather
													temp={temp}
													icon={icon}
													city={city}
												/>
											)}
										</Col>
									</React.Fragment>
								)}

								{/* Giao diện cho màn hình Mobile */}
								{isMobile && (
									<React.Fragment>
										<Col
											xl={7}
											lg={9}
											md={10}
											sm={11}
											className="col-span-app"
											style={{
												width: '100%',
												flexBasis: 'auto',
												paddingLeft: '9px',
												paddingRight: '9px',
												paddingTop: '9px',
											}}>
											<div>
												<SearchingBox />
												{!props.openHistory && (
													<Weather
														temp={temp}
														icon={icon}
														city={city}
													/>
												)}
											</div>
										</Col>
									</React.Fragment>
								)}
							</React.Fragment>
						)}

						{/* --------------------------------------------------------------------------------------------------- */}

						{boxVisible === 'navigation' && (
							<React.Fragment>
								{isMobile ? (
									//( màn Mobile)
									<React.Fragment>
										<Col
											xl={12}
											lg={12}
											md={12}
											sm={12}
											className="col-span-app"
											style={{
												width: '100%',
												minWidth: '250px',
												// maxWidth: "408px",
												flexBasis: 'auto',
												display: info_box_collapsed ? 'none' : '',
											}}>
											<NavigationBox />
										</Col>
									</React.Fragment>
								) : (
									// Non-mobile layout  //( màn Web)
									<React.Fragment>
										<Col
											xl={7}
											lg={9}
											md={10}
											sm={11}
											className="col-span-app"
											style={{
												width: '100%',
												minWidth: '350px',
												maxWidth: '408px',
												flexBasis: 'auto',
												display: info_box_collapsed ? 'none' : '',
											}}>
											<NavigationBox />
										</Col>

										<Col
											xl={2}
											style={{
												position: info_box_collapsed ? 'absolute' : 'relative',
												left: info_box_collapsed ? 0 : null,
												display: 'flex',
												alignItems: 'center',
												transform: 'translateY(-50%)',
												top: '50%',
											}}>
											{React.createElement(info_box_collapsed ? CaretRightOutlined : CaretLeftOutlined, {
												className: 'trigger',
												onClick: toggle,
												style: {
													pointerEvents: 'auto',
													boxShadow: '1px 1px 8px 1px rgba(0, 0, 0, 0.18)',
												},
											})}
										</Col>
									</React.Fragment>
								)}
							</React.Fragment>
						)}

						{boxVisible === 'info' && (
							<React.Fragment>
								{isMobile ? (
									//( màn Mobile)
									<React.Fragment>
										<Col
											xl={12}
											lg={12}
											md={12}
											sm={12}
											className="col-span-app"
											style={{
												width: '100%',
												minWidth: '250px',
												// maxWidth: "408px",
												flexBasis: 'auto',
												display: info_box_collapsed ? 'none' : '',
											}}>
											<InformationLocationBox />
										</Col>
									</React.Fragment>
								) : (
									// Non-mobile layout  //( màn Web)
									<React.Fragment>
										<Col
											xl={7}
											lg={9}
											md={10}
											sm={11}
											className="col-span-app"
											style={{
												width: '100%',
												minWidth: '50px',
												maxWidth: '408px',
												flexBasis: 'auto',
												display: info_box_collapsed ? 'none' : '',
											}}>
											<InformationLocationBox />
										</Col>

										<Col
											xl={2}
											style={{
												position: info_box_collapsed ? 'absolute' : 'relative',
												left: info_box_collapsed ? 0 : null,
												display: 'flex',
												alignItems: 'center',
												transform: 'translateY(-50%)',
												top: '50%',
											}}>
											{React.createElement(info_box_collapsed ? CaretRightOutlined : CaretLeftOutlined, {
												className: 'trigger',
												onClick: toggle,
												style: {
													pointerEvents: 'auto',
													boxShadow: '1px 1px 8px 1px rgba(0, 0, 0, 0.18)',
												},
											})}
										</Col>
									</React.Fragment>
								)}
							</React.Fragment>
						)}
						{/* {!isMobile && (
              <Col className="col-span-app">
                <div class="translated_into_english">
                  <button onClick={() => changeLanguage("en")}>English</button>
                  <button onClick={() => changeLanguage("vi")}>
                    Tiếng Việt
                  </button>
                </div>
              </Col>
            )} */}
					</Row>
				</Layout>
			</I18nextProvider>
		</React.Fragment>
	);
});

const mapStateToProps = (state) => ({
	from_place: state.navigationReducer.from,
	to_place: state.navigationReducer.to,
	boxVisible: state.boxVisibleReducer.box_visible,
	info_box_collapsed: state.boxVisibleReducer.info_box_collapsed,
	latLngCenter: state.placeReducer.center,
	openHistory: state.searchReducer.search_history,
	current_place: state.placeReducer.current_place,
	info_restaurant: state.navigationReducer.info_restaurant,
	// windowWidth: state.windowReducer.width, // Assuming there's a windowReducer managing the window width
});

export default connect(mapStateToProps)(App);
