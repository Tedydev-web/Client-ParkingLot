import React from 'react';
import { connect } from 'react-redux';
import { STYLE_URL } from "../consts";
import normal_map_img from "../static/images/normal_map.png";
import satellite_img from "../static/images/satellite.jpeg";
import { Avatar } from "antd";
import Marker from "../components/Marker";
import ReactDOMServer from 'react-dom/server';

class Home extends React.Component {

  static async getInitialProps({ req, query, params }) {
    return { query }
  }
  constructor(props) {
    super(props);
    this.state = {
      style: STYLE_URL.NORMAL,
      styleNormal: STYLE_URL.NORMAL,
      styleEarth: STYLE_URL.SATELLITE
    };
  }

  changeStyle = () => {
    const { style } = this.state;
    if (style === STYLE_URL.SATELITE) {
      this.setState({
        style: STYLE_URL.NORMAL
      });
      this.map.setStyle(STYLE_URL.NORMAL);
    } else {
      this.setState({
        style: STYLE_URL.SATELITE
      });
      this.map.setStyle(STYLE_URL.SATELITE);
    }
  };

  componentDidMount() {
    const lat = new URLSearchParams(window.location.search).get("lat");
    const lng = new URLSearchParams(window.location.search).get("lon");
    const key = new URLSearchParams(window.location.search).get("api_key");
    const z = new URLSearchParams(window.location.search).get("z");
    if (lat && lng) {
      goongjs.accessToken = STYLE_KEY;
      this.map = new goongjs.Map({
        container: 'map',
        style: STYLE_URL.NORMAL,
        center: [lng, lat],
        minZoom: 5,
        zoom: z || 15,
        maxZoom: 18,
      });
      this.navigation = new goongjs.NavigationControl();
      this.map.addControl(this.navigation);
      this.map.on("style.load", () => {
        this.map.resize();
        const el = document.createElement('div');
        el.innerHTML = ReactDOMServer.renderToStaticMarkup(<Marker size={32} />);
        const marker = new goongjs.Marker(el, { anchor: "bottom" })
          .setLngLat([lng, lat])
          .addTo(this.map);
      })
      this.map.on("style.load", () => {
        this.map?.addLayer({
          id: "3d-buildings",
          source: "composite",
          "source-layer": "VN_Building",
          filter: ["==", "extrude", "true"],
          type: "fill-extrusion",
          minzoom: 15,
          paint: {
            "fill-extrusion-color": "#aaa",
            "fill-extrusion-height": {
              type: "identity",
              property: "height",
            },
            "fill-extrusion-base": {
              type: "identity",
              property: "min_height",
            },
            "fill-extrusion-opacity": 0.4,
          },
        });
      })
    }
  }

  render() {
    const { style } = this.state;
    return <>
      <div id="map"></div>
      <Avatar
        shape="square"
        size={42}
        onClick={this.changeStyle}
        className="change-status-button"
        style={{
          backgroundImage:
            style === STYLE_URL.NORMAL
              ? `url(${satellite_img})`
              : `url(${normal_map_img})`,
        }}
      />
    </>
  }
}
export default connect(null)(Home)
