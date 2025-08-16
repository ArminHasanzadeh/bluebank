import React from "react";
import Header from "./component/Nav/Header/header";
import Main from "./page/Main/Main";
import Footer from "./component/Nav/Footer/Footer";

function App() {
  return (
    
      <section className="flex-col flex justify-center items-center  ">
      <Header />
      <Main />
      <Footer />
      </section>
    
  );
}

export default App;
