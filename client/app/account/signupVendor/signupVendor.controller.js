// 'use strict';

// class SignupVendorController {
//   //end-non-standard

//   constructor(Auth, $state) {
//       this.Auth = Auth;
//       this.$state = $state;
//     }
//     //start-non-standard


//   register(form) {
//     this.submitted = true;

//     if (form.$valid) {
//       this.Auth.createUser({
//           name: this.user.name,
//           email: this.user.email,
//           password: this.user.password.

//           // prototype

//           // firstName: this.user.firstName,
//           // lastName: this.user.lastName,
//           // address: this.user.address,
//           // postal: this.user.postal,
//           // phone: this.user.phone,
//           // role: 'vendor'
//         })
//         .then(() => {
//           // Account created, redirect to home
//           this.$state.go('main');
//         })
//         .catch(err => {
//           err = err.data;
//           this.errors = {};

//           // Update validity of form fields that match the mongoose errors
//           angular.forEach(err.errors, (error, field) => {
//             form[field].$setValidity('mongoose', false);
//             this.errors[field] = error.message;
//           });
//         });
//     }
//   }
// }

// angular.module('aApp')
//   .controller('SignupVendorController', SignupVendorController);