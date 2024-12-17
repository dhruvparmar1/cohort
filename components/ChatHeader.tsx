import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { User } from "@/common";
import { colors, fontFamily, fontSizes, hp } from "@/theme";
import { useTheme } from "@react-navigation/native";

const ChatHeader = ({ user }: { user: User }) => {
  const { name, image, isActive } = user;
  const userActiveText = isActive ? "Online" : "Offline";

  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Ionicons name="chevron-back" size={hp(4)} color={colors.primary} />

      {/* User Info */}
      <View style={styles.userContainer}>
        <View>
          <Image source={{ uri: image }} style={styles.image} />
          <View style={styles.activeIcon} />
        </View>
        <View>
          <Text style={[styles.name, { color: theme.colors.text }]}>
            {name}
          </Text>
          <Text style={[styles.activeStatus, { color: colors.darkGray }]}>
            {userActiveText}
          </Text>
        </View>
      </View>

      <Ionicons name="ellipsis-vertical" size={hp(3)} color={colors.primary} />
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: hp(1),
  },
  userContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: hp(1.5),
    marginStart: hp(0.5),
  },
  image: {
    height: hp(5),
    width: hp(5),
    borderRadius: hp(2.5),
  },
  name: {
    fontSize: fontSizes.sm,
    fontFamily: fontFamily.bold,
  },
  activeStatus: {
    fontSize: fontSizes.xs,
    fontFamily: fontFamily.regular,
  },
  activeIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: 7,
    height: 14,
    width: 14,
    backgroundColor: colors.green,
  },
});
