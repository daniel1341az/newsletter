import { Component } from '@angular/core';

@Component({
  selector: 'app-newsletter-signup',
  templateUrl: './newsletter-signup.component.html',
  styleUrls: ['./newsletter-signup.component.scss'],
})
export class NewsletterSignupComponent {
  email = '';
  showNewsletterBox = true;

  subscribeToNewsletter(): void {
    console.log(`Subscribing ${this.email} to the newsletter.`);
    // Add your newsletter subscription logic here
  }

  closeNewsletter(): void {
    this.showNewsletterBox = false;
  }
}
