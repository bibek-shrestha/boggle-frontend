import React, {Component} from 'react';
import Board from './board/Board';

class App extends Component {
    render() {
        const dimension = 4;
        return (
            <div className="container">
                <div className="content">
                    <Board dimension={dimension}/>
                </div>
            </div>
        );
    }
}

export default App;
