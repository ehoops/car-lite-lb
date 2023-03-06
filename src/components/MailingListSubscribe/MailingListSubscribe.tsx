import MailchimpSubscribe from "react-mailchimp-subscribe";
import { CustomForm } from "./components/CustomForm";
import { StyledWrapper } from "./mailing_list_subscribe_style";

export const MailingListSubscribe = () => {
  const mailchimpU = process.env.REACT_APP_MAILCHIMP_U;
  const mailchimpId = process.env.REACT_APP_MAILCHIMP_ID;
  const postUrl = `https://gmail.us18.list-manage.com/subscribe/post?u=${mailchimpU}&id=${mailchimpId}`;

  return (
    <StyledWrapper>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onSubmit={(formData) => subscribe(formData)}
          />
        )}
      />
    </StyledWrapper>
  );
};

/*
<input type="hidden" name="u" value="550bf771fe120716cfb60b8c1">
<input type="hidden" name="id" value="f5f6f66f4f">
<form action="https://gmail.us18.list-manage.com/subscribe/post" method="POST">
<label for="MERGE0">Email Address <span class="req asterisk">*</span></label>
<label for="MERGE1">First Name</label>
*/
