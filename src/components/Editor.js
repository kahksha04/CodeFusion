import React, { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'

export default function Editor({ language, displayName, value, onChange }) {
  const [open, setOpen] = useState(true)

  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <div className="editor-title">
        {displayName}
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>

      <CodeMirror
        value={value}
        options={{
          mode: language,
          theme: 'material',
          lineNumbers: true,
          lineWrapping: true,
        }}
        onChange={(editor) => onChange(editor)}
      />
    </div>
  )
}
