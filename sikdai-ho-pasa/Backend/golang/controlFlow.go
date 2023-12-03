package main

import "fmt"

func controlFlow() {

	a := 10

	if a > 5 {
		fmt.Println(a - 5)
	} else {
		fmt.Println(a + 5)
	}
	fmt.Println("controlFlow function ends here.")
}
