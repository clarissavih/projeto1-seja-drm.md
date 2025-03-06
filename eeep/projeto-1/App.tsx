import { View } from 'react-native'
// Importa dos componentes ultilizado neste arquivo
import Title from './components/Title'
import Subtitle from './components/Subtitle'
import Button from './components/Button'
import Footer from './components/Footer'

//Função para exibir os outros componentes criados
function App () {
  return (
    <View>
    <Title />
    <Subtitle />
    <Button />
    <Footer />
    </View>
  )
}

export default App