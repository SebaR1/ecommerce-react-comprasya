import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function ButtonListContainer() {
  return (
        <div>
            <Button className="text-color-home button-home px-5 py-3 fs-4" size="lg">
                <Link className='text-color-home' to="/catalogo">Catalogo</Link>
            </Button>
        </div>
    )
}

export default ButtonListContainer