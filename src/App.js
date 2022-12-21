import {Route,BrowserRouter,Switch } from  'react-router-dom'

import Navbar from './Components/Layout/Header.jsx';
import Footer from './Components/Layout/Footer';
import Home from './Components/Home/Home';
import Terms from './Components/Terms/Term';
import HowitWorks from './Components/HowItWorks/HowitWorks';
import Landing from './Components/Blogs/Landing/Landing';
import Contact from './Components/Contact/ContactUs';
import About from './Components/About/AboutUs';
import Merchant from './Components/Merchant/Merchant';
import BlogListing from './Components/Blogs/Landing/Landing';




function App() {
  return (
    <BrowserRouter>
      <Switch>
          <div className="Wrapper">
              <Route exact path="*" component={Navbar}/>
              <Route exact path="/" component={Home}/>
              <Route exact path="/terms-and-conditions" component={Terms}/>
              <Route exact path="/how-it-works" component={HowitWorks}/>
              <Route exact path="/contact-us" component={Contact}/>
              <Route exact path="/about-us" component={About}/>
              <Route exact path="/merchant" component={Merchant}/>
              <Route exact path="/blog-listing" component={BlogListing}/>
              <Route exact path="*" component={Footer}/>
          </div>
      </Switch>
    </BrowserRouter>
   
  );
}



export default App;
