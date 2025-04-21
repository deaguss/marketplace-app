import React from "react";
import { ScrollView, Alert, StyleSheet, View, Text } from "react-native";
import ProfileInfo from "../../components/ProfileInfo";
import SettingsOption from "../../components/SettingOptions";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { useUserContext } from "@/context/UserContext";

const SettingsScreen = ({ navigation }: { navigation: any }) => {
  const { user: data } = useUserContext();
  const user = {
    name: data?.username ?? "John Doe",
    email: data?.email ?? "johndoe@example.com",
    profileImage: require("../../assets/images/banner1.jpg"),
  };

  const handleOptionPress = (option: string) => {
    Alert.alert("Option selected", `You selected ${option}.`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProfileInfo user={user} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Settings</Text>
        <SettingsOption
          icon={<MaterialIcons name="edit" size={24} color="#4CAF50" />}
          label="Edit Profile"
          onPress={() => handleOptionPress("Edit Profile")}
        />
        <SettingsOption
          icon={<FontAwesome5 name="lock" size={20} color="#4CAF50" />}
          label="Change Password"
          onPress={() => handleOptionPress("Change Password")}
        />
        <SettingsOption
          icon={<FontAwesome5 name="user-shield" size={20} color="#4CAF50" />}
          label="Privacy Settings"
          onPress={() => handleOptionPress("Privacy Settings")}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Settings</Text>
        <SettingsOption
          icon={<FontAwesome5 name="bell" size={20} color="#4CAF50" />}
          label="Notifications"
          onPress={() => handleOptionPress("Notifications")}
        />
        <SettingsOption
          icon={<FontAwesome5 name="language" size={20} color="#4CAF50" />}
          label="Language"
          onPress={() => handleOptionPress("Language")}
        />
        <SettingsOption
          icon={<FontAwesome5 name="adjust" size={20} color="#4CAF50" />}
          label="Appearance"
          onPress={() => handleOptionPress("Appearance")}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support & Information</Text>
        <SettingsOption
          icon={
            <FontAwesome5 name="question-circle" size={20} color="#4CAF50" />
          }
          label="Help Center"
          onPress={() => handleOptionPress("Help Center")}
        />
        <SettingsOption
          icon={<FontAwesome5 name="info-circle" size={20} color="#4CAF50" />}
          label="About Us"
          onPress={() => handleOptionPress("About Us")}
        />
        <SettingsOption
          icon={<FontAwesome5 name="sign-out-alt" size={20} color="#FF6347" />}
          label="Log Out"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  section: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    marginBottom: 10,
  },
});

export default SettingsScreen;
