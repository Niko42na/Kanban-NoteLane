/**
 * Created by niko-42na on 21.09.17.
 */
import React from 'react';

export default ({children, ...props}) => (
    <div {...props}>
        {children}
    </div>
);