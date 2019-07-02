import React from "react";
import "../editor/Editor.scss";
import { Link } from "react-router-dom";

class Editor extends React.Component {
  render() {
    const { getDate, getMood, getMessage, mood, getFace } = this.props;
    return (
      <div className="editor__container">
        <h1 className="title">¿Cómo te sientes hoy?</h1>
        <form action="/signup" method="post">
          <div className="date__container">
            <label className="date__label" htmlFor="date">
              Fecha
            </label>
            <input
              className="date__input"
              placeholder="01/07/2019"
              id="date"
              type="date"
              name="date"
              onChange={getDate}
            />
          </div>
          <div className="state__container">
            <h2 className="state__label">Estado</h2>
            <label className="happy__label" htmlFor="happy">
              <input
                id="happy"
                type="radio"
                value="happy"
                name="state"
                onChange={getMood}
              />
              :)
            </label>
            <label className="sad__label" htmlFor="sad">
              <input
                id="sad"
                type="radio"
                value="sad"
                name="state"
                onChange={getMood}
              />
              :(
            </label>
          </div>
          <div
            className={`reason__container ${
              mood === "sad" || mood === "" ? "hidden" : ""
            }`}
          >
            <label className="reason__label" htmlFor="reason">
              Mensaje
            </label>
            <input
              className="reason__input"
              placeholder="¿Por qué es un buen día?"
              id="reason"
              type="text"
              name="reason"
              onChange={getMessage}
            />
          </div>
          <Link to={"/"}>
            <input
              className="save__input"
              type="submit"
              value="Guardar"
              onClick={getFace}
            />
          </Link>
          <Link to={"/"}>
            <button className="cancel__input">Cancelar</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Editor;
