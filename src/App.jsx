
import { Header } from "./components/Header/Header";
import './App.css';
import { Footer } from "./components/Footer/Footer";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage"
import { ErrorPage } from "./pages/ErrorPage";
import { ByCategoryItemContainerPage } from "./pages/CategoryPage";
import { ItemDetailPage } from "./pages/ItemDetailPage";
import { ItemsProvider } from "./context/ItemsContext";
import { CartPage } from "./pages/CartPage";
import { CheckoutPage } from "./pages/CheckoutPage";

export const App = () => {


  return (
    <Box
      sx={{

        margin: "0 auto", // Centrar el contenido horizontalmente
      }}
    >
      <ItemsProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/item-detail/:id" element={<ItemDetailPage />} />
            <Route
              path="/category/:category"
              element={<ByCategoryItemContainerPage />}
            />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </Router>
      </ItemsProvider>
    </Box>
  );
};
