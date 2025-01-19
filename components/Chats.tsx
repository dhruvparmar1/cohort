import React, { useCallback, useState, useRef } from "react";
import { FlatList } from "react-native";

import { ChatMessage, chatMessages } from "@/common";
import { wp } from "@/theme";
import ChatMessageItem from "./ChatMessageItem";

const Chats = () => {
  const [messages, setMessages] = useState(chatMessages);
  const flatListRef = useRef<FlatList<ChatMessage>>(null);

  const scrollToBottom = () => {
    flatListRef.current?.scrollToEnd({ animated: true });
  };

  const renderItem = useCallback(
    ({ item }: { item: ChatMessage }) => <ChatMessageItem item={item} />,
    []
  );

  return (
    <FlatList
      ref={flatListRef}
      data={messages}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ paddingHorizontal: wp(3.5) }}
      onContentSizeChange={scrollToBottom}
    />
  );
};

export default Chats;
