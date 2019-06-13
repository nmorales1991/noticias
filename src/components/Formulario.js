import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Formulario extends Component {
    state ={
        categoria:'general'
    }

    cambiarCategoria= e =>{
        this.setState({
            categoria:e.target.value
        },()=>{//callback que se ejecuta siempre después de hacer el setState, ya que se estaba cambiando el state pero no ejecutaba inmediatamente la función
            this.props.consultarNoticias(this.state.categoria)
        })

        
    }

    render() {
        return (
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form>
                        <h2>Encuentra Noticias por Categoría</h2>
                        <div className="input-field col s12">
                            <select onChange={this.cambiarCategoria}>
                                <option value="general">General</option>
                                <option value="business">Negocios</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="science">Ciencia</option>
                                <option value="health">Salud</option>
                                <option value="sports">Deportes</option>
                                <option value="technology">Tecnología</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

Formulario.propTypes ={
    consultarNoticias:PropTypes.func.isRequired,
}
