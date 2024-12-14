import React, { useState, useCallback } from 'react';
import { List, Row, Col } from 'antd';
import { Mile_Travel } from "../../consts";
import { useTranslation } from "react-i18next";

const Navi_calculate = ({
  result,
  selectedUnit,
  result_select,
  // handleButtonClick,
  selectedIcon,
  openDeltails,
  dispatch,
  selectResultAction,
}) => {
  const [visibleButton, setVisibleButton] = useState("fastest");
  const { t } = useTranslation("common"); 

  const handleButtonClick = useCallback((type) => {
    setVisibleButton(type);
  }, []);

  const convertToHoursAndMinutes = (seconds) => {
    let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    if (h >= 24) {
      m = 0;
    }
    const formattedDuration = `${h > 0 ? h + " " + t("text_icon_hour") : ""} ${m > 0 ? m + t("text_icon_minute") : ""}`;
    return formattedDuration;
  };

  return (
    result && (
      <List
        itemLayout="horizontal"
        dataSource={[
          {
            roads: result.fastest[0].legs[0].steps[2].html_instructions,
            roadWay: t("roadWay_text_1"),
            title:
              selectedUnit === "MILES"
                ? result.fastest && result.fastest[0]
                  ? ` ${(
                    (result.fastest[0].legs[0].distance.value / 1000) *
                    Mile_Travel.MILES
                  ).toFixed(1)} ${t("option_units_miles")}`
                  : "N/A"
                : result.fastest && result.fastest[0]
                  ? ` ${(
                    result.fastest[0].legs[0].distance.value / 1000
                  ).toFixed(1)} km`
                  : "N/A",
            time:
              result.fastest && result.fastest[0]
                ? convertToHoursAndMinutes(result.fastest[0].legs[0].duration.value)
                : "N/A",
            type: "fastest",
          },
          {
            roads: result.shortest[0].legs[0].steps[1].html_instructions,
            roadWay: t("roadWay_text_2"),
            title:
              selectedUnit === "MILES"
                ? result.shortest && result.shortest[0]
                  ? ` ${(
                    (result.shortest[0].legs[0].distance.value / 1000) *
                    Mile_Travel.MILES
                  ).toFixed(1)} ${t("option_units_miles")}`
                  : "N/A"
                : result.shortest && result.shortest[0]
                  ? ` ${(
                    result.shortest[0].legs[0].distance.value / 1000
                  ).toFixed(1)} km`
                  : "N/A",
            time:
              result.shortest && result.shortest[0]
                ? convertToHoursAndMinutes(result.shortest[0].legs[0].duration.value)
                : "N/A",
            type: "shortest",
          },
        ]}
        renderItem={(item) => (
          <List.Item
            id="timed-content"
            style={{
              cursor: "pointer",
              borderLeft:
                item.type === result_select ? "5px solid #1890ff" : "none",
              borderBottom: "1px solid #dadce0",
            }}
            onClick={() => {
              dispatch(selectResultAction(item.type));
              handleButtonClick(item.type);
            }}
          >
            <Row id="row-col-6-Badge-kilomet">
              <Col span={2} id="Col_span_6_kilomet">
                {selectedIcon === "car" && (
                  <span>
                    <i className="fas fa-car icon-vehicle" id="timed-car"></i>
                  </span>
                )}
                {selectedIcon === "motorcycle" && (
                  <span>
                    <i className="fas fa-motorcycle icon-vehicle" id="timed-bike"></i>
                  </span>
                )}
                {selectedIcon === "walk" && (
                  <span>
                    <i className="fas fa-taxi icon-vehicle" id="timed-taxi"></i>
                  </span>
                )}
              </Col>
              <Col span={15} id="Col_span_14_kilomet">
                <div className="s-t-detail">
                  <h1>{item.roads}</h1>
                  <p>{item.roadWay}</p>
                </div>
              </Col>
              <Col span={5} id="Col_span_4_kilomet">
                <h4>{item.time}</h4>
                <p>{item.title}</p>
              </Col>
              <Col span={4} id="col-span-dettext">
                {visibleButton === item.type && (
                  <button className="dettext" onClick={openDeltails}>
                    <span id="detailtext">{t("roadWay_text_detailtext")}</span>
                  </button>
                )}
              </Col>
            </Row>
          </List.Item>
        )}
      />
    )
  );
};

export default Navi_calculate;