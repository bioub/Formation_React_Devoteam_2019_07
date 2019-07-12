import React from 'react'

function TodoFilters(props) {
  return (
    <div className="TodoFilters">
      <button onClick={() => props.onFilterClick('ALL')} disabled={props.filter === 'ALL'}>Tout</button>
      <button onClick={() => props.onFilterClick('CHECKED')} disabled={props.filter === 'CHECKED'}>Cochés</button>
      <button onClick={() => props.onFilterClick('UNCHECKED')} disabled={props.filter === 'UNCHECKED'}>Décochés</button>
    </div>
  )
}

export default TodoFilters
