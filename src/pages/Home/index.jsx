import Header from "../../componens/pages/Home/Header/Header";
import { AboutUs } from "../../componens/pages/Home/AboutUs";
import Timeline from "../../componens/pages/Home/Timeline";
// import EventsActivities from "../../componens/pages/Home/EventsActivities";
// import SponsorsPartners from "../../componens/pages/Home/SponsorsPartners";
// import Speackers from "../../componens/pages/Home/Speakers"
import Prince from "../../componens/pages/Home/Prince";
import SessionCon from "../../componens/pages/Home/SessionCon";
import Objectives from "../../componens/pages/Home/Objectives";
import CounNumber from "../../componens/pages/Home/CounNumber";
import Activities from "../../componens/pages/Home/Activities";
// import Speakers from "../../componens/pages/Home/Speakers";
import Participatingparties from "../../componens/pages/Home/Participatingparties";
import Supporters from "../../componens/pages/Home/Supporters";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSession } from "../../store/actions/session-action";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchSession());
  })
  return (
    <div className="Home">
      <Header />
      <AboutUs />
      <Prince />
      <CounNumber/>
      <Objectives />
      <SessionCon />
      <Timeline />
      <Activities />
      {/* <Speakers /> */}
      <Supporters />
      <Participatingparties />
      {/* <SponsorsPartners />
      <Timeline />
      <EventsActivities />
      <Speackers /> */}
    </div>
  );
}
