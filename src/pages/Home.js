import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import CategoryList from '../components/List/CategoryList';
import FetchCategories from '../services/FetchCategories'
import Loading from '../components/Loading/index';
import Error from '../components/Error/index';

export default function Home({ navigation }) {
  const [categories, setCategories] = React.useState([]);
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    FetchCategories(setCategories, setLoading, setError);
  }, []);

  if (error != '') {
    return (<Error />)
  }

  if (loading) {
    return (<Loading />);
  }

  return (
    <SafeAreaView style={styles.container}>
      <CategoryList data={categories} navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FA9D24',
  },
});