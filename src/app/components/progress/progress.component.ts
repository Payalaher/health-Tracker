// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-progress',
//   templateUrl: './progress.component.html',
//   styleUrls: ['./progress.component.css']
// })
// export class ProgressComponent {

// }


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-progress',
//   templateUrl: './progress.component.html',
//   styleUrls: ['./progress.component.css']
// })
// export class ProgressComponent { }



// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-progress',
//   templateUrl: './progress.component.html',
//   styleUrls: ['./progress.component.css']
// })
// export class ProgressComponent implements OnInit {
//   workout: string = '';
//   goal: number = 0;
//   completed: number = 0;
//   progressPercentage: number = 0;

//   constructor(private route: ActivatedRoute) {}

//   ngOnInit() {
//     // Get the selected workout from the URL parameter
//     this.workout = this.route.snapshot.paramMap.get('workout') || 'Unknown';
//   }

//   updateGoal(event: any) {
//     this.goal = +event.target.value;
//     this.calculateProgress();
//   }

//   updateCompleted(event: any) {
//     this.completed = +event.target.value;
//     this.calculateProgress();
//   }

//   calculateProgress() {
//     this.progressPercentage = this.goal > 0 ? (this.completed / this.goal) * 100 : 0;
//   }
// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  workout: string = '';
  goal: number = 0;
  completed: number = 0;
  progressPercentage: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Subscribe to route params
    this.route.paramMap.subscribe(params => {
      this.workout = params.get('workout') || 'Unknown';

      // Load saved progress from localStorage
      const savedProgress = localStorage.getItem(`progress-${this.workout}`);
      if (savedProgress) {
        const progressData = JSON.parse(savedProgress);
        this.goal = progressData.goal;
        this.completed = progressData.completed;
        this.calculateProgress();
      }
    });
  }

  updateGoal(event: any) {
    this.goal = +event.target.value;
    this.calculateProgress();
    this.saveProgress();
  }

  updateCompleted(event: any) {
    this.completed = +event.target.value;
    this.calculateProgress();
    this.saveProgress();
  }

  calculateProgress() {
    this.progressPercentage = this.goal > 0 ? (this.completed / this.goal) * 100 : 0;
  }

  saveProgress() {
    const progressData = {
      goal: this.goal,
      completed: this.completed
    };
    localStorage.setItem(`progress-${this.workout}`, JSON.stringify(progressData));
  }
}

