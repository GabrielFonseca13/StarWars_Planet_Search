import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import planetMock from './mocks/planetMock';
import StarWarsProvider from '../context/StarWarsProvider';
import userEvent from '@testing-library/user-event';

describe('Testes para verificar o funcionamento da operação', () => {
  it('verificar se os elementos estão sendo renderizados na tela', async () => {
    
    global.fetch = jest.fn(async () => ({
      json: async () => planetMock
    }));
    
    render(
      <StarWarsProvider>
        <App />;
      </StarWarsProvider>
    )
    
    const appTitle = screen.getByRole('heading', {name: /Star Wars/i, level:1});
    const inputName = screen.getByTestId('name-filter');
    const columnFilter = screen.getByTestId('column-filter');
    const operatorFilter = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter');
    const buttonFilter = screen.getByTestId('button-filter')
    const tableHead = screen.getByText(/Name/i)
    
    
    expect(appTitle).toBeInTheDocument();
    expect(inputName).toBeInTheDocument();
    expect(columnFilter).toBeInTheDocument();
    expect(operatorFilter).toBeInTheDocument();
    expect(valueFilter).toBeInTheDocument();
    expect(buttonFilter).toBeInTheDocument();
    expect(tableHead).toBeInTheDocument();

    await waitFor(() => expect(screen.getByText(/Tatooine/i)).toBeInTheDocument());
    expect(screen.getAllByRole('row')).toHaveLength(11);

      
  });
  it('verificar se os o fetch esta sendo feito', async () => {
    
    global.fetch = jest.fn(async () => ({
      json: async () => planetMock
    }));
    
    render(
      <StarWarsProvider>
        <App />;
      </StarWarsProvider>
    )
    
    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://swapi.dev/api/planets');
    
  
  });
  it('verificar se os elementos estão acessíveis', async () => {
    
    global.fetch = jest.fn(async () => ({
      json: async () => planetMock
    }));
    
    render(
      <StarWarsProvider>
        <App />;
      </StarWarsProvider>
    );
    // const columnFilter = screen.getByTestId('column-filter');
    // const operatorFilter = screen.getByTestId('comparison-filter');
    // const valueFilter = screen.getByTestId('value-filter');
    
    const buttonFilter = screen.getByTestId('button-filter')
    const allButtons1 = screen.getAllByRole('button');
    expect(allButtons1).toHaveLength(1);
    
    userEvent.click(buttonFilter)
    
    const allButtons2 = screen.getAllByRole('button');
    await waitFor(() => expect(allButtons2).toHaveLength(3));
    
    userEvent.click(buttonFilter)
    
    const allButtons3 = screen.getAllByRole('button');
    await waitFor(() => expect(allButtons3).toHaveLength(4));
    
    userEvent.click(buttonFilter)
    
    const allButtons4 = screen.getAllByRole('button');
    await waitFor(() => expect(allButtons4).toHaveLength(5));
    
    userEvent.click(buttonFilter)
    
    const allButtons5 = screen.getAllByRole('button');
    await waitFor(() => expect(allButtons5).toHaveLength(6));
    
    userEvent.click(buttonFilter)
    
    const allButtons6 = screen.getAllByRole('button');
    await waitFor(() => expect(allButtons6).toHaveLength(7));
    
    userEvent.click(allButtons6[allButtons6.length-1]);
    
    const allButtons7 = screen.getAllByRole('button');
    await waitFor(() => expect(allButtons7).toHaveLength(1));
    
    const inputName = screen.getByTestId('name-filter');
    userEvent.type(inputName, 'oo')
  });
});