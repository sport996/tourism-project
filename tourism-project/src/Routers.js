import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import CityInfo from './CityInfo';
import Places from './Places';
import Info from './Info';


export default function Routers() {
  return(
    <Router>
      
        <nav>
            <Link to="/Info">Information</Link>
            {'  '}
            <Link to="/Places">Places</Link> 
            {'  '}
            {/* Determine what places should show.. Rest. or places.. */}
            <Link to="/Places">Restaurants</Link>
        </nav>

        <div>
            {/* <Route exact path='/' component={Home} /> */}
            {/* <Route path='/allCities' component={allCities}/> */}
            <Route path='/Info' component={Info} />
            <Route path='/cityInfo' component={CityInfo} />
            <Route path='/places' component={Places} />
            <Route path='/places' component={Places} />
        </div>

    </Router>
  );
//   }
}