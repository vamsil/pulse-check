export default function SideNav(props: any) {

  const className = "side-nav" + (props.className ? " " + props.className: "");
  return (
    <div className={className}>
      {props.children}
    </div>
  )
}
