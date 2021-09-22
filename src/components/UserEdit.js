import React from "react";
import { Edit, SimpleForm, TextInput, NumberInput } from "react-admin";

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <NumberInput source="phone" />
      <TextInput source="company" />
    </SimpleForm>
  </Edit>
);
