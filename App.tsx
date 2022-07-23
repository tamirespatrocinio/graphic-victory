import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryScatter,
} from "victory-native";

export default function App() {
  return (
    <View style={styles.container}>
      <VictoryChart
        theme={VictoryTheme.material}
        style={{
          parent: {
            backgroundColor: "#282C34",
            borderRadius: 10,
          },
        }}
      >
        <VictoryLine
          animate
          style={{
            data: {
              stroke: "#B1101E",
              strokeWidth: 3,
            },
          }}
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 },
          ]}
        />
        <VictoryScatter
          style={{ data: { fill: "#c43a31" } }}
          size={5}
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 },
          ]}
        />
      </VictoryChart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
