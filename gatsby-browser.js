import React from 'react'
import { GlobalProvider } from './src/context/GlobalContext'
import './src/styles.css'

export const wrapRootElement = ({ element }) => (
    <GlobalProvider>
        {element}
    </GlobalProvider>
);