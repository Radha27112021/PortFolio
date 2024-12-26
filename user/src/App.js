import React, { useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Home from "./pages/Home/Home";
import Loader from "./components/Loader";
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Admin/Login";
import {
  SetPortfolioData,
  HideLoading,
  ShowLoading,
  ReloadData,
} from "./redux/rootSlice";
function App() {
  const dispatch = useDispatch();
  const { loading, portfolioData, reloadData } = useSelector(
    (state) => state.root
  );
  // Use useCallback to memoize the function and prevent unnecessary re-renders
  const getPortfolioData = useCallback(async () => {
    dispatch(ShowLoading()); // Show loader while fetching data
    try {
      const response = await axios.get("/api/portfolio/get-portfolio-data");
      dispatch(SetPortfolioData(response.data));
      dispatch(HideLoading());
      dispatch(ReloadData(false));
    } catch (error) {
      console.error("Error fetching portfolio data:", error);
    } finally {
      dispatch(HideLoading());
    }
  }, [dispatch]); // Memoizing with dependency on 'dispatch'
  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, [portfolioData, getPortfolioData]);
  useEffect(() => {
    if (reloadData) {
      getPortfolioData();
    }
  }, [reloadData, getPortfolioData]);
  return (
    <>
      {" "}
      <BrowserRouter>
        {loading ? <Loader /> : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="admin-login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
