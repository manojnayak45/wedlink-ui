import { Routes, Route, Navigate } from "react-router-dom";
import Invitation from "./pages/InvitationPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/invitation/1234" />} />
      <Route path="/invitation/:guestId" element={<Invitation />} />
    </Routes>
  );
}

export default App;
