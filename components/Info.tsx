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
  const [count, setCount] = useState(0);

  // Increase Count
  const increase = () => {
    setCount(count + 1);
  };
  // Decrease Count
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  // Reset Count
  const reset = () => {
    setCount(0);
  };

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
            <Text>Max: 0</Text>
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
          <View style={styles.counter}>
            <Button
              title={"+"}
              onPress={increase}
              buttonStyle={{ borderRadius: 0, marginLeft: 5, width: 30 }}
              color="success"
            />
            <Button
              title={"-"}
              onPress={decrease}
              buttonStyle={{ borderRadius: 0, marginLeft: 25, width: 30 }}
              color="error"
            />
            <Button
              title={"Reset"}
              onPress={reset}
              buttonStyle={{ borderRadius: 0, marginLeft: 25 }}
              color="warning"
            />
            <Text style={styles.counterText}>{count}</Text>
          </View>
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
            <Text>Max: 75</Text>
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
          <View style={styles.counter}>
            <Button
              title={"+"}
              onPress={increase}
              buttonStyle={{ borderRadius: 0, marginLeft: 5, width: 30 }}
              color="success"
            />
            <Button
              title={"-"}
              onPress={decrease}
              buttonStyle={{ borderRadius: 0, marginLeft: 25, width: 30 }}
              color="error"
            />
            <Button
              title={"Reset"}
              onPress={reset}
              buttonStyle={{ borderRadius: 0, marginLeft: 25 }}
              color="warning"
            />
            <Text style={styles.counterText}>{count}</Text>
          </View>
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

        {/* California Mussels Card */}
        <Card>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Card.Title h2>California{"\n"}Mussels</Card.Title>
            <Text>Max: 25</Text>
          </View>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri: "https://nathistoc.bio.uci.edu/Molluscs/Mytilus.jpg",
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <View style={styles.counter}>
            <Button
              title={"+"}
              onPress={increase}
              buttonStyle={{ borderRadius: 0, marginLeft: 5, width: 30 }}
              color="success"
            />
            <Button
              title={"-"}
              onPress={decrease}
              buttonStyle={{ borderRadius: 0, marginLeft: 25, width: 30 }}
              color="error"
            />
            <Button
              title={"Reset"}
              onPress={reset}
              buttonStyle={{ borderRadius: 0, marginLeft: 25 }}
              color="warning"
            />
            <Text style={styles.counterText}>{count}</Text>
          </View>
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
          <View style={styles.counter}>
            <Button
              title={"+"}
              onPress={increase}
              buttonStyle={{ borderRadius: 0, marginLeft: 5, width: 30 }}
              color="success"
            />
            <Button
              title={"-"}
              onPress={decrease}
              buttonStyle={{ borderRadius: 0, marginLeft: 25, width: 30 }}
              color="error"
            />
            <Button
              title={"Reset"}
              onPress={reset}
              buttonStyle={{ borderRadius: 0, marginLeft: 25 }}
              color="warning"
            />
            <Text style={styles.counterText}>{count}</Text>
          </View>
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
          <View style={styles.counter}>
            <Button
              title={"+"}
              onPress={increase}
              buttonStyle={{ borderRadius: 0, marginLeft: 5, width: 30 }}
              color="success"
            />
            <Button
              title={"-"}
              onPress={decrease}
              buttonStyle={{ borderRadius: 0, marginLeft: 25, width: 30 }}
              color="error"
            />
            <Button
              title={"Reset"}
              onPress={reset}
              buttonStyle={{ borderRadius: 0, marginLeft: 25 }}
              color="warning"
            />
            <Text style={styles.counterText}>{count}</Text>
          </View>
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

        {/* Horse Clam Card */}
        <Card>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Card.Title h2>Horse Clam</Card.Title>
            <Text>Max: 6</Text>
          </View>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri: "https://wdfw.wa.gov/sites/default/files/styles/half_width_slide/public/2020-02/horse_clam_4.jpg?itok=myZ0qXQV",
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <View style={styles.counter}>
            <Button
              title={"+"}
              onPress={increase}
              buttonStyle={{ borderRadius: 0, marginLeft: 5, width: 30 }}
              color="success"
            />
            <Button
              title={"-"}
              onPress={decrease}
              buttonStyle={{ borderRadius: 0, marginLeft: 25, width: 30 }}
              color="error"
            />
            <Button
              title={"Reset"}
              onPress={reset}
              buttonStyle={{ borderRadius: 0, marginLeft: 25 }}
              color="warning"
            />
            <Text style={styles.counterText}>{count}</Text>
          </View>
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
            <Text>Max: 60</Text>
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
          <View style={styles.counter}>
            <Button
              title={"+"}
              onPress={increase}
              buttonStyle={{ borderRadius: 0, marginLeft: 5, width: 30 }}
              color="success"
            />
            <Button
              title={"-"}
              onPress={decrease}
              buttonStyle={{ borderRadius: 0, marginLeft: 25, width: 30 }}
              color="error"
            />
            <Button
              title={"Reset"}
              onPress={reset}
              buttonStyle={{ borderRadius: 0, marginLeft: 25 }}
              color="warning"
            />
            <Text style={styles.counterText}>{count}</Text>
          </View>
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

        {/* Manila Clam Card */}
        <Card>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Card.Title h2>Manila Clam</Card.Title>
            <Text>Max: 60</Text>
          </View>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri: "https://www.pac.dfo-mpo.gc.ca/fm-gp/rec/images/identify-identifier/manila_clam-palourde_japonaise-1.jpg",
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Lines up and across outer shell surface, elongated, purple shell
            interior.
          </Text>
          <View style={styles.counter}>
            <Button
              title={"+"}
              onPress={increase}
              buttonStyle={{ borderRadius: 0, marginLeft: 5, width: 30 }}
              color="success"
            />
            <Button
              title={"-"}
              onPress={decrease}
              buttonStyle={{ borderRadius: 0, marginLeft: 25, width: 30 }}
              color="error"
            />
            <Button
              title={"Reset"}
              onPress={reset}
              buttonStyle={{ borderRadius: 0, marginLeft: 25 }}
              color="warning"
            />
            <Text style={styles.counterText}>{count}</Text>
          </View>
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

        {/* Softshell Clam Card */}
        <Card>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Card.Title h2>Softshell Clam</Card.Title>
            <Text>Max: 25</Text>
          </View>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri: "https://static.wixstatic.com/media/9082a3_be15e72c86e841619554ba0c9c448c0f~mv2.jpg/v1/fill/w_640,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9082a3_be15e72c86e841619554ba0c9c448c0f~mv2.jpg",
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <View style={styles.counter}>
            <Button
              title={"+"}
              onPress={increase}
              buttonStyle={{ borderRadius: 0, marginLeft: 5, width: 30 }}
              color="success"
            />
            <Button
              title={"-"}
              onPress={decrease}
              buttonStyle={{ borderRadius: 0, marginLeft: 25, width: 30 }}
              color="error"
            />
            <Button
              title={"Reset"}
              onPress={reset}
              buttonStyle={{ borderRadius: 0, marginLeft: 25 }}
              color="warning"
            />
            <Text style={styles.counterText}>{count}</Text>
          </View>
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

        {/* Cockle Card */}
        <Card>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Card.Title h2>Cockle</Card.Title>
            <Text>Max: 25</Text>
          </View>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri: "https://www.dfw.state.or.us/mrp/shellfish/bayclams/images/cockle_out_ODFW.jpg",
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <View style={styles.counter}>
            <Button
              title={"+"}
              onPress={increase}
              buttonStyle={{ borderRadius: 0, marginLeft: 5, width: 30 }}
              color="success"
            />
            <Button
              title={"-"}
              onPress={decrease}
              buttonStyle={{ borderRadius: 0, marginLeft: 25, width: 30 }}
              color="error"
            />
            <Button
              title={"Reset"}
              onPress={reset}
              buttonStyle={{ borderRadius: 0, marginLeft: 25 }}
              color="warning"
            />
            <Text style={styles.counterText}>{count}</Text>
          </View>
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

        {/* Olympia Oyster Card */}
        <Card>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Card.Title h2>Olympia Oyster</Card.Title>
            <Text>Max: 0</Text>
          </View>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri: "https://www.pac.dfo-mpo.gc.ca/fm-gp/rec/images/identify-identifier/olympia-plate.jpg",
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Small. Length up to 9 cm but usually not over 5 cm. Illegal to keep.
            Only native oyster on B.C. coast. Now small groupings, mainly at a
            few sites on west coast of Vancouver Island.
          </Text>
          <View style={styles.counter}>
            <Button
              title={"+"}
              onPress={increase}
              buttonStyle={{ borderRadius: 0, marginLeft: 5, width: 30 }}
              color="success"
            />
            <Button
              title={"-"}
              onPress={decrease}
              buttonStyle={{ borderRadius: 0, marginLeft: 25, width: 30 }}
              color="error"
            />
            <Button
              title={"Reset"}
              onPress={reset}
              buttonStyle={{ borderRadius: 0, marginLeft: 25 }}
              color="warning"
            />
            <Text style={styles.counterText}>{count}</Text>
          </View>
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

        {/* Pacific Oyster Card */}
        <Card>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Card.Title h2>Pacific Oyster</Card.Title>
            <Text>Max: 12</Text>
          </View>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri: "https://www.pac.dfo-mpo.gc.ca/fm-gp/rec/images/identify-identifier/pacific-oyster-huitre-creuse.jpg",
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Large. Thick shell, rough sculptured appearance. Shell colour
            varies: the outside is a combination of browns, greens and grays,
            often with sharp purple fluting near the edges. The interior is
            white and satin smooth.
          </Text>
          <View style={styles.counter}>
            <Button
              title={"+"}
              onPress={increase}
              buttonStyle={{ borderRadius: 0, marginLeft: 5, width: 30 }}
              color="success"
            />
            <Button
              title={"-"}
              onPress={decrease}
              buttonStyle={{ borderRadius: 0, marginLeft: 25, width: 30 }}
              color="error"
            />
            <Button
              title={"Reset"}
              onPress={reset}
              buttonStyle={{ borderRadius: 0, marginLeft: 25 }}
              color="warning"
            />
            <Text style={styles.counterText}>{count}</Text>
          </View>
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

        {/* Pink and Spiny Scallop Card */}
        <Card>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Card.Title h2>Pink and Spiny Scallop</Card.Title>
            <Text>Max: 75</Text>
          </View>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri: "https://www.centralcoastbiodiversity.org/uploads/1/4/9/9/14993002/1722928_orig.png",
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <View style={styles.counter}>
            <Button
              title={"+"}
              onPress={increase}
              buttonStyle={{ borderRadius: 0, marginLeft: 5, width: 30 }}
              color="success"
            />
            <Button
              title={"-"}
              onPress={decrease}
              buttonStyle={{ borderRadius: 0, marginLeft: 25, width: 30 }}
              color="error"
            />
            <Button
              title={"Reset"}
              onPress={reset}
              buttonStyle={{ borderRadius: 0, marginLeft: 25 }}
              color="warning"
            />
            <Text style={styles.counterText}>{count}</Text>
          </View>
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

        {/* Rock Scallop Card */}
        <Card>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Card.Title h2>Rock Scallop</Card.Title>
            <Text>Max: 6</Text>
          </View>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri: "https://www.centralcoastbiodiversity.org/uploads/1/4/9/9/14993002/6579911_orig.jpg",
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <View style={styles.counter}>
            <Button
              title={"+"}
              onPress={increase}
              buttonStyle={{ borderRadius: 0, marginLeft: 5, width: 30 }}
              color="success"
            />
            <Button
              title={"-"}
              onPress={decrease}
              buttonStyle={{ borderRadius: 0, marginLeft: 25, width: 30 }}
              color="error"
            />
            <Button
              title={"Reset"}
              onPress={reset}
              buttonStyle={{ borderRadius: 0, marginLeft: 25 }}
              color="warning"
            />
            <Text style={styles.counterText}>{count}</Text>
          </View>
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

        {/* Weathervane Scallop Card */}
        <Card>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Card.Title h2>Weathervane Scallop</Card.Title>
            <Text>Max: 6</Text>
          </View>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri: "https://i0.wp.com/robinbarefield.com/wp-content/uploads/2021/07/Weathervane-1.jpg?fit=259%2C194",
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <View style={styles.counter}>
            <Button
              title={"+"}
              onPress={increase}
              buttonStyle={{ borderRadius: 0, marginLeft: 5, width: 30 }}
              color="success"
            />
            <Button
              title={"-"}
              onPress={decrease}
              buttonStyle={{ borderRadius: 0, marginLeft: 25, width: 30 }}
              color="error"
            />
            <Button
              title={"Reset"}
              onPress={reset}
              buttonStyle={{ borderRadius: 0, marginLeft: 25 }}
              color="warning"
            />
            <Text style={styles.counterText}>{count}</Text>
          </View>
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

        {/* Moon Snail Card */}
        <Card>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Card.Title h2>Moon Snail</Card.Title>
            <Text>Max: 2</Text>
          </View>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri: "https://www.yournec.org/wp-content/uploads/2020/07/The-charismatic-Moon-Snail-on-the-move.-Photo-by-Casey-Cruikshank-scaled.jpg",
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <View style={styles.counter}>
            <Button
              title={"+"}
              onPress={increase}
              buttonStyle={{ borderRadius: 0, marginLeft: 5, width: 30 }}
              color="success"
            />
            <Button
              title={"-"}
              onPress={decrease}
              buttonStyle={{ borderRadius: 0, marginLeft: 25, width: 30 }}
              color="error"
            />
            <Button
              title={"Reset"}
              onPress={reset}
              buttonStyle={{ borderRadius: 0, marginLeft: 25 }}
              color="warning"
            />
            <Text style={styles.counterText}>{count}</Text>
          </View>
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

        {/* Snail Card */}
        <Card>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Card.Title h2>Snail</Card.Title>
            <Text>Max: 75</Text>
          </View>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Snail.jpg",
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <View style={styles.counter}>
            <Button
              title={"+"}
              onPress={increase}
              buttonStyle={{ borderRadius: 0, marginLeft: 5, width: 30 }}
              color="success"
            />
            <Button
              title={"-"}
              onPress={decrease}
              buttonStyle={{ borderRadius: 0, marginLeft: 25, width: 30 }}
              color="error"
            />
            <Button
              title={"Reset"}
              onPress={reset}
              buttonStyle={{ borderRadius: 0, marginLeft: 25 }}
              color="warning"
            />
            <Text style={styles.counterText}>{count}</Text>
          </View>
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

        {/* Razor Clam Card */}
        <Card>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Card.Title h2>Razor Clam</Card.Title>
            <Text>Max: 12</Text>
          </View>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri: "https://www.pac.dfo-mpo.gc.ca/fm-gp/rec/images/identify-identifier/razorclam.jpg",
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Shiny brown covering on outer shell surface, oblong.
          </Text>
          <View style={styles.counter}>
            <Button
              title={"+"}
              onPress={increase}
              buttonStyle={{ borderRadius: 0, marginLeft: 5, width: 30 }}
              color="success"
            />
            <Button
              title={"-"}
              onPress={decrease}
              buttonStyle={{ borderRadius: 0, marginLeft: 25, width: 30 }}
              color="error"
            />
            <Button
              title={"Reset"}
              onPress={reset}
              buttonStyle={{ borderRadius: 0, marginLeft: 25 }}
              color="warning"
            />
            <Text style={styles.counterText}>{count}</Text>
          </View>
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

        {/* Varnish Clam Card */}
        <Card>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Card.Title h2>Varnish Clam</Card.Title>
            <Text>Max: 60</Text>
          </View>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri: "https://www.pac.dfo-mpo.gc.ca/fm-gp/rec/images/identify-identifier/varnishclams.jpg",
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Shiny brown covering on outer shell surface, round, large external
            ligament at hinge.
          </Text>
          <View style={styles.counter}>
            <Button
              title={"+"}
              onPress={increase}
              buttonStyle={{ borderRadius: 0, marginLeft: 5, width: 30 }}
              color="success"
            />
            <Button
              title={"-"}
              onPress={decrease}
              buttonStyle={{ borderRadius: 0, marginLeft: 25, width: 30 }}
              color="error"
            />
            <Button
              title={"Reset"}
              onPress={reset}
              buttonStyle={{ borderRadius: 0, marginLeft: 25 }}
              color="warning"
            />
            <Text style={styles.counterText}>{count}</Text>
          </View>
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

        {/* Prawn Card */}
        <Card>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Card.Title h2>Prawn</Card.Title>
            <Text>Max: 125</Text>
          </View>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri: "https://www.pac.dfo-mpo.gc.ca/fm-gp/rec/images/identify-identifier/spotprawn.jpg",
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Red. White horizontal bars on shell, at least two pairs of white
            spots on abdomen. Found in rocky areas. Largest shrimp in B.C., up
            to 25 cm.
          </Text>
          <View style={styles.counter}>
            <Button
              title={"+"}
              onPress={increase}
              buttonStyle={{ borderRadius: 0, marginLeft: 5, width: 30 }}
              color="success"
            />
            <Button
              title={"-"}
              onPress={decrease}
              buttonStyle={{ borderRadius: 0, marginLeft: 25, width: 30 }}
              color="error"
            />
            <Button
              title={"Reset"}
              onPress={reset}
              buttonStyle={{ borderRadius: 0, marginLeft: 25 }}
              color="warning"
            />
            <Text style={styles.counterText}>{count}</Text>
          </View>
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

        {/* Shrimp Card */}
        <Card>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Card.Title h2>Shrimp</Card.Title>
            <Text>Max: 0</Text>
          </View>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri: "https://www.pac.dfo-mpo.gc.ca/fm-gp/rec/images/identify-identifier/coonstripeshrimp.jpg",
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Coonstripe shrimp: Red-brown. Irregular brown and white oblique
            lines on shell and abdomen. Found in shallow water on or near
            pilings and floats.{"\n"}
            {"\n"}
            Humpback shrimp: Red-tan. Dark red and bright white markings. Found
            on soft or hard bottom.{"\n"}
            {"\n"}
            Pink shrimp: Uniform translucent red. Live on soft bottom.
          </Text>
          <View style={styles.counter}>
            <Button
              title={"+"}
              onPress={increase}
              buttonStyle={{ borderRadius: 0, marginLeft: 5, width: 30 }}
              color="success"
            />
            <Button
              title={"-"}
              onPress={decrease}
              buttonStyle={{ borderRadius: 0, marginLeft: 25, width: 30 }}
              color="error"
            />
            <Button
              title={"Reset"}
              onPress={reset}
              buttonStyle={{ borderRadius: 0, marginLeft: 25 }}
              color="warning"
            />
            <Text style={styles.counterText}>{count}</Text>
          </View>
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

        {/* Squid Card */}
        <Card>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Card.Title h2>Squid</Card.Title>
            <Text>Max: 20</Text>
          </View>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri: "https://www.pac.dfo-mpo.gc.ca/fm-gp/rec/images/identify-identifier/opal-squid.jpg",
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Opal squid: Pale lavender. Size: up to 13 cm in B.C. Found in
            inshore waters. Often gather in large schools to spawn in shallow
            water.{"\n"}
            {"\n"} Neon flying squid: Mauve on upper surface, silvery or gold
            below. Tentacle sucker rings have 4 large teeth with many smaller
            teeth between. Size: up to 100 cm, 5 kg.{"\n"}
            {"\n"} Humboldt squid: Brown or red. Size: up to 200 cm, 45 kg
          </Text>
          <View style={styles.counter}>
            <Button
              title={"+"}
              onPress={increase}
              buttonStyle={{ borderRadius: 0, marginLeft: 5, width: 30 }}
              color="success"
            />
            <Button
              title={"-"}
              onPress={decrease}
              buttonStyle={{ borderRadius: 0, marginLeft: 25, width: 30 }}
              color="error"
            />
            <Button
              title={"Reset"}
              onPress={reset}
              buttonStyle={{ borderRadius: 0, marginLeft: 25 }}
              color="warning"
            />
            <Text style={styles.counterText}>{count}</Text>
          </View>
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
  counter: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    // alignItems: "flex-end",
    width: 190,
    height: 60,
    // marginBottom: 10,
    marginLeft: 10,
  },
  counterText: {
    height: 70,
    fontSize: 38,
    marginLeft: 40,
    // marginBottom: 20,
    flexDirection: "row",
    alignSelf: "flex-end",
  },
});
