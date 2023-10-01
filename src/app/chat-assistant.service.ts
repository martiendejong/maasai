import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { Observable, map } from 'rxjs';
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ChatAssistantService {
  private conversationId: string | null = null;

  constructor(
    private http: HttpClient,
    private translateService: TranslateService
  ) {}

  getInitialMessage(): Observable<string> {
    // You can replace 'initial_message_key' with the actual translation key for the initial message
    return this.translateService.get('initial_message_key');
  }

  getMessage(userResponse: string): Observable<string> {
    // Make an API request to your server with the userResponse and the conversationId
    const requestBody = {
      userResponse,
      conversationId: this.conversationId,
    };

    return this.http.post<{ message: string; conversationId: string }>(
      '/chat.php',
      requestBody
    ).pipe(
      map(response => {
        // Set the conversationId internally
        this.setConversationId(response.conversationId);

        // Return only the message
        return response.message;
      })
    );
  }

  setConversationId(conversationId: string) {
    this.conversationId = conversationId;
  }
}
