import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function ButtonListContainer() {
  return (
        <div>
            <Link className='text-color-home' to="/catalogo">
                <Button className="text-color-home button-home px-5 py-3 fs-4" size="lg">
                    Catalogo
                </Button>
            </Link>
        </div>
    )
}

export default ButtonListContainer