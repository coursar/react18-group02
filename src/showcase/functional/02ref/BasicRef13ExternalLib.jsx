import { edit } from "ace-builds"
import { useRef, useState } from "react"

const code = `function foo(items) {
    var x = "All this is syntax highlighted";
    return x;
}
`

const styles = {width: '400px', height: '100px'}

const BasicRef13ExternalLib = () => {
    const editorRef = useRef(null)
    const divRef = useRef(null)
    // edit(divRef.current)
    const [mode, setMode] = useState('plain')

    const handleEdit = () => {
        if (editorRef.current === null) {
            editorRef.current = edit(divRef.current)
            setMode('editor')
        }
    }

    const handleIndent = () => {
        editorRef.current.indent()
    }

    return (
        <>
            <div ref={divRef} style={styles}>{code}</div>
            <button onClick={handleEdit}>Edit</button>
            {mode === 'editor' && <button onClick={handleIndent}>Indent</button>}
        </>
    )
}

export default BasicRef13ExternalLib
