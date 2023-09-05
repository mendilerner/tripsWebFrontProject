import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Trips from "./Trips";
import UserLogin from "./UserLogin";
import UserRegistration from "./UserRegistration";
import TripDetail from "./TripDetail";
import NoMatch from "./NoMatch";
import NewTripForm from "./NewTripForm";
import UpdateTripForm from "./UpdateTripForm";
function MyRouter(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/sighn-hp" element={<UserLogin />} />
        <Route path="/newTripForm" element={<NewTripForm />} />
        <Route path="/updateTripForm" element={<UpdateTripForm name="1" />} />
        <Route path="/tripDetail" element={<UserRegistration />} />
        <Route path="/trips/:id" element={<TripDetail />} />
      </Routes>
    </Router>
  );
}
export default MyRouter;
