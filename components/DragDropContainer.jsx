import React, { useState } from "react";
import {
  SortableContainer,
  SortableElement,
  arrayMove,
} from "react-sortable-hoc";
import InputNavigation from "./InputNavigation";
import { setTypeInput } from "../redux/actions/navigation";
import { connect } from "react-redux";
import { swapAction } from "../redux/actions/navigation";
import { isMobile } from "react-device-detect";
import images from "../utils/images";
import { useTranslation } from "react-i18next";

const SortableItem = SortableElement(({ children, toggleHidden }) => (
  <div onMouseEnter={toggleHidden} onMouseLeave={toggleHidden}>
    {children}
  </div>
));

const SortableList = SortableContainer(({ children }) => {
  return <div>{children}</div>;
});

const DragAndDropContainer = (props) => {
  const { t } = useTranslation("common");
  const { typeInput } = props;
  const [hiddenTop, setHiddenTop] = useState(true);
  const toggleHiddenTop = () => {
    setHiddenTop(!hiddenTop);
  };

  const [hiddenBot, setHiddenBot] = useState(true);
  const toggleHiddenBot = () => {
    setHiddenBot(!hiddenBot);
  };

  const [items, setItems] = useState([
    { id: "top", place: "start_place" },
    { id: "bottom", place: "end_place" },
  ]);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    if (oldIndex !== newIndex) {
      const sortedItems = arrayMove(items, oldIndex, newIndex);
      // setItems(sortedItems);
      props.dispatch(swapAction());
    }
  };
  const clickFromInput = () => {
    props.dispatch(setTypeInput(true));
  };
  const clickToInput = () => {
    props.dispatch(setTypeInput(false));
  };
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  return (
    <div>
      {!isMobile && (
        <SortableList
          onSortEnd={onSortEnd}
          lockAxis="y"
          lockToContainerEdges={true}
          lockOffset="10%"
        >
          {items.map((item, index) => (
            <SortableItem
              key={`item-${index}`}
              index={index}
              toggleHidden={
                item.id === "top" ? toggleHiddenTop : toggleHiddenBot
              }
            >
              {item.id === "top" ? (
                <div className="Input_top_web">
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      width: "100px",
                      cursor: "grab",
                    }}
                    onMouseOver={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <img
                      src={images.six_dots}
                      alt="six dots"
                      style={{
                        display: isHovered ? "inline" : "none",
                        position: "fixed",
                      }}
                    />
                    <div className="Contains_bar_top">
                      <div className="Drag_top">
                        {" "}
                        {t("search_drag_drop_tooltip")}
                      </div>
                      <div class="Above">
                        <img
                          src="static/images/start_location_grey800_18dp.png"
                          id="round_left"
                          alt="icon"
                          style={{ opacity: 0 }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="Hover_top" onClick={clickFromInput}>
                    <InputNavigation
                      className="Gation"
                      placeholder={t("search_input_drag_drop_top")}
                      type="start_input"
                      place={item.place}
                      autofocus={true}
                    />
                    <div className="Tooltip_top">
                      {t("search_input_drag_drop_top_tooltip")}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="Input_bot_web">
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      cursor: "grab",
                    }}
                    onMouseOver={() => setIsHovered2(true)}
                    onMouseLeave={() => setIsHovered2(false)}
                  >
                    <img
                      src={images.six_dots}
                      alt="six dots"
                      style={{
                        display: isHovered2 ? "inline" : "none",
                        position: "fixed",
                      }}
                    />
                    <div className="Contains_bar">
                      {/* <div className="Drag_bot">Kéo để sắp xếp lại</div> */}
                      <div class="Below">
                        <img
                          src="static/images/place_outline_red600_18dp.png"
                          id="round_bot"
                          alt="icon"
                          style={{ opacity: 0 }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="Hover_bot" onClick={clickToInput}>
                    <InputNavigation
                      placeholder={t("search_input_drag_drop_bottom")}
                      type="end_input"
                      place={item.place}
                      autofocus={false}
                    />
                    <div className="Tooltip_bot">
                      {" "}
                      {t("search_input_drag_drop_bottom")}
                    </div>
                  </div>
                </div>
              )}
            </SortableItem>
          ))}
        </SortableList>
      )}
      {isMobile && (
        <SortableList
          onSortEnd={onSortEnd}
          lockAxis="y"
          lockToContainerEdges={true}
          lockOffset="0%"
        >
          {items.map((item, index) => (
            <SortableItem
              key={`item-${index}`}
              index={index}
              toggleHidden={
                item.id === "top" ? toggleHiddenTop : toggleHiddenBot
              }
            >
              {item.id === "top" ? (
                <div className="Input_top">
                  <div className="Hover_top" onClick={clickFromInput}>
                    <InputNavigation
                      className="Gation"
                      placeholder={t("search_input_drag_drop_top_mobile")}
                      type="start_input"
                      place={item.place}
                      autofocus={true}
                    />
                  </div>
                </div>
              ) : (
                <div className="Input_bot">
                  <div className="Hover_bot" onClick={clickToInput}>
                    <InputNavigation
                      placeholder={t("search_input_drag_drop_bottom")}
                      type="end_input"
                      place={item.place}
                      autofocus={false}
                    />
                  </div>
                </div>
              )}
            </SortableItem>
          ))}
        </SortableList>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  typeInput: state.navigationReducer.type_input,
  // from_place: state.navigationReducer.from,
  // to_place: state.navigationReducer.to,
});

export default connect(mapStateToProps)(DragAndDropContainer);
