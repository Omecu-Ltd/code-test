import { render, screen, fireEvent } from '@testing-library/react';
import ModelsFilter from './ModelsFilter';

test('renders ModelsFilterFilter', () => {
    render(<ModelsFilter options={[]} setSelectedOptions={() => {}} />);
    expect(screen.getByLabelText('Filter Models')).toBeInTheDocument();
});

test('user can select an option', () => {
    const setSelectedOptions = jest.fn();
    const options = [
        { group: 'Eye Colour', value: 'blue' },
        { group: 'Hair Colour', value: 'blond' },
    ];

    render(<ModelsFilter options={options} setSelectedOptions={setSelectedOptions} />);
    const input = screen.getByLabelText('Filter Models');
    fireEvent.change(input, { target: { value: 'blue' } });
    const option = screen.getByText('blue');
    fireEvent.click(option);

    expect(setSelectedOptions).toHaveBeenCalledWith([{ group: 'Eye Colour', value: 'blue' }]);
});
