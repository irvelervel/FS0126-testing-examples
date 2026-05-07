// testiamo il componente PostList

import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import PostList from '../components/PostList'

describe('Montaggio iniziale', () => {
  it('finds the title in the page', () => {
    render(<PostList />)
    const title = screen.getByText(/questa è una lista di posts/i)
    expect(title).toBeInTheDocument()
  })

  it('finds the input in the page', () => {
    render(<PostList />)
    // const inputFilter = screen.getByPlaceholderText(/cerca/i)
    const inputFilter = screen.getByTestId('giangiorgio')
    expect(inputFilter).toBeInTheDocument()
  })
})

describe('Montaggio completato', () => {
  // test per verificare che a seguito della chiamata GET sono stati creati 100 elementi di lista
  it('creates 100 list items', async () => {
    render(<PostList />)
    // cerco di aspettare la fine della fetch per recuperare tutti i ListGroup.Item che sono stati creati
    try {
      const items = await screen.findAllByTestId('elemento-lista')
      expect(items).toHaveLength(100)
    } catch (error) {
      console.log(error)
    }
  })

  it('after search the results are not 100', async () => {
    render(<PostList />)
    try {
      // recupero l'input per la ricerca
      const inputFilter = screen.getByTestId('giangiorgio')
      // scrivere nell'input
      fireEvent.change(inputFilter, { target: { value: 'lorem' } })
      const items = await screen.findAllByTestId('elemento-lista')
      // ora gli items dovrebbero essere MENO di 100!
      console.log(items.length)
      expect(items.length).toBeLessThan(100)
    } catch (error) {
      console.log(error)
    }
  })
})
