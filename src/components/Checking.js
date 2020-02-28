// import React from 'react';
// import ReactDOM from 'react-dom';

// class AppContainer extends React.Component {
//   constructor (props){
//     super ();

//     this.state = {
//       people: []
//     }

//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick (){
   
//       this.setState({
//         people: this.state.people.concat(this.nameTextInput.value)

//       });
    
//   }
  
//   componentDidUpdate (){
//     this.nameTextInput.value = '';
//     ReactDOM.findDOMNode(this.nameTextInput).focus();
//   }
//   render (){
//     let names = this.state.people.map(name => {
//        return <h1>{name}</h1>
//     });
//      this.state.people.map(name => {
//        return <h1>{name}</h1>
//     });
//     return (      
//       <div className="row">
//           <div className="col-md-4 col-md-offset-2">
//             <br />
//             <input type="text" placeholder="Enter a new name" ref={(ref) => this.nameTextInput = ref} className="form-control" />
//           </div>
//           <div className="col-md-4">
//             <br />
//             <button type="button" className="btn btn-success" onClick={this.handleClick}>Add</button>
//           </div>
//           <br />

//           <div className="row">
//             <div className="col-md-4 col-md-offset-2">
              
//                 {names}
              
//             </div>
//           </div>
//           <br />
        
//       </div>
//     );
//   }
// }



// export default AppContainer;