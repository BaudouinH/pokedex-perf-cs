import styles from "./CallMyPokemon.module.css";
import { FormEvent } from "react";
type CustomElements = HTMLFormControlsCollection & {
  phoneNumber: HTMLInputElement;
};

type CustomForm = HTMLFormElement & {
  readonly elements: CustomElements;
};

export default function CallMyPokemon() {
  return (
    <div className={styles.callMyPokemon}>
      <h2 className={styles.title}>Call My Pokemon</h2>
      <form
        className={styles.form}
        onSubmit={(event: FormEvent<CustomForm>) => {
          event.preventDefault();

          const target = event.currentTarget.elements;
          const phoneNumberRawValue = target.phoneNumber.value;
          let phoneNumber: string | undefined;
          try {
            phoneNumber = parsePhoneNumberFR(phoneNumberRawValue);
          } catch (e) {
            console.log(e);
            return;
          }

          if (phoneNumber === "" || phoneNumber === undefined ) {
            return;
          }
          alert(`Calling ${phoneNumber}`);
        }}
      >
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Phone Number"
        />
        <button type="submit">Call</button>
      </form>
    </div>
  );
}

function parsePhoneNumberFR(num: string){
  console.log(num);
  let parsedPhone = "+33";
  if (num.length != 10){
    return ""
  }
  for (let i = 0; i<5; i++){
    parsedPhone += " " + num[2*i] + num[2*i+1];
  }
  console.log(parsedPhone);
  return parsedPhone
}