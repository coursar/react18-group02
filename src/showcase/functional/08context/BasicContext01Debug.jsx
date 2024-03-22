import { createContext, forwardRef, useCallback, useContext, useImperativeHandle, useMemo, useRef, useState } from "react"

// in separate file
const ThemeContext = createContext(null)
// Theme.Provider
ThemeContext.displayName = 'ThemeContext'

// in separate file
const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (context == null) {
      throw new Error('No ThemeContext provided');
    }
  
    return context;
}

// in separate file
const ThemeContextProvider = (props) => {
    const [state, setState] = useState('light')
    const [localState, setLocalState] = useState(0)

    const handleStateClick = () => {
        setState(prev => prev === 'light' ? 'dark' : 'light')
    }

    const handleLocalStateClick = () => {
        setLocalState(prev => prev + 1)
    }

    const setLightTheme = useCallback(() => {
        setState('light')
    }, [])
    const setDarkTheme = useCallback(() => {
        setState('dark')
    }, [])

    const contextValue = useMemo(() => ({
        state,
        setLightTheme,
        setDarkTheme,
    }), [state, setLightTheme, setDarkTheme])

    // Child -> GrandChild + ThemeSwitch (context changed)
    // Object.is
    return (
        <>
            <ThemeContext.Provider value={contextValue}>
                {props.children}
                <button onClick={handleStateClick}>{state} State</button>
                <button onClick={handleLocalStateClick}>{localState} Local</button>
            </ThemeContext.Provider>
        </>
    )
}

// in separate file

const BasicContext01Debug = () => {
    return (
        <>
            <ThemeContextProvider>
                <Child></Child>
                <ThemeSwitch></ThemeSwitch>
            </ThemeContextProvider>
        </>
    )
}


const Child = (props) => {
    return (
        <>
            <GrandChild></GrandChild>
        </>
    )
}

const GrandChild = (props) => {
    const {state} = useThemeContext()

    return (
        <>
            <div>
                GrandChild {state}
            </div>
        </>
    )
}

const ThemeSwitch = (props) => {
    const {state, setLightTheme, setDarkTheme} = useThemeContext()

    return (
        <>
            <div>
                {state}
                <button onClick={() => setLightTheme()}>Light</button>
                <button onClick={() => setDarkTheme()}>Dark</button>
            </div>
        </>
    )
}

export default BasicContext01Debug