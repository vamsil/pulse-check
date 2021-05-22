import { chdir } from "process";

interface IProps {
  searchTerm: string,
  children: string
}
export function Highlighter(props:IProps) {
  const {searchTerm, children} = props;
  if(!searchTerm) return children;
  const index = children.indexOf(searchTerm);
  let content: any = children;
  if(index !== -1) {
    content = <>{children.slice(0, index)}<mark>{searchTerm}</mark>{children.slice(index + searchTerm.length)}</>
  }
  return content
}
