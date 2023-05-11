import { Route, Routes } from "react-router-dom";
import SplashScreen from "../features/splash_screen/splashScreen";
import Authentication from "../features/authentication/authentication";
import HomePage from "../features/home/homePage";
import Profile from "../features/profile/profile";
import NotFound from "../features/notfound/notFound";
import Messages from "../features/messages/messages";
import PageHandler from "./pagehandler";

function ApplicationRouter() {
  return (
    <Routes>
      <Route path="/" element={<PageHandler child={<SplashScreen/>}/>} />
      <Route path="/login" element={<Authentication />} />
      <Route
        path="/home"
        element={<PageHandler child={<HomePage />} isProtected={true} />}
      />
      <Route
        path="/profile"
        element={<PageHandler child={<Profile />} isProtected={true} />}
      />
      <Route
        path="/messages"
        element={<PageHandler child={<Messages />} isProtected={true} />}
      />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default ApplicationRouter;
