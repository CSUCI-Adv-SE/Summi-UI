import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import './resultPage.css';

class ConversionResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'recognise text'
        };
    }



    render() {
        return (
            <div className="container">
                <div className="header">
                </div>
                <div className="content">
                    {/*<pre>{this.state.text}</pre>*/}
                    <textarea>{this.state.text}</textarea>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<ConversionResult />, document.getElementById('root'));