import React, { Suspense } from "react";
import LoadingComponent from "../components/loadingComponent/LoadingComponent";
import { Routes, Route } from "react-router-dom";
import LayoutComponent from "../components/layouts/LayoutComponent";
import HomePage from "../pages/homePage/HomePage";
import WhyUs from "../pages/whyUs/WhyUs";
import Kamis from "../pages/Kamis/Kamis";

const RouteManagement = () => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <LayoutComponent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/whyus" element={<WhyUs />} />
          <Route path="/kamis" element={<Kamis />} />
        </Routes>
      </LayoutComponent>
    </Suspense>
  );
};

export default RouteManagement;
