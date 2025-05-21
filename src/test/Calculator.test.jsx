/* eslint-disable no-undef */
import { renderHook, act, waitFor } from "@testing-library/react"
import { useCalculator } from "../hooks/useCalculator"

describe("useCalculator hook", () => {

  //Test 1
  test("no permite más de 9 dígitos", () => {
    const { result } = renderHook(() => useCalculator())
    act(() => {
      for (let i = 0; i < 12; i++) {
        result.current.handleClick("9")
      }
    })
    expect(result.current.current.length).toBeLessThanOrEqual(9)
  })

  //Test 2
  test("realiza una suma correctamente", async () => {
    const { result } = renderHook(() => useCalculator())

    act(() => {
      result.current.handleClick("1")
    })

    await waitFor(() => {
      expect(result.current.current).toBe("1")
    })

    act(() => {
      result.current.handleClick("+")
    })

    act(() => {
      result.current.handleClick("5")
    })

    act(() => {
      result.current.handleClick("=")
    })

    await waitFor(() => {
      expect(result.current.current).toBe("6")
    })
  })

  //Test 3
  test("divide entre cero y muestra ERROR", async () => {
    const { result } = renderHook(() => useCalculator())

    act(() => {
      result.current.handleClick("8")
    })

    await waitFor(() => {
      expect(result.current.current).toBe("8")
    })

    act(() => {
      result.current.handleClick("/")
    })
    act(() => {
      result.current.handleClick("0")
    })
    act(() => {
      result.current.handleClick("=")
    })

    await waitFor(() => {
      expect(result.current.current).toBe("ERROR")
    })
  })

  //Test 4
  test("resultados negativos muestra ERROR", async () => {
    const { result } = renderHook(() => useCalculator())

    act(() => {
      result.current.handleClick("5")
    })

    await waitFor(() => {
      expect(result.current.current).toBe("5")
    })

    act(() => {
      result.current.handleClick("-")
    })
    act(() => {
      result.current.handleClick("6")
    })
    act(() => {
      result.current.handleClick("=")
    })

    await waitFor(() => {
      expect(result.current.current).toBe("ERROR")
    })
  })
})
