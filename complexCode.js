/* 
 * Filename: complexCode.js
 * Description: This code is a complex implementation of a web-based chat application.
 */

// Constants
const MAX_MESSAGE_LENGTH = 200;
const MAX_MESSAGES_LIMIT = 1000;

// Variables
let messages = [];
let users = [];
let currentUserId = null;

// Classes
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  getInfo() {
    return `Name: ${this.name}, Email: ${this.email}`;
  }
}

class Message {
  constructor(id, userId, content) {
    this.id = id;
    this.userId = userId;
    this.content = content;
    this.timestamp = new Date();
  }

  getDetails() {
    const user = getUserById(this.userId);
    const formattedTimestamp = this.timestamp.toLocaleString();
    return `From: ${user.name} (${user.email})
      Content: ${this.content}
      Sent at: ${formattedTimestamp}`;
  }
}

// Helper functions
function getUserById(userId) {
  return users.find((user) => user.id === userId);
}

function addMessage(userId, content) {
  if (content.length > MAX_MESSAGE_LENGTH) {
    console.error("Message is too long");
    return;
  }

  const newMessage = new Message(messages.length + 1, userId, content);
  messages.push(newMessage);

  if (messages.length > MAX_MESSAGES_LIMIT) {
    console.warn("Reached message limit");
    messages.shift();
  }
}

// Usage
const user1 = new User(1, "Alice", "alice@example.com");
const user2 = new User(2, "Bob", "bob@example.com");
users.push(user1, user2);

currentUserId = user1.id;
addMessage(user1.id, "Hello Bob!");
addMessage(user2.id, "Hi Alice! How are you?");
addMessage(user1.id, "I'm doing great! Just working on this complex code.");

console.log(messages[0].getDetails());