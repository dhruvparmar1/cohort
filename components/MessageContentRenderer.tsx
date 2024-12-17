import React, { memo } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";
import { Ionicons } from "@expo/vector-icons";

import { MediaContent } from "@/common";

import { colors, fontFamily, fontSizes, hp, wp } from "@/theme";

interface MessageContentRendererProps {
  message: string;
  media?: MediaContent;
}

const MessageContentRenderer = memo(
  ({ message, media }: MessageContentRendererProps) => {
    const renderMessageContent = (media?: MediaContent) => {
      if (!media) return null;

      const { type, content } = media;

      switch (type) {
        case "image":
          return <Image source={{ uri: content }} style={styles.image} />;
        case "video":
          const player = useVideoPlayer(content, (player) => {
            player.currentTime = 5;
          });

          const { isPlaying } = useEvent(player, "playingChange", {
            isPlaying: player.playing,
          });

          const handlePlayer = () =>
            isPlaying ? player.pause() : player.play();

          return (
            <View style={styles.videoContainer}>
              <VideoView
                style={styles.video}
                allowsFullscreen
                allowsPictureInPicture
                player={player}
                contentFit="cover"
                nativeControls={false}
              />
              <Ionicons
                name={isPlaying ? "pause-circle" : "play-circle"}
                size={hp(4)}
                color={colors.lightGreen}
                style={{
                  position: "absolute",
                }}
                onPress={handlePlayer}
              />
            </View>
          );

        default:
          return null;
      }
    };

    return (
      <View>
        {renderMessageContent(media)}

        {/* Render text below the media */}
        <Text style={[styles.message, media && { marginTop: hp(0.5) }]}>
          {message}
        </Text>
      </View>
    );
  }
);

export default MessageContentRenderer;

const styles = StyleSheet.create({
  image: {
    width: wp(45),
    height: hp(20),
    borderRadius: wp(1.5),
  },
  videoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: wp(45),
    height: hp(20),
    borderRadius: wp(1.5),
  },
  message: {
    fontSize: fontSizes.xs,
    color: colors.textSecondary,
    fontFamily: fontFamily.regular,
    minWidth: wp(15),
  },
});
