import { ChatMessage, User } from "./types";

// Sample user data
export const userInfo: User = {
  name: "John Doe",
  image:
    "https://images.unsplash.com/photo-1602471615287-d733c59b79c4?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  isActive: true,
};

// Sample chat messages
export const chatMessages: ChatMessage[] = [
  {
    id: 1,
    message: "Hello!",
    user: "me",
    timestamp: "2024-12-16 10:00:00",
  },
  {
    id: 2,
    message: "Hi there!",
    user: "other",
    timestamp: "2024-12-16 10:02:00",
  },
  {
    id: 3,
    message: "Check out this photo!",
    media: {
      type: "image",
      content:
        "https://images.unsplash.com/photo-1704791403624-c192488ca4fa?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    user: "me",
    timestamp: "2024-12-16 10:05:00",
  },
  {
    id: 4,
    message: "Watch this video!",
    media: {
      type: "video",
      content:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    user: "other",
    timestamp: "2024-12-16 10:08:00",
  },
];

// Function to add a new chat message
export const addChatMessage = (message: string, user: "me" | "other") => {
  const newMessage: ChatMessage = {
    id: chatMessages.length + 1,
    message,
    user,
    timestamp: new Date().toISOString(),
  };
  chatMessages.push(newMessage);
};
