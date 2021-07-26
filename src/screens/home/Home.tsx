import React, {FC, useEffect} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {DateTime} from 'luxon';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '../../navigation/RootStack';
import {fetchUser, userSelector} from '../../redux/userSlice';

import {styles} from './HomeStyles';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Accueil'>;

type Props = {
  navigation: NavigationProp;
};

const Home: FC<Props> = ({navigation}) => {
  const {user, error, loading} = useSelector(userSelector);
  const dispatch = useDispatch();

  let birthdayDate: DateTime = DateTime.fromISO(user.birthday).set({
    year: DateTime.now().get('year'),
  });

  birthdayDate =
    birthdayDate < DateTime.now()
      ? birthdayDate.set({
          year: DateTime.now().get('year') + 1,
        })
      : birthdayDate;

  const diffInDays = birthdayDate
    .set({
      hour: DateTime.now().get('hour'),
      minute: DateTime.now().get('minute'),
      second: DateTime.now().get('second'),
      millisecond: DateTime.now().get('millisecond'),
    })
    .diff(DateTime.now(), 'days');

  const diff: number = diffInDays.days;

  useEffect(() => {
    if (user.id) {
      dispatch(fetchUser(user.id));
    }
  }, [dispatch, user.id]);

  // RENDERING

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size={60} color="blue" />
      </View>
    );
  } else if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Une erreur réseau est survenue !</Text>
      </View>
    );
  } else if (!user.id) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          C'est la première fois que vous venez ici, non ?!
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Informations')}>
          <Text style={styles.text}>
            L'inscription, c'est par <Text style={styles.info}>là</Text> ...
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.headline}>
        <Text style={styles.text}>
          Bonjour <Text style={styles.info}>{user.firstname}</Text>,
        </Text>
        <Text style={styles.text}>
          votre anniversaire est{' '}
          {(diff == 365 || diff == 0) && (
            <Text style={styles.info}>
              aujourd'hui ...{'\n'}
              <Text style={styles.wish}>Joyeux{'\n'}Anniversaire !!</Text>
            </Text>
          )}
          {diff != 365 && diff > 1 ? (
            <Text>
              dans
              <Text style={styles.info}>
                {'\n'}
                {diff} jours
              </Text>
              .
            </Text>
          ) : (
            diff != 365 &&
            diff != 0 && (
              <Text>
                dans
                <Text style={styles.info}>
                  {'\n'}
                  {diff} jour
                </Text>
                .
              </Text>
            )
          )}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.tipContainer}
        onPress={() => navigation.navigate('Informations')}>
        <Text style={styles.tipText}>
          Si cela est incorrect, vous pouvez modifier les informations sur{' '}
          <Text style={styles.linkLabel}>votre page Informations...</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
