export const Skeleton = (props) => {
  const loader = (key) => [<div className={props.className} key={key} />];
  const loaders = [];

  for (let i = 0; i < 20; i++) {
    loaders.push(loader(i));
  }

  return loaders;
};
