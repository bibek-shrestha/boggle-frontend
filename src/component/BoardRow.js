import React, { Component } from 'react';
import Square from './Square';

class BoardRow extends Component {
    render() {
        const columns = this.props.columns.map((column, index) => <Square key={index} value={column.label} />)
        return (
            <div className="board-row">
                {columns}
            </div>
        );
    };
}

export default BoardRow;
