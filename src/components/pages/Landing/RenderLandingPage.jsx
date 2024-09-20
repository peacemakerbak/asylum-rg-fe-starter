import React from 'react';
// ADD IMPORTS BACK FOR GRAPHS SECTION
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png'; // Image for grant rates by office
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png'; // Image for grant rates by nationality
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png'; // Image for grant rates over time
import HrfPhoto from '../../../styles/Images/paper-stack.jpg'; 
import '../../../styles/RenderLandingPage.less'; 
import { Button } from 'antd'; 
import { useHistory } from 'react-router-dom'; 
// for the purposes of testing PageNav
// import PageNav from '../../common/PageNav';

function RenderLandingPage(props) {
  const scrollToTop = () => {
    // Function to scroll the page back to the top
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory(); // Hook used to access the history instance for navigation

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>

      {/* Graphs Section: Add code here for the graphs section for your first ticket */}
      {/* beginning of added code for ticket one */}
      {/* created 3 containers for each graph */}
      <div className="graphs-section">
        <div className="grant-rates-by-office-graph-container"> 
          <img
            src={GrantRatesByOfficeImg} // src attribute points to the GrantRatesByOfficeImg
            alt="GrantRatesByOfficeImg"
            className="gr-office-img"
          />
          <p>Search Grant Rates By Office</p> 
        </div>
        <div className="grant-rates-by-nationality-container">
          <img
            src={GrantRatesByNationalityImg} // src attribute points to the GrantRatesByNationalityImg
            alt="GrantRatesByNationalityImg"
            className="gr-nationality-img"
          />
          <p>Search Grant Rates By Nationality</p> 
        </div>
        <div className="grant-rates-over-time-container">
          <img
            src={GrantRatesOverTimeImg} // src attribute points to the GrantRatesOverTimeImg
            alt="GrantRatesOverTimeImg"
            className="gr-overtime-img"
          />
          <p>Search Grant Rates Over Time</p> 
        </div>
      </div>

      {/* created 2 button container for user ionteraction; view the data button and the download the data button */}
      <div className="view-more-data-btn-container">
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }} // Custom styles for the button
          onClick={() => history.push('/graphs')} // Navigate to the graphs page on click
        >
          View the Data
        </Button>

        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }} 
        >
          Download the Data 
        </Button>
      </div>
      {/* end of added code for ticket one */}
      
      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" /> {/* Image for Human Rights First */}
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </div>
      <div>
        {/* Bottom Section: Add code here for the graphs section for your first ticket */}
        <div className="bottom-section">
          <h1>Systemic Disparity Insights</h1> {/* Title for the insights section */}
          <div className="data-container">
            <div className="first-data-point-container">
              <h2>36%</h2>
              <h3>
                By the end of the Trump administration, the average asylum
                office grant rate had fallen 36 percent from an average of 44
                percent in fiscal year 2016 to 28 percent in fiscal year 2020
              </h3>
            </div>
            <div className="second-data-point-container">
              <h2>5%</h2>
              <h3>
                The New York asylum office grant rate dropped to 5 percent in
                fiscal year 2020
              </h3>
            </div>
            <div className="third-data-point-container">
              <h2>6x Lower</h2>
              <h3>
                Between fiscal year 2017 and 2020, the New York asylum office's
                average grant rate was six times lower than the San Francisco
                asylum office.
              </h3>
            </div>
          </div>
        </div>
        <div className="read-more-btn">
          <button
            onClick={() =>
              window.open(
                'https://humanrightsfirst.org/library/uscis-records-reveal-systemic-disparities-in-asylum-decisions/',
                '_blank',
                'noreferrer' // Open link in a new tab without referrer
              )
            }
          >
            <span>Read More</span> {/* Button to read more about systemic disparities */}
          </button>
        </div>

        <p onClick={() => scrollToTop()} className="back-to-top">
          Back To Top ^ {/* Link to scroll back to the top of the page */}
        </p>
      </div>
    </div>
  );
}
export default RenderLandingPage; // Exporting the component for use in other parts of the application
