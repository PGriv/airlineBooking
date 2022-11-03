import React from "react";
import "./FlightApp.css";
import axios from "axios";

export default class FlightApp extends React.Component {
  state = {
    flights: [],
    origins: [],
    destinations: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/flights/all`).then((res) => {
      const flights = res.data;
      this.setState({ flights });
    });
  }

  postOrigin(origin) {
    console.log(origin);

    axios
      .get(`http://localhost:8080/flights/` + origin + "/destinations")
      .then((res) => {
        const destinations = res.data;
        this.setState({ destinations });
        console.log(destinations);
      });
  }
  postDest(destination) {
    console.log(destination + this.setState.origin);

    axios
      .get(`http://localhost:8080/flights/` + origin + "/destinations")
      .then((res) => {
        const destinations = res.data;
        this.setState({ destinations });
        console.log(destinations);
      });
  }

  render() {
    return (
      <React.Fragment>
        <section>
          <form
            style={{
              border: "5px solid rgba(0, 0, 0, 0.05)",
              textAlign: "center",
            }}
          >
            <header className="headDiv">
              {/* Header Section */}
              <div
                className="h-24 flex justify-center items-center shadow"
                style={{ height: 24 }}
              >
                <h1
                  className="uppercase font-bold text-4xl text-center"
                  style={{ backgroundColor: "skyblue" }}
                >
                  Flight booking app
                </h1>
              </div>
            </header>
            <br></br>
            {/* body Section */}
            <div style={{ backgroundColor: "lightblue", textAlign: "center" }}>
              <div>
                <div>
                  <div className="Div1">
                    <div
                      className="flex items-center space-x-2"
                      style={{ felx: 1 }}
                    >
                      <input type="radio" name="round"></input>
                      <p className="text-xl font-bold">Round Trip</p>
                      <input type="radio" name="oneway"></input>
                      <p className="text-xl font-bold" style={{ felx: 0 }}>
                        One Way
                      </p>
                      <br></br>
                    </div>
                  </div>
                </div>
                <hr></hr>
                {/* Departure */}
                <div>
                  <div>
                    <div>
                      <b>Flying From?</b>
                      <select
                        name="originsDropdown"
                        onChange={(event) =>
                          this.postOrigin(event.target.value)
                        }
                      >
                        <option>"Please select an origin"</option>
                        {this.state.flights.map((flight) => (
                          <option key={flight.flightId} value={flight.origin}>
                            {flight.origin}
                          </option>
                        ))}
                      </select>
                      <br></br>
                      <br></br>
                    </div>
                  </div>
                </div>
                {/* Arrival */}
                <div>
                  <div>
                    <div>
                      <b>Flying To?</b>
                      <select
                        name="destinationsDropdown"
                        onChange={(event) => this.postDest(event.target.value)}
                      >
                        <option>--Select Destination--</option>
                        {this.state.destinations.map((destination) => (
                          <option key={destination} value={destination}>
                            {destination}
                          </option>
                        ))}
                      </select>
                      <br></br>
                    </div>
                  </div>
                  <hr></hr>
                </div>
                {/**date selection */}
                <div>
                  <div>
                    <div>
                      <div>
                        <b>Departure Available Dates</b>
                        <input type="date" />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <div id="myDIV">
                        <b>Return Date</b>
                        <input disabled={true} type="date" />
                      </div>
                    </div>
                  </div>
                </div>
                <hr></hr>
                <div>
                  <div>
                    <div>
                      <div>
                        <b>Number of Passengers Older than 9</b>
                        <input type="number" max={10} min={0} />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <div>
                        <b>Number of Passengers between 9 and 2</b>
                        <input type="number" max={10} min={0} />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <div>
                        <b>Number of Passengers younger than 10</b>
                        <input type="number" max={10} min={0} />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
          <label style={{backgroundColor: "green"}}>
             </label>
             <input type="submit" 
              value="FIND FLIGHTS!" 
              style={{backgroundColor: "limegreen"}}/>
        </div>
              </div>
            </div>
          </form>
        </section>
      </React.Fragment>
    );
  }
}
