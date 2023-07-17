import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { Model } from "./@types/models";

test('renders App', () => {
    render(<App/>);
    expect(screen.getByText('Applicant Models')).toBeInTheDocument();
});
