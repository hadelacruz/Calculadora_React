import Display from "../atoms/Display"
import Keypad from "../molecules/Keypad"
import { useCalculator } from "../../hooks/useCalculator"

const Calculator = () => {
  const { current, handleClick } = useCalculator()

  return (
    <div className="calculator">
      <Display value={current} />
      <Keypad onButtonClick={handleClick} />
    </div>
  )
}

export default Calculator
