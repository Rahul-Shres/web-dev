package main

import (
	"errors"
	"fmt"
)

// Function that divides two numbers and returns an error if division by zero occurs.
func divide(a, b int) (int, error) {
	if b == 0 {
		return 0, errors.New("division by zero is not allowed")
	}
	return a / b, nil // Return the result and nil for the error to indicate success.
}

func errorsandpanic() {
	result, err := divide(10, 2)
	if err != nil {
		fmt.Println("Error:", err)
	} else {
		fmt.Println("Result of division:", result)
	}

	result, err = divide(10, 0)
	if err != nil {
		fmt.Println("Error:", err)
	} else {
		fmt.Println("Result of division:", result)
	}
}
