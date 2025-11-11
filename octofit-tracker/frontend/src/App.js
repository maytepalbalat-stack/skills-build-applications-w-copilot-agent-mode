import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';



function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand d-flex align-items-center" to="/">
            <img src="/octofitapp-small.png" alt="OctoFit Logo" style={{height: '40px', marginRight: '10px'}} />
            OctoFit Tracker
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/activities">Activities</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/leaderboard">Leaderboard</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/teams">Teams</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users">Users</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/workouts">Workouts</NavLink>
              </li>
            </ul>
            <span className="navbar-text">
              <a className="btn btn-outline-light ms-2" href="https://github.com/maytepalbalat-stack/skills-build-applications-w-copilot-agent-mode" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </span>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div className="card text-center">
              <div className="card-body">
                <h2 className="card-title">Welcome to OctoFit Tracker!</h2>
                <p className="card-text">Track your activities, teams, and workouts with style.</p>
                <a href="/activities" className="btn btn-primary m-2">View Activities</a>
                <a href="/leaderboard" className="btn btn-success m-2">Leaderboard</a>
                <a href="/teams" className="btn btn-info m-2">Teams</a>
                <a href="/users" className="btn btn-warning m-2">Users</a>
                <a href="/workouts" className="btn btn-danger m-2">Workouts</a>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
