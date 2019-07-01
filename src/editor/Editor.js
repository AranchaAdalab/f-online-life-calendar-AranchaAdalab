import React from "react";
import "../editor/Editor.scss";
import { Link } from "react-router-dom";

class Editor extends React.Component {
  render() {
    const { getHappy, getMood } = this.props;
    return (
      <div className="editor__container">
        <form action="/signup" method="post">
          <div className="date">
            <label htmlFor="date">Fecha</label>
            <input placeholder="01/07/2019" id="date" type="date" name="date" />
          </div>
          <div className="state__container">
            <h2>Estado</h2>
            <label htmlFor="happy">
              <input
                id="happy"
                type="radio"
                value="happy"
                name="state"
                onChange={getHappy}
              />
              :)
            </label>
            <label htmlFor="sad">
              <input
                id="sad"
                type="radio"
                value="sad"
                name="state"
                onChange={getHappy}
              />
              :(
            </label>
          </div>
          <div className={`reason__container ${getMood === 'sad' || getMood === '' ? 'hidden' : ''}`}>
            <label htmlFor="reason">Mensaje</label>
            <input
              placeholder="¿Por qué es un buen día"
              id="reason"
              type="text"
              name="reason"
            />
          </div>
          <Link to={"/"}>
            <input type="submit" value="Guardar" />
          </Link>
          <Link to={"/"}>
            <button>Cancelar</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Editor;
