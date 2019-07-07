import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const initialState = {
  firstnumber: 0,
  secondnumber: 0,
  operator: "+",
  result: 0
};

function reducer(state, action) {
  const firstnumber = Number(action.firstnumber);
  const secondnumber = Number(action.secondnumber);

  switch (action.type) {
    // User Input actions
    case "FIRSTNUMECATION":
      return {
        ...state,
        firstnumber: firstnumber
      };
    case "SECONDNUMECATION":
      return {
        ...state,
        secondnumber: secondnumber
      };
    case "OPERATORACTION":
      return {
        ...state,
        operator: action.operator
      };
    // Computing actions
    case "ADD":
      return {
        ...state,
        result: firstnumber + secondnumber
      };
    case "SUBTRACT":
      return { ...state, result: firstnumber - secondnumber };
    case "MULTIPLY":
      return { ...state, result: firstnumber * secondnumber };
    case "DIVIDE":
      return { ...state, result: firstnumber / secondnumber };
    default:
      throw new Error();
  }
}

function Calculator() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const ExecuteAction = () => {
    const operator = state.operator;

    switch (operator) {
      case "+":
        dispatch({
          type: "ADD",
          firstnumber: state.firstnumber,
          secondnumber: state.secondnumber
        });
        break;

      case "-":
        dispatch({
          type: "SUBTRACT",
          firstnumber: state.firstnumber,
          secondnumber: state.secondnumber
        });
        break;

      case "*":
        dispatch({
          type: "MULTIPLY",
          firstnumber: state.firstnumber,
          secondnumber: state.secondnumber
        });
        break;

      case "/":
        dispatch({
          type: "DIVIDE",
          firstnumber: state.firstnumber,
          secondnumber: state.secondnumber
        });
        break;

      default:
        throw new Error();
    }
  };

  const operatoraction = evt => {
    const operator = evt.target.value;
    dispatch({
      type: "OPERATORACTION",
      operator: operator
    });
  };

  const firstnumaction = evt => {
    dispatch({
      type: "FIRSTNUMECATION",
      firstnumber: evt.target.value
    });
  };

  const secondnumaction = evt => {
    dispatch({
      type: "SECONDNUMECATION",
      secondnumber: evt.target.value
    });
  };

  return (
    <form>
      <label>
        <div>
          Number 1 :
          <input
            type="text"
            onChange={evt => firstnumaction(evt)}
            value={state.firstnumber}
          />
        </div>
        <br />
        <div>
          Number 2 :
          <input
            type="text"
            onChange={evt => secondnumaction(evt)}
            value={state.secondnumber}
          />
        </div>
        <br />
        <div>
          <select onChange={evt => operatoraction(evt)}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
          <br />
          <br />
        </div>
        <input type="button" onClick={evt => ExecuteAction()} value="Execute" />
        <div />
        <br />
        <input type="text" value={state.result} />
      </label>
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Calculator />, rootElement);
