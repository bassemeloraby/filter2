import React from 'react'
import Co from '../db/ColorsDb'

const Colors = ({handleChange}) => {
  return (
    <div>Colors
    
    {Co.map((c, i) => (
      <div class="form-check" key={i}>
        <input
          class="form-check-input"
          type="radio"
          name={c.value}
          id={c.value}
          onChange={handleChange}
          value={c.value}
        />
        <label class="form-check-label" for={c.value} style={{ backgroundColor:`${c.value}`  }}>
          {c.title}
        </label>
      </div>
    ))}
    </div>

  )
}

export default Colors