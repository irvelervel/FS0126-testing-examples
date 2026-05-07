// questo sarà un file che testerà il componente /components/HiddenSection.jsx
// proveremo le capacità di questo componente senza fisicamente montarlo nel browser,
// interamente nel Virtual DOM di React!

// andiamo ad effettuare dei test di tipo UNIT e INTEGRATION su questo componente

import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import HiddenSection from '../components/HiddenSection'

// "describe" è una funzione di vitest che ci serve a creare una "SUITE" di tests

describe('Montaggio iniziale', () => {
  // in questa funzione (secondo parametro di describe) scrivo test individuali per il componente
  // con la funzione "it" andiamo a scrivere UN SINGOLO TEST all'interno di una SUITE
  it('checks if the component mounts correctly', () => {
    // qui dentro, nel secondo parametro di it, andiamo a scrivere i 4 steps di ogni test
    // in questo primo test verificheremo che il componente si monti -> potremmo controllare che ci sia l'h2
    // 4 STEPS:
    // 1) montaggio del componente nel Virtual DOM
    render(<HiddenSection />)
    // 2) ricerca degli elementi
    const title = screen.getByText(/questo componente si chiama hiddensection/i)
    // 3) interazione con l'elemento trovato (opzionale)
    // nel nostro caso NON serve interagire con il titolo, skip!
    // 4) verifica ipotesi/tesi
    expect(title).toBeInTheDocument() // <-- verifica delle aspettative
  })

  it('checks if the button label is "MOSTRA"', () => {
    // 4 STEPS:
    // 1) montaggio del componente nel Virtual DOM
    render(<HiddenSection />)
    // 2) ricerca degli elementi
    const button = screen.getByText(/mostra/i)
    const missingButton = screen.queryByText(/nascondi/i) // non c'è, con queryBy torna null
    // 3) interazione, per ora niente
    // 4) verifica
    expect(button).toBeInTheDocument() // VERO
    expect(missingButton).toBeNull() // VERO!!
  })
})

describe('clicchiamo il bottone', () => {
  it('checks the new button label once clicked', () => {
    // 1)
    render(<HiddenSection />)
    // 2)
    const button = screen.getByText(/mostra/i)
    // 3) click del bottone!
    fireEvent.click(button) // <-- ho cliccato il bottone!
    // 4a) cerco il bottone
    const newButton = screen.getByText(/nascondi/i)
    // 4b) cerco l'immagine dell'orso
    const orsoPicture = screen.getByAltText('orso-picture')

    expect(newButton).toBeInTheDocument()
    expect(orsoPicture).toBeInTheDocument()
  })

  it('checks if interface reset clicking the button twice', () => {
    // 1)
    render(<HiddenSection />)
    // 2)
    const button = screen.getByText(/mostra/i)
    // 3) click DOPPIO del bottone
    fireEvent.click(button) // <-- ho cliccato il bottone!
    fireEvent.click(button) // <-- ho cliccato il bottone!
    // 4)
    const orsoPicture = screen.queryByAltText(/orso-picture/i) // non dovrebbe esserci
    expect(orsoPicture).toBeNull()
  })
})
