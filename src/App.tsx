import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal, { Container } from './stylesGlobal'
import { ThemeProvider } from 'styled-components'
import tema from './themes/default'

function App() {
  return (
    <>
      <ThemeProvider theme={tema}>
        <EstiloGlobal />
        <Cabecalho />
        <Hero />
        <Container>
          <ListaVagas />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
