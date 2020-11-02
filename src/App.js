import React from "react";
import "./styles.css";

import { Sidebar } from "./components/sidebar";
import Navbar from "./components/navbar";
import { ThumbContainer } from "./components/thumb-container";

import fireIcon from "./icons/iconfinder_Icon_Element_Fire_03_513726.png";
import homeIcon from "./icons/iconfinder_ic_home_48px_3669170.png";
import playlist from "./icons/iconfinder_ic_playlist_play_48px_3669290.png";
import subscriptionsIcon from "./icons/iconfinder_ic_subscriptions_48px_3669213.png";
import videoIcon from "./icons/iconfinder_ic_video_call_48px_3669144.png";
import squareIcon from "./icons/iconfinder_ic_view_module_48px_3669149.png";
import bellIcon from "./icons/iconfinder_icon-ios7-bell_211694.png";
import logo from "./icons/iconfinder_youtube_294703.png";

import vid1 from "./images/video1.jpg";
import vid2 from "./images/video2.jpg";
import vid3 from "./images/video3.jpg";
import vid4 from "./images/video4.jpg";
import vid5 from "./images/video5.jpg";
import vid6 from "./images/video6.jpg";
import vid7 from "./images/video7.jpg";
import vid8 from "./images/video8.jpg";

const menuItems = [
  {
    icon: homeIcon,
    title: "Principal"
  },
  {
    icon: fireIcon,
    title: "Tendencias"
  },
  {
    icon: subscriptionsIcon,
    title: "Suscripciones"
  },
  {
    icon: playlist,
    title: "Biblioteca"
  }
];

const navMenu = [
  {
    icon: videoIcon
  },
  {
    icon: squareIcon
  },
  {
    icon: bellIcon
  }
];

const menuVideo = [
  {
    video: vid1
  },
  {
    video: vid2
  },
  {
    video: vid3
  },
  {
    video: vid4
  },
  {
    video: vid5
  },
  {
    video: vid6
  },
  {
    video: vid7
  },
  {
    video: vid8
  }
];

function App() {
  return (
    <div className="App">
      <Sidebar icons={menuItems} />
      <Navbar logo={logo} icons={navMenu} />
      <ThumbContainer videos={menuVideo} />
    </div>
  );
}

export default App;
