import React, {FC, useState, useRef} from 'react';
import {Platform, Keyboard, View, Alert} from 'react-native';
import {Input} from 'react-native-elements';
import {DateTime} from 'luxon';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useSelector, useDispatch} from 'react-redux';

import {userSelector, postUser} from '../../redux/userSlice';

import {styles} from './InformationsStyles';

const Informations: FC = () => {
  const {user} = useSelector(userSelector);

  const dispatch = useDispatch();

  const [lastName, setLastName] = useState<string | null>(user.lastname);
  const [firstName, setFirstName] = useState<string | null>(user.firstname);
  const [birthday, setBirthday] = useState<Date | null>(
    user.birthday ? new Date(user.birthday) : new Date(),
  );
  const lastNameRef = useRef(null);
  const firstNameRef = useRef(null);
  const birthdayRef = useRef(null);

  const inputDate: string = DateTime.fromISO(birthday.toISOString()).toFormat(
    'dd/LL/yyyy',
  );

  const [show, setShow] = useState<boolean>(false);

  const onChange = (event: any, selectedDate: Date) => {
    const currentDate: Date = selectedDate || birthday;
    setShow(Platform.OS === 'ios');
    setBirthday(currentDate);
    if (selectedDate) {
      dispatch(
        postUser({
          lastname: lastName,
          firstname: firstName,
          birthday: DateTime.fromISO(currentDate.toISOString()),
        }),
      );
      Alert.alert(
        'Données transmises',
        'Les informations saisies ont bien été enregistrées.',
      );
    }

    birthdayRef.current.blur();
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Input
          ref={lastNameRef}
          label="Nom"
          onSubmitEditing={() => firstNameRef.current.focus()}
          blurOnSubmit={false}
          value={lastName}
          onChangeText={e => setLastName(e)}
          returnKeyType="next"
          returnKeyLabel="Suivant"
          inputStyle={styles.input}
        />
        <Input
          disabled={!lastName}
          ref={firstNameRef}
          label="Prénom"
          inputStyle={styles.input}
          blurOnSubmit={false}
          onSubmitEditing={() => birthdayRef.current.focus()}
          value={firstName}
          onChangeText={e => setFirstName(e)}
          returnKeyType="next"
          returnKeyLabel="Suivant"
        />
        <Input
          disabled={!firstName}
          ref={birthdayRef}
          label="Date de naissance"
          inputStyle={styles.input}
          placeholder="JJ-MM-AAAA"
          onKeyPress={() => setShow(true)}
          onFocus={() => {
            setShow(true);
            Keyboard.dismiss();
          }}
          value={birthday && inputDate}
        />
      </View>

      {show && (
        <DateTimePicker
          locale="fr-FR"
          testID="dateTimePicker"
          value={birthday}
          display="default"
          onChange={onChange}
          onTouchCancel={() => setShow(false)}
        />
      )}
    </View>
  );
};

export default Informations;
