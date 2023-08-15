 import {Route,BrowserRouter,Switch } from  'react-router-dom'
import Navbar from './Components/Layout/Header.jsx';
import Footer from './Components/Layout/Footer';
import Hero from './Components/Layout/Hero'
import Home from './Components/Home/Home';
import Terms from './Components/Terms/Term';
import HowitWorks from './Components/HowItWorks/HowitWorks';
import Contact from './Components/Contact/ContactUs';
import About from './Components/About/AboutUs';
import Merchant from './Components/Merchant/Merchant';
import BlogListing from './Components/Blogs/Landing/Landing';
import Blog1 from './Components/Blogs/BlogDetails/one';
import Blog2 from './Components/Blogs/BlogDetails/two';
import Blog3 from './Components/Blogs/BlogDetails/three';
import Blog4 from './Components/Blogs/BlogDetails/four';
import Blog5 from './Components/Blogs/BlogDetails/five';
import Blog6 from './Components/Blogs/BlogDetails/six';
import Blog7 from './Components/Blogs/BlogDetails/seven';
import Blog8 from './Components/Blogs/BlogDetails/eight.jsx'
import Blog9 from './Components/Blogs/BlogDetails/nine.jsx'
import Blog10 from './Components/Blogs/BlogDetails/ten.jsx'
import Blog11 from './Components/Blogs/BlogDetails/eleven.jsx'
import AvanueList from './Components/Avanue/AvanueList.jsx';


import ScrollToTop from './Components/ScrollToTop.js';
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'



function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    
    <BrowserRouter>
    <ScrollToTop />
      <Switch>
          <div className="Wrapper">
              <Route exact path="*" component={Navbar}/>
              <Route exact path="/" component={Home}/>
              <Route exact path="/terms-and-conditions" component={Terms}/>
              <Route exact path="/how-it-works" component={HowitWorks}/>
              <Route exact path="/contact-us" component={Contact}/>
              <Route exact path="/about-us" component={About}/>
              <Route exact path="/merchant" component={Merchant}/>
              <Route exact path="/avanuelist-by-cities" component={AvanueList}/>
              <Route exact path="/blog-listing" component={BlogListing}/>
              <Route exact path="/blog/1" component={Blog1}/>
              <Route exact path="/blog/2" component={Blog2}/>
              <Route exact path="/blog/3" component={Blog3}/>
              <Route exact path="/blog/4" component={Blog4}/>
              <Route exact path="/blog/5" component={Blog5}/>
              <Route exact path="/blog/6" component={Blog6}/>
              <Route exact path="/blog/7" component={Blog7}/>
              <Route exact path="/blog/8" component={Blog8}/>
              <Route exact path="/blog/9" component={Blog9}/>
              <Route exact path="/blog/10" component={Blog10}/>
              <Route exact path="/blog/11" component={Blog11}/>

              <Route exact path="*" component={Hero}/>
              <Route exact path="*" component={Footer}/>
          </div>
      </Switch>
    </BrowserRouter>
   
  );
}



export default App;

