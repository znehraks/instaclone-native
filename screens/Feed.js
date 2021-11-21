import { useQuery } from "@apollo/client";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { logUserOut } from "../apollo";
import { gql } from "@apollo/client";
import ScreenLayout from "../components/ScreenLayout";

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      id
      user {
        username
        avatar
      }
      file
      caption
      comments {
        id
        user {
          username
          avatar
        }
        payload
        isMine
        createdAt
      }
      commentNumber
      likes
      createdAt
      isMine
      isLiked
    }
  }
`;
export default function Feed() {
  const { data, loading } = useQuery(FEED_QUERY);
  const renderPhoto = ({ item: photo }) => {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ color: "white" }}>{photo.caption}</Text>
      </View>
    );
  };
  console.log(data, "feed");
  return (
    <ScreenLayout loading={loading}>
      <FlatList
        data={data?.seeFeed}
        keyExtractor={(photo) => "" + photo.id}
        renderItem={renderPhoto}
      />
    </ScreenLayout>
  );
}
