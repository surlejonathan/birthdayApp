import React, {FC, useState, useRef} from 'react';
import {Platform, Keyboard, View} from 'react-native';
import {Input} from 'react-native-elements';
import {DateTime} from 'luxon';
import {styles} from './InformationsStyles';
import DateTimePicker from '@react-native-community/datetimepicker';

interface Props {}
//value={new DateTime(birthday).toFormat('dd/LL/yyyy')}
const Informations: FC = (props: Props) => {
  const [lastName, setLastName] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string | null>(null);
  const [birthday, setBirthday] = useState<Date | null>(new Date());
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

    birthdayRef.current.blur();
  };

  console.log(birthday);
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
