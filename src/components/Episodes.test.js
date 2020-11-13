import React from 'react'; 
import { render } from '@testing-library/react'; 

import testData from '../testData';
import Episodes from './Episodes'; 

test("Renders Correctly with correct amount of episodes", () => {
    //Arrange - render components and set up data 
        const { rerender, getAllByText } = render(<Episodes episodes={[]} />);
    //Act - re-render component with data passed in 
        rerender(<Episodes episodes={testData}/>);
        const episodes = getAllByText(/minutes/i);
    //Assert 
        expect(episodes).toHaveLength(3); 
})