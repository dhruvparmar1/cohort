import React, { useCallback } from "react";
import { FlatList } from "react-native";

import { ChatMessage, chatMessages } from "@/common";
import { wp } from "@/theme";
import ChatMessageItem from "./ChatMessageItem";

const Chats = () => {
  const renderItem = useCallback(
    ({ item }: { item: ChatMessage }) => <ChatMessageItem item={item} />,
    []
  );

  return (
    <FlatList
      data={chatMessages}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ paddingHorizontal: wp(3.5) }}
    />
  );
};

export default Chats;
