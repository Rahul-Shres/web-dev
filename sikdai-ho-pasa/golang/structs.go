// similar to class
package main

import "fmt"

type Gangsters struct {
	Name      string
	Strength  int
	Territory string
}

func structs() {
	thomas := Gang{
		Name:      "Thomas",
		Strength:  100,
		Territory: "Small Heath",
	}

	fmt.Println("Gangsters name: ", thomas.Name)
	fmt.Println("Gangsters strength: ", thomas.Strength)
	fmt.Println("Gangsters territory", thomas.Territory)
}
