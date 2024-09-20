import { data } from '../data/data';
import { render, screen } from '@testing-library/react';
import TableContainer from '../components/pages/Table/TableContainer';

describe('Asylum Office is a string', () => {
  test('[1] asylumOffice is a string', () => {
    expect(typeof data.asylumOffice).toBe('string');
  });
});

describe('Citizenship data is a string', () => {
  test('[2] citizenship is a string', () => {
    expect(typeof data.citizenship).toBe('string');
  });
});

describe('Race or Ethnicity data is a string', () => {
  test('[3] raceOrEthnicity is a string', () => {
    expect(typeof data.raceOrEthnicity).toBe('string');
  });
});

describe('Table renders to the screen with data', () => {
  test('[4] Table renders to the screen with data', () => {
    render(<TableContainer />);
    const asylumOfficeString = screen.getByText(/AyS/i);
    expect(asylumOfficeString).toBeInTheDocument();
  });
});
