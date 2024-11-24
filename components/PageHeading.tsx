type PageHeadingProps = {
  mainHeading: string;
  paragraph: string;
};

export default function PageHeading({
  mainHeading,
  paragraph,
}: PageHeadingProps) {
  return (
    <div>
      <h1>{mainHeading}</h1>
      <p>{paragraph}</p>
    </div>
  );
}
