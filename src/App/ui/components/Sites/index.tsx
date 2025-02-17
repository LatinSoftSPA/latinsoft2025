interface Site {
  url: string;
  enabled: boolean;
  name: string;
}

const Sites = ({ sites }: { sites: Array<Site> }) => {
  const getAnchor = (obj: Site) => {
    const { url, enabled, name } = obj;
    if (!enabled) return <a href="#">{name}</a>;
    return (
      <a href={url} target="_blank">
        {name}
      </a>
    );
  };

  return (
    <>
      <h4>Sitios</h4>
      {sites.map((obj, index) => {
        return <p key={index}>{getAnchor(obj)}</p>;
      })}
    </>
  );
};

export default Sites;
