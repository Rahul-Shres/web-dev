package main

import (
	"fmt"
	"time"
)

// Imagine you have a jutsu called "Rasengan" that takes some time to perform.
func performRasengan() {
	for i := 1; i <= 5; i++ {
		fmt.Println("Performing Rasengan - Step", i)
		time.Sleep(500 * time.Millisecond) // Simulate the time taken for each step.
	}
}

func goroutine() {
	// You can use the "go" keyword to start a goroutine for the "performRasengan" jutsu.
	go performRasengan()

	// Meanwhile, you can perform another jutsu "Chidori" without waiting for the Rasengan to finish.
	for i := 1; i <= 3; i++ {
		fmt.Println("Performing Chidori - Step", i)
		time.Sleep(300 * time.Millisecond) // Simulate the time taken for each step.
	}
}
