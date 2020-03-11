import { Component } from '@angular/core';
import Swal from 'sweetalert2';
  
import { Router } from '@angular/router';
import { AuthenticationService } from './_services';
import { User } from './_models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-material';
  showFiller = false;
  currentUser: User;

  
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
 
}




  resetPassword() {
    (async () => {
      Swal.mixin({
        input: 'password',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3']
      }).queue([         
        {
          title: 'Change Password',
          text: 'Please Enter Your Current Password'
        },
        'New Password',
        'Confirm New Password'
      ]).then((result) => {
        if (result.value) {
          const answers = JSON.stringify(result.value)
          Swal.fire({
            
            title: 'Check Reset Password Details ',
           
            html: `
              Your Passwords:
              <pre><code>${answers}</code></pre>
            `,
            confirmButtonText: 'Reset',
            showCancelButton: true
          }).then((result) => {
              if (result.value) {
                Swal.fire(
                  'Your Password Reset',
                  'Succussfully!',
                  'success'
                )
              }
            })
        }
      })
      
    })() // FOR asnc end point of TYPE SURVEY NAME 
    } // FOR TYPE SURVEY NAME 

    logoutProfile(){
     
      Swal.fire({
        title: 'Are you sure you want to logout?',
        text: "You won't be able to see Your Survey Details",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.value) {
      
          this.authenticationService.logout();
          this.router.navigate(['/login']);
          
         
        }
      })
    }
  
}

