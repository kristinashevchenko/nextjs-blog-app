import Image from "next/image";
import classes from "./post-header.module.css";

function PostHeader({ title, image }) {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} width={200} height={150} alt={title} />
    </header>
  );
}

export default PostHeader;
