import React, { Component } from 'react'
import axios from 'axios';
import Navbar from '../components/navbar';


class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      loading: true,
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  
  onSubmit(e) {
    e.preventDefault()
    axios.get("http://localhost:8000/login", {
      params: {
        email: this.state.email,
        password: this.state.password
      }
    }, { headers: { 'Content-Type': 'application/json', } })
      .then(res => {
        // console.log(res)
        localStorage.setItem('token', res.data);
        const token = localStorage.getItem("token");
        
        // axios.post('http://localhost:8000/verify', {id: res.data.user['id']})

       axios.get('http://localhost:8000/verify', { params:  {token: token } }).then(respo => {
         console.log("ty7tiu")
            if (respo.data===true) {
              this.props.history.push('/home')
            } else {
              this.props.history.push('/login')
            }
          })
          // console.log(a)
        this.setState({
          loading: false
        })
        // this.props.history.push('/home')
      })
      .catch(err => {
        console.log(err)
        this.setState({
          loading: false
        })
      })
     
  };
  
  render() {

    return (
      <div>
        <Navbar/>
        <form noValidate onSubmit={this.onSubmit}>
        <div className="auth-wrapper" style={{marginTop:"10%"}}>
            <div className="auth-inner">
         

          <div className="form-group">
            <label>Email address</label>
            <input type="email" onChange={this.onChange} value={this.state.email} name="email" className="form-control" placeholder="Enter email" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" onChange={this.onChange} value={this.state.password} name="password" className="form-control" placeholder="Enter password" />
          </div>

          <button type="submit" className="btn btn-primary btn-block" style={{height:'40px',width:"90px"}}>Submit</button>
</div>
</div>
        </form>
      </div>
    )
  }
}

export default Login