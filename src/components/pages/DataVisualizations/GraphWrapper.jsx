import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import CitizenshipMapAll from './Graphs/CitizenshipMapAll';
import CitizenshipMapSingleOffice from './Graphs/CitizenshipMapSingleOffice';
import TimeSeriesAll from './Graphs/TimeSeriesAll';
import OfficeHeatMap from './Graphs/OfficeHeatMap';
import TimeSeriesSingleOffice from './Graphs/TimeSeriesSingleOffice';
import YearLimitsSelect from './YearLimitsSelect';
import ViewSelect from './ViewSelect';
import axios from 'axios';
import { resetVisualizationQuery } from '../../../state/actionCreators';
import { colors } from '../../../styles/data_vis_colors';
import ScrollToTopOnMount from '../../../utils/scrollToTopOnMount';

const { background_color } = colors;

function GraphWrapper(props) {
  const { set_view, dispatch } = props;
  let { office, view } = useParams();

  // Set default view if not provided
  if (!view) {
    set_view('time-series');
    view = 'time-series';
  }

  let map_to_render; // Variable to hold the component to render based on view
  if (!office) {
    // Render different maps based on the view
    switch (view) {
      case 'time-series':
        map_to_render = <TimeSeriesAll />;
        break;
      case 'office-heat-map':
        map_to_render = <OfficeHeatMap />;
        break;
      case 'citizenship':
        map_to_render = <CitizenshipMapAll />;
        break;
      default:
        map_to_render = null;
        break;
    }
  } else {
    // Render maps for a specific office
    switch (view) {
      case 'time-series':
        map_to_render = <TimeSeriesSingleOffice office={office} />;
        break;
      case 'citizenship':
        map_to_render = <CitizenshipMapSingleOffice office={office} />;
        break;
      default:
        map_to_render = null;
        break;
    }
  }

  // Function to fetch data from the API and update state
  async function updateStateWithNewData(years, view, office, stateSettingCallback) {
    const citizenshipApi = `${process.env.REACT_APP_API_URI}/citizenshipSummary`; // API endpoint for citizenship data
    const fiscalSummaryAPI = `${process.env.REACT_APP_API_URI}/fiscalSummary`; // API endpoint for fiscal data

    try {
      let citizenshipData, fiscalData;

      // Fetch data based on office parameter
      if (office === 'all' || !office) {
        citizenshipData = await axios.get(citizenshipApi, {
          params: { from: years[0], to: years[1] },
        });
        fiscalData = await axios.get(fiscalSummaryAPI, {
          params: { from: years[0], to: years[1] },
        });
      } else {
        citizenshipData = await axios.get(citizenshipApi, {
          params: { from: years[0], to: years[1], office },
        });
        fiscalData = await axios.get(fiscalSummaryAPI, {
          params: { from: years[0], to: years[1], office },
        });
      }

      // Combine citizenship data into fiscal data
      fiscalData.data["citizenshipResults"] = citizenshipData.data;
      stateSettingCallback(view, office, [fiscalData.data]); // Update state with combined data
    } catch (error) {
      console.error('Error fetching data:', error); // Log any errors
    }
  }

  const clearQuery = (view, office) => {
    dispatch(resetVisualizationQuery(view, office)); // Reset the visualization query
  };

  return (
    <div
      className="map-wrapper-container"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        minHeight: '50px',
        backgroundColor: background_color,
      }}
    >
      <ScrollToTopOnMount />
      {map_to_render} {/* Render the appropriate map based on the view */}
      <div
        className="user-input-sidebar-container"
        style={{
          width: '300px',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <ViewSelect set_view={set_view} /> {/* Component to select view */}
        <YearLimitsSelect
          view={view}
          office={office}
          clearQuery={clearQuery}
          updateStateWithNewData={updateStateWithNewData} // Pass the data fetching function
        />
      </div>
    </div>
  );
}

export default connect()(GraphWrapper); // Connect the component to Redux
