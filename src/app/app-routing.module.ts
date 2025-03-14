// // // import { NgModule } from '@angular/core';
// // // import { RouterModule, Routes } from '@angular/router';

// // // const routes: Routes = [];

// // // @NgModule({
// // //   imports: [RouterModule.forRoot(routes)],
// // //   exports: [RouterModule]
// // // })
// // // export class AppRoutingModule { }
// // import { NgModule } from '@angular/core';
// // import { RouterModule, Routes } from '@angular/router';
// // import { HomeComponent } from './components/home/home.component';
// // import { WorkoutListComponent } from './components/workout-list/workout-list.component';
// // import { ProgressComponent } from './components/progress/progress.component';

// // const routes: Routes = [
// //   { path: '', component: HomeComponent },
// //   { path: 'workout-list', component: WorkoutListComponent },
// //   // { path: 'progress', component: ProgressComponent },
// //   { path: '', redirectTo: '/workout-list', pathMatch: 'full' },
// //   { path: 'progress/:workout', component: ProgressComponent }
// // ];

// // @NgModule({
// //   imports: [RouterModule.forRoot(routes)],
// //   exports: [RouterModule]
// // })
// // export class AppRoutingModule { }


// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';
// import { WorkoutListComponent } from './components/workout-list/workout-list.component';
// import { ProgressComponent } from './components/progress/progress.component';

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'workout-list', component: WorkoutListComponent },
//   { path: 'progress/:workout', component: ProgressComponent }, // Only one progress route
//   { path: '**', redirectTo: '/workout-list' } // Redirect any unknown path
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { ProgressComponent } from './components/progress/progress.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'workout-list', component: WorkoutListComponent },
  { path: 'progress/:workout', component: ProgressComponent }, // Fixing parameter route
  { path: '**', redirectTo: '/workout-list' } // Redirect unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
