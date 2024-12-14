import arrive_start from "../static/images/route_details/arrive_start.png"
import arrive_end from "../static/images/route_details/arrive_end.png"
import arrive_left from "../static/images/route_details/arrive_left.png"
import go_straight from "../static/images/route_details/go_straight.png"
import turning from "../static/images/route_details/turning.png"
import arrive_right from "../static/images/route_details/arrive_right.png"
import depart_left from "../static/images/route_details/depart_left.png"
import depart_right from "../static/images/route_details/depart_right.png"
import slight_left from "../static/images/route_details/slight_left.png"
import slight_right from "../static/images/route_details/slight_right.png"
import turn_right from "../static/images/route_details/turn_right.png"
import turn_left from "../static/images/route_details/turn_left.png"



export function getRouteDetailsIcon(icon) {
  switch (icon) {
    case "left":
      return turn_left;
    case "right":
      return turn_right;

    case "slight left":
      return slight_left;

    case "slight right":
      return slight_right;

    case "uturn":
      return turning;
    case "sharp left":
      return slight_left;
      case "sharp right":
        return slight_right;
     
    case "straight":
      return go_straight;
    case "":
      return arrive_start;

    default:
      return null;


  }
}