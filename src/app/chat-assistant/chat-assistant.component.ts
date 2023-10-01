import { Component } from '@angular/core';
import { ChatAssistantService } from '../chat-assistant.service'; // Import your ChatAssistantService

@Component({
  selector: 'app-chat-assistant',
  templateUrl: './chat-assistant.component.html',
  styleUrls: ['./chat-assistant.component.scss'],
})
export class ChatAssistantComponent {
  userResponse: string = ''; // User's response
  chatMessages: { text: string; sender: string }[] = []; // Array to store chat messages
  chatOpen = false;
  inputDisabled = false;

  constructor(private chatAssistantService: ChatAssistantService) {}

  ngOnInit() {
    // Fetch and display the initial message from the Chat Assistant
    this.chatAssistantService.getInitialMessage().subscribe((initialMessage: string) => {
      this.addMessage(initialMessage, 'assistant');
    });
  }

  toggleChat() {
    this.chatOpen = !this.chatOpen;
  }

  sendMessage() {
    if(this.inputDisabled) return;

    if (this.userResponse.trim() !== '') {
      this.addMessage(this.userResponse, 'user');
      this.inputDisabled = true; // Disable the input

      var finished = false;
      this.chatAssistantService.getMessage(this.userResponse).subscribe((response: string) => {
        this.addMessage(response, 'assistant');
        this.inputDisabled = false; // Enable the input after receiving a response
        finished = true;
      });

      setTimeout(() => {
        if(finished) return;
        this.inputDisabled = false; // Enable the input after receiving a response
      }, 15000);

      this.userResponse = ''; // Clear the user's response

    }
  }

  // Helper function to add a message to the chat
  private addMessage(text: string, sender: string) {
    this.chatMessages.push({ text, sender });
  }
}
