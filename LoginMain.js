import React from 'react';
import './LoginMain.css';
import 'C://Users/KIIT/Desktop/Coffee Shop/capstone-project-react-ey/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Registration from './Registeration';


function LoginMain() {
  return (
    <div className="App">
      <div className="outer">
        <div className="inner">
          <Registration />
        </div>
      </div>
    </div>
  );
}

export default LoginMain;