/**
 * Created by niko-42na on 26.09.17.
 */
import React from 'react';
import AltContainer from 'alt-container';
import alt from '../../libs/alt';
import setup from './setup';

setup(alt);

export default ({children}) =>
    <AltContainer flux={alt}>
        {children}
    </AltContainer>