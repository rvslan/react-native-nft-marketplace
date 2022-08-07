import React, { useState } from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';

import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';
import { COLORS, NFTData } from '../constants';

const Home = () => {
  const [data, setData] = useState(NFTData);

  const handleSearch = (text) => {
    if (!text.length) {
      return setData(NFTData);
    }

    const filteredData = NFTData.filter((item) => {
      return item.name.toLowerCase().includes(text.toLowerCase());
    });

    if (filteredData.length) {
      setData(filteredData);
    } else {
      return setData(NFTData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={data}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
