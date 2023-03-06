import { Button, Callout } from "czifui";
import { useEffect, useState } from "react";
import {
  InputLabel,
  InputsWrapper,
  StyledFormControl,
  StyledInputText,
  Title,
} from "./custom_form_style";

type FormInfo = {
  EMAIL: string;
  MERGE1: string;
};

interface CustomFormProps {
  // define types here
  onSubmit: (formInfo: FormInfo) => void;
  status: "error" | "success" | "sending" | null;
  message: string | Error | null;
}

export const CustomForm = ({ onSubmit, status, message }: CustomFormProps) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");

  const handleSubmit = () => {
    email &&
      firstName &&
      email.indexOf("@") > -1 &&
      onSubmit({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore - types for react-mailchimp-subscribe seem wrong
        MERGE0: email,
        MERGE1: firstName,
      });
  };

  useEffect(() => {
    if (status === "success") {
      setEmail("");
      setFirstName("");
    }
  }, [status]);

  return (
    <StyledFormControl>
      <Title>Join our email list for updates</Title>
      {status === "sending" && (
        <Callout expandable={false} intent="info">
          Sending...
        </Callout>
      )}
      {status === "error" && (
        <Callout expandable={false} intent="error">
          {message}
        </Callout>
      )}
      {status == "success" && (
        <Callout expandable={false} intent="success">
          {message}
        </Callout>
      )}
      <InputsWrapper>
        <InputLabel label-for="first-name">Name</InputLabel>
        <StyledInputText
          sdsType="textField"
          label="First Name"
          hideLabel
          id="first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Sam"
        />
        <InputLabel label-for="email">Email</InputLabel>
        <StyledInputText
          sdsType="textField"
          label="Email"
          hideLabel
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
          placeholder="your@email.com"
        />
      </InputsWrapper>
      <Button sdsType="primary" sdsStyle="square" onClick={handleSubmit}>
        Join
      </Button>
    </StyledFormControl>
  );
};
