import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import './BFC.scss'



class BFC extends Component {

  constructor(props) {
    super(props);
    this.state = { value: 'female', age: 25, weight: 70, height: 172, neck: 10, waist: 28, hip: 35, bmi: 27, bfc: 27, message: '', optimalweight: '', time: new Date().toLocaleTimeString() };
    this.submitMe = this.submitMe.bind(this);
    this.heightchange = this.heightchange.bind(this);
    this.weightchange = this.weightchange.bind(this);
    this.agechange = this.agechange.bind(this);
    this.neckchange = this.neckchange.bind(this);
    this.waistchange = this.waistchange.bind(this);
    this.valuechange = this.valuechange.bind(this);
    this.hipchange = this.hipchange.bind(this);

    this.ticker = this.ticker.bind(this);
    this.blur = this.blur.bind(this);
    this.calculateBFC = this.calculateBFC.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  valuechange(e) {
    this.setState({ value: e.target.value });
    e.preventDefault();
  }
  heightchange(e) {
    this.setState({ height: e.target.value });
    e.preventDefault();
  }
  agechange(e) {
    this.setState({ age: e.target.value });
    e.preventDefault();
  }
  neckchange(e) {
    this.setState({ neck: e.target.value });
    e.preventDefault();
  }
  waistchange(e) {
    this.setState({ waist: e.target.value });
    e.preventDefault();
  }
  hipchange(e) {
    this.setState({ hip: e.target.value });
    e.preventDefault();
  }

  blur(e) {
    this.calculateBFC();
  }
  weightchange(e) {
    this.setState({ weight: e.target.value });
    e.preventDefault();
  }

  calculateBFC() {

    var heightSquared = (this.state.height / 100 * this.state.height / 100);
    var bmi = this.state.weight / heightSquared;
    var low = Math.round(18.5 * heightSquared);
    var high = Math.round(24.99 * heightSquared);
    var message = "";
    let bfc
    if (bmi >= 18.5 && bmi <= 24.99) {
      message = "You are in a healthy weight range";
    }
    else if (bmi >= 25 && bmi <= 29.9) {
      message = "You are overweight";
    }
    else if (bmi >= 30) {
      message = "You are obese";
    }
    else if (bmi < 18.5) {
      message = "You are under weight";
    }
    this.setState({ message: message });
    this.setState({ optimalweight: "Your suggested weight range is between " + low + " - " + high });
    this.setState({ bmi: Math.round(bmi * 100) / 100 });
    if (this.state.value === 'male') {
      bfc = 1.20 * this.state.bmi + 0.23 * this.state.age - 16.2
    } else {
      bfc = 1.20 * this.state.bmi + 0.23 * this.state.age - 5.4
    }
    this.setState({ bfc: Math.round(bfc * 100) / 100 });

  }

  submitMe(e) {
    e.preventDefault();
    this.calculateBFC();
  }

  ticker() {
    this.setState({ time: new Date().toLocaleTimeString() })
  }

  componentDidMount() {
    setInterval(this.ticker, 60000);
  }

  handleSubmit() {
    const r = document.getElementById("result");
    r.style.display = "block";
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>BFC Calculator</h2>
        </div>
        <form onSubmit={this.submitMe}>
          <label>
            Enter your gender  :
            </label>
          <FormControl component="fieldset">
            {/* <FormLabel component="legend">Enter your gender:</FormLabel> */}
            <RadioGroup row aria-label="position" name="position" defaultValue="female">
              <FormControlLabel
                value="female"
                control={<Radio color="primary" />}
                label="Female"
                labelPlacement="start"
              />
              <FormControlLabel
                value="male"
                control={<Radio color="primary" />}
                label="Male"
                labelPlacement="start"
              />
            </RadioGroup>
          </FormControl>
          <label>
            Enter your age  :
            </label>
          <input type="text" name="age" value={this.state.age} onChange={this.agechange} />
          <label>
            Enter your height in cm:
            </label>
          <input type="text" name="height" value={this.state.height} onChange={this.heightchange} />
          <label>
            Enter your weight in kg :
            </label>
          <input type="text" name="weight" value={this.state.weight} onChange={this.weightchange} />
          <label>
            Enter your neck in cm  :
            </label>
          <input type="text" name="neck" value={this.state.neck} onChange={this.neckchange} />
          <label>
            Enter your waist in cm :
            </label>
          <input type="text" name="waist" value={this.state.waist} onChange={this.weightchange} />
          <label>
            Enter your hip in cm :
            </label>
          <input type="text" name="hip" value={this.state.hip} onBlur={this.blur} onChange={this.hipchange} />
          <div id="result" style={{ "display": "none" }}>
            <label>{this.state.checked} Hello,friend! It's currently  {this.state.time} where you are living.<br></br>
              <span style={{ "font-size": "24px" }}>Your BFC is {this.state.bfc} </span></label>
            <label>{this.state.message}</label>
            <label>{this.state.optimalweight}</label>
          </div>

          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>

      </div>
    );
  }
}

export default BFC;