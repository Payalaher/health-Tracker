

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { RouterModule, Routes } from '@angular/router';  // <-- Ensure RouterModule is imported

// import { AppComponent } from './app.component';
// import { ProgressComponent } from './components/progress/progress.component'; // Ensure the path is correct
// import { WorkoutListComponent } from './components/workout-list/workout-list.component';
// import { HomeComponent } from './components/home/home.component';

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'workout-list', component: WorkoutListComponent },
//   { path: 'progress', component: ProgressComponent },
// ];

// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeComponent,
//     WorkoutListComponent,
//     ProgressComponent
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     RouterModule.forRoot(routes)
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

// import { AppComponent } from './app.component';
// import { ProgressComponent } from './components/progress/progress.component';
// import { WorkoutListComponent } from './components/workout-list/workout-list.component';
// import { HomeComponent } from './components/home/home.component';
// import { AppRoutingModule } from './app-routing.module'; // Import the correct module

// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeComponent,
//     WorkoutListComponent,
//     ProgressComponent
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     AppRoutingModule // Use the routing module here
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProgressComponent } from './components/progress/progress.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module'; // Correct import

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkoutListComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule // Use routing module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
