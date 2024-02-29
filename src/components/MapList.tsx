import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import React, { ReactElement } from 'react'

type Props = {
  data: any[];
  renderItem: (item: any, index: number) => ReactElement;
  style?: StyleProp<ViewStyle>;
  fragment?: boolean;
};

const MapList = ({ data, renderItem, style, fragment }: Props) => {
  if (data.length === 0 && !renderItem) return null;
  const MappedView = () => <>
    {data.map((item, index) => renderItem(item, index))}
  </>
  if (fragment) {
    return <MappedView />
  }
  return (
    <View style={style}>
      <MappedView />
    </View>
  );
};

export default MapList

MapList.defaultProps = {
  fragment: false,
}