import React from "react";
import Haeder from "../Haeder";
import RecentProject from "../RecentProject";
import Stack from "../Stack";
import Footer from "../Footer";

function HomePage() {
  return (
    <div className="h-screen w-screen">
      <Haeder />
      <RecentProject />
      <Stack />
      <Footer />
    </div>
  );
}

export default HomePage;
