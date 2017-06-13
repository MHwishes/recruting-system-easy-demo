import React, {Component} from 'react';
import {render} from "react-dom";
import '../style/index.less';

class HelloMessage extends React.Component {

    render() {
        return <div className="yu">Hello World</div>;
    }
}
render(<HelloMessage />, document.getElementById('app'));