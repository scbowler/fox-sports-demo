import React, { Component } from 'react';

class FoxSports extends Component {

    componentDidMount(){
        const foxScript = document.createElement('script');
        foxScript.src = 'https://b.fssta.com/sta/bigboard/scorestrip/scorestrip-loader-v1.0.0.js';

        this.foxElement.appendChild(foxScript);
    }
    
    render(){
        return (
            <div ref={ e => this.foxElement = e}>
                <wis-scorestrip ismodule="true"></wis-scorestrip>
            </div>
        )
    }
}

export default FoxSports;
