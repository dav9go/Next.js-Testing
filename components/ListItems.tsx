type ListItemsProps = {
  items: string[];
};

export default function ListItems({ items }: ListItemsProps) {
  return (
    <ul>
      {items?.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
