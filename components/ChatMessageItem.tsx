import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { format } from "date-fns";

import { ChatMessageItemProps } from "@/common";
import { colors, fontFamily, hp, wp } from "@/theme";
import MessageContentRenderer from "./MessageContentRenderer";

const ChatMessageItem = ({ item }: ChatMessageItemProps) => {
  const { id, message, user, media, timestamp } = item;
  const isSender = user === "me";
  const styles = makeStyles(isSender);

  // Format the timestamp
  const formattedTimestamp = format(new Date(timestamp), "p"); // Format to "hh:mm a"

  return (
    <View key={id} style={[styles.container]}>
      <MessageContentRenderer message={message} media={media} />

      <View style={styles.messageFooterContainer}>
        {timestamp && (
          <Text style={[styles.timestamp]}>{formattedTimestamp}</Text>
        )}
        {isSender && (
          <MaterialCommunityIcons
            name="checkbox-marked-circle-outline"
            size={hp(1.5)}
            color={colors.darkGray}
          />
        )}
      </View>
    </View>
  );
};

const makeStyles = (isSender: boolean) =>
  StyleSheet.create({
    container: {
      marginVertical: hp(1),
      padding: hp(1.2),
      borderRadius: wp(2),
      backgroundColor: isSender ? "#d1e7dd" : "#f8d7da",
      alignSelf: isSender ? "flex-end" : "flex-start",
    },
    timestamp: {
      fontSize: RFValue(9),
      color: colors.textSecondary,
      fontFamily: fontFamily.regular,
    },
    messageFooterContainer: {
      flexDirection: "row",
      alignSelf: "flex-end",
      alignItems: "center",
      gap: wp(1),
      marginTop: hp(0.6),
    },
  });

export default ChatMessageItem;
