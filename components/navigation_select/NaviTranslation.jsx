import React, { useState } from "react";
import { connect } from "react-redux";
import { setTypeLatlong } from "../../redux/actions/navigation";
import { useTranslation } from "react-i18next";

const Navi_translation = ({ to_place, openRestaurant2, dispatch }) => {
  const [showMore, setShowMore] = useState(false); // Trạng thái hiển thị
  const { t } = useTranslation("common");
  const type_lat = (type) => {
    dispatch(setTypeLatlong(type));
  };

  const toggleMoreLess = () => {
    setShowMore(!showMore); // Thay đổi trạng thái khi nhấn nút
  };

  return (
    <div>
      <div className="border-fun"></div>
      <div>
        <div>
          <h2 className="around-the-location">
            <div className="fontSmall-around">
            {t("fontSmall_around_text")} {to_place?.name}
            </div>
          </h2>
        </div>
        <div className="Great-content-of-the-service">
          <div className="smaller-content">
            <button
              className="restaurant-service"
              onClick={() => {
                openRestaurant2("restaurant");
                type_lat("nhà hàng");
              }}
            >
              <div className="restaurant-sign">
                <img
                  src="static/images/restaurant.png"
                  width="22"
                  id="restaurant"
                  alt="Restaurant"
                />
              </div>
              <div className="restaurant">{t('restaurant_text_i18')}</div>
            </button>
            <button
              className="restaurant-service"
              onClick={() => {
                openRestaurant2("restaurant");
                type_lat("khách sạn");
              }}
            >
              <div className="restaurant-sign-hotel">
                <img src="static/images/hotel.png" id="hotel" alt="Hotel" />
              </div>
              <div className="restaurant">{t('hotel_text_i18')}</div>
            </button>
            <button
              className="restaurant-service"
              onClick={() => {
                openRestaurant2("restaurant");
                type_lat("trạm xăng");
              }}
            >
              <div className="restaurant-sign-gas-station">
                <img
                  src="static/images/petro.png"
                  id="gas_station"
                  alt="Gas Station"
                />
              </div>
              <div className="restaurant">{t('Gas_Station_text_i18')}</div>
            </button>
            <button
              className="restaurant-service"
              onClick={() => {
                openRestaurant2("restaurant");
                type_lat("điểm đỗ xe");
              }}
            >
              <div className="restaurant-sign-parking-sport">
                <img
                  src="static/images/signparkingsport.png"
                  id="parking_spot"
                  alt="Parking Spot"
                />
              </div>
              <div className="restaurant">{t('parking_spot_text_i18')}</div>
            </button>
            <button
              className="restaurant-service"
              id="restaurant-service--button--hidden"
              onClick={toggleMoreLess}
            >
              <div className="restaurant-sign-more">
                {!showMore ? (
                  <>
                    <img src="static/images/more.png" width="22" alt="More" />
                    <div className="restaurant--text--button-click">{t('More_text_i18')}</div>
                  </>
                ) : (
                  <>
                    <img
                      src="static/images/svgviewer-png-output.png"
                      width="18"
                      alt="Less"
                    />
                    <div className="restaurant--text--button-click">{t('Less_text_i18')}</div>
                  </>
                )}
              </div>
            </button>
          </div>
        </div>
        {/* ----------------------------------------------------------------------------------------------------------------------         */}
        {showMore && (
          <div className="other-services">
            <div className="other-services--button">
              <button
                class="other-services--button--seclect"
                onClick={() => {
                  openRestaurant2("restaurant");
                  type_lat("Ngân hàng");
                }}
              >
                <div class="other-services--button--bank--box--title">
                  <span>
                    <img src="static/images/bank.png" width="24" />
                  </span>
                </div>
                <div class="other-services--button--bank--text">{t('bank_text_i18')}</div>
              </button>

              <button
                class="other-services--button--seclect"
                onClick={() => {
                  openRestaurant2("restaurant");
                  type_lat("Quán bar");
                }}
              >
                <div class="other-services--button--bank--box--title">
                  <span>
                    <img src="static/images/cooktail.png" width="24" />
                  </span>
                </div>
                <div class="other-services--button--bank--text">{t('bar_text_i18')}</div>
              </button>

              <button
                class="other-services--button--seclect"
                onClick={() => {
                  openRestaurant2("restaurant");
                  type_lat("Quán cà phê");
                }}
              >
                <div class="other-services--button--bank--box--title">
                  <span>
                    <img src="static/images/coffecup.png" width="24" />
                  </span>
                </div>
                <div class="other-services--button--bank--text">
                {t('cafe_text_i18')}
                </div>
              </button>

              <button class="other-services--button--seclect"
                onClick={() => {
                  openRestaurant2("restaurant");
                  type_lat("Quán tạp hóa");
                }}
              >
                <div class="other-services--button--bank--box--title">
                  <span>
                    <img src="static/images/shoppingcart.png" width="24" />
                  </span>
                </div>
                <div class="other-services--button--bank--text">
                {t('cart_text_i18')}
                </div>
              </button>

              <button class="other-services--button--seclect"
                onClick={() => {
                  openRestaurant2("restaurant");
                  type_lat("Bưu điện");
                }}


              >
                <div class="other-services--button--bank--box--title">
                  <span>
                    <img src="static/images/envelope.png" width="24" />
                  </span>
                </div>
                <div class="other-services--button--bank--text"> {t('envelope_text_i18')}</div>
              </button>

              <button class="other-services--button--seclect"
                onClick={() => {
                  openRestaurant2("restaurant");
                  type_lat("Bệnh viện");
                }}

              >
                <div class="other-services--button--bank--box--title">
                  <span>
                    <img src="static/images/hospital.png" width="24" />
                  </span>
                </div>
                <div class="other-services--button--bank--text">{t('hospital_text_i18')}</div>
              </button>
            </div>
          </div>
        )}
        {/* ----------------------------------------------------------------------------------------------------------------------------------------         */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  to_place: state.navigationReducer.to,
});

export default connect(mapStateToProps)(Navi_translation);
