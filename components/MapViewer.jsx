import React, { useEffect, useState, useRef } from "react";
import ReactDOM from 'react-dom';
import axios from "axios";
import { Drawer, Avatar, Checkbox, Divider, Tooltip, Popover, Modal } from 'antd';
import { SearchOutlined, MoreOutlined, UpOutlined, DownOutlined, EnvironmentFilled, ArrowLeftOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons';
import '../styles/_main.css'


function MapViewer({ mid, lat, long, z }) {
  const [open, setOpen] = useState(true);
  const [openDetails, setOpenDetails] = useState(false);
  const [layer, setLayer] = useState([])
  const [item, setItem] = useState([])
  const [name, setName] = useState(null)
  const [description, setDescription] = useState(null)
  const mapRef = useRef(null);
  const [markers, setMarkers] = useState([]);
  const [location, setLocation] = useState([])
  const [expandedItems, setExpandedItems] = useState({});
  const [detail, setDetail] = useState({});
  const [itemId, setItemId] = useState(null)
  const [time, setTime] = useState(null)
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [key, setKey] = useState(null)
  const [avatar, setAvatar] = useState(null)
  const [popoverVisible, setPopoverVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEmbedOpen, setIsModalEmbedOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [searchItem, setSearchItem] = useState([])
  const [searchAddress, setSearchAddress] = useState(null)
  const [linkEmbed, setLinkEmbed] = useState('')
  const [styleMap, setStyleMap] = useState('')

  useEffect(() => {
    if (key) {
      if (lat && long && z) {
        goongjs.accessToken = key;
        var map = new goongjs.Map({
          container: 'map',
          style: styleMap,
          center: [long, lat],
          zoom: z
        });
     
        mapRef.current = map;
        return () => {
          map.remove();
        };
      }

    } else {
      if (lat && long && z) {
        goongjs.accessToken = key;
        var map = new goongjs.Map({
          container: 'map',
          style: styleMap,
          center: [long, lat],
          zoom: z
        });
        
        mapRef.current = map;
        return () => {
          map.remove();
        };
      }
    }


  }, [long, lat, z, key, styleMap])

  const showModal = () => {
    setIsModalOpen(true);
    setPopoverVisible(false)
  };
  const handleOk = () => {
    setIsModalOpen(false);
    setIsModalEmbedOpen(false)
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setIsModalEmbedOpen(false)
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onCloseSearch = () => {
    setOpenSearch(false)
    setSearchItem([])
    setSearchAddress('')
  }


  const hide = () => {
    setPopoverVisible(false)
    setOpen(false)
  };

  const onCloseDetail = () => {
    setItemId(null)
    setOpenDetails(false);
  };
  const onOpenSearch = () => {
    setOpenSearch(true)
  }

  const onChange = (event, e, index) => {
    const checked = event.target.checked
    if (checked) {
      setItem([...item, e])
    } else {
      setItem(item.filter(x => x.id !== e.id))
    }
  };

  const handleFlyTo = (e) => {
    setDetail(e)
    setItemId(e.id)
    setOpenDetails(true);
    setLocation([e.long, e.lat])
  }

  const handleIsShow = (e, index) => {
    setExpandedItems(prevState => ({
      ...prevState,
      [e.id]: !prevState[e.id]
    }));
  }

  const handelSearch = (e) => {
    setSearchAddress(e.target.value)
    if (e.target.value.length > 0) {
      const filteredPoints = layer.map(layers => {
        return layers.points.filter(point => point.name.toLowerCase().includes(e.target.value));
      });
      const flattenedPoints = [].concat(...filteredPoints);
      setSearchItem(flattenedPoints);
    } else {
      setSearchItem([]);
    }
  }


  const handelEmbed = () => {
    setPopoverVisible(false)
    setIsModalEmbedOpen(true)
  }

  const handleZoom = () => {
    mapRef.current.flyTo({
      center: [
        long - 0.002,
        lat
      ],
      zoom: 16,
      essential: true
    })
  }
  const handleDirection = (detail) => {
    window.open(`/?direction=${lat}%2C${long}%26${detail.lat}%2C${detail.long}`, '_blank');
  }

  const getPoints = async (mid) => {

    try {
      const points = await axios.get(`${MAP_URL}/maps/get-all-map-data-by-mid/${mid}`)
      if (points.data.status === 'success') {
        const { data } = points.data
        setLayer(data.layers)
        setName(data.name)
        setDescription(data.description)
        setAvatar(data.user.avatar)
        setTime(data.created_at)
        setKey(data.map_key)
        setUserEmail(data.user.email)
        setUserName(data.user.first_name + " " + data.user.last_name)
        setLinkEmbed(data.link)
        setStyleMap(data.style)
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (layer.length > 0) {
      const filterLayer = layer.filter(e => e.is_active === 1 && e.points.length > 0)
      setItem(filterLayer)
    }
  }, [layer])


  useEffect(() => {
    if (mid) {
      getPoints(mid)
    }
  }, [mid])

  useEffect(() => {
    return () => {
      markers?.flat().forEach(marker => marker?.remove());
    };
  }, [markers])

  useEffect(() => {
    if (location.length > 0) {
      mapRef.current.flyTo({
        center: [
          location[0] - 0.002,
          location[1]
        ],
        zoom: 16,
        essential: true
      })
    }
  }, [location])

  useEffect(() => {
    const newMarkers = item.map((e) => {

      return e.points.map(i => {
        var el = document.createElement('div');
        el.className = 'marker';
        ReactDOM.render(<svg fill="#cc4700" version="1.1" id="Capa_1"
          width="25px" height="25px" viewBox="0 0 425.963 425.963">
          <g>
            <path d="M213.285,0h-0.608C139.114,0,79.268,59.826,79.268,133.361c0,48.202,21.952,111.817,65.246,189.081
       c32.098,57.281,64.646,101.152,64.972,101.588c0.906,1.217,2.334,1.934,3.847,1.934c0.043,0,0.087,0,0.13-0.002
       c1.561-0.043,3.002-0.842,3.868-2.143c0.321-0.486,32.637-49.287,64.517-108.976c43.03-80.563,64.848-141.624,64.848-181.482
       C346.693,59.825,286.846,0,213.285,0z M274.865,136.62c0,34.124-27.761,61.884-61.885,61.884
       c-34.123,0-61.884-27.761-61.884-61.884s27.761-61.884,61.884-61.884C247.104,74.736,274.865,102.497,274.865,136.62z"/>
          </g>
        </svg>, el);
        if (itemId === i.id) {
          el.style.backgroundColor = '#cccccc'
        }
        el.addEventListener('click', function () {
          setItemId(i.id)
          setDetail(i)
          setOpenDetails(true);
        })
        return new goongjs.Marker(el)
          .setLngLat([i.long, i.lat])
          .addTo(mapRef.current)
      })
    });
    setMarkers(newMarkers);
  }, [item, itemId, key, styleMap])


  function formatTime(inputTime) {
    const currentTime = new Date();
    const inputDate = new Date(inputTime);
    const timeDifference = currentTime - inputDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (inputDate.toDateString() === currentTime.toDateString()) {
      if (seconds < 60) {
        return 'Xuât bản vừa xong';
      } else if (minutes < 60) {
        return ` Xuất bản ${minutes} phút trước`;
      } else {
        return ` Xuất bản ${hours} giờ trước`;
      }
    } else {
      if (days === 1) {
        return 'Xuất bản ngày hôm qua';
      } else {
        return `Xuất bản ${days} ngày trước`;
      }
    }
  }

  const formattedTime = formatTime(time);
  const embedLink = `<iframe src=${linkEmbed} width="640" height="480"></iframe>`
  return (
    <>
      <div className="bl_app" >
        <div className="map-viewer" >
          <div id='map'></div>
          <Drawer headerStyle={{ padding: '0' }} title={
            <>
              <div className="bl_app-infor-viewer" >
                <div className="bl_app-header-viewer">
                  <MenuOutlined style={{ color: 'white' }} />
                  <div className="bl_app-name" onClick={showModal}>
                    {avatar ? <img src={`${IMAGE_URL}${avatar}`} className="avatar" /> : <Avatar shape="cỉcle" size={36} icon={avatar ? avatar : <UserOutlined />} />}
                    <div className="bl_app-title">
                      <p className="el_app-title-p">{name}</p>
                      <span className="el_app-name-viewer">{userName}</span>
                    </div>
                  </div>
                  <Modal title={<h3>Chi tiết bản đồ</h3>} visible={isModalOpen} onOk={handleOk} centered onCancel={handleCancel} closeIcon={<></>} width={300} footer={[<a className="el_model-a" onClick={handleOk}>HOÀN TẤT</a>]}>
                    <span className="el_detail-viewer--span">Tiêu đề</span>
                    <h3 className="el_detail-viewer--h3">{name}</h3>
                    <span className="el_detail-viewer--span">Mô tả</span>
                    <h3 className="el_detail-viewer--h3">{description}</h3>
                  </Modal>
                  <Modal title={<h3>Nhúng bản đồ này</h3>} visible={isModalEmbedOpen} onOk={handleOk} centered onCancel={handleCancel} closeIcon={<></>} width={500} >
                    <p >Để nhúng bản đồ này vào trang web của riêng bạn, sao chép mã HTML sau đây và dán nó vào mã nguồn của trang của bạn:</p>
                    <h3 className="el_detail-viewer--h3">{embedLink}</h3>
                  </Modal>
                </div>
                <div className="bl_app-action-viewer">
                  <SearchOutlined style={{ fontSize: '20px', color: '#fff', cursor: 'pointer' }} onClick={onOpenSearch} />

                  <Popover placement="bottom" trigger="click" visible={popoverVisible} onVisibleChange={(visible) => setPopoverVisible(visible)}
                    content={
                      <>
                        <div className="bl_app-action-btn" onClick={hide} key={1}>Thu gọn chú giải bản đồ</div>
                        <div className="bl_app-action-btn" onClick={showModal} key={2}>Chi tiết bản đồ</div>
                        {/* <div className="bl_app-action-btn" key={3}>Sao chép bản đồ</div> */}
                        {/* <div className="bl_app-action-btn" key={4}>In bản đồ</div> */}
                        <div className="bl_app-action-btn" key={5} onClick={handleZoom}>Thu phóng tới khung hình</div>
                        <div className="bl_app-action-btn" key={6} onClick={handelEmbed}>Nhúng bản đồ</div>
                        {/* <div className="bl_app-action-btn" key={7}>Tải xuống KML</div> */}
                      </>
                    }>
                    <MoreOutlined style={{ fontSize: '20px', color: '#fff', cursor: 'pointer' }} />
                  </Popover>

                </div>
              </div>
              <div className="bl_view-viewer">
                <div className="bl_title"><p className="el_span">{userEmail}</p>
                  <p className="el_span">{formattedTime}</p></div>
              </div>
            </>}
            placement="left" width={431} visible={open} getContainer={false} style={{ position: 'absolute' }} closable={false} mask={false}>
            {layer.map((e, index) => e.points.length > 0 ?
              <><div className="bl_list" key={e.id}>
                <div className="bl_list-layer" >
                  <Checkbox onChange={(event) => onChange(event, e, index)} defaultChecked={e.is_active}></Checkbox><h3 className="el_h3">{e?.name ? e?.name : "Lớp không có tiêu đề"}</h3>
                </div>
                <div style={{ display: 'flex' }}>
                  {item.includes(e) ?
                    <>{expandedItems[e.id] ? <UpOutlined onClick={() => handleIsShow(e, index)} /> : <DownOutlined onClick={() => handleIsShow(e, index)} />}
                      <div className="bl_list-points">
                        <div className="bl_list-folder">
                          <svg fill="#cc4700" version="1.1" id="Capa_1"
                            width="18px" height="18px" viewBox="0 0 425.963 425.963">
                            <g>
                              <path d="M213.285,0h-0.608C139.114,0,79.268,59.826,79.268,133.361c0,48.202,21.952,111.817,65.246,189.081
         c32.098,57.281,64.646,101.152,64.972,101.588c0.906,1.217,2.334,1.934,3.847,1.934c0.043,0,0.087,0,0.13-0.002
         c1.561-0.043,3.002-0.842,3.868-2.143c0.321-0.486,32.637-49.287,64.517-108.976c43.03-80.563,64.848-141.624,64.848-181.482
         C346.693,59.825,286.846,0,213.285,0z M274.865,136.62c0,34.124-27.761,61.884-61.885,61.884
         c-34.123,0-61.884-27.761-61.884-61.884s27.761-61.884,61.884-61.884C247.104,74.736,274.865,102.497,274.865,136.62z"/>
                            </g>
                          </svg> <p className="bl_list-p">Tất cả các mục</p></div>
                        {e.points.map(i =>
                          <div className="bl_list-name" key={i.id}>

                            {expandedItems[e.id] ? <p className="bl_list-detail" onClick={() => handleFlyTo(i)}>{i.name ? i.name : "Chưa có tiêu đề"}</p> : ""}</div>)}
                      </div></> : ""}
                </div>
              </div>
                <Divider />
              </> : ""
            )}
          </Drawer>
        </div>
        <div className="map-btn" onClick={showDrawer}><h3 className="map-btn-h3">CHÚ GIẢI BẢN ĐỒ</h3></div>
      </div>
      <Drawer headerStyle={{ backgroundColor: '#1677ff' }}
        zIndex={1001}
        title={<div className="detail_title">
          <ArrowLeftOutlined onClick={onCloseDetail} style={{ color: "white" }} />
          <p className="el_detail-viewer--p">{detail.name}</p>
          <div className="direction" onClick={() => handleDirection(detail)}>
            <svg xmlns="http://www.w3.org/2000/svg" height="22px" fill="white"
              viewBox="0 0 512 512">
              <path
                d="M227.7 11.7c15.6-15.6 40.9-15.6 56.6 0l216 216c15.6 15.6 15.6 40.9 0 56.6l-216 216c-15.6 15.6-40.9 15.6-56.6 0l-216-216c-15.6-15.6-15.6-40.9 0-56.6l216-216zm87.6 137c-4.6-4.6-11.5-5.9-17.4-3.5s-9.9 8.3-9.9 14.8v56H224c-35.3 0-64 28.7-64 64v48c0 13.3 10.7 24 24 24s24-10.7 24-24V280c0-8.8 7.2-16 16-16h64v56c0 6.5 3.9 12.3 9.9 14.8s12.9 1.1 17.4-3.5l80-80c6.2-6.2 6.2-16.4 0-22.6l-80-80z" />
            </svg>
          </div>
        </div>}
        placement="left" onClose={onCloseDetail} width={431} visible={openDetails} getContainer={false} closable={false} mask={false}>
        <span className="detail_title-span">Tên</span>
        <p className="detail_title-p">{detail.name ? detail.name : "Không có tên"}</p>
        <span className="detail_title-span">Mô tả</span>
        <p className="detail_title-p">{detail.description ? detail.description : "Không có mô tả"}</p>
        <span className="detail_title-span">lat</span>
        <p className="detail_title-p">{detail.lat}</p>
        <span className="detail_title-span">long</span>
        <p className="detail_title-p">{detail.long}</p>
        <span className="detail_title-span">Thời gian tạo</span>
        <p className="detail_title-p">{detail.created_at ? detail.created_at : 'Chưa xác định'}</p>
        <span className="detail_title-span">Thời gian cập nhật</span>
        <p className="detail_title-p">{detail.updated_at ? detail.updated_at : 'Chưa xác định'}</p>
      </Drawer>
      <Drawer
        headerStyle={{ backgroundColor: '#EEEEEE' }}
        title={<div className="bl_search">
          <ArrowLeftOutlined onClick={onCloseSearch} />
          <input className="bl_search-input" onChange={handelSearch} value={searchAddress} />
          <div className="direction"></div>
        </div>}
        placement="left" onClose={onCloseSearch} width={431} visible={openSearch} getContainer={false} closable={false} mask={false} >
        {searchItem.map(i => <div className="bl_list-name" key={i.id}>
          <Tooltip title={i.name}>
            <p className="bl_list-p" ><svg fill="#cc4700" version="1.1" id="Capa_1"
              width="18px" height="18px" viewBox="0 0 425.963 425.963">
              <g>
                <path d="M213.285,0h-0.608C139.114,0,79.268,59.826,79.268,133.361c0,48.202,21.952,111.817,65.246,189.081
         c32.098,57.281,64.646,101.152,64.972,101.588c0.906,1.217,2.334,1.934,3.847,1.934c0.043,0,0.087,0,0.13-0.002
         c1.561-0.043,3.002-0.842,3.868-2.143c0.321-0.486,32.637-49.287,64.517-108.976c43.03-80.563,64.848-141.624,64.848-181.482
         C346.693,59.825,286.846,0,213.285,0z M274.865,136.62c0,34.124-27.761,61.884-61.885,61.884
         c-34.123,0-61.884-27.761-61.884-61.884s27.761-61.884,61.884-61.884C247.104,74.736,274.865,102.497,274.865,136.62z"/>
              </g>
            </svg> {i.name}</p>
          </Tooltip>
          {<p className="bl_list-detail-location" onClick={() => handleFlyTo(i)}>lat: {i.lat}, long: {i.long}</p>}
        </div>)}
      </Drawer>
    </>
  )
}

export default MapViewer;