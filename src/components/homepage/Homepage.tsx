import React, { PureComponent } from 'react';
import Navbar from "../navbar/Navbar";
import {Link} from "react-router-dom";

interface OwnProps {}

type Props = OwnProps;

class Homepage extends PureComponent<Props> {
  render() {
    return (
        <div>
          <Navbar name={"Edward Rosales"} age={23}></Navbar>
          <Link to={"/about"}>About</Link>
        </div>
    );
  }
}

export default Homepage;
