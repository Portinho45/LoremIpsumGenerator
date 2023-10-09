import { Component, OnInit } from '@angular/core';
import arrWords from './words';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Generador de Lorem Ipsum';
  count = 1;
  paragraphs: string[] = [];

  ngOnInit() {
    this.generate();
    this.count = 0;
  }

  changeCountValue = (event: Event) => {
    const inputElement = event.target as HTMLInputElement;
    this.count = parseInt(inputElement.value, 10);
  };

  generate = () => {
    this.paragraphs = [];
    for (let i = 0; i < this.count; i++) {
      const paragraph = this.generateParagraph();
      this.paragraphs.push(paragraph);
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
