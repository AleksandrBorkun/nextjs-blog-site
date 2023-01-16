import { LeftRight } from "../components/LeftRight";
import { Paragraph } from "../components/Paragraph";
import { Quote } from "../components/Quote";

export function renderComponent(data, key) {
  const contentType = data.sys.contentType.sys.id;

  switch (contentType) {
    case "paragraph":
      return <Paragraph key={key} {...data.fields} />;
    case "quote":
      return <Quote key={key} {...data.fields} />;
    case "leftRight":
      return <LeftRight key={key} {...data.fields} />;
    default:
      return <div key={key}>{`Unknown type ${contentType}`}</div>;
  }
}
