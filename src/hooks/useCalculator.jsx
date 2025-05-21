import { useState } from "react"

const MAX_DIGITS = 9
const MAX_VALUE = 999999999

export const useCalculator = () => {
  const [current, setCurrent] = useState("0")
  const [prev, setPrev] = useState(null)
  const [operator, setOperator] = useState(null)
  const [clearNext, setClearNext] = useState(false)

  //Reiniciar todos los valores
  const reset = () => {
    setCurrent("0")
    setPrev(null)
    setOperator(null)
    setClearNext(false)
  }

  const calculate = (a, b, op) => {
    const numA = parseFloat(a)
    const numB = parseFloat(b)
    let result = 0

    switch (op) {
      case "+":
        result = numA + numB
        break
      case "-":
        result = numA - numB
        break
      case "*":
        result = numA * numB
        break
      case "/":
        if (numB === 0) return "ERROR"
        result = numA / numB
        break
      default:
        return "ERROR"
    }

    if (result < 0 || result > MAX_VALUE) return "ERROR"

    const resultStr = result.toString()

    if (resultStr.length <= MAX_DIGITS) return resultStr
    return result.toPrecision(9).slice(0, 9)
  }

  const handleClick = (btn) => {
    if (btn === "C") {
      reset()
      return
    }

    if (["+", "-", "*", "/"].includes(btn)) {
      if (prev !== null && operator && !clearNext) {
        const result = calculate(prev, current, operator)
        setPrev(result)
        setCurrent(result)
      } else {
        setPrev(current)
      }
      setOperator(btn)
      setClearNext(true)
      return
    }

    if (btn === "=") {
      if (prev !== null && operator) {
        const result = calculate(prev, current, operator)
        setCurrent(result)
        setPrev(null)
        setOperator(null)
        setClearNext(true)
      }
      return
    }

    //Evitar escribir mas de 9 digitos
    if (current.length >= MAX_DIGITS && !clearNext) return

    if (clearNext) {
      setCurrent(btn)
      setClearNext(false)
    } else {
      setCurrent(current === "0" ? btn : current + btn)
    }
  }

  return {
    current,
    handleClick
  }
}
