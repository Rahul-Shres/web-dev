package main

import (
	"fmt"
	"time"
)

func main() {

	fmt.Println("Starting")
	errorsandpanic()

	go performRasengan()

	// Meanwhile, you can perform another jutsu "Chidori" without waiting for the Rasengan to finish.
	for i := 1; i <= 3; i++ {
		fmt.Println("Performing Chidori - Step", i)
		time.Sleep(300 * time.Millisecond) // Simulate the time taken for each step.
	}
}
