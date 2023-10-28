import React from "react";
import { StyleSheet, SafeAreaView, Text, Image, Dimensions, Linking, Button, View, } from "react-native";
import FetchDetails from "../services/FetchDetails";
import Loading from "../components/Loading/index";
import Error from "../components/Error/index";
import { ScrollView } from "react-native-gesture-handler";

export default function Details({ route }) {
  let id = route.params.value;
  const [details, setDetails] = React.useState([]);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    FetchDetails(setDetails, id, setLoading, setError);
  }, []);

  React.useEffect(() => { }, [details]);

  if (error != "") {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  function handleOnPressed(url) {
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        }
      })
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {details && details.length > 0 && (
          <Image style={styles.image} source={{ uri: details[0].strMealThumb }} />
        )}
        <View style={styles.subContainer}>
          <Text style={styles.title}>{details[0].strMeal}</Text>
          <Text style={styles.area}>{details[0].strArea}</Text>
          <Text style={styles.description}>{details[0].strInstructions}</Text>
        </View>
        <View>
          
        </View>
      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    margin: 5,
  },
  image: {
    height: Dimensions.get('window').height * 0.3,
  },
  title: {
    fontSize: 32,
    color: 'brown',
    fontWeight: '700',
  },
  area: {
    fontSize: 18,
    color: 'brown',
    fontWeight: '700',
  },
  description: {
    fontSize: 18,
    lineHeight: 25,
  },
});
