/**
 * Created by niko-42na on 26.09.17.
 */
import React from 'react';
import Lane from './Lane';

export default ({lanes}) => (
    <div className="lanes">{lanes.map(lane =>
        <Lane className="lane" key={lane.id} lane={lane} />
    )}</div>
)