import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas,Footer,Skillset } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <div className='relative z-0'>
          <Hero />
          <StarsCanvas />  
          <About /> 
          </div>
        </div>
        <Skillset />
        <Experience />
        <Works />
        {/* <Experience />
        <Tech />
        <Works /> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
