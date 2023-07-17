import { render, screen } from '@testing-library/react';
import ModelsList from './ModelsList';
import { Model } from "../@types/models";

test('renders ModelsList with models', () => {
    const models: Model[] = [
        {
            id: 1,
            name: 'John Doe',
            facial_attributes: {
                eye_colour: 'blue',
                hair_colour: 'blond',
            },
            portrait_url: ""
        },
        {
            id: 2,
            name: 'Jane Smith',
            facial_attributes: {
                eye_colour: 'green',
                hair_colour: 'brown',
            },
            portrait_url: ""
        },
    ];

    render(<ModelsList models={models} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
});
