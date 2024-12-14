import React from 'react';
import dynamic from 'next/dynamic'
import { connect } from 'react-redux';
import { getDetailByLatLngAction, getDetailByIdAction, getDetailAroundPlace } from '../redux/actions/place';
import { setBoxVisibleAction } from "../redux/actions/boxVisble";
import Router from 'next/router';

const App = dynamic(() => import('../components/App').then(mod => mod.default), {
  ssr: false
});

class Home extends React.Component {

  static async getInitialProps({ req, query, params }) {
    return { query }
  }

  constructor(props) {
    super(props);
    this.state = {
      ...props.query,
      windowWidth: 800,
    };
  }

  updateWindowWidth = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowWidth);
    this.setState({ windowWidth: window.innerWidth });
    this.updateWindowWidth();
    const pid = new URLSearchParams(window.location.search).get("pid");
    const location = new URLSearchParams(window.location.search).get("location")?.split(",");
    const pid_around = new URLSearchParams(window.location.search).get("pid_around");
    const is_iframe = new URLSearchParams(window.location.search).get("iframe");
    if (is_iframe) {
      if (location) {
        const latLng = {
          latitude: Number(location[0]),
          longitude: Number(location[1])
        }
        this.props.dispatch(getDetailByLatLngAction(latLng));
        this.props.dispatch(setBoxVisibleAction('iframe'));
      } else {
        this.props.dispatch(setBoxVisibleAction('iframe'));
      }
      return;
    } else {
      if (pid) {
        this.props.dispatch(getDetailByIdAction(pid));
        this.props.dispatch(setBoxVisibleAction('info'));
        return;
      }
      else if (pid_around) {
        this.props.dispatch(getDetailAroundPlace(pid_around));
        this.props.dispatch(setBoxVisibleAction('info'));
        return;
      } else if (location) {
        const latLng = {
          latitude: Number(location[0]),
          longitude: Number(location[1])
        }
        this.props.dispatch(getDetailByLatLngAction(latLng));
        this.props.dispatch(setBoxVisibleAction('info'));
        return;
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.boxVisible !== "search" && this.props.boxVisible === "search") {
      Router.push({
        pathname: `/`,
        query: null
      })
    }
  }

  render() {
    return <React.Fragment>
      {/* {isMobile ? <AppMobile /> : <App windowWidth={this.state.windowWidth} />} */}
      <App />
    </React.Fragment>
  }
}

const mapStateToProps = state => {
  return {
    boxVisible: state.boxVisibleReducer.box_visible,
  }
}

export default connect(mapStateToProps)(Home)
