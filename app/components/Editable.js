/**
 * Created by niko-42na on 22.09.17.
 */
import React from 'react';

class Edit extends React.Component {

    checkEnter = (e) => {
        if(e.key === 'Enter') {
            this.finishEdit(e);
        }
    }

    finishEdit = (e) => {
        const value = e.target.value;
        if(this.props.onEdit) {
            this.props.onEdit(value);
        }
    }

    render() {
        const {value, onEdit, ...props} = this.props;
        return <input
            type="text"
            autoFocus={true}
            defaultValue={value}
            onBlur={this.finishEdit}
            onKeyPress={this.checkEnter}
            {...props} />;
    }
}

export default ({editing, value, onEdit, ...props}) => {
    if(editing) {
        return <Edit value={value}
                     onEdit={onEdit}
                     {...props} />;
    }

    return <span {...props}>{value}</span>;
}