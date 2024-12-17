import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Theme, useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { colors as color, fontFamily, fontSizes, hp, wp } from "@/theme";

const ChatInput = () => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Message"
        style={styles.textInput}
        selectionColor={color.primary}
        placeholderTextColor={color.darkGray}
      />
      <Ionicons name="attach" size={hp(3)} color={color.darkGray} />
      <Ionicons name="image-outline" size={hp(3)} color={color.darkGray} />
      <Ionicons name="camera-outline" size={hp(3)} color={color.darkGray} />
      <View style={styles.micButton}>
        <Ionicons name="mic-sharp" size={hp(3)} color={color.primary} />
      </View>
    </View>
  );
};

export default ChatInput;

const makeStyles = ({ colors }: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      borderWidth: 1,
      marginHorizontal: wp(5),
      marginVertical: hp(2),
      borderRadius: hp(4),
      paddingHorizontal: wp(1),
      borderColor: colors.border,
    },
    textInput: {
      flex: 1,
      marginStart: wp(4),
      fontSize: fontSizes.sm,
      fontFamily: fontFamily.regular,
      color: colors.text,
      paddingVertical: hp(2),
    },
    micButton: {
      backgroundColor: color.lightLavender,
      height: hp(5),
      width: hp(5),
      borderRadius: hp(2.5),
      justifyContent: "center",
      alignItems: "center",
    },
  });
