type PageHeadingProps = {
  mainHeading: string;
  paragraph: string;
  headingLevel: number;
};

export default function PageHeading({
  mainHeading,
  paragraph,
  headingLevel,
}: PageHeadingProps) {
  const HeadingTag = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  return (
    <div>
      <HeadingTag>{mainHeading}</HeadingTag>
      <p>{paragraph}</p>
    </div>
  );
}
