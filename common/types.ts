export interface User {
  name: string;
  image: string;
  isActive: boolean;
}

// Define types for chat messages
export type ChatMessage = {
  id: number;
  message: string; 
  media?: MediaContent; 
  user: "me" | "other"; 
  timestamp: string; 
};

// Define the type for media content
export type MediaContent = {
  type: "image" | "video"; 
  content: string; 
};

export type ChatMessageItemProps = {
  item: ChatMessage;
};
