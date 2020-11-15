import React, {Component} from 'react'
import TheNav from './nav'
import Profile from './pages/profile';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact'
import Footer from './footer'

class Port extends Component {
    state = {
      currentPage: "profile"
    };
  
    handlePageChange = page => {
      this.setState({ currentPage: page });
    };
  
    renderPage = () => {
        if (this.state.currentPage === "profile") {
          return <Profile/>;
        } else if (this.state.currentPage === "portfolio") {
          return <Portfolio />;
        } else if (this.state.currentPage === "contact") {
          return <Contact />;
        } 
      };
    render() {
      return (
        <div>
          <TheNav
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
          />
            {this.renderPage()}
            <Footer/>
        </div>
      );
    }
  }
  
  export default Port;