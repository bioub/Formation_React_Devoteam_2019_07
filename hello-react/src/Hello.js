import React from 'react'

// function Hello(props) {
//   const name = props.name || '';

// functionnal component / stateless component (pas de state)
function Hello({ name = '' }) {
  // React.createElement('div', {className: 'Hello'}, 'Hello' + name);
  return (
    <div className="Hello">
      Hello {name}
    </div>
  )
}

export default Hello
