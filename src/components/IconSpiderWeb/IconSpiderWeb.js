import React from "react";
import "../../styles/global.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faAddressBook,
  faBath,
  faShower,
  faThermometerHalf,
  faBalanceScale,
  faBatteryHalf,
  faBell,
  faBicycle,
  faBolt,
  faBullhorn,
  faCommenting,
  faComments,
  faEnvelope,
  faGift,
  faWineGlass,
  faGlobe,
  faGraduationCap,
  faHeart,
  faHourglass,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";

export default function IconSpiderWeb(props) {
  const NO_OF_TRAILS = 15;
  const ICONS_NAMES = [
    faCoffee,
    faAddressBook,
    faBath,
    faShower,
    faThermometerHalf,
    faBalanceScale,
    faBatteryHalf,
    faBell,
    faBicycle,
    faBolt,
    faBullhorn,
    faCommenting,
    faComments,
    faEnvelope,
    faGift,
    faWineGlass,
    faGlobe,
    faGraduationCap,
    faHeart,
    faHourglass,
    faMobileScreenButton,
    faCoffee,
    faAddressBook,
    faBath,
    faShower,
    faThermometerHalf,
    faBalanceScale,
    faBatteryHalf,
    faBell,
    faBicycle,
    faBolt,
    faBullhorn,
    faCommenting,
    faComments,
    faEnvelope,
    faGift,
    faWineGlass,
    faGlobe,
    faGraduationCap,
    faHeart,
    faHourglass,
    faMobileScreenButton,
  ];
  const ICON_TRAIL = (
    <div className="opacity-10 z-10 -top-20 -left-20 position-relative w-full d-flex p-1 whitespace-nowrap text-black">
      {ICONS_NAMES.map((element, index) => (
        <FontAwesomeIcon
          key={index}
          className="text-3xl p-2 rotate-30 hover:text-primary-blue transition-all duration-1000 hover:transition-none"
          // icon={ICONS_NAMES[Math.round(Math.random() * 20)]}
          icon={ICONS_NAMES[index]}
        />
      ))}
    </div>
  );
  const list = [];

  for (let i = 0; i < NO_OF_TRAILS; i++) {
    list.push(ICON_TRAIL);
  }

  return (
    <div className="icon-spider-web-container overflow-hidden bg-site-primary w-full h-screen pt-20 p-10 relative d-flex flex-column">
      {list}
      <div className="position-absolute top-0 left-0 w-full h-full">
        {props.children}
      </div>
    </div>
  );
}
