const initialState = {
  country: "PL",
  input: "0",
  cost: 0,
}

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case "INPUT": {
      return {
        ...state,
        input: action.stringValue,
        cost: state.country === "PL" ? (+action.stringValue || 0) * 1246.92 : 0,
      }
    }
    case "COUNTRY_CHANGE": {
      return {
        ...state,
        country: action.country,
        cost: action.country === "PL" ? (+state.input || 0) * 1246.92 : 0,
      }
    }
    default:
      throw new Error(`Action handler does not exist for ${action.type}`)
  }
}

const Calculator = () => {
  const [calculatorState, dispatch] = React.useReducer(
    calculatorReducer, initialState)

  return (
    <div className="calculator-form">
      <span>Months</span>
      <input
        type="number"
        value={calculatorState.input}
        onChange={(e) => dispatch({ type: "INPUT", stringValue: e.target.value })}
      />
      <input
        id="PL"
        type="radio"
        checked={calculatorState.country === "PL"}
        onChange={e => dispatch({ type: "COUNTRY_CHANGE", country: e.target.id })}
      />
      <label for="PL">Poland</label>
      <input
        id="EE"
        type="radio"
        checked={calculatorState.country === "EE"}
        onChange={e => dispatch({ type: "COUNTRY_CHANGE", country: e.target.id })}
      />
      <label for="EE">Estonia</label>
      <h2><strong>{calculatorState.cost} PLN</strong></h2>
    </div>
  )
}