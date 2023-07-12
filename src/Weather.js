import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city here..."
              className="form-control"
            ></input>
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-success" />
          </div>
        </div>
      </form>
      <h1>Bologna</h1>
      <ul>
        <li>Weekday hours:minutes</li>
        <li>Weather description</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://cdn.dribbble.com/users/77598/screenshots/5602856/media/1e44f47cd47f97cd20e4d9fe42255a75.png"
            alt="temporary icon"
          />
          30°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation X mm</li>
            <li>Humidity X %</li>
            <li>Wind X km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
