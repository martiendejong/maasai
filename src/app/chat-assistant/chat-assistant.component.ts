import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChatAssistantService } from '../chat-assistant.service'; // Import your ChatAssistantService

@Component({
  selector: 'app-chat-assistant',
  templateUrl: './chat-assistant.component.html',
  styleUrls: ['./chat-assistant.component.scss'],
})
export class ChatAssistantComponent {
  @ViewChild('chatContainer') chatContainer: ElementRef | undefined;

  userResponse: string = ''; // User's response
  chatMessages: { text: string; sender: string }[] = []; // Array to store chat messages
  chatOpen = false;
  inputDisabled = false;

  constructor(private chatAssistantService: ChatAssistantService) {}

  ngOnInit() {
    // Fetch and display the initial message from the Chat Assistant
    // this.chatAssistantService.getInitialMessage().subscribe((initialMessage: string) => {
    //   this.addMessage(initialMessage, 'assistant');
    // });
  }

  handleChatContainerClick(event: MouseEvent) {
    // Check if the clicked target is the chat-container itself
    if (event.target === event.currentTarget) {
      // Add your logic to handle the click event here
      // For example, you can call toggleChat() to close the chat
      this.toggleChat();
    }
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
    this.scrollToBottom();
  }

  scrollToBottom() {
    try {
      if(this.chatContainer !== undefined) {
        var nativeElement = this.chatContainer.nativeElement;
        setTimeout(() => nativeElement.scrollTop = nativeElement.scrollHeight, 200);
      }
    } catch (err) {
      console.error(err);
    }
  }
}
