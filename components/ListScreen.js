import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchListData } from "./actions/actions";

const ListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const listData = useSelector((state) => state.listData);
  const loading = useSelector((state) => state.loading);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      dispatch(fetchListData());
    });

    return unsubscribe;
  }, [navigation, dispatch]);

  const handleRefresh = () => {
    dispatch(fetchListData());
  };

  const handleLoadMore = () => {
    dispatch(fetchListData(page + 1));
    setPage(page + 1);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Image style={styles.itemImage} source={{ uri: item.thumbnailUrl }} />
    </View>
  );

  return (
    <FlatList
      data={listData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      refreshing={loading}
      onRefresh={handleRefresh}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },
  itemContainer: {
    marginBottom: 16,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  itemImage: {
    width: "100%",
    aspectRatio: 1,
  },
});

export default ListScreen;
