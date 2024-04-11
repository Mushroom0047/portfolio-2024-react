
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { PrivacyPolicyUpperLower } from './pages/PrivacyPolicyUpperLower';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy-upper-lower" element={<PrivacyPolicyUpperLower />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App