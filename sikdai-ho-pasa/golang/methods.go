package main

import "fmt"

type Gang struct {
	Name      string
	Strength  int
	Territory string
}

func (g Gang) Describe() {

	fmt.Println("Name ", g.Name)
	fmt.Println("Strength ", g.Strength)
}
func methods() {
	thomas := Gang{
		Name:      "Thomas",
		Strength:  100,
		Territory: "Small Heath",
	}

	thomas.Describe()
}
