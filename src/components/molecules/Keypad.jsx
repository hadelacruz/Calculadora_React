import Button from '../atoms/Button'

const Keypad = ({ onButtonClick }) => {
  const buttons = [
    '7', '8', '9', '+','4', '5', '6', '-','1', '2', '3', '*','0', '=', 'C', '/'
  ]
  return (
    <div className="keypad">
      {buttons.map((btn, i) => {
        const isOperator = ['+', '-', '*', '/'].includes(btn)
        const isClear = btn === 'C'
        return (
          <Button key={i} label={btn} onClick={onButtonClick} className={`calc-button ${isOperator ? 'operator' : ''} ${isClear ? 'clear' : ''}`}/>
        )
      })}
    </div>
  )
}
export default Keypad
