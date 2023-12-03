package main

import "fmt"

func pointer() {
	a := "rahul"
	ip := &a
	fmt.Println("address of a ", &a)
	fmt.Println("value of a ", *ip)
	fmt.Println("address of a ", &ip)
}
