import React, { useEffect, useState, useRef } from 'react';
import { message } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import emailIcon from '../static/images/gmail.png';
import twitterIcon from '../static/images/twitter.png';
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';
import { connect } from 'react-redux';

// import './Popup.css'; // Tạo file css cho style của popup

const ShareLocation = ({ show, handleClose, place, fromPlace, toPlace }) => {
	const { t } = useTranslation('common');

	const [isLink, setIsLink] = useState(true);
	const [isCopy, setIsCopy] = useState(false);
	const [selectedOption, setSelectedOption] = useState(`${t('size_small')}`);
	const [iframeUrl, setiframeUrl] = useState('');
	const [isSelectDropDown, setIsSelectDropDown] = useState(false);
	const [widthContent, setWidthContent] = useState(500);
	const [heightContent, setHeightContent] = useState(300);
	const [isCustomSize, setIsCustomSize] = useState(false);
	const [widthCustom, setWidthCustom] = useState(500);
	const [heightCustom, setHeightCustom] = useState(300);
	const [iframeUrlNavigation, setiframeUrlNavigation] = useState('');

	const dropdownRef = useRef(null);

	useEffect(() => {
		setiframeUrl(`${window.location.origin}${window.location.pathname}?location=${place ? place.geometry.location.lat : ''},${place ? place.geometry.location.lng : ''}&iframe=true`);
	}, [place]);

	useEffect(() => {
		setiframeUrlNavigation(`${window.location.origin}${window.location.pathname}?direction=${fromPlace ? fromPlace.geometry.location.lat : ''}%2C${fromPlace ? fromPlace.geometry.location.lng : ''}%26${toPlace ? toPlace.geometry.location.lat : ''}%2C${fromPlace ? fromPlace.geometry.location.lng : ''}&iframe=true`);
	}, [fromPlace, toPlace]);

	useEffect(() => {
		if (isLink) {
			setWidthContent(500);
		} else {
			if (selectedOption === 'Nhỏ') {
				setWidthContent(500);
				setHeightContent(300);
				setIsCustomSize(false);
			} else if (selectedOption === 'Trung bình') {
				setWidthContent(700);
				setHeightContent(400);
				setIsCustomSize(false);
			} else if (selectedOption === 'Lớn') {
				setWidthContent(1000);
				setHeightContent(500);
				setIsCustomSize(false);
			} else {
				setWidthContent(800);
				setIsCustomSize(true);
			}
		}
	}, [selectedOption, isLink]);

	const handleChangeWidth = (event) => {
		setWidthCustom(event.target.value);
	};
	const handleChangeHeght = (event) => {
		setHeightCustom(event.target.value);
	};

	const handleClickOutside = (event) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			setIsSelectDropDown(false);
		}
	};

	useEffect(() => {
		if (isSelectDropDown) {
			document.addEventListener('click', handleClickOutside);
		} else {
			document.removeEventListener('click', handleClickOutside);
		}
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [isSelectDropDown]);

	const handleChangeSize = (size) => {
		// console.log('-------',size)
		setSelectedOption(size);
		setIsSelectDropDown(false);
	};

	const handleOpenDropDown = () => {
		setIsSelectDropDown(true);
	};

	const setLink = () => {
		setIsLink(true);
	};

	const setIframe = () => {
		setIsLink(false);
	};

	const saveHTML = () => {
		const html = place ? `<iframe src="${iframeUrl}" frameborder="0"></iframe>` : `<iframe src="${iframeUrlNavigation}" frameborder="0"></iframe>`;

		navigator.clipboard.writeText(html).then(
			function () {
				message.success(t('copy_to_climb'));
			},
			function (err) {
				console.error('Không thể lưu URL vào clipboard: ', err);
			}
		);
	};

	const saveToClipBoard = () => {
		const currentUrl = window.location.href;

		navigator.clipboard.writeText(currentUrl).then(
			function () {
				setIsCopy(true);
				message.success(t('copy_to_climb'));
			},
			function (err) {
				console.error('Không thể lưu URL vào clipboard: ', err);
			}
		);
	};

	const openNewBrower = () => {
		window.open(iframeUrl, '_blank', `width=${widthCustom},height=${heightCustom}`);
	};

	const sendToEmail = () => {
		const titleEmail = `${place ? place.name : ''}`;
		const bodyEmail = `${place ? place.name : ''}%0A${iframeUrl}`;
		const url = place ? `https://mail.google.com/mail/u/0/?su=${titleEmail}&body=${bodyEmail}&hl=vi&gl&url=https://maps.app.goo.gl/w1yjj93EKG5v7b5J6&fs=1&tf=cm` : `https://mail.google.com/mail/u/0/?su=Từ ${fromPlace ? fromPlace.name : ''} đến ${toPlace ? toPlace.name : ''}&body=Từ ${fromPlace ? fromPlace.name : ''} đến ${toPlace ? toPlace.name : ''}%0A${iframeUrlNavigation}&hl=vi&gl&url=https://maps.app.goo.gl/w1yjj93EKG5v7b5J6&fs=1&tf=cm`;
		window.open(url, '_blank', `width=800,height=500`);
	};

	const sendToX = () => {
		const url = `https://x.com/intent/post?url=${place ? iframeUrl : iframeUrlNavigation}`;
		window.open(url, '_blank', `width=800,height=500`);
	};

	return (
		<div className={`share-location ${show ? 'show' : ''}`}>
			<div className="share-content">
				<span
					className="close"
					onClick={handleClose}>
					&times;
				</span>
				{/* <h1>dd</h1> */}
				<div className="pupup-header">{t('share')}</div>
				<div className="pupup-nav">
					<div
						className="link"
						style={{ borderBottom: isLink ? '3px solid #0a06f3' : null }}
						onClick={setLink}>
						{t('send_link')}
					</div>

					{/* {place &&  */}
					<div
						className="iframe"
						style={{ borderBottom: !isLink ? '3px solid #0a06f3' : null }}
						onClick={setIframe}>
						{t('embed_map')}
					</div>
					{/* } */}
				</div>

				{isLink && (
					<div
						className="share-body"
						style={{ width: 400 }}>
						<div className="info-location">
							<div className="image">
								<img
									src="./static/images/logo-mini.png"
									alt=""
								/>
							</div>
							<div className="location">
								<div className="title">{place ? place.name : fromPlace && toPlace ? `Từ ${fromPlace.name} đến ${toPlace.name}` : ''}</div>
								<div className="address">{place ? place.formatted_address : ''}</div>
							</div>
						</div>
						<div style={{ color: '#888', paddingLeft: 20, paddingRight: 20 }}>{t('link_to_share')}</div>
						<div className="copy-link-share">
							<div className="url-location">{window.location.href}</div>
							<div
								className="text"
								onClick={saveToClipBoard}>
								{isCopy ? t('copy_to_climb').toUpperCase() : t('copy_link').toUpperCase()}
							</div>
						</div>
						{!isMobile && (
							<div className="send-link">
								<div className="send-to-email">
									<img
										src={emailIcon}
										alt=""
										onClick={sendToEmail}
									/>
									<div className="text">Gmail</div>
								</div>
								<div className="send-to-x">
									<img
										src={twitterIcon}
										alt=""
										onClick={sendToX}
									/>
									<div className="text">X</div>
								</div>
							</div>
						)}
					</div>
				)}
				{!isLink && !isCustomSize && (
					<div
						className="share-body"
						style={{ width: widthContent }}>
						<div className="iframe-size">
							<div className="select-size">
								<button onClick={handleOpenDropDown}>
									<span>{selectedOption}</span>
									<CaretDownOutlined />
								</button>
							</div>
							<div
								className="iframe-url"
								style={{ color: '#838383' }}>{`<iframe src="${place ? iframeUrl : iframeUrlNavigation}" frameborder="0"></iframe>`}</div>
							<div
								className="copy-iframe"
								onClick={saveHTML}>
								{t('copy_html')}
							</div>
						</div>
						{/* <div className='iframe-map' > */}
						<iframe
							className="iframe-map"
							src={place ? iframeUrl : iframeUrlNavigation}
							frameborder="0"
							style={{ height: heightContent, width: widthContent }}></iframe>
						{/* </div> */}
						{isSelectDropDown && (
							<div
								className="drop-size"
								ref={dropdownRef}>
								<div
									onClick={() => {
										handleChangeSize('Nhỏ');
									}}>
									<span>{t('size_small')}</span>
								</div>
								<div
									onClick={() => {
										handleChangeSize('Trung bình');
									}}>
									<span>{t('size_medium')}</span>
								</div>
								<div
									onClick={() => {
										handleChangeSize('Lớn');
									}}>
									<span>{t('size_big')}</span>
								</div>
								<div
									onClick={() => {
										handleChangeSize('Chọn kích thước');
									}}>
									<span>{t('size_custom')}</span>
								</div>
							</div>
						)}
					</div>
				)}
				{!isLink && isCustomSize && (
					<div
						className="share-body"
						style={{ width: 700 }}>
						<div className="input-size">
							{/* <div> */}
							<div className="iframe-size">
								<div className="select-size">
									<button onClick={handleOpenDropDown}>
										<span>{selectedOption}</span>
										<CaretDownOutlined />
									</button>
								</div>
							</div>
							{/* </div> */}
							<div className="insert-size">
								{/* <div>123</div> */}
								<input
									type="number"
									value={widthCustom}
									onChange={handleChangeWidth}
								/>
								<div>X</div>
								<input
									type="number"
									value={heightCustom}
									onChange={handleChangeHeght}
								/>
								<div
									className="see-demo"
									onClick={openNewBrower}>
									{t('size_preview').toUpperCase()}
								</div>
							</div>
						</div>
						<div className="iframe-size">
							<div
								className="iframe-url"
								style={{ color: '#838383' }}>{`<iframe src="${place ? iframeUrl : iframeUrlNavigation}" frameborder="0"></iframe>`}</div>
							<div
								className="copy-iframe"
								onClick={saveHTML}>
								{t('copy_html').toUpperCase()}
							</div>
						</div>
						{/* <div className='iframe-map' style={{height: heightContent}}>
              <iframe src={iframeUrl} frameborder="0"></iframe>
            </div> */}
						{isSelectDropDown && (
							<div
								className="drop-size"
								ref={dropdownRef}>
								<div
									onClick={() => {
										handleChangeSize('Nhỏ');
									}}>
									<span>Nhỏ</span>
								</div>
								<div
									onClick={() => {
										handleChangeSize('Trung bình');
									}}>
									<span>Trung bình</span>
								</div>
								<div
									onClick={() => {
										handleChangeSize('Lớn');
									}}>
									<span>Lớn</span>
								</div>
								<div
									onClick={() => {
										handleChangeSize('Chọn kích thước');
									}}>
									<span>Chọn kích thước</span>
								</div>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		from_place: state.navigationReducer.from,
		to_place: state.navigationReducer.to,
	};
};
export default connect(mapStateToProps)(ShareLocation);
