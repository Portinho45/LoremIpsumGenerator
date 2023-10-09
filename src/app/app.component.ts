import { Component, OnInit } from '@angular/core';
import arrWords from './words';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Lorem Ipsum Generator';
  count = 1;
  paragraphs: string[] = [];
  Errortext = '';

  ngOnInit() {
    this.generate();
    this.count = 0;
  }

  changeCountValue = (event: Event) => {
    const inputElement = event.target as HTMLInputElement;
    this.count = parseInt(inputElement.value, 10);
  };

  generate = () => {
    this.Errortext = '';
    this.paragraphs = [];
    if (this.count >= 0 && this.count <= 1000) {
      for (let i = 0; i < this.count; i++) {
        const paragraph = this.generateParagraph();
        this.paragraphs.push(paragraph);
      }
    } else {
      this.Errortext = 'Number out of valid range | Valid range 0-1000';
    }
  };


  generateParagraph = () => {
    const paragraphLength = Math.floor(Math.random() * 100) + 30;
    const paragraphWords = arrWords.slice(0, paragraphLength).join(' ');
    return (
      paragraphWords.charAt(0).toUpperCase() + paragraphWords.slice(1) + '.'
    );
  };

  generateRandom = () => {
    this.count = Math.floor(Math.random() * 10) + 1;
    this.generate();
  };

  clearCount = () => {
    this.count = 0;
    this.paragraphs = [];
  };

  copyToClipboard = () => {
    const textToCopy = this.paragraphs.join('\n');
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  };
}
