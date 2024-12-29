interface Mail {
  mail: string;
  mailto: string;
  enabled: boolean;
}

const Mails = ({ emails }: { emails: Array<Mail> }) => {
  const getAnchor = (obj: Mail) => {
    const { mailto, mail, enabled } = obj;
    if (!enabled) return null;
    return <a href={mailto}>{mail}</a>;
  };

  return (
    <div>
      <h4>E-mail</h4>
      {emails.map((obj, index) => (
        <p key={index}>{getAnchor(obj)}</p>
      ))}
    </div>
  );
};

export default Mails;
