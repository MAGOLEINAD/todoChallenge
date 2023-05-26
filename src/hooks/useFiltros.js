
import {useContext} from 'react'
import FiltrosContext from '../context/filtrosContext'

const useFiltros = () => {
   return useContext(FiltrosContext)
}

export default useFiltros