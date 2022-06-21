import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/routes/home";
import Navigation from "./components/routes/navigation/navigation";
import Authentication from "./components/routes/authentication/authentication";
import SignUpForm from "./components/routes/sign-up-form/sign-up-form";
import Shop from "./components/routes/shop/shop";
import Checkout from "./components/checkout/checkout";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
