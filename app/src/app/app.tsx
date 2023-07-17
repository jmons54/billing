import { Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function App() {
  const [apiResponse, setApiResponse] = useState<string>();

  useEffect(() => {
    axios.get('//api.local/ping').then(({ data }) => setApiResponse(data));
  }, []);

  return (
    <div>
      <h1>Nx Node React</h1>
      {apiResponse ? (
        <div>Api send "{apiResponse}"</div>
      ) : (
        <div>Waiting api response</div>
      )}
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
    </div>
  );
}
