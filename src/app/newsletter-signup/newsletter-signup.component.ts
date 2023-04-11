import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter-signup',
  templateUrl: './newsletter-signup.component.html',
  styleUrls: ['./newsletter-signup.component.scss'],
})
export class NewsletterSignupComponent implements OnInit {
  email = '';
  showNewsletterBox = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.showNewsletterBox = true;
    }, 20000);
  }

  closeNewsletter(): void {
    this.showNewsletterBox = false;
  }

  subscribeToNewsletter(): void {
    console.log(`Subscribing ${this.email} to the newsletter.`);
    // Add your newsletter subscription logic here
  }
}
