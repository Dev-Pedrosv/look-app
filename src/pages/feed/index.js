import React, { useEffect, useState } from "react";
import { Box, ScrollView } from "../../styles";
import { Header } from "../../components/header";
import { StoryList } from "../../components/stories/list";
import { PostList } from "../../components/post/list";
import { Empty } from "../../components/empty";
import { StatusBar } from "expo-status-bar";
import api from "../../services/api";

export function Feed({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [feed, setFeed] = useState({
    stories: [],
    posts: [],
  });

  const getFeed = async () => {
    try {
      setLoading(true);
      const { data } = await api.get("/feed");
      setTimeout(() => {
        setFeed(data);
        setLoading(false);
      }, 2000);
    } catch (err) {
      setLoading(false);
      alert(err.message);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getFeed();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <>
      <StatusBar style="dark" />

      <Box background="light">
        <Header title="Explore" />
        {loading && (
          <Empty loading={loading} message="Erro ao carregar o feed" />
        )}
        <ScrollView>
          {!loading && (
            <>
              <StoryList stories={feed?.stories} />
              <PostList posts={feed?.posts} />
            </>
          )}
        </ScrollView>
      </Box>
    </>
  );
}
