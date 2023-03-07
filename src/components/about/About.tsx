import React, { PureComponent } from 'react';
import {Link} from "react-router-dom";

interface OwnProps {}

type Props = OwnProps;

class About extends PureComponent<Props> {
  render() {
    return (
        <div>
            <h1>About Page</h1>
            <Link to={"/"}>Homepage</Link>
        </div>
    );
  }
}

export default About;
