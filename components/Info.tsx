import { Component, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
} from "react-native";

import { Card, ListItem, Button, Icon } from "@rneui/themed";
import { ScrollView } from "react-native-gesture-handler";

export default function Info() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Abalone Card */}
        <Card>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Card.Title h2>Abalone</Card.Title>
            <Text>Max: 25</Text>
          </View>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri: "https://www.pac.dfo-mpo.gc.ca/fm-gp/rec/images/identify-identifier/northabalone.jpg",
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Thin, oval shell with irregular reddish or greenish upper surface.
            Shell sometimes marked with blue or white. Often encrusted with
            organisms. Iridescent white shell interior with faint pink and green
            sheen. Series of three to six raised holes to allow water currents
            to pass over gills.
          </Text>
          <View style={styles.button}>
            <Button
              icon={
                <Icon
                  name="straighten"
                  color="#ffffff"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="Actual Size"
            />
            <Button
              icon={
                <Icon
                  name="collections"
                  color="#ffffff"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="More Photos"
            />
          </View>
        </Card>

        {/* Blue Mussels Card */}
        <Card>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Card.Title h2>Blue Mussels</Card.Title>
            <Text>Max: 25</Text>
          </View>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri: "https://www.pac.dfo-mpo.gc.ca/fm-gp/rec/images/identify-identifier/blue-mussel-moule-bleue.jpg",
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Bluish-black shell, distinctive “D” or flattened teardrop shape.
            Pearly violet or white shell interior.
          </Text>
          <View style={styles.button}>
            <Button
              icon={
                <Icon
                  name="straighten"
                  color="#ffffff"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="Actual Size"
            />
            <Button
              icon={
                <Icon
                  name="collections"
                  color="#ffffff"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="More Photos"
            />
          </View>
        </Card>

        {/* Butter Clam Card */}
        <Card>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Card.Title h2>Butter Clam</Card.Title>
            <Text>Max: 20</Text>
          </View>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri: "https://www.pac.dfo-mpo.gc.ca/fm-gp/rec/images/identify-identifier/butterclam.jpg",
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Large, thick-shelled with well developed concentric ridges but no
            radial lines.
          </Text>
          <View style={styles.button}>
            <Button
              icon={
                <Icon
                  name="straighten"
                  color="#ffffff"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="Actual Size"
            />
            <Button
              icon={
                <Icon
                  name="collections"
                  color="#ffffff"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="More Photos"
            />
          </View>
        </Card>

        {/* Geoduck Card */}
        <Card>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Card.Title h2>Geoduck</Card.Title>
            <Text>Max: 3</Text>
          </View>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri: "https://www.pac.dfo-mpo.gc.ca/fm-gp/rec/images/identify-identifier/geoduck.jpg",
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Geoduck clams are bivalves, and have two shells that are white and
            somewhat rectangular in shape. Geoduck clams are the largest
            burrowing clams in the world, with a shell length that can exceed 20
            centimetres. They generally weigh between 0.5 and 1.5 kilograms,
            but, occasionally, grow as large as 3 kilograms.
          </Text>
          <View style={styles.button}>
            <Button
              icon={
                <Icon
                  name="straighten"
                  color="#ffffff"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="Actual Size"
            />
            <Button
              icon={
                <Icon
                  name="collections"
                  color="#ffffff"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="More Photos"
            />
          </View>
        </Card>

        {/* Littleneck Clam Card */}
        <Card>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Card.Title h2>Littleneck Clam</Card.Title>
            <Text>Max: 3</Text>
          </View>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri: "https://www.pac.dfo-mpo.gc.ca/fm-gp/rec/images/identify-identifier/littleneck_clam-palourde_pacifique.jpg",
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Lines up and across outer shell surface, round, white shell
            interior.
          </Text>
          <View style={styles.button}>
            <Button
              icon={
                <Icon
                  name="straighten"
                  color="#ffffff"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="Actual Size"
            />
            <Button
              icon={
                <Icon
                  name="collections"
                  color="#ffffff"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="More Photos"
            />
          </View>
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    backgroundColor: "#EEEEFF",
  },
});
