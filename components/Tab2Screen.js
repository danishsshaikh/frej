import React, { useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const DATA = [
  { id: "1", title: "Item 1", description: "This is item 1" },
  { id: "2", title: "Item 2", description: "This is item 2" },
  { id: "3", title: "Item 3", description: "This is item 3" },
  { id: "4", title: "Item 4", description: "This is item 4" },
  { id: "5", title: "Item 5", description: "This is item 5" },
];

const Tab2Screen = () => {
  const [searchText, setSearchText] = useState("");
  const [sortedData, setSortedData] = useState(DATA);
  const [sortAscending, setSortAscending] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (text) => {
    setSearchText(text);
    if (text) {
      const newData = DATA.filter(
        (item) =>
          item.title.toLowerCase().includes(text.toLowerCase()) ||
          item.description.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(newData);
      setSortedData(newData);
    } else {
      setSortedData(DATA);
      setFilteredData([]);
    }
  };

  const handleSort = () => {
    const sorted = sortedData.sort((a, b) =>
      sortAscending
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );
    setSortAscending(!sortAscending);
    setSortedData([...sorted]);
  };

  const renderListItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <TextInput
          style={{
            flex: 1,
            padding: 10,
            backgroundColor: "#e0e0e0",
            borderRadius: 5,
          }}
          value={searchText}
          onChangeText={handleSearch}
          placeholder="Search"
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#2196f3",
            padding: 10,
            marginLeft: 10,
            borderRadius: 5,
          }}
          onPress={() => handleSearch("")}
        >
          <Text style={{ color: "#fff" }}>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#2196f3",
            padding: 10,
            marginLeft: 10,
            borderRadius: 5,
          }}
          onPress={handleSort}
        >
          <Text style={{ color: "#fff" }}>
            {sortAscending ? "Sort A-Z" : "Sort Z-A"}
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={sortedData}
        keyExtractor={(item) => item.id}
        renderItem={renderListItem}
      />
    </View>
  );
};

export default Tab2Screen;
