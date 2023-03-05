import { FormControl } from "@mui/material";
import { Button, Callout, InputText } from "czifui";
import { useEffect, useState } from "react";

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
    <FormControl>
      <h3 className="mc__title">Join our email list for future updates.</h3>
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
      <div className="mc__field-container">
        <InputText
          sdsType="textField"
          label="First Name"
          id="first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <InputText
          sdsType="textField"
          label="Email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
          placeholder="your@email.com"
        />
      </div>

      <Button onClick={handleSubmit}>Submit</Button>
    </FormControl>
  );
};
