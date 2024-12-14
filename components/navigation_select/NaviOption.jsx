import React from "react";
import { LinkOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
const Navi_option = ({
  result,
  isOptionVisible,
  handleClickClose,
  selectedUnit,
  handleUnitChange,
  copyurl,
  
}) => {
  const { t } = useTranslation("common");
  return (
    result && (
      <div>
        <div className="option-navi">
          <div className="select-distance">
            {isOptionVisible ? (
              <h1 className="Options-for-route"></h1>
            ) : (
              <h1 className="Options-for-route">{t("Options_for_route_i18")}</h1>
            )}
            <button onClick={handleClickClose}>
              {isOptionVisible ? <span>{t("option")}</span> : <span>{t("option_visible")}</span>}
            </button>
          </div>
          {!isOptionVisible && (
            <div className="option-close">
              <div className="distance-unit">
                <div
                  role="radiogroup"
                  aria-label="Đơn vị khoảng cách"
                  className="under-the-unit"
                >
                  <h2 className="distance-under fontTitleSmall">
                  {t("option_distance-under")}
                  </h2>
                  <div className="automatic-distance">
                    <div className="input-hover">
                      <input
                        className="number-of-beats"
                        type="radio"
                        value="REGIONAL"
                        checked={selectedUnit === "REGIONAL"}
                        id="pane.directions-options-units-auto"
                        name="pane.directions-options-units"
                        onChange={handleUnitChange}
                      />
                    </div>
                    <label
                      className="label-note fontBodyMedium"
                      htmlFor="pane.directions-options-units-auto"
                    >
                       {t("option_units_auto")}
                    </label>
                  </div>
                  <div className="automatic-distance">
                    <div className="input-hover">
                      <input
                        className="number-of-beats"
                        type="radio"
                        value="MILES"
                        checked={selectedUnit === "MILES"}
                        id="pane.directions-options-units-miles"
                        name="pane.directions-options-units"
                        onChange={handleUnitChange}
                      />
                    </div>
                    <label
                      className="label-note fontBodyMedium"
                      htmlFor="pane.directions-options-units-miles"
                    >
                      {t("option_units_miles")}
                    </label>
                  </div>
                  <div className="automatic-distance">
                    <div className="input-hover">
                      <input
                        className="number-of-beats"
                        type="radio"
                        value="KILOMETERS"
                        checked={selectedUnit === "KILOMETERS"}
                        id="pane.directions-options-units-km"
                        name="pane.directions-options-units"
                        onChange={handleUnitChange}
                      />
                    </div>
                    <label
                      className="label-note fontBodyMedium"
                      htmlFor="pane.directions-options-units-km"
                    >
                      km
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="copy-link">
          <div className="copy-link-select">
            <button onClick={copyurl}>
              <LinkOutlined id="set-icon-LinkOut" />
              <span className="text-link">{t("option_text_link")}</span>
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Navi_option;
