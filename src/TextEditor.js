import React, { useCallback, useEffect, useRef } from 'react'
import Quill from "quill"
import "quill/dist/quill.snow.css"

export default function TextEditor() {
    const wrapperRef = useCallback((wrapper) => {   
        if (wrapper == null) return
        wrapper.innerHTML = ""
        // on dit que l'on a une callback et on la passe à l'élément ayant 
        //la ref donc l'élément aura le temps d'être editer et finde l'erreur object is not extensible
        const editor = document.createElement('div')//on wrapp l'editeur de texte dans une div 
        wrapper.append(editor)
        new Quill(editor, { theme: "snow"})//ici l'editeur sera contenu dans la div editor
        return () => {
            wrapperRef.innerHTML = ''
        }
    })
    return (
        <div className="container" ref={wrapperRef}></div>
    )
}
