import React, { Component } from 'react';
import './BMI.scss';

class BMI extends Component {

  constructor(props) {
     super(props);
     this.state = { weight: 65, height: 172, bmi: 27, message: '', optimalweight: '', time: new Date().toLocaleTimeString() };
     this.submitMe = this.submitMe.bind(this);
     this.heightchange = this.heightchange.bind(this);
     this.weightchange = this.weightchange.bind(this);
     this.change = this.change.bind(this);  
     this.ticker = this.ticker.bind(this); 
     this.blur = this.blur.bind(this); 
     this.calculateBMI = this.calculateBMI.bind(this); 
  }


  heightchange(e){
    this.setState({height: e.target.value});
    e.preventDefault();
  }

  blur(e){
   this.calculateBMI();
  }
   weightchange(e){
    this.setState({weight: e.target.value});
    e.preventDefault();
  }

  calculateBMI(){

      var heightSquared = (this.state.height/100  * this.state.height/100);
      var bmi = this.state.weight / heightSquared;
      var low = Math.round(18.5 * heightSquared);                                                         
      var high = Math.round(24.99 * heightSquared);    
      var message = "";
      if( bmi >= 18.5  && bmi <= 24.99 ){
          message = "You are in a healthy weight range";
      }
      else if(bmi >= 25 && bmi <= 29.9){
        message = "You are overweight";
      }
      else if(bmi >= 30){
          message ="You are obese";
      }
      else if(bmi < 18.5){
        message = "You are under weight";
      }
      this.setState({message: message});  
      this.setState({optimalweight: "Your suggested weight range is between "+low+ " - "+high});    
      this.setState({bmi: Math.round(bmi * 100) / 100});   

  }

  submitMe(e) {
     e.preventDefault();
     this.calculateBMI();
  }

  ticker() {
    this.setState({time: new Date().toLocaleTimeString()})
  }
 
  componentDidMount(){
    setInterval(this.ticker, 60000);
  }

  change(e){
    e.preventDefault();
    console.log(e.target);
    this.setState({name: e.target.value});
  }
  handleSubmit(){
    const r=document.getElementById("result");
    r.style.display="block";
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>BMI Calculator</h2>
        </div>
          <form onSubmit={this.submitMe}>
             <label>
             Enter your height in cm: 
            </label>
            <input type="text" name="height" value={this.state.height} onBlur={this.blur} onChange={this.heightchange}   />
             <label>
             Enter your weight in kg : 
            </label>
            <input type="text" name="weight" value={this.state.weight} onChange={this.weightchange}    />
            <div style={{"display":"none"}} id="result">
            <label>{this.state.checked} Hello,friend! It's currently  {this.state.time} where you are living.<br></br> <span style={{"font-size":"24px"}}>Your BMI is {this.state.bmi} </span></label>
              <label>{this.state.message}</label>
              <label>{this.state.optimalweight}</label>
              </div>
             
            <input type="submit" value="Submit" onClick={this.handleSubmit}/>
          </form>
      
      </div>
    );
  }
}

export default BMI;