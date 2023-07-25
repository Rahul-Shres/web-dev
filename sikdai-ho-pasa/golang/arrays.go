package main

import "fmt"

func arrays() {
	gangsters := []string{"Thomas Shelby", "Arthur Shelby", "Alfie Solomons", "Polly Gray", "John Shelby"}
	// append means to add
	gangsters = append(gangsters, "Rahul Shelby")
	fmt.Println("Gangsters:", gangsters)

}
