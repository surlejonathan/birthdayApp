import React, {FC, useState, useRef} from 'react';
import {Text, View} from 'react-native';
import {Input} from 'react-native-elements';

import {styles} from './InformationsStyles';

interface Props {}

const Informations: FC = (props: Props) => {
  const [lastName, setLastName] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string | null>(null);
  const [birthday, setBirthday] = useState<Date | null>(null);
  const lastNameRef = useRef(null);
  const firstNameRef = useRef(null);
  const birthdayRef = useRef(null);

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
          value={birthday}
        />
      </View>
    </View>
  );
};

export default Informations;
