import { Model } from "../@types/models";
import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import React from "react";
import ModelContainer from "./ModelContainer";

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
            hair_colour: 'auburn',
        },
        portrait_url: ""
    },
];

async function testFilterByAttribute(inputValue: string, visibleModelName: string, hiddenModelName: string) {
    render(<ModelContainer models={models}/>);

    const input = screen.getByLabelText('Filter Models');
    fireEvent.change(input, {target: {value: inputValue}});

    const listbox = screen.getByRole('listbox');
    const option = within(listbox).getByText(inputValue);
    fireEvent.click(option);

    await waitFor(() => {
        expect(screen.queryByText(hiddenModelName)).not.toBeInTheDocument();
    });

    expect(screen.getByText(visibleModelName)).toBeInTheDocument();
}

test('filters models based on selected eye colour', () => {
    testFilterByAttribute('blue', 'John Doe', 'Jane Smith');
});

test('filters models based on selected hair colour', () => {
    testFilterByAttribute('auburn', 'Jane Smith', 'John Doe');
});

test('filters models based on selected eye colour + hair colour', async () => {
    render(<ModelContainer models={models}/>);

    const input = screen.getByLabelText('Filter Models');

    const coloursToSelect = ['blond', 'auburn', 'green', 'blue'];
    for (const colour of coloursToSelect) {
        fireEvent.change(input, {target: {value: colour}});

        // wait for the listbox to appear
        const listbox = await screen.findByRole('listbox');
        const option = within(listbox).getByText(colour);
        fireEvent.click(option);
    }

    await screen.findByText('Jane Smith');
    await screen.findByText('John Doe');
});

test('no filters on models', async () => {
    render(<ModelContainer models={models}/>);

    await screen.findByText('Jane Smith');
    await screen.findByText('John Doe');
});
