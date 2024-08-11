
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { PrivacyPolicyUpperLower } from './pages/PrivacyPolicyUpperLower';
import { PrivacyPolicyPonderacion } from './pages/PrivacyPolicyPonderacion';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy-upper-lower" element={<PrivacyPolicyUpperLower />} />    
        <Route path="/privacy-policy-ponderacion-notas" element={<PrivacyPolicyPonderacion />} />    
      </Routes>
    </BrowserRouter>
  );
}

export default App