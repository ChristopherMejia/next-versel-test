import { CSSProperties, FC } from "react";
import Link from "next/link"
import {useRouter} from "next/router"

const style: CSSProperties={
    color: '#0070f3',
    textDecoration: 'underline',
}

interface Props {
  text: string;
  href: string;
}

export const ActiveLink: FC<Props> = ({text, href}) => {
  const router = useRouter();
  const { asPath } = router;
  return (
    <Link href={href}>
        <span style={ (asPath === href) ? style : undefined}> {text} </span>   
    </Link>
  )
}
