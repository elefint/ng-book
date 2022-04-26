// We import component from the module "@angular/core", this tells our program where to find the dependencies that we are looking for.
// In this case, we're telling the compiler that "@angular/core" defines and exports two JS/TS objects called "Component" and "OnInit".
import { Component, OnInit } from '@angular/core';

// Notice that the structure of this import is of the format import {things} from wherever.
// In the {things} part what we are doing is called destructuring.
// Destructuring is a feature provided by ES6 and TypeScript.
// The idea with import is a lot like import in Java or require in Ruby:
// we’re pulling in these dependencies from another module and making these dependencies available for use in this file.

// After import our dependencies, we are declaring the component.

//These are called decorators.
/* @Component({
    // ...
 }) */

//The syntax of Angular's component selector is similar to CSS selectors.
@Component({
  selector: 'app-hello-world', // defining a new tag that we can use in our markup.
  // The selector property here indicates which DOM element this component is going to use.
  // In this case, any <app-hello-world></app-hello-world> tags that appear within a template will be compiled
  // using the HelloWorldComponent class and get any attached functionality.
  templateUrl: './hello-world.component.html', // Use ` back ticks ` to include a template string (HTML Markup).
  styleUrls: ['./hello-world.component.css'] // Loads our CSS file. "Style-encapuslation" applies CSS to this component only.
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// The import statement defines the modules we want to use to write our code. Here we’re importing two things: Component, and OnInit.
