import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="card heading">
        <h2>Bio-Data</h2>
      </div>
      <div className="card personalDetails">
        <h3>Personal Details</h3>
        <p>
          <span className="question">Name:</span>{" "}
          <span className="answer">Vikram kumar</span>
        </p>
        <p>
          <span className="question">DOB:</span>{" "}
          <span className="answer">03-01-1995</span>
        </p>
        <p>
          <span className="question">Address:</span>{" "}
          <span className="answer">Bhagwanpur, Muzaffarpur</span>
        </p>
        <p>
          <span className="question">Mobile:</span>{" "}
          <span className="answer">6205050380</span>
        </p>
        <p>
          <span className="question">Height:</span>{" "}
          <span className="answer">5ft 10in</span>
        </p>
        <p>
          <span className="question">Colour:</span>{" "}
          <span className="answer">Fair</span>
        </p>
        <p>
          <span className="question">Profession:</span>{" "}
          <span className="answer">Software Engineer</span>
        </p>
        <p>
          <span className="question">Hobby:</span>{" "}
          <span className="answer">Coding</span>
        </p>
        <p>
          <span className="question">Ambition:</span>{" "}
          <span className="answer">Software engineer at Google</span>
        </p>
      </div>
      <div className="card educationDetails">
        <h3>Education Details</h3>
        <p>
          <span className="question">10th:</span>{" "}
          <span className="answer">St. Joseph's Sen. Sec. School</span>
        </p>
        <p>
          <span className="question">12th:</span>{" "}
          <span className="answer">Ritlal Surdeep Yadav</span>
        </p>
        <p>
          <span className="question">Graduation:</span>{" "}
          <span className="answer">Bihar University</span>
        </p>
        <p>
          <span className="question">Post Graduation:</span>{" "}
          <span className="answer">Persuing from IGNOU</span>
        </p>
      </div>
      <div className="card familyDetails">
        <h3>Family Details</h3>
        <p>
          <span className="question">Father:</span>{" "}
          <span className="answer">Bindeshwar kumar yadav (businessman)</span>
        </p>
        <p>
          <span className="question">Mother:</span>{" "}
          <span className="answer">Poonam devi (housewife)</span>
        </p>
        <p>
          <span className="question">Brother:</span>{" "}
          <span className="answer">Dev prakash (graduation 3rd year)</span>
        </p>
        <p>
          <span className="question">Sister:</span>{" "}
          <span className="answer">Aarti (housewife)</span>
        </p>
      </div>
    </div>
  );
}

export default App;
