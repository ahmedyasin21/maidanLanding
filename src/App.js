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
import ScrollToTop from './Components/ScrollToTop.js';




function App() {
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
              <Route exact path="/blog-listing" component={BlogListing}/>
              <Route exact path="/blog/1" component={Blog1}/>
              <Route exact path="/blog/2" component={Blog2}/>
              <Route exact path="/blog/3" component={Blog3}/>
              <Route exact path="/blog/4" component={Blog4}/>
              <Route exact path="/blog/5" component={Blog5}/>
              <Route exact path="/blog/6" component={Blog6}/>
              <Route exact path="/blog/7" component={Blog7}/>

              <Route exact path="*" component={Hero}/>
              <Route exact path="*" component={Footer}/>
          </div>
      </Switch>
    </BrowserRouter>
   
  );
}



export default App;

