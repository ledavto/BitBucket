import { FarmItem } from './FarmItem';

export const ListFarm = ({ farms }) => {
  return (
    <ul>
      {farms.map(({ title, _id }) => (
        <li key={_id}>
          <FarmItem title={title} _id={_id} />
        </li>
      ))}
    </ul>
  );
};
