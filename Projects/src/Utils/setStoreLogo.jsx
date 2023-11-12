import {FaSteam} from 'react-icons/fa'
import {SiEpicgames} from 'react-icons/si'
import {BiLogoPlayStore} from 'react-icons/bi'
import {FaAppStore} from 'react-icons/fa'
import {SiGogdotcom} from 'react-icons/si'
import {FaItchIo} from 'react-icons/fa'
import {FaPlaystation} from 'react-icons/fa'
import {FaXbox} from 'react-icons/fa'
import {BsNintendoSwitch} from 'react-icons/bs'

const storesData = [
    { id: 1, name: "Steam", icon: <FaSteam /> },
    { id: 3, name: "Playstation Store", icon: <FaPlaystation/> },
    { id: 2, name: "Xbox Store", icon: <FaXbox/> },
    { id: 4, name: "App Store", icon: <FaAppStore /> },
    { id: 5, name: "GOG", icon: <SiGogdotcom /> },
    { id: 6, name: "Nintendo Store", icon: <BsNintendoSwitch /> },
    { id: 7, name: "Xbox 360 Store", icon: <FaXbox /> },
    { id: 8, name: "Google Play", icon: <BiLogoPlayStore /> },
    { id: 9, name: "itch.io", icon: <FaItchIo /> },
    { id: 11, name: "Epic Games", icon: <SiEpicgames /> },
  ];
  export default storesData;